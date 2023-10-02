# argocd

![Version: 5.46.7-bb.2](https://img.shields.io/badge/Version-5.46.7--bb.2-informational?style=flat-square) ![AppVersion: v2.8.4](https://img.shields.io/badge/AppVersion-v2.8.4-informational?style=flat-square)

A Helm chart for Argo CD, a declarative, GitOps continuous delivery tool for Kubernetes.

## Upstream References
* <https://github.com/argoproj/argo-helm>

* <https://github.com/argoproj/argo-helm/tree/main/charts/argo-cd>
* <https://github.com/argoproj/argo-cd>

## Learn More
* [Application Overview](docs/overview.md)
* [Other Documentation](docs/)

## Pre-Requisites

* Kubernetes Cluster deployed
* Kubernetes config installed in `~/.kube/config`
* Helm installed

Kubernetes: `>=1.23.0-0`

Install Helm

https://helm.sh/docs/intro/install/

## Deployment

* Clone down the repository
* cd into directory
```bash
helm install argocd chart/
```

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| sso.enabled | bool | `false` |  |
| sso.rbac."policy.csv" | string | `"g, Impact Level 2 Authorized, role:admin\n"` |  |
| sso.keycloakClientSecret | string | `"this-can-be-anything-for-dev"` |  |
| sso.config."oidc.config" | string | `"name: Keycloak\nissuer: https://login.dso.mil/auth/realms/baby-yoda\nclientID: platform1_a8604cc9-f5e9-4656-802d-d05624370245_bb8-argocd\nclientSecret: $oidc.keycloak.clientSecret\nrequestedScopes: [\"openid\",\"ArgoCD\"]\n"` |  |
| awsCredentials.awsAccessKeyId | string | `""` |  |
| awsCredentials.awsSecretAccessKey | string | `""` |  |
| awsCredentials.awsDefaultRegion | string | `"us-gov-west-1"` |  |
| domain | string | `"bigbang.dev"` |  |
| istio.enabled | bool | `false` | Toggle BigBang istio integration |
| istio.injection | string | `"disabled"` | Toggle BigBang istio injection |
| istio.mtls | object | `{"mode":"STRICT"}` | Default argocd peer authentication |
| istio.mtls.mode | string | `"STRICT"` | STRICT = Allow only mutual TLS traffic, PERMISSIVE = Allow both plain text and mutual TLS traffic |
| istio.argocd.enabled | bool | `true` | Toggle Istio VirtualService creation |
| istio.argocd.annotations | object | `{}` | Set Annotations for VirtualService |
| istio.argocd.labels | object | `{}` | Set Labels for VirtualService |
| istio.argocd.gateways | list | `["istio-system/main"]` | Set Gateway for VirtualService |
| istio.argocd.hosts | list | `["argocd.{{ .Values.domain }}"]` | Set Hosts for VirtualService |
| monitoring.enabled | bool | `false` | Toggle BigBang monitoring integration |
| networkPolicies.enabled | bool | `false` | Toggle BigBang networkPolicies integration |
| networkPolicies.ingressLabels.app | string | `"istio-ingressgateway"` |  |
| networkPolicies.ingressLabels.istio | string | `"ingressgateway"` |  |
| networkPolicies.controlPlaneCidr | string | `"0.0.0.0/0"` | Control Plane CIDR, defaults to 0.0.0.0/0, use `kubectl get endpoints -n default kubernetes` to get the CIDR range needed for your cluster Must be an IP CIDR range (x.x.x.x/x - ideally with /32 for the specific IP of a single endpoint, broader range for multiple masters/endpoints) Used by package NetworkPolicies to allow Kube API access |
| upgradeJob.enabled | bool | `true` |  |
| upgradeJob.image.repository | string | `"registry1.dso.mil/ironbank/big-bang/base"` |  |
| upgradeJob.image.tag | string | `"2.0.0"` |  |
| upgradeJob.image.imagePullPolicy | string | `"IfNotPresent"` |  |
| bbtests.enabled | bool | `false` |  |
| bbtests.cypress.artifacts | bool | `true` |  |
| bbtests.cypress.envs.cypress_url | string | `"http://argocd-server"` |  |
| bbtests.cypress.envs.cypress_user | string | `"admin"` |  |
| bbtests.cypress.envs.cypress_password | string | `"Password123"` |  |
| bbtests.cypress.envs.cypress_timeout | string | `"120000"` |  |
| nameOverride | string | `"argocd"` | Provide a name in place of `argocd` |
| fullnameOverride | string | `""` | String to fully override `"argo-cd.fullname"` |
| kubeVersionOverride | string | `""` | Override the Kubernetes version, which is used to evaluate certain manifests |
| apiVersionOverrides.cloudgoogle | string | `""` | String to override apiVersion of GKE resources rendered by this helm chart |
| createAggregateRoles | bool | `false` | Create aggregated roles that extend existing cluster roles to interact with argo-cd resources # Ref: https://kubernetes.io/docs/reference/access-authn-authz/rbac/#aggregated-clusterroles |
| createClusterRoles | bool | `true` | Create cluster roles for cluster-wide installation. # Used when you manage applications in the same cluster where Argo CD runs |
| openshift.enabled | bool | `false` | enables using arbitrary uid for argo repo server |
| crds.install | bool | `true` | Install and upgrade CRDs |
| crds.keep | bool | `true` | Keep CRDs on chart uninstall |
| crds.annotations | object | `{}` | Annotations to be added to all CRDs |
| crds.additionalLabels | object | `{}` | Addtional labels to be added to all CRDs |
| global.additionalLabels | object | `{}` | Common labels for the all resources |
| global.revisionHistoryLimit | int | `3` | Number of old deployment ReplicaSets to retain. The rest will be garbage collected. |
| global.image.repository | string | `"registry1.dso.mil/ironbank/big-bang/argocd"` | If defined, a repository applied to all Argo CD deployments |
| global.image.tag | string | `"v2.8.4"` | Overrides the global Argo CD image tag whose default is the chart appVersion |
| global.image.imagePullPolicy | string | `"IfNotPresent"` | If defined, a imagePullPolicy applied to all Argo CD deployments |
| global.imagePullSecrets | list | `[{"name":"private-registry"}]` | Secrets with credentials to pull images from a private registry |
| global.logging.format | string | `"text"` | Set the global logging format. Either: `text` or `json` |
| global.logging.level | string | `"info"` | Set the global logging level. One of: `debug`, `info`, `warn` or `error` |
| global.statefulsetAnnotations | object | `{}` | Annotations for the all deployed Statefulsets |
| global.deploymentAnnotations | object | `{}` | Annotations for the all deployed Deployments |
| global.podAnnotations | object | `{}` | Annotations for the all deployed pods |
| global.podLabels | object | `{}` | Labels for the all deployed pods |
| global.addPrometheusAnnotations | bool | `false` | Add Prometheus scrape annotations to all metrics services. This can be used as an alternative to the ServiceMonitors. |
| global.securityContext | object | `{}` (See [values.yaml]) | Toggle and define pod-level security context. |
| global.hostAliases | list | `[]` | Mapping between IP and hostnames that will be injected as entries in the pod's hosts files |
| global.networkPolicy.create | bool | `false` | Create NetworkPolicy objects for all components |
| global.networkPolicy.defaultDenyIngress | bool | `false` | Default deny all ingress traffic |
| global.priorityClassName | string | `""` | Default priority class for all components |
| global.nodeSelector | object | `{}` | Default node selector for all components |
| global.tolerations | list | `[]` | Default tolerations for all components |
| global.affinity.podAntiAffinity | string | `"soft"` | Default pod anti-affinity rules. Either: `none`, `soft` or `hard` |
| global.affinity.nodeAffinity.type | string | `"hard"` | Default node affinity rules. Either: `none`, `soft` or `hard` |
| global.affinity.nodeAffinity.matchExpressions | list | `[]` | Default match expressions for node affinity |
| global.topologySpreadConstraints | list | `[]` | Default [TopologySpreadConstraints] rules for all components # Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/ # If labelSelector is left out, it will default to the labelSelector of the component |
| global.deploymentStrategy | object | `{}` | Deployment strategy for the all deployed Deployments |
| global.env | list | `[]` | Environment variables to pass to all deployed Deployments |
| global.certificateAnnotations | object | `{}` | Annotations for the all deployed Certificates |
| configs.cm.create | bool | `true` | Create the argocd-cm configmap for [declarative setup] |
| configs.cm.annotations | object | `{}` | Annotations to be added to argocd-cm configmap |
| configs.cm.url | string | `""` | Argo CD's externally facing base URL (optional). Required when configuring SSO |
| configs.cm."application.instanceLabelKey" | string | Defaults to app.kubernetes.io/instance | The name of tracking label used by Argo CD for resource pruning |
| configs.cm."server.rbac.log.enforce.enable" | bool | `false` | Enable logs RBAC enforcement # Ref: https://argo-cd.readthedocs.io/en/latest/operator-manual/upgrading/2.3-2.4/#enable-logs-rbac-enforcement |
| configs.cm."exec.enabled" | bool | `false` | Enable exec feature in Argo UI # Ref: https://argo-cd.readthedocs.io/en/latest/operator-manual/rbac/#exec-resource |
| configs.cm."admin.enabled" | bool | `true` | Enable local admin user # Ref: https://argo-cd.readthedocs.io/en/latest/faq/#how-to-disable-admin-user |
| configs.cm."timeout.reconciliation" | string | `"180s"` | Timeout to discover if a new manifests version got published to the repository |
| configs.cm."timeout.hard.reconciliation" | string | `"0s"` | Timeout to refresh application data as well as target manifests cache |
| configs.params.create | bool | `true` | Create the argocd-cmd-params-cm configmap If false, it is expected the configmap will be created by something else. |
| configs.params.annotations | object | `{}` | Annotations to be added to the argocd-cmd-params-cm ConfigMap |
| configs.params."otlp.address" | string | `""` | Open-Telemetry collector address: (e.g. "otel-collector:4317") |
| configs.params."controller.status.processors" | int | `20` | Number of application status processors |
| configs.params."controller.operation.processors" | int | `10` | Number of application operation processors |
| configs.params."controller.self.heal.timeout.seconds" | int | `5` | Specifies timeout between application self heal attempts |
| configs.params."controller.repo.server.timeout.seconds" | int | `60` | Repo server RPC call timeout seconds. |
| configs.params."server.insecure" | bool | `true` | Run server without TLS |
| configs.params."server.basehref" | string | `"/"` | Value for base href in index.html. Used if Argo CD is running behind reverse proxy under subpath different from / |
| configs.params."server.rootpath" | string | `""` | Used if Argo CD is running behind reverse proxy under subpath different from / |
| configs.params."server.staticassets" | string | `"/shared/app"` | Directory path that contains additional static assets |
| configs.params."server.disable.auth" | bool | `false` | Disable Argo CD RBAC for user authentication |
| configs.params."server.enable.gzip" | bool | `true` | Enable GZIP compression |
| configs.params."server.x.frame.options" | string | `"sameorigin"` | Set X-Frame-Options header in HTTP responses to value. To disable, set to "". |
| configs.params."reposerver.parallelism.limit" | int | `0` | Limit on number of concurrent manifests generate requests. Any value less the 1 means no limit. |
| configs.params."applicationsetcontroller.policy" | string | `"sync"` | Modify how application is synced between the generator and the cluster. One of: `sync`, `create-only`, `create-update`, `create-delete` |
| configs.params."applicationsetcontroller.enable.progressive.syncs" | bool | `false` | Enables use of the Progressive Syncs capability |
| configs.rbac.create | bool | `true` | Create the argocd-rbac-cm configmap with ([Argo CD RBAC policy]) definitions. If false, it is expected the configmap will be created by something else. Argo CD will not work if there is no configmap created with the name above. |
| configs.rbac.annotations | object | `{}` | Annotations to be added to argocd-rbac-cm configmap |
| configs.rbac."policy.default" | string | `""` | The name of the default role which Argo CD will falls back to, when authorizing API requests (optional). If omitted or empty, users may be still be able to login, but will see no apps, projects, etc... |
| configs.rbac."policy.csv" | string | `''` (See [values.yaml]) | File containing user-defined policies and role definitions. |
| configs.rbac.scopes | string | `"[groups]"` | OIDC scopes to examine during rbac enforcement (in addition to `sub` scope). The scope value can be a string, or a list of strings. |
| configs.gpg.annotations | object | `{}` | Annotations to be added to argocd-gpg-keys-cm configmap |
| configs.gpg.keys | object | `{}` (See [values.yaml]) | [GnuPG] public keys to add to the keyring # Note: Public keys should be exported with `gpg --export --armor <KEY>` |
| configs.ssh.annotations | object | `{}` | Annotations to be added to argocd-ssh-known-hosts-cm configmap |
| configs.ssh.knownHosts | string | See [values.yaml] | Known hosts to be added to the known host list by default. |
| configs.ssh.extraHosts | string | `""` | Additional known hosts for private repositories |
| configs.tls.annotations | object | `{}` | Annotations to be added to argocd-tls-certs-cm configmap |
| configs.tls.certificates | object | `{}` (See [values.yaml]) | TLS certificates for Git repositories |
| configs.cmp.create | bool | `false` | Create the argocd-cmp-cm configmap |
| configs.cmp.annotations | object | `{}` | Annotations to be added to argocd-cmp-cm configmap |
| configs.cmp.plugins | object | `{}` | Plugin yaml files to be added to argocd-cmp-cm |
| configs.clusterCredentials | list | `[]` (See [values.yaml]) | Provide one or multiple [external cluster credentials] # Ref: # - https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#clusters # - https://argo-cd.readthedocs.io/en/stable/operator-manual/security/#external-cluster-credentials # - https://argo-cd.readthedocs.io/en/stable/user-guide/projects/#project-scoped-repositories-and-clusters |
| configs.credentialTemplates | object | `{}` | Repository credentials to be used as Templates for other repos # Creates a secret for each key/value specified below to create repository credentials |
| configs.credentialTemplatesAnnotations | object | `{}` | Annotations to be added to `configs.credentialTemplates` Secret |
| configs.repositories | object | `{}` | Repositories list to be used by applications # Creates a secret for each key/value specified below to create repositories # Note: the last example in the list would use a repository credential template, configured under "configs.credentialTemplates". |
| configs.repositoriesAnnotations | object | `{}` | Annotations to be added to `configs.repositories` Secret |
| configs.secret.createSecret | bool | `true` | Create the argocd-secret |
| configs.secret.labels | object | `{}` | Labels to be added to argocd-secret |
| configs.secret.annotations | object | `{}` | Annotations to be added to argocd-secret |
| configs.secret.githubSecret | string | `""` | Shared secret for authenticating GitHub webhook events |
| configs.secret.gitlabSecret | string | `""` | Shared secret for authenticating GitLab webhook events |
| configs.secret.bitbucketServerSecret | string | `""` | Shared secret for authenticating BitbucketServer webhook events |
| configs.secret.bitbucketUUID | string | `""` | UUID for authenticating Bitbucket webhook events |
| configs.secret.gogsSecret | string | `""` | Shared secret for authenticating Gogs webhook events |
| configs.secret.extra | object | `{}` | add additional secrets to be added to argocd-secret # Custom secrets. Useful for injecting SSO secrets into environment variables. # Ref: https://argo-cd.readthedocs.io/en/stable/operator-manual/user-management/#sensitive-data-and-sso-client-secrets # Note that all values must be non-empty. |
| configs.secret.argocdServerAdminPassword | string | `""` | Bcrypt hashed admin password # Argo expects the password in the secret to be bcrypt hashed. You can create this hash with # `htpasswd -nbBC 10 "" $ARGO_PWD | tr -d ':\n' | sed 's/$2y/$2a/'` |
| configs.secret.argocdServerAdminPasswordMtime | string | `""` (defaults to current time) | Admin password modification time. Eg. `"2006-01-02T15:04:05Z"` |
| configs.styles | string | `""` (See [values.yaml]) | Define custom [CSS styles] for your argo instance. This setting will automatically mount the provided CSS and reference it in the argo configuration. # Ref: https://argo-cd.readthedocs.io/en/stable/operator-manual/custom-styles/ |
| extraObjects | list | `[]` | Array of extra K8s manifests to deploy # Note: Supports use of custom Helm templates |
| controller.name | string | `"application-controller"` | Application controller name string |
| controller.replicas | int | `1` | The number of application controller pods to run. Additional replicas will cause sharding of managed clusters across number of replicas. |
| controller.pdb.enabled | bool | `false` | Deploy a [PodDisruptionBudget] for the application controller |
| controller.pdb.labels | object | `{}` | Labels to be added to application controller pdb |
| controller.pdb.annotations | object | `{}` | Annotations to be added to application controller pdb |
| controller.pdb.minAvailable | string | `""` (defaults to 0 if not specified) | Number of pods that are available after eviction as number or percentage (eg.: 50%) |
| controller.pdb.maxUnavailable | string | `""` | Number of pods that are unavailable after eviction as number or percentage (eg.: 50%). # Has higher precedence over `controller.pdb.minAvailable` |
| controller.image.repository | string | `""` (defaults to global.image.repository) | Repository to use for the application controller |
| controller.image.tag | string | `""` (defaults to global.image.tag) | Tag to use for the application controller |
| controller.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Image pull policy for the application controller |
| controller.imagePullSecrets | list | `[]` (defaults to global.imagePullSecrets) | Secrets with credentials to pull images from a private registry |
| controller.args | object | `{}` | DEPRECATED - Application controller commandline flags |
| controller.extraArgs | list | `[]` | Additional command line arguments to pass to application controller |
| controller.env | list | `[]` | Environment variables to pass to application controller |
| controller.envFrom | list | `[]` (See [values.yaml]) | envFrom to pass to application controller |
| controller.extraContainers | list | `[]` | Additional containers to be added to the application controller pod # Note: Supports use of custom Helm templates |
| controller.initContainers | list | `[]` | Init containers to add to the application controller pod # If your target Kubernetes cluster(s) require a custom credential (exec) plugin # you could use this (and the same in the server pod) to provide such executable # Ref: https://kubernetes.io/docs/reference/access-authn-authz/authentication/#client-go-credential-plugins # Note: Supports use of custom Helm templates |
| controller.volumeMounts | list | `[]` | Additional volumeMounts to the application controller main container |
| controller.volumes | list | `[]` | Additional volumes to the application controller pod |
| controller.statefulsetAnnotations | object | `{}` | Annotations for the application controller StatefulSet |
| controller.podAnnotations | object | `{}` | Annotations to be added to application controller pods |
| controller.podLabels | object | `{}` | Labels to be added to application controller pods |
| controller.resources | object | `{"limits":{"cpu":"500m","memory":"3Gi"},"requests":{"cpu":"500m","memory":"3Gi"}}` | Resource limits and requests for the application controller pods |
| controller.containerPorts.metrics | int | `8082` | Metrics container port |
| controller.hostNetwork | bool | `false` | Host Network for application controller pods |
| controller.dnsConfig | object | `{}` | [DNS configuration] |
| controller.dnsPolicy | string | `"ClusterFirst"` | Alternative DNS policy for application controller pods |
| controller.containerSecurityContext | object | See [values.yaml] | Application controller container-level security context |
| controller.readinessProbe.failureThreshold | int | `3` | Minimum consecutive failures for the [probe] to be considered failed after having succeeded |
| controller.readinessProbe.initialDelaySeconds | int | `10` | Number of seconds after the container has started before [probe] is initiated |
| controller.readinessProbe.periodSeconds | int | `10` | How often (in seconds) to perform the [probe] |
| controller.readinessProbe.successThreshold | int | `1` | Minimum consecutive successes for the [probe] to be considered successful after having failed |
| controller.readinessProbe.timeoutSeconds | int | `1` | Number of seconds after which the [probe] times out |
| controller.priorityClassName | string | `""` (defaults to global.priorityClassName) | Priority class for the application controller pods |
| controller.nodeSelector | object | `{}` (defaults to global.nodeSelector) | [Node selector] |
| controller.tolerations | list | `[]` (defaults to global.tolerations) | [Tolerations] for use with node taints |
| controller.affinity | object | `{}` (defaults to global.affinity preset) | Assign custom [affinity] rules to the deployment |
| controller.topologySpreadConstraints | list | `[]` (defaults to global.topologySpreadConstraints) | Assign custom [TopologySpreadConstraints] rules to the application controller # Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/ # If labelSelector is left out, it will default to the labelSelector configuration of the deployment |
| controller.serviceAccount.create | bool | `true` | Create a service account for the application controller |
| controller.serviceAccount.name | string | `"argocd-application-controller"` | Service account name |
| controller.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| controller.serviceAccount.labels | object | `{}` | Labels applied to created service account |
| controller.serviceAccount.automountServiceAccountToken | bool | `true` | Automount API credentials for the Service Account |
| controller.metrics.enabled | bool | `false` | Deploy metrics service |
| controller.metrics.applicationLabels.enabled | bool | `false` | Enables additional labels in argocd_app_labels metric |
| controller.metrics.applicationLabels.labels | list | `[]` | Additional labels |
| controller.metrics.service.type | string | `"ClusterIP"` | Metrics service type |
| controller.metrics.service.clusterIP | string | `""` | Metrics service clusterIP. `None` makes a "headless service" (no virtual IP) |
| controller.metrics.service.annotations | object | `{}` | Metrics service annotations |
| controller.metrics.service.labels | object | `{}` | Metrics service labels |
| controller.metrics.service.servicePort | int | `8082` | Metrics service port |
| controller.metrics.service.portName | string | `"http-metrics"` | Metrics service port name |
| controller.metrics.serviceMonitor.enabled | bool | `false` | Enable a prometheus ServiceMonitor |
| controller.metrics.serviceMonitor.interval | string | `"30s"` | Prometheus ServiceMonitor interval |
| controller.metrics.serviceMonitor.relabelings | list | `[]` | Prometheus [RelabelConfigs] to apply to samples before scraping |
| controller.metrics.serviceMonitor.metricRelabelings | list | `[]` | Prometheus [MetricRelabelConfigs] to apply to samples before ingestion |
| controller.metrics.serviceMonitor.selector | object | `{}` | Prometheus ServiceMonitor selector |
| controller.metrics.serviceMonitor.scheme | string | `""` | Prometheus ServiceMonitor scheme |
| controller.metrics.serviceMonitor.tlsConfig | object | `{}` | Prometheus ServiceMonitor tlsConfig |
| controller.metrics.serviceMonitor.namespace | string | `""` | Prometheus ServiceMonitor namespace |
| controller.metrics.serviceMonitor.additionalLabels | object | `{}` | Prometheus ServiceMonitor labels |
| controller.metrics.serviceMonitor.annotations | object | `{}` | Prometheus ServiceMonitor annotations |
| controller.metrics.rules.enabled | bool | `false` | Deploy a PrometheusRule for the application controller |
| controller.metrics.rules.namespace | string | `""` | PrometheusRule namespace |
| controller.metrics.rules.selector | object | `{}` | PrometheusRule selector |
| controller.metrics.rules.additionalLabels | object | `{}` | PrometheusRule labels |
| controller.metrics.rules.annotations | object | `{}` | PrometheusRule annotations |
| controller.metrics.rules.spec | list | `[]` | PrometheusRule.Spec for the application controller |
| controller.clusterRoleRules.enabled | bool | `false` | Enable custom rules for the application controller's ClusterRole resource |
| controller.clusterRoleRules.rules | list | `[]` | List of custom rules for the application controller's ClusterRole resource |
| dex.enabled | bool | `true` | Enable dex |
| dex.name | string | `"dex-server"` | Dex name |
| dex.extraArgs | list | `[]` | Additional command line arguments to pass to the Dex server |
| dex.metrics.enabled | bool | `false` | Deploy metrics service |
| dex.metrics.service.annotations | object | `{}` | Metrics service annotations |
| dex.metrics.service.labels | object | `{}` | Metrics service labels |
| dex.metrics.service.portName | string | `"http-metrics"` | Metrics service port name |
| dex.metrics.serviceMonitor.enabled | bool | `false` | Enable a prometheus ServiceMonitor |
| dex.metrics.serviceMonitor.interval | string | `"30s"` | Prometheus ServiceMonitor interval |
| dex.metrics.serviceMonitor.relabelings | list | `[]` | Prometheus [RelabelConfigs] to apply to samples before scraping |
| dex.metrics.serviceMonitor.metricRelabelings | list | `[]` | Prometheus [MetricRelabelConfigs] to apply to samples before ingestion |
| dex.metrics.serviceMonitor.selector | object | `{}` | Prometheus ServiceMonitor selector |
| dex.metrics.serviceMonitor.scheme | string | `""` | Prometheus ServiceMonitor scheme |
| dex.metrics.serviceMonitor.tlsConfig | object | `{}` | Prometheus ServiceMonitor tlsConfig |
| dex.metrics.serviceMonitor.namespace | string | `""` | Prometheus ServiceMonitor namespace |
| dex.metrics.serviceMonitor.additionalLabels | object | `{}` | Prometheus ServiceMonitor labels |
| dex.metrics.serviceMonitor.annotations | object | `{}` | Prometheus ServiceMonitor annotations |
| dex.pdb.enabled | bool | `false` | Deploy a [PodDisruptionBudget] for the Dex server |
| dex.pdb.labels | object | `{}` | Labels to be added to Dex server pdb |
| dex.pdb.annotations | object | `{}` | Annotations to be added to Dex server pdb |
| dex.pdb.minAvailable | string | `""` (defaults to 0 if not specified) | Number of pods that are available after eviction as number or percentage (eg.: 50%) |
| dex.pdb.maxUnavailable | string | `""` | Number of pods that are unavailble after eviction as number or percentage (eg.: 50%). # Has higher precedence over `dex.pdb.minAvailable` |
| dex.image.repository | string | `"registry1.dso.mil/ironbank/opensource/dexidp/dex"` | Dex image repository |
| dex.image.tag | string | `"v2.37.0"` | Dex image tag |
| dex.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Dex imagePullPolicy |
| dex.imagePullSecrets | list | `[]` (defaults to global.imagePullSecrets) | Secrets with credentials to pull images from a private registry |
| dex.initImage.repository | string | `""` (defaults to global.image.repository) | Argo CD init image repository |
| dex.initImage.tag | string | `""` (defaults to global.image.tag) | Argo CD init image tag |
| dex.initImage.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Argo CD init image imagePullPolicy |
| dex.initImage.resources | object | `{}` (defaults to dex.resources) | Argo CD init image resources |
| dex.env | list | `[]` | Environment variables to pass to the Dex server |
| dex.envFrom | list | `[]` (See [values.yaml]) | envFrom to pass to the Dex server |
| dex.extraContainers | list | `[]` | Additional containers to be added to the dex pod # Note: Supports use of custom Helm templates |
| dex.initContainers | list | `[]` | Init containers to add to the dex pod # Note: Supports use of custom Helm templates |
| dex.volumeMounts | list | `[]` | Additional volumeMounts to the dex main container |
| dex.volumes | list | `[]` | Additional volumes to the dex pod |
| dex.certificateSecret.enabled | bool | `false` | Create argocd-dex-server-tls secret |
| dex.certificateSecret.labels | object | `{}` | Labels to be added to argocd-dex-server-tls secret |
| dex.certificateSecret.annotations | object | `{}` | Annotations to be added to argocd-dex-server-tls secret |
| dex.certificateSecret.ca | string | `""` | Certificate authority. Required for self-signed certificates. |
| dex.certificateSecret.key | string | `""` | Certificate private key |
| dex.certificateSecret.crt | string | `""` | Certificate data. Must contain SANs of Dex service (ie: argocd-dex-server, argocd-dex-server.argo-cd.svc) |
| dex.deploymentAnnotations | object | `{}` | Annotations to be added to the Dex server Deployment |
| dex.podAnnotations | object | `{}` | Annotations to be added to the Dex server pods |
| dex.podLabels | object | `{}` | Labels to be added to the Dex server pods |
| dex.resources | object | `{"limits":{"cpu":"10m","memory":"128Mi"},"requests":{"cpu":"10m","memory":"128Mi"}}` | Resource limits and requests for dex |
| dex.containerPorts.http | int | `5556` | HTTP container port |
| dex.containerPorts.grpc | int | `5557` | gRPC container port |
| dex.containerPorts.metrics | int | `5558` | Metrics container port |
| dex.dnsConfig | object | `{}` | [DNS configuration] |
| dex.dnsPolicy | string | `"ClusterFirst"` | Alternative DNS policy for Dex server pods |
| dex.containerSecurityContext | object | See [values.yaml] | Dex container-level security context |
| dex.livenessProbe.enabled | bool | `false` | Enable Kubernetes liveness probe for Dex >= 2.28.0 |
| dex.livenessProbe.failureThreshold | int | `3` | Minimum consecutive failures for the [probe] to be considered failed after having succeeded |
| dex.livenessProbe.initialDelaySeconds | int | `10` | Number of seconds after the container has started before [probe] is initiated |
| dex.livenessProbe.periodSeconds | int | `10` | How often (in seconds) to perform the [probe] |
| dex.livenessProbe.successThreshold | int | `1` | Minimum consecutive successes for the [probe] to be considered successful after having failed |
| dex.livenessProbe.timeoutSeconds | int | `1` | Number of seconds after which the [probe] times out |
| dex.readinessProbe.enabled | bool | `false` | Enable Kubernetes readiness probe for Dex >= 2.28.0 |
| dex.readinessProbe.failureThreshold | int | `3` | Minimum consecutive failures for the [probe] to be considered failed after having succeeded |
| dex.readinessProbe.initialDelaySeconds | int | `10` | Number of seconds after the container has started before [probe] is initiated |
| dex.readinessProbe.periodSeconds | int | `10` | How often (in seconds) to perform the [probe] |
| dex.readinessProbe.successThreshold | int | `1` | Minimum consecutive successes for the [probe] to be considered successful after having failed |
| dex.readinessProbe.timeoutSeconds | int | `1` | Number of seconds after which the [probe] times out |
| dex.serviceAccount.create | bool | `true` | Create dex service account |
| dex.serviceAccount.name | string | `"argocd-dex-server"` | Dex service account name |
| dex.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| dex.serviceAccount.automountServiceAccountToken | bool | `true` | Automount API credentials for the Service Account |
| dex.servicePortHttp | int | `5556` | Service port for HTTP access |
| dex.servicePortHttpName | string | `"http"` | Service port name for HTTP access |
| dex.servicePortGrpc | int | `5557` | Service port for gRPC access |
| dex.servicePortGrpcName | string | `"grpc"` | Service port name for gRPC access |
| dex.servicePortMetrics | int | `5558` | Service port for metrics access |
| dex.priorityClassName | string | `""` (defaults to global.priorityClassName) | Priority class for the dex pods |
| dex.nodeSelector | object | `{}` (defaults to global.nodeSelector) | [Node selector] |
| dex.tolerations | list | `[]` (defaults to global.tolerations) | [Tolerations] for use with node taints |
| dex.affinity | object | `{}` (defaults to global.affinity preset) | Assign custom [affinity] rules to the deployment |
| dex.topologySpreadConstraints | list | `[]` (defaults to global.topologySpreadConstraints) | Assign custom [TopologySpreadConstraints] rules to dex # Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/ # If labelSelector is left out, it will default to the labelSelector configuration of the deployment |
| dex.deploymentStrategy | object | `{}` | Deployment strategy to be added to the Dex server Deployment |
| dex.logFormat | string | `""` (defaults to global.logging.format) | Dex log format. Either `text` or `json` |
| dex.logLevel | string | `""` (defaults to global.logging.level) | Dex log level. One of: `debug`, `info`, `warn`, `error` |
| redis.externalEndpoint | string | `""` | Endpoint URL for external Redis For use with BigBang passthrough |
| redis.enabled | bool | `true` | Enable redis |
| redis.name | string | `"redis"` | Redis name |
| redis.pdb.enabled | bool | `false` | Deploy a [PodDisruptionBudget] for the Redis |
| redis.pdb.labels | object | `{}` | Labels to be added to Redis pdb |
| redis.pdb.annotations | object | `{}` | Annotations to be added to Redis pdb |
| redis.pdb.minAvailable | string | `""` (defaults to 0 if not specified) | Number of pods that are available after eviction as number or percentage (eg.: 50%) |
| redis.pdb.maxUnavailable | string | `""` | Number of pods that are unavailble after eviction as number or percentage (eg.: 50%). # Has higher precedence over `redis.pdb.minAvailable` |
| redis.image.repository | string | `"registry1.dso.mil/ironbank/opensource/redis/redis7"` | Redis repository |
| redis.image.tag | string | `"7.2.1"` | Redis tag |
| redis.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Redis image pull policy |
| redis.exporter.enabled | bool | `false` | Enable Prometheus redis-exporter sidecar |
| redis.exporter.env | list | `[]` | Environment variables to pass to the Redis exporter |
| redis.exporter.image.repository | string | `"ironbank/bitnami/analytics/redis-exporter"` | Repository to use for the redis-exporter |
| redis.exporter.image.tag | string | `"v1.54.0"` | Tag to use for the redis-exporter |
| redis.exporter.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Image pull policy for the redis-exporter |
| redis.exporter.containerSecurityContext | object | See [values.yaml] | Redis exporter security context |
| redis.exporter.resources | object | `{}` | Resource limits and requests for redis-exporter sidecar |
| redis.imagePullSecrets | list | `[]` (defaults to global.imagePullSecrets) | Secrets with credentials to pull images from a private registry |
| redis.extraArgs | list | `[]` | Additional command line arguments to pass to redis-server |
| redis.env | list | `[]` | Environment variables to pass to the Redis server |
| redis.envFrom | list | `[]` (See [values.yaml]) | envFrom to pass to the Redis server |
| redis.extraContainers | list | `[]` | Additional containers to be added to the redis pod # Note: Supports use of custom Helm templates |
| redis.initContainers | list | `[]` | Init containers to add to the redis pod # Note: Supports use of custom Helm templates |
| redis.volumeMounts | list | `[]` | Additional volumeMounts to the redis container |
| redis.volumes | list | `[]` | Additional volumes to the redis pod |
| redis.deploymentAnnotations | object | `{}` | Annotations to be added to the Redis server Deployment |
| redis.podAnnotations | object | `{}` | Annotations to be added to the Redis server pods |
| redis.podLabels | object | `{}` | Labels to be added to the Redis server pods |
| redis.resources | object | `{"limits":{"cpu":"50m","memory":"64Mi"},"requests":{"cpu":"50m","memory":"64Mi"}}` | Resource limits and requests for redis |
| redis.securityContext | object | See [values.yaml] | Redis pod-level security context |
| redis.containerPorts.redis | int | `6379` | Redis container port |
| redis.containerPorts.metrics | int | `9121` | Metrics container port |
| redis.dnsConfig | object | `{}` | [DNS configuration] |
| redis.dnsPolicy | string | `"ClusterFirst"` | Alternative DNS policy for Redis server pods |
| redis.containerSecurityContext | object | See [values.yaml] | Redis container-level security context |
| redis.servicePort | int | `6379` | Redis service port |
| redis.priorityClassName | string | `""` (defaults to global.priorityClassName) | Priority class for redis pods |
| redis.nodeSelector | object | `{}` (defaults to global.nodeSelector) | [Node selector] |
| redis.tolerations | list | `[]` (defaults to global.tolerations) | [Tolerations] for use with node taints |
| redis.affinity | object | `{}` (defaults to global.affinity preset) | Assign custom [affinity] rules to the deployment |
| redis.topologySpreadConstraints | list | `[]` (defaults to global.topologySpreadConstraints) | Assign custom [TopologySpreadConstraints] rules to redis # Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/ # If labelSelector is left out, it will default to the labelSelector configuration of the deployment |
| redis.serviceAccount.create | bool | `false` | Create a service account for the redis pod |
| redis.serviceAccount.name | string | `""` | Service account name for redis pod |
| redis.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| redis.serviceAccount.automountServiceAccountToken | bool | `false` | Automount API credentials for the Service Account |
| redis.service.annotations | object | `{}` | Redis service annotations |
| redis.service.labels | object | `{}` | Additional redis service labels |
| redis.metrics.enabled | bool | `false` | Deploy metrics service |
| redis.metrics.service.type | string | `"ClusterIP"` | Metrics service type |
| redis.metrics.service.clusterIP | string | `"None"` | Metrics service clusterIP. `None` makes a "headless service" (no virtual IP) |
| redis.metrics.service.annotations | object | `{}` | Metrics service annotations |
| redis.metrics.service.labels | object | `{}` | Metrics service labels |
| redis.metrics.service.servicePort | int | `9121` | Metrics service port |
| redis.metrics.service.portName | string | `"http-metrics"` | Metrics service port name |
| redis.metrics.serviceMonitor.enabled | bool | `false` | Enable a prometheus ServiceMonitor |
| redis.metrics.serviceMonitor.interval | string | `"30s"` | Interval at which metrics should be scraped |
| redis.metrics.serviceMonitor.relabelings | list | `[]` | Prometheus [RelabelConfigs] to apply to samples before scraping |
| redis.metrics.serviceMonitor.metricRelabelings | list | `[]` | Prometheus [MetricRelabelConfigs] to apply to samples before ingestion |
| redis.metrics.serviceMonitor.selector | object | `{}` | Prometheus ServiceMonitor selector |
| redis.metrics.serviceMonitor.scheme | string | `""` | Prometheus ServiceMonitor scheme |
| redis.metrics.serviceMonitor.tlsConfig | object | `{}` | Prometheus ServiceMonitor tlsConfig |
| redis.metrics.serviceMonitor.namespace | string | `""` | Prometheus ServiceMonitor namespace |
| redis.metrics.serviceMonitor.additionalLabels | object | `{}` | Prometheus ServiceMonitor labels |
| redis.metrics.serviceMonitor.annotations | object | `{}` | Prometheus ServiceMonitor annotations |
| redis-bb | object | `{"auth":{"enabled":false},"commonConfiguration":"maxmemory 200mb\nsave \"\"","enabled":true,"image":{"pullSecrets":["private-registry"]},"istio":{"redis":{"enabled":false}},"master":{"containerSecurityContext":{"capabilities":{"drop":["ALL"]},"runAsGroup":1001,"runAsNonRoot":true,"runAsUser":1001},"resources":{"limits":{"cpu":"100m","memory":"256Mi"},"requests":{"cpu":"100m","memory":"256Mi"}}},"metrics":{"enabled":true},"replica":{"containerSecurityContext":{"capabilities":{"drop":["ALL"]},"runAsGroup":1001,"runAsNonRoot":true,"runAsUser":1001},"resources":{"limits":{"cpu":"100m","memory":"256Mi"},"requests":{"cpu":"100m","memory":"256Mi"}}}}` | BigBang HA Redis Passthrough |
| externalRedis.host | string | `""` | External Redis server host |
| externalRedis.username | string | `""` | External Redis username |
| externalRedis.password | string | `""` | External Redis password |
| externalRedis.port | int | `6379` | External Redis server port |
| externalRedis.existingSecret | string | `""` | The name of an existing secret with Redis credentials (must contain key `redis-password`). When it's set, the `externalRedis.password` parameter is ignored |
| externalRedis.secretAnnotations | object | `{}` | External Redis Secret annotations |
| server.name | string | `"server"` | Argo CD server name |
| server.replicas | int | `1` | The number of server pods to run |
| server.autoscaling.enabled | bool | `false` | Enable Horizontal Pod Autoscaler ([HPA]) for the Argo CD server |
| server.autoscaling.minReplicas | int | `1` | Minimum number of replicas for the Argo CD server [HPA] |
| server.autoscaling.maxReplicas | int | `5` | Maximum number of replicas for the Argo CD server [HPA] |
| server.autoscaling.targetCPUUtilizationPercentage | int | `50` | Average CPU utilization percentage for the Argo CD server [HPA] |
| server.autoscaling.targetMemoryUtilizationPercentage | int | `50` | Average memory utilization percentage for the Argo CD server [HPA] |
| server.autoscaling.behavior | object | `{}` | Configures the scaling behavior of the target in both Up and Down directions. |
| server.autoscaling.metrics | list | `[]` | Configures custom HPA metrics for the Argo CD server Ref: https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/ |
| server.pdb.enabled | bool | `false` | Deploy a [PodDisruptionBudget] for the Argo CD server |
| server.pdb.labels | object | `{}` | Labels to be added to Argo CD server pdb |
| server.pdb.annotations | object | `{}` | Annotations to be added to Argo CD server pdb |
| server.pdb.minAvailable | string | `""` (defaults to 0 if not specified) | Number of pods that are available after eviction as number or percentage (eg.: 50%) |
| server.pdb.maxUnavailable | string | `""` | Number of pods that are unavailable after eviction as number or percentage (eg.: 50%). # Has higher precedence over `server.pdb.minAvailable` |
| server.image.repository | string | `""` (defaults to global.image.repository) | Repository to use for the Argo CD server |
| server.image.tag | string | `""` (defaults to global.image.tag) | Tag to use for the Argo CD server |
| server.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Image pull policy for the Argo CD server |
| server.imagePullSecrets | list | `[]` (defaults to global.imagePullSecrets) | Secrets with credentials to pull images from a private registry |
| server.extraArgs | list | `[]` | Additional command line arguments to pass to Argo CD server |
| server.env | list | `[]` | Environment variables to pass to Argo CD server |
| server.envFrom | list | `[]` (See [values.yaml]) | envFrom to pass to Argo CD server |
| server.lifecycle | object | `{}` | Specify postStart and preStop lifecycle hooks for your argo-cd-server container |
| server.extensions.enabled | bool | `false` | Enable support for Argo UI extensions |
| server.extensions.image.repository | string | `"ghcr.io/argoproj-labs/argocd-extensions"` | Repository to use for extensions image |
| server.extensions.image.tag | string | `"v0.2.1"` | Tag to use for extensions image |
| server.extensions.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Image pull policy for extensions |
| server.extensions.containerSecurityContext | object | See [values.yaml] | Server UI extensions container-level security context |
| server.extensions.resources | object | `{}` | Resource limits and requests for the argocd-extensions container |
| server.extraContainers | list | `[]` | Additional containers to be added to the server pod # Note: Supports use of custom Helm templates |
| server.initContainers | list | `[]` | Init containers to add to the server pod # If your target Kubernetes cluster(s) require a custom credential (exec) plugin # you could use this (and the same in the application controller pod) to provide such executable # Ref: https://kubernetes.io/docs/reference/access-authn-authz/authentication/#client-go-credential-plugins |
| server.volumeMounts | list | `[]` | Additional volumeMounts to the server main container |
| server.volumes | list | `[]` | Additional volumes to the server pod |
| server.deploymentAnnotations | object | `{}` | Annotations to be added to server Deployment |
| server.podAnnotations | object | `{}` | Annotations to be added to server pods |
| server.podLabels | object | `{}` | Labels to be added to server pods |
| server.resources | object | `{"limits":{"cpu":"20m","memory":"128Mi"},"requests":{"cpu":"20m","memory":"128Mi"}}` | Resource limits and requests for the Argo CD server |
| server.containerPorts.server | int | `8080` | Server container port |
| server.containerPorts.metrics | int | `8083` | Metrics container port |
| server.hostNetwork | bool | `false` | Host Network for Server pods |
| server.dnsConfig | object | `{}` | [DNS configuration] |
| server.dnsPolicy | string | `"ClusterFirst"` | Alternative DNS policy for Server pods |
| server.containerSecurityContext | object | See [values.yaml] | Server container-level security context |
| server.readinessProbe.failureThreshold | int | `3` | Minimum consecutive failures for the [probe] to be considered failed after having succeeded |
| server.readinessProbe.initialDelaySeconds | int | `10` | Number of seconds after the container has started before [probe] is initiated |
| server.readinessProbe.periodSeconds | int | `10` | How often (in seconds) to perform the [probe] |
| server.readinessProbe.successThreshold | int | `1` | Minimum consecutive successes for the [probe] to be considered successful after having failed |
| server.readinessProbe.timeoutSeconds | int | `1` | Number of seconds after which the [probe] times out |
| server.livenessProbe.failureThreshold | int | `3` | Minimum consecutive failures for the [probe] to be considered failed after having succeeded |
| server.livenessProbe.initialDelaySeconds | int | `10` | Number of seconds after the container has started before [probe] is initiated |
| server.livenessProbe.periodSeconds | int | `10` | How often (in seconds) to perform the [probe] |
| server.livenessProbe.successThreshold | int | `1` | Minimum consecutive successes for the [probe] to be considered successful after having failed |
| server.livenessProbe.timeoutSeconds | int | `1` | Number of seconds after which the [probe] times out |
| server.priorityClassName | string | `""` (defaults to global.priorityClassName) | Priority class for the Argo CD server pods |
| server.nodeSelector | object | `{}` (defaults to global.nodeSelector) | [Node selector] |
| server.tolerations | list | `[]` (defaults to global.tolerations) | [Tolerations] for use with node taints |
| server.affinity | object | `{}` (defaults to global.affinity preset) | Assign custom [affinity] rules to the deployment |
| server.topologySpreadConstraints | list | `[]` (defaults to global.topologySpreadConstraints) | Assign custom [TopologySpreadConstraints] rules to the Argo CD server # Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/ # If labelSelector is left out, it will default to the labelSelector configuration of the deployment |
| server.deploymentStrategy | object | `{}` | Deployment strategy to be added to the server Deployment |
| server.certificate.enabled | bool | `false` | Deploy a Certificate resource (requires cert-manager) |
| server.certificate.secretName | string | `"argocd-server-tls"` | The name of the Secret that will be automatically created and managed by this Certificate resource |
| server.certificate.domain | string | `"argocd.example.com"` | Certificate primary domain (commonName) |
| server.certificate.additionalHosts | list | `[]` | Certificate Subject Alternate Names (SANs) |
| server.certificate.duration | string | `""` (defaults to 2160h = 90d if not specified) | The requested 'duration' (i.e. lifetime) of the certificate. # Ref: https://cert-manager.io/docs/usage/certificate/#renewal |
| server.certificate.renewBefore | string | `""` (defaults to 360h = 15d if not specified) | How long before the expiry a certificate should be renewed. # Ref: https://cert-manager.io/docs/usage/certificate/#renewal |
| server.certificate.issuer.group | string | `""` | Certificate issuer group. Set if using an external issuer. Eg. `cert-manager.io` |
| server.certificate.issuer.kind | string | `""` | Certificate issuer kind. Either `Issuer` or `ClusterIssuer` |
| server.certificate.issuer.name | string | `""` | Certificate issuer name. Eg. `letsencrypt` |
| server.certificate.privateKey.rotationPolicy | string | `"Never"` | Rotation policy of private key when certificate is re-issued. Either: `Never` or `Always` |
| server.certificate.privateKey.encoding | string | `"PKCS1"` | The private key cryptography standards (PKCS) encoding for private key. Either: `PCKS1` or `PKCS8` |
| server.certificate.privateKey.algorithm | string | `"RSA"` | Algorithm used to generate certificate private key. One of: `RSA`, `Ed25519` or `ECDSA` |
| server.certificate.privateKey.size | int | `2048` | Key bit size of the private key. If algorithm is set to `Ed25519`, size is ignored. |
| server.certificate.annotations | object | `{}` | Annotations to be applied to the Server Certificate |
| server.certificate.usages | list | `[]` | Usages for the certificate ## Ref: https://cert-manager.io/docs/reference/api-docs/#cert-manager.io/v1.KeyUsage |
| server.certificateSecret.enabled | bool | `false` | Create argocd-server-tls secret |
| server.certificateSecret.annotations | object | `{}` | Annotations to be added to argocd-server-tls secret |
| server.certificateSecret.labels | object | `{}` | Labels to be added to argocd-server-tls secret |
| server.certificateSecret.key | string | `""` | Private Key of the certificate |
| server.certificateSecret.crt | string | `""` | Certificate data |
| server.service.annotations | object | `{}` | Server service annotations |
| server.service.labels | object | `{}` | Server service labels |
| server.service.type | string | `"ClusterIP"` | Server service type |
| server.service.nodePortHttp | int | `30080` | Server service http port for NodePort service type (only if `server.service.type` is set to "NodePort") |
| server.service.nodePortHttps | int | `30443` | Server service https port for NodePort service type (only if `server.service.type` is set to "NodePort") |
| server.service.servicePortHttp | int | `80` | Server service http port |
| server.service.servicePortHttps | int | `443` | Server service https port |
| server.service.servicePortHttpName | string | `"http"` | Server service http port name, can be used to route traffic via istio |
| server.service.servicePortHttpsName | string | `"https"` | Server service https port name, can be used to route traffic via istio |
| server.service.loadBalancerIP | string | `""` | LoadBalancer will get created with the IP specified in this field |
| server.service.loadBalancerSourceRanges | list | `[]` | Source IP ranges to allow access to service from |
| server.service.externalIPs | list | `[]` | Server service external IPs |
| server.service.externalTrafficPolicy | string | `""` | Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints |
| server.service.sessionAffinity | string | `""` | Used to maintain session affinity. Supports `ClientIP` and `None` |
| server.metrics.enabled | bool | `false` | Deploy metrics service |
| server.metrics.service.type | string | `"ClusterIP"` | Metrics service type |
| server.metrics.service.clusterIP | string | `""` | Metrics service clusterIP. `None` makes a "headless service" (no virtual IP) |
| server.metrics.service.annotations | object | `{}` | Metrics service annotations |
| server.metrics.service.labels | object | `{}` | Metrics service labels |
| server.metrics.service.servicePort | int | `8083` | Metrics service port |
| server.metrics.service.portName | string | `"http-metrics"` | Metrics service port name |
| server.metrics.serviceMonitor.enabled | bool | `false` | Enable a prometheus ServiceMonitor |
| server.metrics.serviceMonitor.interval | string | `"30s"` | Prometheus ServiceMonitor interval |
| server.metrics.serviceMonitor.relabelings | list | `[]` | Prometheus [RelabelConfigs] to apply to samples before scraping |
| server.metrics.serviceMonitor.metricRelabelings | list | `[]` | Prometheus [MetricRelabelConfigs] to apply to samples before ingestion |
| server.metrics.serviceMonitor.selector | object | `{}` | Prometheus ServiceMonitor selector |
| server.metrics.serviceMonitor.scheme | string | `""` | Prometheus ServiceMonitor scheme |
| server.metrics.serviceMonitor.tlsConfig | object | `{}` | Prometheus ServiceMonitor tlsConfig |
| server.metrics.serviceMonitor.namespace | string | `""` | Prometheus ServiceMonitor namespace |
| server.metrics.serviceMonitor.additionalLabels | object | `{}` | Prometheus ServiceMonitor labels |
| server.metrics.serviceMonitor.annotations | object | `{}` | Prometheus ServiceMonitor annotations |
| server.serviceAccount.create | bool | `true` | Create server service account |
| server.serviceAccount.name | string | `"argocd-server"` | Server service account name |
| server.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| server.serviceAccount.labels | object | `{}` | Labels applied to created service account |
| server.serviceAccount.automountServiceAccountToken | bool | `true` | Automount API credentials for the Service Account |
| server.ingress.enabled | bool | `false` | Enable an ingress resource for the Argo CD server |
| server.ingress.annotations | object | `{}` | Additional ingress annotations |
| server.ingress.labels | object | `{}` | Additional ingress labels |
| server.ingress.ingressClassName | string | `""` | Defines which ingress controller will implement the resource |
| server.ingress.hosts | list | `[]` | List of ingress hosts # Argo Ingress. # Hostnames must be provided if Ingress is enabled. # Secrets must be manually created in the namespace |
| server.ingress.paths | list | `["/"]` | List of ingress paths |
| server.ingress.pathType | string | `"Prefix"` | Ingress path type. One of `Exact`, `Prefix` or `ImplementationSpecific` |
| server.ingress.extraPaths | list | `[]` | Additional ingress paths |
| server.ingress.tls | list | `[]` | Ingress TLS configuration |
| server.ingress.https | bool | `false` | Uses `server.service.servicePortHttps` instead `server.service.servicePortHttp` |
| server.ingressGrpc.enabled | bool | `false` | Enable an ingress resource for the Argo CD server for dedicated [gRPC-ingress] |
| server.ingressGrpc.isAWSALB | bool | `false` | Setup up gRPC ingress to work with an AWS ALB |
| server.ingressGrpc.annotations | object | `{}` | Additional ingress annotations for dedicated [gRPC-ingress] |
| server.ingressGrpc.labels | object | `{}` | Additional ingress labels for dedicated [gRPC-ingress] |
| server.ingressGrpc.ingressClassName | string | `""` | Defines which ingress controller will implement the resource [gRPC-ingress] |
| server.ingressGrpc.awsALB.serviceType | string | `"NodePort"` | Service type for the AWS ALB gRPC service # Service Type if isAWSALB is set to true # Can be of type NodePort or ClusterIP depending on which mode you are # are running. Instance mode needs type NodePort, IP mode needs type # ClusterIP # Ref: https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.2/how-it-works/#ingress-traffic |
| server.ingressGrpc.awsALB.backendProtocolVersion | string | `"HTTP2"` | Backend protocol version for the AWS ALB gRPC service # This tells AWS to send traffic from the ALB using HTTP2. Can use gRPC as well if you want to leverage gRPC specific features |
| server.ingressGrpc.hosts | list | `[]` | List of ingress hosts for dedicated [gRPC-ingress] # Argo Ingress. # Hostnames must be provided if Ingress is enabled. # Secrets must be manually created in the namespace # |
| server.ingressGrpc.paths | list | `["/"]` | List of ingress paths for dedicated [gRPC-ingress] |
| server.ingressGrpc.pathType | string | `"Prefix"` | Ingress path type for dedicated [gRPC-ingress]. One of `Exact`, `Prefix` or `ImplementationSpecific` |
| server.ingressGrpc.extraPaths | list | `[]` | Additional ingress paths for dedicated [gRPC-ingress] |
| server.ingressGrpc.tls | list | `[]` | Ingress TLS configuration for dedicated [gRPC-ingress] |
| server.ingressGrpc.https | bool | `false` | Uses `server.service.servicePortHttps` instead `server.service.servicePortHttp` |
| server.route.enabled | bool | `false` | Enable an OpenShift Route for the Argo CD server |
| server.route.annotations | object | `{}` | Openshift Route annotations |
| server.route.hostname | string | `""` | Hostname of OpenShift Route |
| server.route.termination_type | string | `"passthrough"` | Termination type of Openshift Route |
| server.route.termination_policy | string | `"None"` | Termination policy of Openshift Route |
| server.GKEbackendConfig.enabled | bool | `false` | Enable BackendConfig custom resource for Google Kubernetes Engine |
| server.GKEbackendConfig.spec | object | `{}` | [BackendConfigSpec] |
| server.GKEmanagedCertificate.enabled | bool | `false` | Enable ManagedCertificate custom resource for Google Kubernetes Engine. |
| server.GKEmanagedCertificate.domains | list | `["argocd.example.com"]` | Domains for the Google Managed Certificate |
| server.GKEfrontendConfig.enabled | bool | `false` | Enable FrontConfig custom resource for Google Kubernetes Engine |
| server.GKEfrontendConfig.spec | object | `{}` | [FrontendConfigSpec] |
| repoServer.name | string | `"repo-server"` | Repo server name |
| repoServer.replicas | int | `1` | The number of repo server pods to run |
| repoServer.autoscaling.enabled | bool | `false` | Enable Horizontal Pod Autoscaler ([HPA]) for the repo server |
| repoServer.autoscaling.minReplicas | int | `1` | Minimum number of replicas for the repo server [HPA] |
| repoServer.autoscaling.maxReplicas | int | `5` | Maximum number of replicas for the repo server [HPA] |
| repoServer.autoscaling.targetCPUUtilizationPercentage | int | `50` | Average CPU utilization percentage for the repo server [HPA] |
| repoServer.autoscaling.targetMemoryUtilizationPercentage | int | `50` | Average memory utilization percentage for the repo server [HPA] |
| repoServer.autoscaling.behavior | object | `{}` | Configures the scaling behavior of the target in both Up and Down directions. |
| repoServer.autoscaling.metrics | list | `[]` | Configures custom HPA metrics for the Argo CD repo server Ref: https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/ |
| repoServer.pdb.enabled | bool | `false` | Deploy a [PodDisruptionBudget] for the repo server |
| repoServer.pdb.labels | object | `{}` | Labels to be added to repo server pdb |
| repoServer.pdb.annotations | object | `{}` | Annotations to be added to repo server pdb |
| repoServer.pdb.minAvailable | string | `""` (defaults to 0 if not specified) | Number of pods that are available after eviction as number or percentage (eg.: 50%) |
| repoServer.pdb.maxUnavailable | string | `""` | Number of pods that are unavailable after eviction as number or percentage (eg.: 50%). # Has higher precedence over `repoServer.pdb.minAvailable` |
| repoServer.image.repository | string | `""` (defaults to global.image.repository) | Repository to use for the repo server |
| repoServer.image.tag | string | `""` (defaults to global.image.tag) | Tag to use for the repo server |
| repoServer.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Image pull policy for the repo server |
| repoServer.imagePullSecrets | list | `[]` (defaults to global.imagePullSecrets) | Secrets with credentials to pull images from a private registry |
| repoServer.extraArgs | list | `[]` | Additional command line arguments to pass to repo server |
| repoServer.env | list | `[]` | Environment variables to pass to repo server |
| repoServer.envFrom | list | `[]` (See [values.yaml]) | envFrom to pass to repo server |
| repoServer.lifecycle | object | `{}` | Specify postStart and preStop lifecycle hooks for your argo-repo-server container |
| repoServer.extraContainers | list | `[]` | Additional containers to be added to the repo server pod # Ref: https://argo-cd.readthedocs.io/en/stable/user-guide/config-management-plugins/ # Note: Supports use of custom Helm templates |
| repoServer.initContainers | list | `[]` | Init containers to add to the repo server pods |
| repoServer.volumeMounts | list | `[]` | Additional volumeMounts to the repo server main container |
| repoServer.volumes | list | `[]` | Additional volumes to the repo server pod |
| repoServer.useEphemeralHelmWorkingDir | bool | `true` | Toggle the usage of a ephemeral Helm working directory |
| repoServer.deploymentAnnotations | object | `{}` | Annotations to be added to repo server Deployment |
| repoServer.podAnnotations | object | `{}` | Annotations to be added to repo server pods |
| repoServer.podLabels | object | `{}` | Labels to be added to repo server pods |
| repoServer.resources | object | `{"limits":{"cpu":"100m","memory":"1Gi"},"requests":{"cpu":"100m","memory":"1Gi"}}` | Resource limits and requests for the repo server pods |
| repoServer.containerPorts.server | int | `8081` | Repo server container port |
| repoServer.containerPorts.metrics | int | `8084` | Metrics container port |
| repoServer.hostNetwork | bool | `false` | Host Network for Repo server pods |
| repoServer.dnsConfig | object | `{}` | [DNS configuration] |
| repoServer.dnsPolicy | string | `"ClusterFirst"` | Alternative DNS policy for Repo server pods |
| repoServer.containerSecurityContext | object | See [values.yaml] | Repo server container-level security context |
| repoServer.readinessProbe.failureThreshold | int | `3` | Minimum consecutive failures for the [probe] to be considered failed after having succeeded |
| repoServer.readinessProbe.initialDelaySeconds | int | `10` | Number of seconds after the container has started before [probe] is initiated |
| repoServer.readinessProbe.periodSeconds | int | `10` | How often (in seconds) to perform the [probe] |
| repoServer.readinessProbe.successThreshold | int | `1` | Minimum consecutive successes for the [probe] to be considered successful after having failed |
| repoServer.readinessProbe.timeoutSeconds | int | `1` | Number of seconds after which the [probe] times out |
| repoServer.livenessProbe.failureThreshold | int | `3` | Minimum consecutive failures for the [probe] to be considered failed after having succeeded |
| repoServer.livenessProbe.initialDelaySeconds | int | `10` | Number of seconds after the container has started before [probe] is initiated |
| repoServer.livenessProbe.periodSeconds | int | `10` | How often (in seconds) to perform the [probe] |
| repoServer.livenessProbe.successThreshold | int | `1` | Minimum consecutive successes for the [probe] to be considered successful after having failed |
| repoServer.livenessProbe.timeoutSeconds | int | `1` | Number of seconds after which the [probe] times out |
| repoServer.nodeSelector | object | `{}` (defaults to global.nodeSelector) | [Node selector] |
| repoServer.tolerations | list | `[]` (defaults to global.tolerations) | [Tolerations] for use with node taints |
| repoServer.affinity | object | `{}` (defaults to global.affinity preset) | Assign custom [affinity] rules to the deployment |
| repoServer.topologySpreadConstraints | list | `[]` (defaults to global.topologySpreadConstraints) | Assign custom [TopologySpreadConstraints] rules to the repo server # Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/ # If labelSelector is left out, it will default to the labelSelector configuration of the deployment |
| repoServer.deploymentStrategy | object | `{}` | Deployment strategy to be added to the repo server Deployment |
| repoServer.priorityClassName | string | `""` (defaults to global.priorityClassName) | Priority class for the repo server pods |
| repoServer.certificateSecret.enabled | bool | `false` | Create argocd-repo-server-tls secret |
| repoServer.certificateSecret.annotations | object | `{}` | Annotations to be added to argocd-repo-server-tls secret |
| repoServer.certificateSecret.labels | object | `{}` | Labels to be added to argocd-repo-server-tls secret |
| repoServer.certificateSecret.ca | string | `""` | Certificate authority. Required for self-signed certificates. |
| repoServer.certificateSecret.key | string | `""` | Certificate private key |
| repoServer.certificateSecret.crt | string | `""` | Certificate data. Must contain SANs of Repo service (ie: argocd-repo-server, argocd-repo-server.argo-cd.svc) |
| repoServer.service.annotations | object | `{}` | Repo server service annotations |
| repoServer.service.labels | object | `{}` | Repo server service labels |
| repoServer.service.port | int | `8081` | Repo server service port |
| repoServer.service.portName | string | `"tcp-repo-server"` | Repo server service port name |
| repoServer.metrics.enabled | bool | `false` | Deploy metrics service |
| repoServer.metrics.service.type | string | `"ClusterIP"` | Metrics service type |
| repoServer.metrics.service.clusterIP | string | `""` | Metrics service clusterIP. `None` makes a "headless service" (no virtual IP) |
| repoServer.metrics.service.annotations | object | `{}` | Metrics service annotations |
| repoServer.metrics.service.labels | object | `{}` | Metrics service labels |
| repoServer.metrics.service.servicePort | int | `8084` | Metrics service port |
| repoServer.metrics.service.portName | string | `"http-metrics"` | Metrics service port name |
| repoServer.metrics.serviceMonitor.enabled | bool | `false` | Enable a prometheus ServiceMonitor |
| repoServer.metrics.serviceMonitor.interval | string | `"30s"` | Prometheus ServiceMonitor interval |
| repoServer.metrics.serviceMonitor.relabelings | list | `[]` | Prometheus [RelabelConfigs] to apply to samples before scraping |
| repoServer.metrics.serviceMonitor.metricRelabelings | list | `[]` | Prometheus [MetricRelabelConfigs] to apply to samples before ingestion |
| repoServer.metrics.serviceMonitor.selector | object | `{}` | Prometheus ServiceMonitor selector |
| repoServer.metrics.serviceMonitor.scheme | string | `""` | Prometheus ServiceMonitor scheme |
| repoServer.metrics.serviceMonitor.tlsConfig | object | `{}` | Prometheus ServiceMonitor tlsConfig |
| repoServer.metrics.serviceMonitor.namespace | string | `""` | Prometheus ServiceMonitor namespace |
| repoServer.metrics.serviceMonitor.additionalLabels | object | `{}` | Prometheus ServiceMonitor labels |
| repoServer.metrics.serviceMonitor.annotations | object | `{}` | Prometheus ServiceMonitor annotations |
| repoServer.clusterRoleRules.enabled | bool | `false` | Enable custom rules for the Repo server's Cluster Role resource |
| repoServer.clusterRoleRules.rules | list | `[]` | List of custom rules for the Repo server's Cluster Role resource |
| repoServer.serviceAccount.create | bool | `true` | Create repo server service account |
| repoServer.serviceAccount.name | string | `""` | Repo server service account name |
| repoServer.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| repoServer.serviceAccount.labels | object | `{}` | Labels applied to created service account |
| repoServer.serviceAccount.automountServiceAccountToken | bool | `true` | Automount API credentials for the Service Account |
| repoServer.rbac | list | `[]` | Repo server rbac rules |
| applicationSet.enabled | bool | `true` | Enable ApplicationSet controller |
| applicationSet.name | string | `"applicationset-controller"` | ApplicationSet controller name string |
| applicationSet.replicas | int | `1` | The number of ApplicationSet controller pods to run |
| applicationSet.pdb.enabled | bool | `false` | Deploy a [PodDisruptionBudget] for the ApplicationSet controller |
| applicationSet.pdb.labels | object | `{}` | Labels to be added to ApplicationSet controller pdb |
| applicationSet.pdb.annotations | object | `{}` | Annotations to be added to ApplicationSet controller pdb |
| applicationSet.pdb.minAvailable | string | `""` (defaults to 0 if not specified) | Number of pods that are available after eviction as number or percentage (eg.: 50%) |
| applicationSet.pdb.maxUnavailable | string | `""` | Number of pods that are unavailable after eviction as number or percentage (eg.: 50%). # Has higher precedence over `applicationSet.pdb.minAvailable` |
| applicationSet.image.repository | string | `""` (defaults to global.image.repository) | Repository to use for the ApplicationSet controller |
| applicationSet.image.tag | string | `""` (defaults to global.image.tag) | Tag to use for the ApplicationSet controller |
| applicationSet.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Image pull policy for the ApplicationSet controller |
| applicationSet.imagePullSecrets | list | `[]` (defaults to global.imagePullSecrets) | If defined, uses a Secret to pull an image from a private Docker registry or repository. |
| applicationSet.args | object | `{}` | DEPRECATED - ApplicationSet controller command line flags |
| applicationSet.extraArgs | list | `[]` | List of extra cli args to add |
| applicationSet.extraEnv | list | `[]` | Environment variables to pass to the ApplicationSet controller |
| applicationSet.extraEnvFrom | list | `[]` (See [values.yaml]) | envFrom to pass to the ApplicationSet controller |
| applicationSet.extraContainers | list | `[]` | Additional containers to be added to the ApplicationSet controller pod # Note: Supports use of custom Helm templates |
| applicationSet.initContainers | list | `[]` | Init containers to add to the ApplicationSet controller pod # Note: Supports use of custom Helm templates |
| applicationSet.extraVolumeMounts | list | `[]` | List of extra mounts to add (normally used with extraVolumes) |
| applicationSet.extraVolumes | list | `[]` | List of extra volumes to add |
| applicationSet.metrics.enabled | bool | `false` | Deploy metrics service |
| applicationSet.metrics.service.type | string | `"ClusterIP"` | Metrics service type |
| applicationSet.metrics.service.clusterIP | string | `""` | Metrics service clusterIP. `None` makes a "headless service" (no virtual IP) |
| applicationSet.metrics.service.annotations | object | `{}` | Metrics service annotations |
| applicationSet.metrics.service.labels | object | `{}` | Metrics service labels |
| applicationSet.metrics.service.servicePort | int | `8080` | Metrics service port |
| applicationSet.metrics.service.portName | string | `"http-metrics"` | Metrics service port name |
| applicationSet.metrics.serviceMonitor.enabled | bool | `false` | Enable a prometheus ServiceMonitor |
| applicationSet.metrics.serviceMonitor.interval | string | `"30s"` | Prometheus ServiceMonitor interval |
| applicationSet.metrics.serviceMonitor.relabelings | list | `[]` | Prometheus [RelabelConfigs] to apply to samples before scraping |
| applicationSet.metrics.serviceMonitor.metricRelabelings | list | `[]` | Prometheus [MetricRelabelConfigs] to apply to samples before ingestion |
| applicationSet.metrics.serviceMonitor.selector | object | `{}` | Prometheus ServiceMonitor selector |
| applicationSet.metrics.serviceMonitor.scheme | string | `""` | Prometheus ServiceMonitor scheme |
| applicationSet.metrics.serviceMonitor.tlsConfig | object | `{}` | Prometheus ServiceMonitor tlsConfig |
| applicationSet.metrics.serviceMonitor.namespace | string | `""` | Prometheus ServiceMonitor namespace |
| applicationSet.metrics.serviceMonitor.additionalLabels | object | `{}` | Prometheus ServiceMonitor labels |
| applicationSet.metrics.serviceMonitor.annotations | object | `{}` | Prometheus ServiceMonitor annotations |
| applicationSet.service.annotations | object | `{}` | ApplicationSet service annotations |
| applicationSet.service.labels | object | `{}` | ApplicationSet service labels |
| applicationSet.service.type | string | `"ClusterIP"` | ApplicationSet service type |
| applicationSet.service.port | int | `7000` | ApplicationSet service port |
| applicationSet.service.portName | string | `"webhook"` | ApplicationSet service port name |
| applicationSet.serviceAccount.create | bool | `true` | Create ApplicationSet controller service account |
| applicationSet.serviceAccount.name | string | `"argocd-applicationset-controller"` | ApplicationSet controller service account name |
| applicationSet.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| applicationSet.serviceAccount.labels | object | `{}` | Labels applied to created service account |
| applicationSet.serviceAccount.automountServiceAccountToken | bool | `true` | Automount API credentials for the Service Account |
| applicationSet.deploymentAnnotations | object | `{}` | Annotations to be added to ApplicationSet controller Deployment |
| applicationSet.podAnnotations | object | `{}` | Annotations for the ApplicationSet controller pods |
| applicationSet.podLabels | object | `{}` | Labels for the ApplicationSet controller pods |
| applicationSet.resources | object | `{}` | Resource limits and requests for the ApplicationSet controller pods. |
| applicationSet.containerPorts.metrics | int | `8080` | Metrics container port |
| applicationSet.containerPorts.probe | int | `8081` | Probe container port |
| applicationSet.containerPorts.webhook | int | `7000` | Webhook container port |
| applicationSet.dnsConfig | object | `{}` | [DNS configuration] |
| applicationSet.dnsPolicy | string | `"ClusterFirst"` | Alternative DNS policy for ApplicationSet controller pods |
| applicationSet.containerSecurityContext | object | See [values.yaml] | ApplicationSet controller container-level security context |
| applicationSet.readinessProbe.enabled | bool | `false` | Enable Kubernetes liveness probe for ApplicationSet controller |
| applicationSet.readinessProbe.initialDelaySeconds | int | `10` | Number of seconds after the container has started before [probe] is initiated |
| applicationSet.readinessProbe.periodSeconds | int | `10` | How often (in seconds) to perform the [probe] |
| applicationSet.readinessProbe.timeoutSeconds | int | `1` | Number of seconds after which the [probe] times out |
| applicationSet.readinessProbe.successThreshold | int | `1` | Minimum consecutive successes for the [probe] to be considered successful after having failed |
| applicationSet.readinessProbe.failureThreshold | int | `3` | Minimum consecutive failures for the [probe] to be considered failed after having succeeded |
| applicationSet.livenessProbe.enabled | bool | `false` | Enable Kubernetes liveness probe for ApplicationSet controller |
| applicationSet.livenessProbe.initialDelaySeconds | int | `10` | Number of seconds after the container has started before [probe] is initiated |
| applicationSet.livenessProbe.periodSeconds | int | `10` | How often (in seconds) to perform the [probe] |
| applicationSet.livenessProbe.timeoutSeconds | int | `1` | Number of seconds after which the [probe] times out |
| applicationSet.livenessProbe.successThreshold | int | `1` | Minimum consecutive successes for the [probe] to be considered successful after having failed |
| applicationSet.livenessProbe.failureThreshold | int | `3` | Minimum consecutive failures for the [probe] to be considered failed after having succeeded |
| applicationSet.nodeSelector | object | `{}` (defaults to global.nodeSelector) | [Node selector] |
| applicationSet.tolerations | list | `[]` (defaults to global.tolerations) | [Tolerations] for use with node taints |
| applicationSet.affinity | object | `{}` (defaults to global.affinity preset) | Assign custom [affinity] rules |
| applicationSet.topologySpreadConstraints | list | `[]` (defaults to global.topologySpreadConstraints) | Assign custom [TopologySpreadConstraints] rules to the ApplicationSet controller # Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/ # If labelSelector is left out, it will default to the labelSelector configuration of the deployment |
| applicationSet.deploymentStrategy | object | `{}` | Deployment strategy to be added to the ApplicationSet controller Deployment |
| applicationSet.priorityClassName | string | `""` (defaults to global.priorityClassName) | Priority class for the ApplicationSet controller pods |
| applicationSet.webhook.ingress.enabled | bool | `false` | Enable an ingress resource for Webhooks |
| applicationSet.webhook.ingress.annotations | object | `{}` | Additional ingress annotations |
| applicationSet.webhook.ingress.labels | object | `{}` | Additional ingress labels |
| applicationSet.webhook.ingress.ingressClassName | string | `""` | Defines which ingress ApplicationSet controller will implement the resource |
| applicationSet.webhook.ingress.hosts | list | `[]` | List of ingress hosts # Hostnames must be provided if Ingress is enabled. # Secrets must be manually created in the namespace |
| applicationSet.webhook.ingress.paths | list | `["/api/webhook"]` | List of ingress paths |
| applicationSet.webhook.ingress.pathType | string | `"Prefix"` | Ingress path type. One of `Exact`, `Prefix` or `ImplementationSpecific` |
| applicationSet.webhook.ingress.extraPaths | list | `[]` | Additional ingress paths |
| applicationSet.webhook.ingress.tls | list | `[]` | Ingress TLS configuration |
| applicationSet.certificate.enabled | bool | `false` | Deploy a Certificate resource (requires cert-manager) |
| applicationSet.certificate.secretName | string | `"argocd-application-controller-tls"` | The name of the Secret that will be automatically created and managed by this Certificate resource |
| applicationSet.certificate.domain | string | `"argocd.example.com"` | Certificate primary domain (commonName) |
| applicationSet.certificate.additionalHosts | list | `[]` | Certificate Subject Alternate Names (SANs) |
| applicationSet.certificate.duration | string | `""` (defaults to 2160h = 90d if not specified) | The requested 'duration' (i.e. lifetime) of the certificate. # Ref: https://cert-manager.io/docs/usage/certificate/#renewal |
| applicationSet.certificate.renewBefore | string | `""` (defaults to 360h = 15d if not specified) | How long before the expiry a certificate should be renewed. # Ref: https://cert-manager.io/docs/usage/certificate/#renewal |
| applicationSet.certificate.issuer.group | string | `""` | Certificate issuer group. Set if using an external issuer. Eg. `cert-manager.io` |
| applicationSet.certificate.issuer.kind | string | `""` | Certificate issuer kind. Either `Issuer` or `ClusterIssuer` |
| applicationSet.certificate.issuer.name | string | `""` | Certificate issuer name. Eg. `letsencrypt` |
| applicationSet.certificate.privateKey.rotationPolicy | string | `"Never"` | Rotation policy of private key when certificate is re-issued. Either: `Never` or `Always` |
| applicationSet.certificate.privateKey.encoding | string | `"PKCS1"` | The private key cryptography standards (PKCS) encoding for private key. Either: `PCKS1` or `PKCS8` |
| applicationSet.certificate.privateKey.algorithm | string | `"RSA"` | Algorithm used to generate certificate private key. One of: `RSA`, `Ed25519` or `ECDSA` |
| applicationSet.certificate.privateKey.size | int | `2048` | Key bit size of the private key. If algorithm is set to `Ed25519`, size is ignored. |
| applicationSet.certificate.annotations | object | `{}` | Annotations to be applied to the ApplicationSet Certificate |
| notifications.enabled | bool | `true` | Enable notifications controller |
| notifications.name | string | `"notifications-controller"` | Notifications controller name string |
| notifications.argocdUrl | string | `nil` | Argo CD dashboard url; used in place of {{.context.argocdUrl}} in templates |
| notifications.pdb.enabled | bool | `false` | Deploy a [PodDisruptionBudget] for the notifications controller |
| notifications.pdb.labels | object | `{}` | Labels to be added to notifications controller pdb |
| notifications.pdb.annotations | object | `{}` | Annotations to be added to notifications controller pdb |
| notifications.pdb.minAvailable | string | `""` (defaults to 0 if not specified) | Number of pods that are available after eviction as number or percentage (eg.: 50%) |
| notifications.pdb.maxUnavailable | string | `""` | Number of pods that are unavailable after eviction as number or percentage (eg.: 50%). # Has higher precedence over `notifications.pdb.minAvailable` |
| notifications.image.repository | string | `""` (defaults to global.image.repository) | Repository to use for the notifications controller |
| notifications.image.tag | string | `""` (defaults to global.image.tag) | Tag to use for the notifications controller |
| notifications.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Image pull policy for the notifications controller |
| notifications.imagePullSecrets | list | `[]` (defaults to global.imagePullSecrets) | Secrets with credentials to pull images from a private registry |
| notifications.logFormat | string | `""` (defaults to global.logging.format) | Notifications controller log format. Either `text` or `json` |
| notifications.logLevel | string | `""` (defaults to global.logging.level) | Notifications controller log level. One of: `debug`, `info`, `warn`, `error` |
| notifications.extraArgs | list | `[]` | Extra arguments to provide to the notifications controller |
| notifications.extraEnv | list | `[]` | Additional container environment variables |
| notifications.extraEnvFrom | list | `[]` (See [values.yaml]) | envFrom to pass to the notifications controller |
| notifications.extraContainers | list | `[]` | Additional containers to be added to the notifications controller pod # Note: Supports use of custom Helm templates |
| notifications.initContainers | list | `[]` | Init containers to add to the notifications controller pod # Note: Supports use of custom Helm templates |
| notifications.extraVolumeMounts | list | `[]` | List of extra mounts to add (normally used with extraVolumes) |
| notifications.extraVolumes | list | `[]` | List of extra volumes to add |
| notifications.context | object | `{}` | Define user-defined context # For more information: https://argocd-notifications.readthedocs.io/en/stable/templates/#defining-user-defined-context |
| notifications.secret.create | bool | `true` | Whether helm chart creates notifications controller secret |
| notifications.secret.annotations | object | `{}` | key:value pairs of annotations to be added to the secret |
| notifications.secret.labels | object | `{}` | key:value pairs of labels to be added to the secret |
| notifications.secret.items | object | `{}` | Generic key:value pairs to be inserted into the secret # Can be used for templates, notification services etc. Some examples given below. # For more information: https://argocd-notifications.readthedocs.io/en/stable/services/overview/ |
| notifications.metrics.enabled | bool | `false` | Enables prometheus metrics server |
| notifications.metrics.port | int | `9001` | Metrics port |
| notifications.metrics.service.type | string | `"ClusterIP"` | Metrics service type |
| notifications.metrics.service.clusterIP | string | `""` | Metrics service clusterIP. `None` makes a "headless service" (no virtual IP) |
| notifications.metrics.service.annotations | object | `{}` | Metrics service annotations |
| notifications.metrics.service.labels | object | `{}` | Metrics service labels |
| notifications.metrics.service.portName | string | `"http-metrics"` | Metrics service port name |
| notifications.metrics.serviceMonitor.enabled | bool | `false` | Enable a prometheus ServiceMonitor |
| notifications.metrics.serviceMonitor.selector | object | `{}` | Prometheus ServiceMonitor selector |
| notifications.metrics.serviceMonitor.additionalLabels | object | `{}` | Prometheus ServiceMonitor labels |
| notifications.metrics.serviceMonitor.annotations | object | `{}` | Prometheus ServiceMonitor annotations |
| notifications.metrics.serviceMonitor.scheme | string | `""` | Prometheus ServiceMonitor scheme |
| notifications.metrics.serviceMonitor.tlsConfig | object | `{}` | Prometheus ServiceMonitor tlsConfig |
| notifications.metrics.serviceMonitor.relabelings | list | `[]` | Prometheus [RelabelConfigs] to apply to samples before scraping |
| notifications.metrics.serviceMonitor.metricRelabelings | list | `[]` | Prometheus [MetricRelabelConfigs] to apply to samples before ingestion |
| notifications.notifiers | object | See [values.yaml] | Configures notification services such as slack, email or custom webhook # For more information: https://argocd-notifications.readthedocs.io/en/stable/services/overview/ |
| notifications.deploymentAnnotations | object | `{}` | Annotations to be applied to the notifications controller Deployment |
| notifications.podAnnotations | object | `{}` | Annotations to be applied to the notifications controller Pods |
| notifications.podLabels | object | `{}` | Labels to be applied to the notifications controller Pods |
| notifications.resources | object | `{}` | Resource limits and requests for the notifications controller |
| notifications.containerPorts.metrics | int | `9001` | Metrics container port |
| notifications.dnsConfig | object | `{}` | [DNS configuration] |
| notifications.dnsPolicy | string | `"ClusterFirst"` | Alternative DNS policy for notifications controller Pods |
| notifications.containerSecurityContext | object | See [values.yaml] | Notification controller container-level security Context |
| notifications.nodeSelector | object | `{}` (defaults to global.nodeSelector) | [Node selector] |
| notifications.tolerations | list | `[]` (defaults to global.tolerations) | [Tolerations] for use with node taints |
| notifications.affinity | object | `{}` (defaults to global.affinity preset) | Assign custom [affinity] rules |
| notifications.topologySpreadConstraints | list | `[]` (defaults to global.topologySpreadConstraints) | Assign custom [TopologySpreadConstraints] rules to the application controller # Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/ # If labelSelector is left out, it will default to the labelSelector configuration of the deployment |
| notifications.deploymentStrategy | object | `{"type":"Recreate"}` | Deployment strategy to be added to the notifications controller Deployment |
| notifications.priorityClassName | string | `""` (defaults to global.priorityClassName) | Priority class for the notifications controller pods |
| notifications.serviceAccount.create | bool | `true` | Create notifications controller service account |
| notifications.serviceAccount.name | string | `"argocd-notifications-controller"` | Notification controller service account name |
| notifications.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| notifications.serviceAccount.labels | object | `{}` | Labels applied to created service account |
| notifications.serviceAccount.automountServiceAccountToken | bool | `true` | Automount API credentials for the Service Account |
| notifications.cm.create | bool | `true` | Whether helm chart creates notifications controller config map |
| notifications.subscriptions | list | `[]` | Contains centrally managed global application subscriptions # For more information: https://argocd-notifications.readthedocs.io/en/stable/subscriptions/ |
| notifications.templates | object | `{}` | The notification template is used to generate the notification content # For more information: https://argocd-notifications.readthedocs.io/en/stable/templates/ |
| notifications.triggers | object | `{}` | The trigger defines the condition when the notification should be sent # For more information: https://argocd-notifications.readthedocs.io/en/stable/triggers/ |
| notifications.bots.slack.enabled | bool | `false` | Enable slack bot # You have to set secret.notifiers.slack.signingSecret |
| notifications.bots.slack.pdb.enabled | bool | `false` | Deploy a [PodDisruptionBudget] for the Slack bot |
| notifications.bots.slack.pdb.labels | object | `{}` | Labels to be added to Slack bot pdb |
| notifications.bots.slack.pdb.annotations | object | `{}` | Annotations to be added to Slack bot pdb |
| notifications.bots.slack.pdb.minAvailable | string | `""` (defaults to 0 if not specified) | Number of pods that are available after eviction as number or percentage (eg.: 50%) |
| notifications.bots.slack.pdb.maxUnavailable | string | `""` | Number of pods that are unavailble after eviction as number or percentage (eg.: 50%). # Has higher precedence over `notifications.bots.slack.pdb.minAvailable` |
| notifications.bots.slack.image.repository | string | `""` (defaults to global.image.repository) | Repository to use for the Slack bot |
| notifications.bots.slack.image.tag | string | `""` (defaults to global.image.tag) | Tag to use for the Slack bot |
| notifications.bots.slack.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Image pull policy for the Slack bot |
| notifications.bots.slack.imagePullSecrets | list | `[]` (defaults to global.imagePullSecrets) | Secrets with credentials to pull images from a private registry |
| notifications.bots.slack.logFormat | string | `""` (defaults to global.logging.format) | Slack bot log format. Either `text` or `json` |
| notifications.bots.slack.logLevel | string | `""` (defaults to global.logging.level) | Slack bot log level. One of: `debug`, `info`, `warn`, `error` |
| notifications.bots.slack.extraArgs | list | `[]` | List of extra cli args to add for Slack bot |
| notifications.bots.slack.service.annotations | object | `{}` | Service annotations for Slack bot |
| notifications.bots.slack.service.port | int | `80` | Service port for Slack bot |
| notifications.bots.slack.service.type | string | `"LoadBalancer"` | Service type for Slack bot |
| notifications.bots.slack.serviceAccount.create | bool | `true` | Specifies whether a service account should be created |
| notifications.bots.slack.serviceAccount.name | string | `"argocd-notifications-bot"` | The name of the service account to use. # If not set and create is true, a name is generated using the fullname template |
| notifications.bots.slack.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| notifications.bots.slack.dnsConfig | object | `{}` | [DNS configuration] |
| notifications.bots.slack.dnsPolicy | string | `"ClusterFirst"` | Alternative DNS policy for Slack bot pods |
| notifications.bots.slack.containerSecurityContext | object | See [values.yaml] | Slack bot container-level security Context |
| notifications.bots.slack.resources | object | `{}` | Resource limits and requests for the Slack bot |
| notifications.bots.slack.affinity | object | `{}` (defaults to global.affinity preset) | Assign custom [affinity] rules |
| notifications.bots.slack.tolerations | list | `[]` | [Tolerations] for use with node taints |
| notifications.bots.slack.nodeSelector | object | `{}` | [Node selector] |
| argocd-apps.applications | list | `[]` (See [values.yaml]) | Deploy Argo CD Applications within this helm release # Ref: https://github.com/argoproj/argo-cd/blob/master/docs/operator-manual/ |
| argocd-apps.projects | list | `[]` (See [values.yaml]) | Deploy Argo CD Projects within this helm release # Ref: https://github.com/argoproj/argo-cd/blob/master/docs/operator-manual/ |
| argocd-apps.applicationsets | list | `[]` (See [values.yaml]) | Deploy Argo CD ApplicationSets within this helm release # Ref: https://argo-cd.readthedocs.io/en/stable/operator-manual/applicationset/ |
| argocd-apps.extensions | list | `[]` (See [values.yaml]) | Deploy Argo UI Extensions within this helm release # This function in tech preview stage, do expect unstability or breaking changes in newer versions. Bump image.tag if necessary. # Ref: https://github.com/argoproj-labs/argocd-extensions |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.
