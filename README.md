# argo-cd

![Version: 5.16.1-bb.0](https://img.shields.io/badge/Version-5.16.1--bb.0-informational?style=flat-square) ![AppVersion: v2.5.3](https://img.shields.io/badge/AppVersion-v2.5.3-informational?style=flat-square)

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

Kubernetes: `>=1.22.0-0`

Install Helm

https://helm.sh/docs/intro/install/

## Deployment

* Clone down the repository
* cd into directory
```bash
helm install argo-cd chart/
```

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| nameOverride | string | `"argocd"` | Provide a name in place of `argocd` |
| fullnameOverride | string | `""` | String to fully override `"argo-cd.fullname"` |
| kubeVersionOverride | string | `""` | Override the Kubernetes version, which is used to evaluate certain manifests |
| apiVersionOverrides.certmanager | string | `""` | String to override apiVersion of cert-manager resources rendered by this helm chart |
| apiVersionOverrides.cloudgoogle | string | `""` | String to override apiVersion of GKE resources rendered by this helm chart |
| apiVersionOverrides.autoscaling | string | `""` | String to override apiVersion of autoscaling rendered by this helm chart |
| apiVersionOverrides.ingress | string | `""` | String to override apiVersion of ingresses rendered by this helm chart |
| apiVersionOverrides.pdb | string | `""` | String to override apiVersion of pod disruption budgets rendered by this helm chart |
| createAggregateRoles | bool | `false` | Create clusterroles that extend existing clusterroles to interact with argo-cd crds # Ref: https://kubernetes.io/docs/reference/access-authn-authz/rbac/#aggregated-clusterroles |
| openshift.enabled | bool | `false` | enables using arbitrary uid for argo repo server |
| crds.install | bool | `true` | Install and upgrade CRDs |
| crds.keep | bool | `true` | Keep CRDs on chart uninstall |
| crds.annotations | object | `{}` | Annotations to be added to all CRDs |
| global.additionalLabels | object | `{}` | Common labels for the all resources |
| global.revisionHistoryLimit | int | `3` | Number of old deployment ReplicaSets to retain. The rest will be garbage collected. |
| global.image.repository | string | `"registry1.dso.mil/ironbank/big-bang/argocd"` |  |
| global.image.tag | string | `"v2.5.3"` |  |
| global.image.imagePullPolicy | string | `"IfNotPresent"` |  |
| global.imagePullSecrets | list | `[]` | Secrets with credentials to pull images from a private registry |
| global.logging.format | string | `"text"` | Set the global logging format. Either: `text` or `json` |
| global.logging.level | string | `"info"` | Set the global logging level. One of: `debug`, `info`, `warn` or `error` |
| global.statefulsetAnnotations | object | `{}` | Annotations for the all deployed Statefulsets |
| global.deploymentAnnotations | object | `{}` | Annotations for the all deployed Deployments |
| global.podAnnotations | object | `{}` | Annotations for the all deployed pods |
| global.podLabels | object | `{}` | Labels for the all deployed pods |
| global.securityContext | object | `{}` (See [values.yaml]) | Toggle and define pod-level security context. |
| global.imagePullSecrets[0].name | string | `"private-registry"` |  |
| global.hostAliases | list | `[]` | Mapping between IP and hostnames that will be injected as entries in the pod's hosts files |
| global.networkPolicy.create | bool | `false` | Create NetworkPolicy objects for all components |
| global.networkPolicy.defaultDenyIngress | bool | `false` | Default deny all ingress traffic |
| configs.cm.create | bool | `true` | Create the argocd-cm configmap for [declarative setup] |
| configs.cm.annotations | object | `{}` | Annotations to be added to argocd-cm configmap |
| configs.cm.url | string | `""` | Argo CD's externally facing base URL (optional). Required when configuring SSO |
| configs.cm."application.instanceLabelKey" | string | Defaults to app.kubernetes.io/instance | The name of tracking label used by Argo CD for resource pruning |
| configs.cm."server.rbac.log.enforce.enable" | bool | `false` | Enable logs RBAC enforcement # Ref: https://argo-cd.readthedocs.io/en/latest/operator-manual/upgrading/2.3-2.4/#enable-logs-rbac-enforcement |
| configs.cm."exec.enabled" | bool | `false` | Enable exec feature in Argo UI # Ref: https://argo-cd.readthedocs.io/en/latest/operator-manual/rbac/#exec-resource |
| configs.cm."admin.enabled" | bool | `true` | Enable local admin user # Ref: https://argo-cd.readthedocs.io/en/latest/faq/#how-to-disable-admin-user |
| configs.cm."timeout.reconciliation" | string | `"180s"` | Timeout to discover if a new manifests version got published to the repository |
| configs.cm."timeout.hard.reconciliation" | int | `0` | Timeout to refresh application data as well as target manifests cache |
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
| configs.params."server.enable.gzip" | bool | `false` | Enable GZIP compression |
| configs.params."server.x.frame.options" | string | `"sameorigin"` | Set X-Frame-Options header in HTTP responses to value. To disable, set to "". |
| configs.params."reposerver.parallelism.limit" | int | `0` | Limit on number of concurrent manifests generate requests. Any value less the 1 means no limit. |
| configs.rbac.create | bool | `true` | Create the argocd-rbac-cm configmap with ([Argo CD RBAC policy]) definitions. If false, it is expected the configmap will be created by something else. Argo CD will not work if there is no configmap created with the name above. |
| configs.rbac.annotations | object | `{}` | Annotations to be added to argocd-rbac-cm configmap |
| configs.rbac."policy.default" | string | `""` | The name of the default role which Argo CD will falls back to, when authorizing API requests (optional). If omitted or empty, users may be still be able to login, but will see no apps, projects, etc... |
| configs.rbac."policy.csv" | string | `''` (See [values.yaml]) | File containing user-defined policies and role definitions. |
| configs.rbac.scopes | string | `"[groups]"` | OIDC scopes to examine during rbac enforcement (in addition to `sub` scope). The scope value can be a string, or a list of strings. |
| configs.gpg.annotations | object | `{}` | Annotations to be added to argocd-gpg-keys-cm configmap |
| configs.gpg.keys | object | `{}` (See [values.yaml]) | [GnuPG] public keys to add to the keyring # Note: Public keys should be exported with `gpg --export --armor <KEY>` |
| configs.clusterCredentials | list | `[]` (See [values.yaml]) | Provide one or multiple [external cluster credentials] # Ref: # - https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#clusters # - https://argo-cd.readthedocs.io/en/stable/operator-manual/security/#external-cluster-credentials |
| configs.knownHostsAnnotations | object | `{}` | Known Hosts configmap annotations |
| configs.knownHosts.data.ssh_known_hosts | string | See [values.yaml] | Known Hosts |
| configs.tlsCertsAnnotations | object | `{}` | TLS certificate configmap annotations |
| configs.tlsCerts | object | See [values.yaml] | TLS certificate |
| configs.credentialTemplates | object | `{}` | Repository credentials to be used as Templates for other repos # Creates a secret for each key/value specified below to create repository credentials |
| configs.credentialTemplatesAnnotations | object | `{}` | Annotations to be added to `configs.credentialTemplates` Secret |
| configs.repositories | object | `{}` | Repositories list to be used by applications # Creates a secret for each key/value specified below to create repositories # Note: the last example in the list would use a repository credential template, configured under "configs.repositoryCredentials". |
| configs.repositoriesAnnotations | object | `{}` | Annotations to be added to `configs.repositories` Secret |
| configs.secret.createSecret | bool | `true` | Create the argocd-secret |
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
| extraObjects | list | `[]` | Array of extra K8s manifests to deploy |
| controller.name | string | `"application-controller"` | Application controller name string |
| controller.replicas | int | `1` | The number of application controller pods to run. Additional replicas will cause sharding of managed clusters across number of replicas. |
| controller.pdb.enabled | bool | `false` | Deploy a [PodDisruptionBudget] for the application controller |
| controller.pdb.labels | object | `{}` | Labels to be added to application controller pdb |
| controller.pdb.annotations | object | `{}` | Annotations to be added to application controller pdb |
| controller.pdb.minAvailable | string | `""` (defaults to 0 if not specified) | Number of pods that are available after eviction as number or percentage (eg.: 50%) |
| controller.pdb.maxUnavailable | string | `""` | Number of pods that are unavailble after eviction as number or percentage (eg.: 50%). # Has higher precedence over `controller.pdb.minAvailable` |
| controller.image.repository | string | `""` (defaults to global.image.repository) | Repository to use for the application controller |
| controller.image.tag | string | `""` (defaults to global.image.tag) | Tag to use for the application controller |
| controller.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Image pull policy for the application controller |
| controller.imagePullSecrets[0].name | string | `"private-registry"` |  |
| controller.imagePullSecrets | list | `[]` (defaults to global.imagePullSecrets) | Secrets with credentials to pull images from a private registry |
| controller.args | object | `{}` | DEPRECATED - Application controller commandline flags |
| controller.extraArgs | list | `[]` | Additional command line arguments to pass to application controller |
| controller.env | list | `[]` | Environment variables to pass to application controller |
| controller.envFrom | list | `[]` (See [values.yaml]) | envFrom to pass to application controller |
| controller.statefulsetAnnotations | object | `{}` | Annotations for the application controller StatefulSet |
| controller.podAnnotations | object | `{}` | Annotations to be added to application controller pods |
| controller.podLabels | object | `{}` | Labels to be added to application controller pods |
| controller.containerSecurityContext | object | See [values.yaml] | Application controller container-level security context |
| controller.containerPort | int | `8082` | Application controller listening port |
| controller.readinessProbe.failureThreshold | int | `3` | Minimum consecutive failures for the [probe] to be considered failed after having succeeded |
| controller.readinessProbe.initialDelaySeconds | int | `10` | Number of seconds after the container has started before [probe] is initiated |
| controller.readinessProbe.periodSeconds | int | `10` | How often (in seconds) to perform the [probe] |
| controller.readinessProbe.successThreshold | int | `1` | Minimum consecutive successes for the [probe] to be considered successful after having failed |
| controller.readinessProbe.timeoutSeconds | int | `1` | Number of seconds after which the [probe] times out |
| controller.volumeMounts | list | `[]` | Additional volumeMounts to the application controller main container |
| controller.volumes | list | `[]` | Additional volumes to the application controller pod |
| controller.nodeSelector | object | `{}` | [Node selector] |
| controller.tolerations | list | `[]` | [Tolerations] for use with node taints |
| controller.affinity | object | `{}` | Assign custom [affinity] rules to the deployment |
| controller.topologySpreadConstraints | list | `[]` | Assign custom [TopologySpreadConstraints] rules to the application controller # Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/ # If labelSelector is left out, it will default to the labelSelector configuration of the deployment |
| controller.priorityClassName | string | `""` | Priority class for the application controller pods |
| controller.resources | object | `{"limits":{"cpu":"500m","memory":"3Gi"},"requests":{"cpu":"500m","memory":"3Gi"}}` | Resource limits and requests for the application controller pods |
| controller.serviceAccount.create | bool | `true` | Create a service account for the application controller |
| controller.serviceAccount.name | string | `"argocd-application-controller"` | Service account name |
| controller.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| controller.serviceAccount.labels | object | `{}` | Labels applied to created service account |
| controller.serviceAccount.automountServiceAccountToken | bool | `true` | Automount API credentials for the Service Account |
| controller.metrics.enabled | bool | `false` | Deploy metrics service |
| controller.metrics.applicationLabels.enabled | bool | `false` | Enables additional labels in argocd_app_labels metric |
| controller.metrics.applicationLabels.labels | list | `[]` | Additional labels |
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
| controller.metrics.rules.spec | list | `[]` | PrometheusRule.Spec for the application controller |
| controller.clusterAdminAccess.enabled | bool | `true` | Enable RBAC for local cluster deployments |
| controller.clusterRoleRules.enabled | bool | `false` | Enable custom rules for the application controller's ClusterRole resource |
| controller.clusterRoleRules.rules | list | `[]` | List of custom rules for the application controller's ClusterRole resource |
| controller.extraContainers | list | `[]` | Additional containers to be added to the application controller pod |
| controller.initContainers | list | `[]` | Init containers to add to the application controller pod # If your target Kubernetes cluster(s) require a custom auth provider executable # you could use this (and the same in the server pod) to bootstrap # that executable into your Argo CD container |
| dex.enabled | bool | `true` | Enable dex |
| dex.name | string | `"dex-server"` | Dex name |
| dex.imagePullSecrets[0].name | string | `"private-registry"` |  |
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
| dex.image.tag | string | `"v2.35.3"` | Dex image tag |
| dex.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Dex imagePullPolicy |
| dex.imagePullSecrets | list | `[]` (defaults to global.imagePullSecrets) | Secrets with credentials to pull images from a private registry |
| dex.initImage.repository | string | `""` (defaults to global.image.repository) | Argo CD init image repository |
| dex.initImage.tag | string | `""` (defaults to global.image.tag) | Argo CD init image tag |
| dex.initImage.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Argo CD init image imagePullPolicy |
| dex.env | list | `[]` | Environment variables to pass to the Dex server |
| dex.envFrom | list | `[]` (See [values.yaml]) | envFrom to pass to the Dex server |
| dex.certificateSecret.enabled | bool | `false` | Create argocd-dex-server-tls secret |
| dex.certificateSecret.labels | object | `{}` | Labels to be added to argocd-dex-server-tls secret |
| dex.certificateSecret.annotations | object | `{}` | Annotations to be added to argocd-dex-server-tls secret |
| dex.certificateSecret.ca | string | `""` | Certificate authority. Required for self-signed certificates. |
| dex.certificateSecret.key | string | `""` | Certificate private key |
| dex.certificateSecret.crt | string | `""` | Certificate data. Must contain SANs of Dex service (ie: argocd-dex-server, argocd-dex-server.argo-cd.svc) |
| dex.deploymentAnnotations | object | `{}` | Annotations to be added to the Dex server Deployment |
| dex.podAnnotations | object | `{}` | Annotations to be added to the Dex server pods |
| dex.podLabels | object | `{}` | Labels to be added to the Dex server pods |
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
| dex.volumeMounts | list | `[]` | Additional volumeMounts to the dex main container |
| dex.volumes | list | `[]` | Additional volumes to the dex pod |
| dex.containerPortHttp | int | `5556` | Container port for HTTP access |
| dex.servicePortHttp | int | `5556` | Service port for HTTP access |
| dex.servicePortHttpName | string | `"http"` | Service port name for HTTP access |
| dex.containerPortGrpc | int | `5557` | Container port for gRPC access |
| dex.servicePortGrpc | int | `5557` | Service port for gRPC access |
| dex.servicePortGrpcName | string | `"grpc"` | Service port name for gRPC access |
| dex.containerPortMetrics | int | `5558` | Container port for metrics access |
| dex.servicePortMetrics | int | `5558` | Service port for metrics access |
| dex.nodeSelector | object | `{}` | [Node selector] |
| dex.tolerations | list | `[]` | [Tolerations] for use with node taints |
| dex.affinity | object | `{}` | Assign custom [affinity] rules to the deployment |
| dex.topologySpreadConstraints | list | `[]` | Assign custom [TopologySpreadConstraints] rules to dex # Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/ # If labelSelector is left out, it will default to the labelSelector configuration of the deployment |
| dex.priorityClassName | string | `""` | Priority class for dex |
| dex.resources | object | `{"limits":{"cpu":"10m","memory":"128Mi"},"requests":{"cpu":"10m","memory":"128Mi"}}` | Resource limits and requests for dex |
| dex.extraContainers | list | `[]` | Additional containers to be added to the dex pod |
| dex.initContainers | list | `[]` | Init containers to add to the dex pod |
| redis.externalEndpoint | string | `""` | Endpoint URL for external Redis For use with BigBang passthrough |
| redis.enabled | bool | `true` | Enable redis |
| redis.name | string | `"redis"` | Redis name |
| redis.pdb.enabled | bool | `false` | Deploy a [PodDisruptionBudget] for the Redis |
| redis.pdb.labels | object | `{}` | Labels to be added to Redis pdb |
| redis.pdb.annotations | object | `{}` | Annotations to be added to Redis pdb |
| redis.pdb.minAvailable | string | `""` (defaults to 0 if not specified) | Number of pods that are available after eviction as number or percentage (eg.: 50%) |
| redis.pdb.maxUnavailable | string | `""` | Number of pods that are unavailble after eviction as number or percentage (eg.: 50%). # Has higher precedence over `redis.pdb.minAvailable` |
| redis.image.repository | string | `"registry1.dso.mil/ironbank/opensource/redis/redis7"` | Redis repository |
| redis.image.tag | string | `"7.0.5"` | Redis tag |
| redis.image.imagePullPolicy | string | `"IfNotPresent"` | Redis imagePullPolicy |
| redis.imagePullSecrets[0] | string | `"private-registry"` |  |
| redis.extraArgs | list | `[]` | Additional command line arguments to pass to redis-server |
| redis.containerPort | int | `6379` | Redis container port |
| redis.servicePort | int | `6379` | Redis service port |
| redis.env | list | `[]` | Environment variables to pass to the Redis server |
| redis.envFrom | list | `[]` (See [values.yaml]) | envFrom to pass to the Redis server |
| redis.deploymentAnnotations | object | `{}` | Annotations to be added to the Redis server Deployment |
| redis.podAnnotations | object | `{}` | Annotations to be added to the Redis server pods |
| redis.podLabels | object | `{}` | Labels to be added to the Redis server pods |
| redis.securityContext | object | See [values.yaml] | Redis pod-level security context |
| redis.containerSecurityContext | object | See [values.yaml] | Redis container-level security context |
| redis.nodeSelector | object | `{}` | [Node selector] |
| redis.tolerations | list | `[]` | [Tolerations] for use with node taints |
| redis.affinity | object | `{}` | Assign custom [affinity] rules to the deployment |
| redis.topologySpreadConstraints | list | `[]` | Assign custom [TopologySpreadConstraints] rules to redis # Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/ # If labelSelector is left out, it will default to the labelSelector configuration of the deployment |
| redis.priorityClassName | string | `""` | Priority class for redis |
| redis.serviceAccount.create | bool | `false` | Create a service account for the redis pod |
| redis.serviceAccount.name | string | `""` | Service account name for redis pod |
| redis.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| redis.serviceAccount.automountServiceAccountToken | bool | `false` | Automount API credentials for the Service Account |
| redis.resources | object | `{"limits":{"cpu":"50m","memory":"64Mi"},"requests":{"cpu":"50m","memory":"64Mi"}}` | Resource limits and requests for redis |
| redis.volumeMounts | list | `[]` | Additional volumeMounts to the redis container |
| redis.volumes | list | `[]` | Additional volumes to the redis pod |
| redis.extraContainers | list | `[]` | Additional containers to be added to the redis pod |
| redis.initContainers | list | `[]` | Init containers to add to the redis pod |
| redis.service.annotations | object | `{}` | Redis service annotations |
| redis.service.labels | object | `{}` | Additional redis service labels |
| redis.metrics.enabled | bool | `false` | Deploy metrics service and redis-exporter sidecar |
| redis.metrics.image.repository | string | `"public.ecr.aws/bitnami/redis-exporter"` | redis-exporter image repository |
| redis.metrics.image.tag | string | `"1.26.0-debian-10-r2"` | redis-exporter image tag |
| redis.metrics.image.imagePullPolicy | string | `"IfNotPresent"` | redis-exporter image PullPolicy |
| redis.metrics.containerPort | int | `9121` | Port to use for redis-exporter sidecar |
| redis.metrics.containerSecurityContext | object | See [values.yaml] | Redis exporter security context |
| redis.metrics.resources | object | `{}` | Resource limits and requests for redis-exporter sidecar |
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
| redis-bb | object | `{"auth":{"enabled":false},"commonConfiguration":"maxmemory 200mb\nsave \"\"","enabled":true,"image":{"pullSecrets":["private-registry"]},"istio":{"redis":{"enabled":false}},"master":{"containerSecurityContext":{"capabilities":{"drop":["ALL"]},"runAsGroup":1001,"runAsNonRoot":true,"runAsUser":1001},"resources":{"limits":{"cpu":"100m","memory":"256Mi"},"requests":{"cpu":"100m","memory":"256Mi"}}},"replica":{"containerSecurityContext":{"capabilities":{"drop":["ALL"]},"runAsGroup":1001,"runAsNonRoot":true,"runAsUser":1001},"resources":{"limits":{"cpu":"100m","memory":"256Mi"},"requests":{"cpu":"100m","memory":"256Mi"}}}}` | BigBang HA Redis Passthrough |
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
| server.autoscaling.behavior | object | `{}` | Configures the scaling behavior of the target in both Up and Down directions. This is only available on HPA apiVersion `autoscaling/v2beta2` and newer |
| server.pdb.enabled | bool | `false` | Deploy a [PodDisruptionBudget] for the Argo CD server |
| server.pdb.labels | object | `{}` | Labels to be added to Argo CD server pdb |
| server.pdb.annotations | object | `{}` | Annotations to be added to Argo CD server pdb |
| server.pdb.minAvailable | string | `""` (defaults to 0 if not specified) | Number of pods that are available after eviction as number or percentage (eg.: 50%) |
| server.pdb.maxUnavailable | string | `""` | Number of pods that are unavailble after eviction as number or percentage (eg.: 50%). # Has higher precedence over `server.pdb.minAvailable` |
| server.image.repository | string | `""` (defaults to global.image.repository) | Repository to use for the Argo CD server |
| server.image.tag | string | `""` (defaults to global.image.tag) | Tag to use for the Argo CD server |
| server.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Image pull policy for the Argo CD server |
| server.imagePullSecrets | list | `[]` (defaults to global.imagePullSecrets) | Secrets with credentials to pull images from a private registry |
| server.extraArgs | list | `[]` | Additional command line arguments to pass to Argo CD server |
| server.env | list | `[]` | Environment variables to pass to Argo CD server |
| server.envFrom | list | `[]` (See [values.yaml]) | envFrom to pass to Argo CD server |
| server.lifecycle | object | `{}` | Specify postStart and preStop lifecycle hooks for your argo-cd-server container |
| server.deploymentAnnotations | object | `{}` | Annotations to be added to server Deployment |
| server.podAnnotations | object | `{}` | Annotations to be added to server pods |
| server.podLabels | object | `{}` | Labels to be added to server pods |
| server.containerPort | int | `8080` | Configures the server port |
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
| server.volumeMounts | list | `[]` | Additional volumeMounts to the server main container |
| server.volumes | list | `[]` | Additional volumes to the server pod |
| server.nodeSelector | object | `{}` | [Node selector] |
| server.tolerations | list | `[]` | [Tolerations] for use with node taints |
| server.affinity | object | `{}` | Assign custom [affinity] rules to the deployment |
| server.topologySpreadConstraints | list | `[]` | Assign custom [TopologySpreadConstraints] rules to the Argo CD server # Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/ # If labelSelector is left out, it will default to the labelSelector configuration of the deployment |
| server.priorityClassName | string | `""` | Priority class for the Argo CD server |
| server.containerSecurityContext | object | See [values.yaml] | Server container-level security context |
| server.resources | object | `{"limits":{"cpu":"20m","memory":"128Mi"},"requests":{"cpu":"20m","memory":"128Mi"}}` | Resource limits and requests for the Argo CD server |
| server.certificate.enabled | bool | `false` | Deploy a Certificate resource (requires cert-manager) |
| server.certificate.secretName | string | `"argocd-server-tls"` | The name of the Secret that will be automatically created and managed by this Certificate resource |
| server.certificate.domain | string | `"argocd.example.com"` | Certificate primary domain (commonName) |
| server.certificate.additionalHosts | list | `[]` | Certificate Subject Alternate Names (SANs) |
| server.certificate.duration | string | `""` (defaults to 2160h = 90d if not specified) | The requested 'duration' (i.e. lifetime) of the certificate. # Ref: https://cert-manager.io/docs/usage/certificate/#renewal |
| server.certificate.renewBefore | string | `""` (defaults to 360h = 15d if not specified) | How long before the expiry a certificate should be renewed. # Ref: https://cert-manager.io/docs/usage/certificate/#renewal |
| server.certificate.issuer.group | string | `""` | Certificate issuer group. Set if using an external issuer. Eg. `cert-manager.io` |
| server.certificate.issuer.kind | string | `""` | Certificate issuer kind. Either `Issuer` or `ClusterIssuer` |
| server.certificate.issuer.name | string | `""` | Certificate isser name. Eg. `letsencrypt` |
| server.certificate.privateKey.rotationPolicy | string | `"Never"` | Rotation policy of private key when certificate is re-issued. Either: `Never` or `Always` |
| server.certificate.privateKey.encoding | string | `"PKCS1"` | The private key cryptography standards (PKCS) encoding for private key. Either: `PCKS1` or `PKCS8` |
| server.certificate.privateKey.algorithm | string | `"RSA"` | Algorithm used to generate certificate private key. One of: `RSA`, `Ed25519` or `ECDSA` |
| server.certificate.privateKey.size | int | `2048` | Key bit size of the private key. If algorithm is set to `Ed25519`, size is ignored. |
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
| server.service.namedTargetPort | bool | `true` | Use named target port for argocd # Named target ports are not supported by GCE health checks, so when deploying argocd on GKE # and exposing it via GCE ingress, the health checks fail and the load balancer returns a 502. |
| server.service.loadBalancerIP | string | `""` | LoadBalancer will get created with the IP specified in this field |
| server.service.loadBalancerSourceRanges | list | `[]` | Source IP ranges to allow access to service from |
| server.service.externalIPs | list | `[]` | Server service external IPs |
| server.service.externalTrafficPolicy | string | `""` | Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints |
| server.service.sessionAffinity | string | `""` | Used to maintain session affinity. Supports `ClientIP` and `None` |
| server.metrics.enabled | bool | `false` | Deploy metrics service |
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
| server.clusterAdminAccess.enabled | bool | `true` | Enable RBAC for local cluster deployments |
| server.GKEbackendConfig.enabled | bool | `false` | Enable BackendConfig custom resource for Google Kubernetes Engine |
| server.GKEbackendConfig.spec | object | `{}` | [BackendConfigSpec] |
| server.GKEmanagedCertificate.enabled | bool | `false` | Enable ManagedCertificate custom resource for Google Kubernetes Engine. |
| server.GKEmanagedCertificate.domains | list | `["argocd.example.com"]` | Domains for the Google Managed Certificate |
| server.GKEfrontendConfig.enabled | bool | `false` | Enable FrontConfig custom resource for Google Kubernetes Engine |
| server.GKEfrontendConfig.spec | object | `{}` | [FrontendConfigSpec] |
| server.extraContainers | list | `[]` | Additional containers to be added to the server pod # See https://github.com/lemonldap-ng-controller/lemonldap-ng-controller as example. |
| server.initContainers | list | `[]` | Init containers to add to the server pod # If your target Kubernetes cluster(s) require a custom auth provider executable # you could use this (and the same in the application controller pod) to bootstrap # that executable into your Argo CD container |
| server.extensions.enabled | bool | `false` | Enable support for Argo UI extensions |
| server.extensions.image.repository | string | `"ghcr.io/argoproj-labs/argocd-extensions"` | Repository to use for extensions image |
| server.extensions.image.tag | string | `"v0.1.0"` | Tag to use for extensions image |
| server.extensions.image.imagePullPolicy | string | `"IfNotPresent"` | Image pull policy for extensions |
| server.extensions.containerSecurityContext | object | See [values.yaml] | Server UI extensions container-level security context |
| server.extensions.resources | object | `{}` | Resource limits and requests for the argocd-extensions container |
| repoServer.name | string | `"repo-server"` | Repo server name |
| repoServer.replicas | int | `1` | The number of repo server pods to run |
| repoServer.autoscaling.enabled | bool | `false` | Enable Horizontal Pod Autoscaler ([HPA]) for the repo server |
| repoServer.autoscaling.minReplicas | int | `1` | Minimum number of replicas for the repo server [HPA] |
| repoServer.autoscaling.maxReplicas | int | `5` | Maximum number of replicas for the repo server [HPA] |
| repoServer.autoscaling.targetCPUUtilizationPercentage | int | `50` | Average CPU utilization percentage for the repo server [HPA] |
| repoServer.autoscaling.targetMemoryUtilizationPercentage | int | `50` | Average memory utilization percentage for the repo server [HPA] |
| repoServer.autoscaling.behavior | object | `{}` | Configures the scaling behavior of the target in both Up and Down directions. This is only available on HPA apiVersion `autoscaling/v2beta2` and newer |
| repoServer.pdb.enabled | bool | `false` | Deploy a [PodDisruptionBudget] for the repo server |
| repoServer.pdb.labels | object | `{}` | Labels to be added to repo server pdb |
| repoServer.pdb.annotations | object | `{}` | Annotations to be added to repo server pdb |
| repoServer.pdb.minAvailable | string | `""` (defaults to 0 if not specified) | Number of pods that are available after eviction as number or percentage (eg.: 50%) |
| repoServer.pdb.maxUnavailable | string | `""` | Number of pods that are unavailble after eviction as number or percentage (eg.: 50%). # Has higher precedence over `repoServer.pdb.minAvailable` |
| repoServer.image.repository | string | `""` (defaults to global.image.repository) | Repository to use for the repo server |
| repoServer.image.tag | string | `""` (defaults to global.image.tag) | Tag to use for the repo server |
| repoServer.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Image pull policy for the repo server |
| repoServer.imagePullSecrets | list | `[]` (defaults to global.imagePullSecrets) | Secrets with credentials to pull images from a private registry |
| repoServer.extraArgs | list | `[]` | Additional command line arguments to pass to repo server |
| repoServer.env | list | `[]` | Environment variables to pass to repo server |
| repoServer.envFrom | list | `[]` (See [values.yaml]) | envFrom to pass to repo server |
| repoServer.deploymentAnnotations | object | `{}` | Annotations to be added to repo server Deployment |
| repoServer.podAnnotations | object | `{}` | Annotations to be added to repo server pods |
| repoServer.podLabels | object | `{}` | Labels to be added to repo server pods |
| repoServer.containerPort | int | `8081` | Configures the repo server port |
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
| repoServer.volumeMounts | list | `[]` | Additional volumeMounts to the repo server main container |
| repoServer.volumes | list | `[]` | Additional volumes to the repo server pod |
| repoServer.nodeSelector | object | `{}` | [Node selector] |
| repoServer.tolerations | list | `[]` | [Tolerations] for use with node taints |
| repoServer.affinity | object | `{}` | Assign custom [affinity] rules to the deployment |
| repoServer.topologySpreadConstraints | list | `[]` | Assign custom [TopologySpreadConstraints] rules to the repo server # Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/ # If labelSelector is left out, it will default to the labelSelector configuration of the deployment |
| repoServer.priorityClassName | string | `""` | Priority class for the repo server |
| repoServer.containerSecurityContext | object | See [values.yaml] | Repo server container-level security context |
| repoServer.resources | object | `{"limits":{"cpu":"100m","memory":"1Gi"},"requests":{"cpu":"100m","memory":"1Gi"}}` | Resource limits and requests for the repo server pods |
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
| repoServer.clusterAdminAccess.enabled | bool | `false` | Enable RBAC for local cluster deployments |
| repoServer.clusterRoleRules.enabled | bool | `false` | Enable custom rules for the Repo server's Cluster Role resource |
| repoServer.clusterRoleRules.rules | list | `[]` | List of custom rules for the Repo server's Cluster Role resource |
| repoServer.serviceAccount.create | bool | `true` | Create repo server service account |
| repoServer.serviceAccount.name | string | `""` | Repo server service account name |
| repoServer.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| repoServer.serviceAccount.labels | object | `{}` | Labels applied to created service account |
| repoServer.serviceAccount.automountServiceAccountToken | bool | `true` | Automount API credentials for the Service Account |
| repoServer.extraContainers | list | `[]` | Additional containers to be added to the repo server pod |
| repoServer.rbac | list | `[]` | Repo server rbac rules |
| repoServer.initContainers | list | `[]` | Init containers to add to the repo server pods |
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
| bbtests.cypress.envs.cypress_url | string | `"http://argocd-server:80"` |  |
| bbtests.cypress.envs.cypress_user | string | `"admin"` |  |
| bbtests.cypress.envs.cypress_password | string | `"Password123"` |  |
| applicationSet.enabled | bool | `true` | Enable ApplicationSet controller |
| applicationSet.name | string | `"applicationset-controller"` | Application Set controller name string |
| applicationSet.replicaCount | int | `1` | The number of ApplicationSet controller pods to run |
| applicationSet.pdb.enabled | bool | `false` | Deploy a [PodDisruptionBudget] for the ApplicationSet controller |
| applicationSet.pdb.labels | object | `{}` | Labels to be added to ApplicationSet controller pdb |
| applicationSet.pdb.annotations | object | `{}` | Annotations to be added to ApplicationSet controller pdb |
| applicationSet.pdb.minAvailable | string | `""` (defaults to 0 if not specified) | Number of pods that are available after eviction as number or percentage (eg.: 50%) |
| applicationSet.pdb.maxUnavailable | string | `""` | Number of pods that are unavailble after eviction as number or percentage (eg.: 50%). # Has higher precedence over `applicationSet.pdb.minAvailable` |
| applicationSet.image.repository | string | `""` (defaults to global.image.repository) | Repository to use for the application set controller |
| applicationSet.image.tag | string | `""` (defaults to global.image.tag) | Tag to use for the application set controller |
| applicationSet.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Image pull policy for the application set controller |
| applicationSet.imagePullSecrets | list | `[]` (defaults to global.imagePullSecrets) | If defined, uses a Secret to pull an image from a private Docker registry or repository. |
| applicationSet.args.metricsAddr | string | `":8080"` | The default metric address |
| applicationSet.args.probeBindAddr | string | `":8081"` | The default health check port |
| applicationSet.args.policy | string | `"sync"` | How application is synced between the generator and the cluster |
| applicationSet.args.dryRun | bool | `false` | Enable dry run mode |
| applicationSet.logFormat | string | `""` (defaults to global.logging.format) | ApplicationSet controller log format. Either `text` or `json` |
| applicationSet.logLevel | string | `""` (defaults to global.logging.level) | ApplicationSet controller log level. One of: `debug`, `info`, `warn`, `error` |
| applicationSet.extraContainers | list | `[]` | Additional containers to be added to the applicationset controller pod |
| applicationSet.metrics.enabled | bool | `false` | Deploy metrics service |
| applicationSet.metrics.service.annotations | object | `{}` | Metrics service annotations |
| applicationSet.metrics.service.labels | object | `{}` | Metrics service labels |
| applicationSet.metrics.service.servicePort | int | `8085` | Metrics service port |
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
| applicationSet.service.annotations | object | `{}` | Application set service annotations |
| applicationSet.service.labels | object | `{}` | Application set service labels |
| applicationSet.service.port | int | `7000` | Application set service port |
| applicationSet.service.portName | string | `"webhook"` | Application set service port name |
| applicationSet.serviceAccount.create | bool | `true` | Specifies whether a service account should be created |
| applicationSet.serviceAccount.annotations | object | `{}` | Annotations to add to the service account |
| applicationSet.serviceAccount.labels | object | `{}` | Labels applied to created service account |
| applicationSet.serviceAccount.name | string | `""` | The name of the service account to use. If not set and create is true, a name is generated using the fullname template |
| applicationSet.deploymentAnnotations | object | `{}` | Annotations to be added to ApplicationSet controller Deployment |
| applicationSet.podAnnotations | object | `{}` | Annotations for the controller pods |
| applicationSet.podLabels | object | `{}` | Labels for the controller pods |
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
| applicationSet.resources | object | `{}` | Resource limits and requests for the controller pods. |
| applicationSet.nodeSelector | object | `{}` | [Node selector] |
| applicationSet.tolerations | list | `[]` | [Tolerations] for use with node taints |
| applicationSet.affinity | object | `{}` | Assign custom [affinity] rules |
| applicationSet.priorityClassName | string | `""` | If specified, indicates the pod's priority. If not specified, the pod priority will be default or zero if there is no default. |
| applicationSet.extraVolumeMounts | list | `[]` | List of extra mounts to add (normally used with extraVolumes) |
| applicationSet.extraVolumes | list | `[]` | List of extra volumes to add |
| applicationSet.extraArgs | list | `[]` | List of extra cli args to add |
| applicationSet.extraEnv | list | `[]` | Environment variables to pass to the controller |
| applicationSet.extraEnvFrom | list | `[]` (See [values.yaml]) | envFrom to pass to the controller |
| applicationSet.webhook.ingress.enabled | bool | `false` | Enable an ingress resource for Webhooks |
| applicationSet.webhook.ingress.annotations | object | `{}` | Additional ingress annotations |
| applicationSet.webhook.ingress.labels | object | `{}` | Additional ingress labels |
| applicationSet.webhook.ingress.ingressClassName | string | `""` | Defines which ingress controller will implement the resource |
| applicationSet.webhook.ingress.hosts | list | `[]` | List of ingress hosts # Hostnames must be provided if Ingress is enabled. # Secrets must be manually created in the namespace |
| applicationSet.webhook.ingress.paths | list | `["/api/webhook"]` | List of ingress paths |
| applicationSet.webhook.ingress.pathType | string | `"Prefix"` | Ingress path type. One of `Exact`, `Prefix` or `ImplementationSpecific` |
| applicationSet.webhook.ingress.extraPaths | list | `[]` | Additional ingress paths |
| applicationSet.webhook.ingress.tls | list | `[]` | Ingress TLS configuration |
| notifications.enabled | bool | `true` | Enable notifications controller |
| notifications.name | string | `"notifications-controller"` | Notifications controller name string |
| notifications.affinity | object | `{}` | Assign custom [affinity] rules |
| notifications.argocdUrl | string | `nil` | Argo CD dashboard url; used in place of {{.context.argocdUrl}} in templates |
| notifications.pdb.enabled | bool | `false` | Deploy a [PodDisruptionBudget] for the notifications controller |
| notifications.pdb.labels | object | `{}` | Labels to be added to notifications controller pdb |
| notifications.pdb.annotations | object | `{}` | Annotations to be added to notifications controller pdb |
| notifications.pdb.minAvailable | string | `""` (defaults to 0 if not specified) | Number of pods that are available after eviction as number or percentage (eg.: 50%) |
| notifications.pdb.maxUnavailable | string | `""` | Number of pods that are unavailble after eviction as number or percentage (eg.: 50%). # Has higher precedence over `notifications.pdb.minAvailable` |
| notifications.image.repository | string | `""` (defaults to global.image.repository) | Repository to use for the notifications controller |
| notifications.image.tag | string | `""` (defaults to global.image.tag) | Tag to use for the notifications controller |
| notifications.image.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Image pull policy for the notifications controller |
| notifications.imagePullSecrets | list | `[]` (defaults to global.imagePullSecrets) | Secrets with credentials to pull images from a private registry |
| notifications.nodeSelector | object | `{}` | [Node selector] |
| notifications.context | object | `{}` | Define user-defined context # For more information: https://argocd-notifications.readthedocs.io/en/stable/templates/#defining-user-defined-context |
| notifications.secret.create | bool | `true` | Whether helm chart creates controller secret |
| notifications.secret.annotations | object | `{}` | key:value pairs of annotations to be added to the secret |
| notifications.secret.items | object | `{}` | Generic key:value pairs to be inserted into the secret # Can be used for templates, notification services etc. Some examples given below. # For more information: https://argocd-notifications.readthedocs.io/en/stable/services/overview/ |
| notifications.logFormat | string | `""` (defaults to global.logging.format) | Application controller log format. Either `text` or `json` |
| notifications.logLevel | string | `""` (defaults to global.logging.level) | Application controller log level. One of: `debug`, `info`, `warn`, `error` |
| notifications.extraArgs | list | `[]` | Extra arguments to provide to the controller |
| notifications.extraEnv | list | `[]` | Additional container environment variables |
| notifications.extraEnvFrom | list | `[]` (See [values.yaml]) | envFrom to pass to the controller |
| notifications.extraVolumeMounts | list | `[]` | List of extra mounts to add (normally used with extraVolumes) |
| notifications.extraVolumes | list | `[]` | List of extra volumes to add |
| notifications.metrics.enabled | bool | `false` | Enables prometheus metrics server |
| notifications.metrics.port | int | `9001` | Metrics port |
| notifications.metrics.service.annotations | object | `{}` | Metrics service annotations |
| notifications.metrics.service.labels | object | `{}` | Metrics service labels |
| notifications.metrics.service.portName | string | `"http-metrics"` | Metrics service port name |
| notifications.metrics.serviceMonitor.enabled | bool | `false` | Enable a prometheus ServiceMonitor |
| notifications.metrics.serviceMonitor.selector | object | `{}` | Prometheus ServiceMonitor selector |
| notifications.metrics.serviceMonitor.additionalLabels | object | `{}` | Prometheus ServiceMonitor labels |
| notifications.metrics.serviceMonitor.annotations | object | `{}` | Prometheus ServiceMonitor annotations |
| notifications.metrics.serviceMonitor.scheme | string | `""` | Prometheus ServiceMonitor scheme |
| notifications.metrics.serviceMonitor.tlsConfig | object | `{}` | Prometheus ServiceMonitor tlsConfig |
| notifications.notifiers | object | See [values.yaml] | Configures notification services such as slack, email or custom webhook # For more information: https://argocd-notifications.readthedocs.io/en/stable/services/overview/ |
| notifications.deploymentAnnotations | object | `{}` | Annotations to be applied to the notifications controller Deployment |
| notifications.podAnnotations | object | `{}` | Annotations to be applied to the controller Pods |
| notifications.podLabels | object | `{}` | Labels to be applied to the controller Pods |
| notifications.containerSecurityContext | object | See [values.yaml] | Notification controller container-level security Context |
| notifications.priorityClassName | string | `""` | Priority class for the controller pods |
| notifications.resources | object | `{}` | Resource limits and requests for the controller |
| notifications.serviceAccount.create | bool | `true` | Specifies whether a service account should be created |
| notifications.serviceAccount.name | string | `"argocd-notifications-controller"` | The name of the service account to use. # If not set and create is true, a name is generated using the fullname template |
| notifications.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| notifications.serviceAccount.labels | object | `{}` | Labels applied to created service account |
| notifications.cm.create | bool | `true` | Whether helm chart creates controller config map |
| notifications.subscriptions | object | `{}` | Contains centrally managed global application subscriptions # For more information: https://argocd-notifications.readthedocs.io/en/stable/subscriptions/ |
| notifications.templates | object | `{}` | The notification template is used to generate the notification content # For more information: https://argocd-notifications.readthedocs.io/en/stable/templates/ |
| notifications.tolerations | list | `[]` | [Tolerations] for use with node taints |
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
| notifications.bots.slack.service.annotations | object | `{}` | Service annotations for Slack bot |
| notifications.bots.slack.service.port | int | `80` | Service port for Slack bot |
| notifications.bots.slack.service.type | string | `"LoadBalancer"` | Service type for Slack bot |
| notifications.bots.slack.serviceAccount.create | bool | `true` | Specifies whether a service account should be created |
| notifications.bots.slack.serviceAccount.name | string | `"argocd-notifications-bot"` | The name of the service account to use. # If not set and create is true, a name is generated using the fullname template |
| notifications.bots.slack.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| notifications.bots.slack.containerSecurityContext | object | See [values.yaml] | Slack bot container-level security Context |
| notifications.bots.slack.resources | object | `{}` | Resource limits and requests for the Slack bot |
| notifications.bots.slack.affinity | object | `{}` | Assign custom [affinity] rules |
| notifications.bots.slack.tolerations | list | `[]` | [Tolerations] for use with node taints |
| notifications.bots.slack.nodeSelector | object | `{}` | [Node selector] |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.
