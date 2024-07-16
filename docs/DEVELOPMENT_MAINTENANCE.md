# Upgrading to a new version

The below details the steps required to update to a new version of the Argocd package.

1. Review the [upstream release notes](https://github.com/argoproj/argo-cd/releases) for the update you are going to, as well as any versions skipped over between the last BB release and this one. Note any breaking changes and new features.

1. Use `kpt` to pull the upstream chart via the latest tag that corresponds to the application version. `kpt pkg update chart@argo-cd-<version> --strategy alpha-git-patch`

1. Based on the upstream changelog review from earlier, make any changes required to resolve breaking changes and reconcile the Big Bang modifications.

1. Modify the `version` in `Chart.yaml`. Also modify the `appVersion` and the `bigbang.dev/applicationVersions` to the new upstream version of Argocd.

1. Update `CHANGELOG.md` adding an entry for the new version and noting all changes (at minimum should include `Updated Mattermost to x.x.x`).

1. If there are any sub chart dependencies that need to be updated, run `helm dep update ./chart`

1. Generate the `README.md` updates by following the [guide in gluon](https://repo1.dso.mil/platform-one/big-bang/apps/library-charts/gluon/-/blob/master/docs/bb-package-readme.md).

1. Open an MR in "Draft" status and validate that CI passes. This will perform a number of smoke tests against the package, but it is good to manually deploy to test some things that CI doesn't. Follow the steps below for manual testing.

1. Once all manual testing is complete take your MR out of "Draft" status and add the review label.

# Testing for updates

NOTE: For these testing steps it is good to do them on both a clean install and an upgrade. For clean install, point argocd to your branch. For an upgrade do an install with argocd pointing to the latest tag, then perform a helm upgrade with argocd pointing to your branch.

You will want to install with:
- Istio enabled
- Argocd enabled
    - Set `admin` password for testing determinism (this sets password to `Password123`)

The above can be accomplished with the following overrides for Big Bang:
```yaml
istio:
  enabled: true
addons:
  argocd: 
    enabled: true
    values:
      configs:
        secret:
          argocdServerAdminPassword: '$2a$10$rUDZDckdDZ2TEwk9PDs3QuqjkL58qR1IHE1Kj4MwDx.7/m5dytZJm'
```

Testing Steps:
- Ensure all resources have reconciled and are healthy
- Ensure the application is resolvable at `argocd.dev.bigbang.mil`
- Run the cypress tests to confirm functionality of adding and deleting an application via the UI

When in doubt with any testing or upgrade steps ask one of the CODEOWNERS for assistance.

# Big Bang Chart Additions

This package has a number of additions to the [upstream helm chart](https://github.com/argoproj/argo-helm/tree/main/charts/argo-cd) to integrate with other Big Bang capabilities such as:

- Monitoring tools (Prometheus/Grafana)
- Service Mesh (Istio)
- Network Policies
- Helm hook jobs for automating upgrade tasks

Here's the section of the `chart/values.yaml` file where these additions are configured:

```yaml
# Big Bang Additions
# SSO Additions
sso:
  enabled: false
  rbac:
    policy.csv: |
      g, Impact Level 2 Authorized, role:admin
  keycloakClientSecret: this-can-be-anything-for-dev
  config:
    oidc.config: |
      name: Keycloak
      issuer: https://login.dso.mil/auth/realms/baby-yoda
      clientID: platform1_a8604cc9-f5e9-4656-802d-d05624370245_bb8-argocd
      clientSecret: $oidc.keycloak.clientSecret
      requestedScopes: ["openid","ArgoCD"]
# Optional key/secret for IAM role when using SOPS encryption in AWS.
awsCredentials:
  awsAccessKeyId: ""
  awsSecretAccessKey: ""
  awsDefaultRegion: "us-gov-west-1"
## Your FQDN will be ${ .Values.subdomain }.${ .Values.domain }
domain: bigbang.dev
istio:
  # -- Toggle BigBang istio integration
  enabled: false
  # -- Toggle BigBang istio injection
  injection: "disabled"
  # -- Default argocd peer authentication
  mtls:
    # -- STRICT = Allow only mutual TLS traffic,
    # PERMISSIVE = Allow both plain text and mutual TLS traffic
    mode: STRICT
  argocd:
    # -- Toggle Istio VirtualService creation
    enabled: true
    # -- Set Annotations for VirtualService
    annotations: {}
    # -- Set Labels for VirtualService
    labels: {}
    # -- Set Gateway for VirtualService
    gateways:
      - istio-system/main
    # -- Set Hosts for VirtualService
    hosts:
      - argocd.{{ .Values.domain }}
monitoring:
  # -- Toggle BigBang monitoring integration
  enabled: false
networkPolicies:
  # -- Toggle BigBang networkPolicies integration
  enabled: false
  ingressLabels:
    app: istio-ingressgateway
    istio: ingressgateway
  # -- Control Plane CIDR, defaults to 0.0.0.0/0, use `kubectl get endpoints -n default kubernetes` to get the CIDR range needed for your cluster
  # Must be an IP CIDR range (x.x.x.x/x - ideally with /32 for the specific IP of a single endpoint, broader range for multiple masters/endpoints)
  # Used by package NetworkPolicies to allow Kube API access
  controlPlaneCidr: 0.0.0.0/0
upgradeJob:
  enabled: true
  image:
    repository: registry1.dso.mil/ironbank/big-bang/base
    tag: 2.1.0
    imagePullPolicy: IfNotPresent
```

There are instances where the helm chart templates for Kubernetes resources in this package will need to have helm template values that will be a necessary addition to the upstream templates.

Big Bang is using bb-redis with the `argocd-secret`, therefore redisSecretInit is disabled by default. 

Disable `redisSecretInit`
```yaml
redisSecretInit:
  # -- Enable Redis secret initialization. If disabled, secret must be provisioned by alternative methods
  enabled: false
```

## Monitoring

The Kubernetes `Service` and `ServiceMonitor` templates used for metrics collection in this package, currently named `metrics.yaml` and `servicemonitor.yaml`, have a notable addition of a values key to the conditional statements to the templates:

`.Values.monitoring.enabled`

Adding this value to the conditional in metrics `Service` templates will tell `helm` to deploy these resources based on the value that is set for that key, which in this case would be `true` or `false`.

Example:

```yaml
{{- if or (.Values.server.metrics.enabled) (.Values.monitoring.enabled) }}
```

## automountServiceAccountToken
The mutating Kyverno policy named `update-automountserviceaccounttokens` is leveraged to harden all ServiceAccounts in this package with `automountServiceAccountToken: false`. This policy is configured by namespace in the Big Bang umbrella chart repository at [chart/templates/kyverno-policies/values.yaml](https://repo1.dso.mil/big-bang/bigbang/-/blob/master/chart/templates/kyverno-policies/values.yaml?ref_type=heads).

This policy revokes access to the K8s API for Pods utilizing said ServiceAccounts. If a Pod truly requires access to the K8s API (for app functionality), the Pod is added to the `pods:` array of the same mutating policy. This grants the Pod access to the API, and creates a Kyverno PolicyException to prevent an alert.

## AWS Credentials Secret

The secret located at `chart/templates/bigbang/argocd-iam-secret.yaml` is a Big Bang addition.

This secret stores AWS credentials for an IAM role when using SOPS encryption for your Big Bang values.

Ensure this file does not get removed/deleted after performing an upgrade with `kpt`.

## RBAC SSO ConfigMap

The configmap at `chart/templates/argocd-configs/argocd-rbac-cm.yaml` needs to be edited to include the BB SSO values.

Currently this is done by modifying the configmap data to the following to effectively merge our SSO configs into the defaults:

```yaml
data:
{{- if .Values.sso.enabled }}
{{- with (mergeOverwrite (deepCopy (omit .Values.configs.rbac "create" "annotations")) (.Values.server.rbacConfig | default dict) .Values.sso.rbac) }}
  {{- toYaml . | nindent 2 }}
{{- end }}
{{- else }}
{{- with (mergeOverwrite (deepCopy (omit .Values.configs.rbac "create" "annotations")) (.Values.server.rbacConfig | default dict)) }}
  {{- toYaml . | nindent 2 }}
{{- end }}
{{- end }}
{{- end }}
```

`argocd-cm.yaml` is also modified to include the SSO config:

```yaml
{{- if .Values.sso.enabled }}
  {{- toYaml .Values.sso.config | nindent 2 }}
{{- end }}
```

`argocd-secret.yaml` is also modified to add an SSO conditional + the client secret:

```yaml
  {{- if .Values.sso.enabled }}
  oidc.keycloak.clientSecret: {{.Values.sso.keycloakClientSecret | b64enc }}
  {{- end }}
```

Additionally, there is an extra conditional check added to `argocd-secret.yaml` to ensure that if `.Values.sso.keycloakClientSecret` AND `.Values.sso.enabled` are set, then the secret should be populated.
```yaml
  {{- if or .Values.configs.secret.githubSecret (or .Values.configs.secret.gitlabSecret .Values.configs.secret.bitbucketUUID .Values.configs.secret.bitbucketServerSecret .Values.configs.secret.gogsSecret (and .Values.configs.secret.azureDevops.username .Values.configs.secret.azureDevops.password) .Values.configs.secret.argocdServerAdminPassword .Values.configs.secret.extra (and .Values.sso.keycloakClientSecret .Values.sso.enabled)) }}
```

## Chart.yaml

The `Chart.yaml` file has a number of changes to support Big Bang needs:
- `-bb.x` version appended
- Chart renamed to `argocd` for consistency across BB
- Annotations added for images and app versions
- Dependencies added for Gluon, argocd-apps, and BB Redis

## helpers.tpl

- Modified `argo-cd.redis.fullname` to point to BB redis

## chart/templates/argocd-repo-server/deployment.yaml

- Modified to support BB redis via arg changes to the repo server container.
- Modified `envFrom` section to support mounting AWS credentials

## chart/templates/argocd-server/deployment.yaml

- Modified to support BB redis via arg changes to the server container.

## chart/templates/redis/deployment.yaml

- Modified `$redisHa` to reference BB redis

## argocd-apps templates

- In ```deps/argocd-apps/templates/*```  all of the templates have been given `post-install` ad `post-upgrade`
hooks so that they wait for the argocd crds to be installed before continuing.
