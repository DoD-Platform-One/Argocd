#!/usr/bin/env bash

set -euo pipefail

# Swagger API specs are available on your local argo server!
#   https://argocd.dev.bigbang.mil/swagger-ui

CYAN="\e[36m"
MAGENTA="\e[35m"
YELLOW="\e[33m"
ENDCOLOR="\e[0m"

# testable application name
appName="bb-scriptable-test-${RANDOM}"

# wait script timings
elapsedSecs=0
intervalSecs=5
timeoutSecs=300

appLookupError="error app not found via cURL"

##################################
# helper functions
#

function curlRetry() {
  # curl but it retries for up to two minutes on account
  # of the argocd-server refusing connections frequently
  # during CI runs
  curl --connect-timeout 120 \
  --retry 12 --retry-max-time 120 --retry-connrefused \
  --silent \
  --fail \
   "${@}"
}

function slog() {
  # structured logging output, with colors
  # timestamp | [filename] | log message string  var1=val1  var2=val2

  # Usage:
  # - first arg can be any string
  # - any additional args should be named variables that can be dereferenced for printing

  # print timestamp, filename, and first argument
  ts=$(date +"%H:%M:%S")
  echo -ne "${ts} | ${YELLOW}[test.sh]${ENDCOLOR} | ${1}\t"

  # discard first argument as we just printed it ^
  shift

  # loop over remaining arguments, look them up as variables, print key=val style
  for var in "${@}";
  do
    echo -ne "  ${MAGENTA}${var}${YELLOW}=${CYAN}${!var}${ENDCOLOR}"
  done

  printf "\n"
}


##################################
# Argo Mutators
#

function generate_token() {
  # generate an argo API token using supplied admin username+password combo.
  # this token will be used for all other argo queries and commands in this test.
  curlRetry "${ARGOCD_SERVER}/api/v1/session" \
    -d "{\"username\":\"${ARGOCD_USER}\",\"password\":\"${ARGOCD_PASSWORD}\"}" \
    -H 'Content-Type: application/json' \
      | jq --raw-output '.token'
}

function upsert_app() {
# submit a JSON fixture of an argo application to the API's create application endpoint.
# will update if the app already exists.
local token="${1}"
local appName="${2}"
curlRetry "$ARGOCD_SERVER/api/v1/applications?upsert=true&validate=true" \
-H "Authorization: Bearer ${token}" \
-H 'Content-Type: application/json' \
--data-binary @- << __EOF
{
    "metadata": {
        "name": "$appName",
        "namespace": "argocd"
    },
    "spec": {
        "destination": {
            "namespace": "argocd",
            "server": "https://kubernetes.default.svc"
        },
        "project": "default",
        "source": {
            "path": "guestbook",
            "repoURL": "https://repo1.dso.mil/big-bang/apps/sandbox/argo-example-guestbook-app.git",
            "targetRevision": "HEAD"
        },
        "syncPolicy": {
            "automated": {},
            "syncOptions": [
                "CreateNamespace=true"
            ]
        }
    },
    "status": {}
}
__EOF
}

function delete_app() {
  # submits a request to delete the argocd test application
  local token="${1}"
  curlRetry -X DELETE \
    "$ARGOCD_SERVER/api/v1/applications/${appName}" \
    -H "Authorization: Bearer ${token}" \
    -H 'Content-Type: application/json'
}


#######################################
# Argo state lookups
#

function get_app_status() {
  # fetch argo application status so we can see if it's healthy
  local token="${1}"
  local appName="${2}"
  find_app "${token}" "${appName}" | jq --raw-output ".items[] | select(.metadata.name == \"${appName}\") | .status.health.status"
}

function find_app() {
  # look up a specific app by name to see if it exists
  local token="${1}"
  local appName="${2}"

  curlRetry "${ARGOCD_SERVER}/api/v1/applications?search=${appName}" -H "Authorization: Bearer ${token}" || echo "${appLookupError}"
}

function wait_app_gone() {
  # poll until named argo application is completely deleted and no
  # longer shows up.
  local token="${1}"
  local appName="${2}"

  while true; do
    appResponse=$(curlRetry "${ARGOCD_SERVER}/api/v1/applications" -H "Authorization: Bearer ${token}")
    itemsText=$(echo "${appResponse}" | jq --raw-output '.items')

    if [[ $itemsText =~ "null" ]]; then
      slog "no applications found on argo server. app is gone." appName
      break
    fi

    itemNames=$(echo "${appResponse}" | jq --raw-output '.items[] | .metadata.name')
    if [[ ! $itemNames =~ $appName ]]; then
      slog "app name not found in list of argo apps. app is gone." appName
      break
    fi

    slog "app name still found. sleeping to retry..." appName itemNames intervalSecs elapsedSecs timeoutSecs
    sleep $intervalSecs
    elapsedSecs=$((elapsedSecs+intervalSecs))

    if [[ $elapsedSecs -ge $timeoutSecs ]]; then
      slog "${RED}🛑 FATAL. Maximum wait time exceeded." elapsedSecs timeoutSecs
      exit 1
    fi
  done
}

function wait_app_state() {
  # poll until named argo application has reached the desired state
  local token="${1}"
  local appName="${2}"
  local desiredState="${3}"

  while true; do
    slog "checking to see if app state matches desired state..." elapsedSecs desiredState
    appState=$(get_app_status "${token}" "${appName}")
    if [[ "${appState}" == "${desiredState}" ]];then
      slog "app has moved to desired state." appState desiredState
      break
    fi

    slog "app is not yet in desired state. sleeping until next retry." appState desiredState elapsedSecs intervalSecs timeoutSecs
    sleep $intervalSecs
    elapsedSecs=$((elapsedSecs+intervalSecs))
    if [[ $elapsedSecs -ge $timeoutSecs ]]; then
      slog "${RED}🛑 FATAL. Maximum wait time exceeded." elapsedSecs timeoutSecs
      exit 1
    fi
  done
}

########################
# Primary entry point
#

function main() {
  slog "confirm server is up and listening before we try to use it..." ARGOCD_SERVER

  curlRetry "${ARGOCD_SERVER}/healthz?full=true" > /dev/null
  curlRetry "${ARGOCD_SERVER}/api/version" > /dev/null

  slog "✅ server is alive" ARGOCD_SERVER

  slog "generating argocd API token..." ARGOCD_USER ARGOCD_SERVER
  token=$(generate_token)
  slog "✅ token created."

  slog "upsert app via API..." appName
  upsert_app "${token}" "${appName}" > /dev/null
  slog "✅ app upsert request submitted." appName

  slog "⏳ wait until app is healthy..." appName
  wait_app_state "${token}" "${appName}" "Healthy"

  slog "submitting delete request for app..." appName
  delete_app "${token}" "${appName}"> /dev/null
  slog "✅ app delete request submitted."

  slog "⏳ waiting until app is gone..." appName
  wait_app_gone "${token}" "${appName}"

  slog "✅ All tests passed!"
  exit 0
}

main