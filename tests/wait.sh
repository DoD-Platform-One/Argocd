#!/bin/bash

function slog() {
  # structured logging output, with colors
  # timestamp | [filename] | log message string  var1=val1  var2=val2

  # Usage:
  # - first arg can be any string
  # - any additional args should be named variables that can be dereferenced for printing

  CYAN="\e[36m"
  MAGENTA="\e[35m"
  YELLOW="\e[33m"
  ENDCOLOR="\e[0m"

  # print timestamp, filename, and first argument
  ts=$(date +"%H:%M:%S")
  echo -ne "${ts} | ${YELLOW}[wait.sh]${ENDCOLOR} | ${1}\t"

  # discard first argument as we just printed it ^
  shift

  # loop over remaining arguments, look them up as variables, print key=val style
  for var in "${@}";
  do
    echo -ne "  ${MAGENTA}${var}${YELLOW}=${CYAN}${!var}${ENDCOLOR}"
  done

  printf "\n"
}

function waitCrdsEstablished() {
  #######################################################
  #
  # For every CRD in the below array:
  #  - Wait until the CRD is found
  #    - Wait until the found CRD becomes 'established'
  #  - give up after timeoutSecs
  #
  ######################################################

   declare -a crdsWanted=(
     applications.argoproj.io
     applicationsets.argoproj.io
     appprojects.argoproj.io
   )

   # intervalSecs and timeoutSecs are in seconds
   intervalSecs=5
   timeoutSecs=600
   counter=0

   while true; do

     slog "Checking for argo CRDs..."
     argoCrds=$(kubectl get crds -l "app.kubernetes.io/part-of=argocd" -oyaml | yq '.items[].metadata.name' | tr '\n' ' ')
     slog "CRDs found" argoCrds

     numFound=0
     numWanted="${#crdsWanted[@]}"

     for wantCrd in "${crdsWanted[@]}"; do
       slog "Checking for crd" wantCrd
       if [[ $argoCrds =~ $wantCrd ]]; then
         slog "Found crd." wantCrd
         (( numFound++ ))

         desiredCondition="established"
         slog "Waiting for crd to reach desired condition" wantCrd desiredCondition
         kubectl wait --for condition="${desiredCondition}" "crd/${wantCrd}"
       else
         slog "🟡 crd NOT found" wantCrd
       fi
     done

     if [[ "${numFound}" == "${numWanted}" ]]; then
       slog "🟢 All CRDs found. application should be ready." numFound numWanted
       break
     else
       elapsedSecs=$((counter * intervalSecs))
       slog "🟡 Did not find enough CRDs. Sleeping to retry." numWanted numFound intervalSecs elapsedSecs timeoutSecs
     fi

     sleep $intervalSecs
     (( counter++ ))
     if [[ $((counter * intervalSecs)) -ge $timeoutSecs ]]; then
       slog "🔴 Timed out waiting to find CRDS..." timeoutSecs
       exit 1
     fi
    done
}

function waitDeploymentRollout() {
  local waitTimeout="90s"
  local deployNs="argocd"
  local deployLabel="app.kubernetes.io/name=argocd-server"

  slog "wait for argo deployment to finish rolling out" deployNs deployLabel waitTimeout
  kubectl rollout status deployment -n "${deployNs}" -l "${deployLabel}" --timeout="${waitTimeout}"
}

wait_project() {
   # need to remove the default "set -e" to allow commands to return nonzero exit codes without the script failing
   set +e

   waitCrdsEstablished

   waitDeploymentRollout

   # undo local restrictions so we don't break other CI
   set -e
}
