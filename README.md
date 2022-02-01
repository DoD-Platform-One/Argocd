# argo-cd

![Version: 3.27.1-bb.5](https://img.shields.io/badge/Version-3.27.1--bb.5-informational?style=flat-square) ![AppVersion: v2.1.7](https://img.shields.io/badge/AppVersion-v2.1.7-informational?style=flat-square)

A Helm chart for ArgoCD, a declarative, GitOps continuous delivery tool for Kubernetes.

## Upstream References
* <https://github.com/argoproj/argo-helm>

## Learn More
* [Application Overview](docs/overview.md)
* [Other Documentation](docs/)

## Pre-Requisites

* Kubernetes Cluster deployed
* Kubernetes config installed in `~/.kube/config`
* Helm installed

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
| awsCredentials.awsAccessKeyId | string | `""` |  |
| awsCredentials.awsSecretAccessKey | string | `""` |  |
| awsCredentials.awsDefaultRegion | string | `"us-gov-west-1"` |  |
| global.image.repository | string | `"registry1.dso.mil/ironbank/big-bang/argocd"` |  |
| global.image.tag | string | `"v2.1.7"` |  |
| global.image.imagePullPolicy | string | `"IfNotPresent"` |  |
| global.podAnnotations | object | `{}` | Annotations for the all deployed pods |
| global.podLabels | object | `{}` | Labels for the all deployed pods |
| global.securityContext | object | `{}` | Toggle and define securityContext. See [values.yaml] |
| global.imagePullSecrets[0].name | string | `"private-registry"` |  |
| global.hostAliases | list | `[]` |  |
| global.additionalLabels | object | `{}` | Additional labels to add to all resources |
| global.networkPolicy.create | bool | `false` | Create NetworkPolicy objects for all components |
| global.networkPolicy.defaultDenyIngress | bool | `false` | Default deny all ingress traffic |
| apiVersionOverrides.certmanager | string | `""` | String to override apiVersion of certmanager resources rendered by this helm chart |
| apiVersionOverrides.ingress | string | `""` | String to override apiVersion of ingresses rendered by this helm chart |
| createAggregateRoles | bool | `false` | Create clusterroles that extend existing clusterroles to interact with argo-cd crds |
| controller.name | string | `"application-controller"` | Application controller name string |
| controller.imagePullSecrets[0].name | string | `"private-registry"` |  |
| controller.image.repository | string | `"registry1.dso.mil/ironbank/big-bang/argocd"` |  |
| controller.image.tag | string | `"v2.1.7"` |  |
| controller.image.imagePullPolicy | string | `nil` |  |
| controller.replicas | int | `1` |  |
| controller.enableStatefulSet | bool | `false` | Deploy the application controller as a StatefulSet instead of a Deployment, this is required for HA capability. This is a feature flag that will become the default in chart version 3.x |
| controller.args.statusProcessors | string | `"20"` | define the application controller `--status-processors` |
| controller.args.operationProcessors | string | `"10"` | define the application controller `--operation-processors` |
| controller.args.appResyncPeriod | string | `"180"` | define the application controller `--app-resync` |
| controller.args.selfHealTimeout | string | `"5"` | define the application controller `--self-heal-timeout-seconds` |
| controller.args.repoServerTimeoutSeconds | string | `"60"` | define the application controller `--repo-server-timeout-seconds` |
| controller.logFormat | string | `"text"` | Application controller log format. Either `text` or `json` |
| controller.logLevel | string | `"info"` | Application controller log level |
| controller.extraArgs | list | `[]` | Additional command line arguments to pass to application controller |
| controller.env | list | `[]` | Environment variables to pass to application controller |
| controller.envFrom | list | `[]` (See [values.yaml]) | envFrom to pass to application controller |
| controller.podAnnotations | object | `{}` | Annotations to be added to application controller pods |
| controller.podLabels | object | `{}` | Labels to be added to application controller pods |
| controller.containerSecurityContext | object | `{}` | Application controller container-level security context |
| controller.containerPort | int | `8082` | Application controller listening port |
| controller.readinessProbe.failureThreshold | int | `3` | Minimum consecutive failures for the [probe] to be considered failed after having succeeded |
| controller.readinessProbe.initialDelaySeconds | int | `10` | Number of seconds after the container has started before [probe] is initiated |
| controller.readinessProbe.periodSeconds | int | `10` | How often (in seconds) to perform the [probe] |
| controller.readinessProbe.successThreshold | int | `1` | Minimum consecutive successes for the [probe] to be considered successful after having failed |
| controller.readinessProbe.timeoutSeconds | int | `1` | Number of seconds after which the [probe] times out |
| controller.livenessProbe.failureThreshold | int | `3` | Minimum consecutive failures for the [probe] to be considered failed after having succeeded |
| controller.livenessProbe.initialDelaySeconds | int | `10` | Number of seconds after the container has started before [probe] is initiated |
| controller.livenessProbe.periodSeconds | int | `10` | How often (in seconds) to perform the [probe] |
| controller.livenessProbe.successThreshold | int | `1` | Minimum consecutive successes for the [probe] to be considered successful after having failed |
| controller.livenessProbe.timeoutSeconds | int | `1` | Number of seconds after which the [probe] times out |
| controller.volumeMounts | list | `[]` | Additional volumeMounts to the application controller main container |
| controller.volumes | list | `[]` | Additional volumes to the application controller pod |
| controller.service.annotations | object | `{}` | Application controller service annotations |
| controller.service.labels | object | `{}` | Application controller service labels |
| controller.service.port | int | `8082` | Application controller service port |
| controller.service.portName | string | `"tcp-controller"` |  |
| controller.nodeSelector | object | `{}` | [Node selector] |
| controller.tolerations | list | `[]` | [Tolerations] for use with node taints |
| controller.affinity | object | `{}` | Assign custom [affinity] rules to the deployment |
| controller.topologySpreadConstraints | list | `[]` | Assign custom [TopologySpreadConstraints] rules to the application controller |
| controller.priorityClassName | string | `""` | Priority class for the application controller pods |
| controller.resources.limits.cpu | string | `"500m"` |  |
| controller.resources.limits.memory | string | `"3Gi"` |  |
| controller.resources.requests.cpu | string | `"500m"` |  |
| controller.resources.requests.memory | string | `"3Gi"` |  |
| controller.serviceAccount.create | bool | `true` | Create a service account for the application controller |
| controller.serviceAccount.name | string | `"argocd-application-controller"` | Service account name |
| controller.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| controller.serviceAccount.automountServiceAccountToken | bool | `true` | Automount API credentials for the Service Account |
| controller.metrics.enabled | bool | `false` | Deploy metrics service |
| controller.metrics.applicationLabels.enabled | bool | `false` | Enables additional labels in argocd_app_labels metric |
| controller.metrics.applicationLabels.labels | object | `{}` | Additional labels |
| controller.metrics.service.annotations | object | `{}` | Metrics service annotations |
| controller.metrics.service.labels | object | `{}` | Metrics service labels |
| controller.metrics.service.servicePort | int | `8082` | Metrics service port |
| controller.metrics.serviceMonitor.enabled | bool | `false` | Enable a prometheus ServiceMonitor |
| controller.metrics.serviceMonitor.interval | string | `"30s"` | Prometheus ServiceMonitor interval |
| controller.metrics.serviceMonitor.relabelings | list | `[]` | Prometheus [RelabelConfigs] to apply to samples before scraping |
| controller.metrics.serviceMonitor.metricRelabelings | list | `[]` | Prometheus [MetricRelabelConfigs] to apply to samples before ingestion |
| controller.metrics.serviceMonitor.selector | object | `{}` | Prometheus ServiceMonitor selector |
| controller.metrics.serviceMonitor.namespace | string | `""` | Prometheus ServiceMonitor namespace |
| controller.metrics.serviceMonitor.additionalLabels | object | `{}` | Prometheus ServiceMonitor labels |
| controller.metrics.rules.enabled | bool | `false` | Deploy a PrometheusRule for the application controller |
| controller.metrics.rules.spec | list | `[]` | PrometheusRule.Spec for the application controller |
| controller.clusterAdminAccess.enabled | bool | `true` | Enable RBAC for local cluster deployments |
| controller.clusterRoleRules.enabled | bool | `false` | Enable custom rules for the application controller's ClusterRole resource |
| controller.clusterRoleRules.rules | list | `[]` | List of custom rules for the application controller's ClusterRole resource |
| controller.extraContainers | list | `[]` | Additional containers to be added to the application controller pod |
| controller.initContainers | list | `[]` | Init containers to add to the application controller pod |
| dex.enabled | bool | `true` | Enable dex |
| dex.name | string | `"dex-server"` | Dex name |
| dex.imagePullSecrets[0].name | string | `"private-registry"` |  |
| dex.metrics.enabled | bool | `false` | Deploy metrics service |
| dex.metrics.service.annotations | object | `{}` | Metrics service annotations |
| dex.metrics.service.labels | object | `{}` | Metrics service labels |
| dex.metrics.serviceMonitor.enabled | bool | `false` | Enable a prometheus ServiceMonitor |
| dex.metrics.serviceMonitor.interval | string | `"30s"` | Prometheus ServiceMonitor interval |
| dex.metrics.serviceMonitor.relabelings | list | `[]` | Prometheus [RelabelConfigs] to apply to samples before scraping |
| dex.metrics.serviceMonitor.metricRelabelings | list | `[]` | Prometheus [MetricRelabelConfigs] to apply to samples before ingestion |
| dex.metrics.serviceMonitor.selector | object | `{}` | Prometheus ServiceMonitor selector |
| dex.metrics.serviceMonitor.namespace | string | `""` | Prometheus ServiceMonitor namespace |
| dex.metrics.serviceMonitor.additionalLabels | object | `{}` | Prometheus ServiceMonitor labels |
| dex.image.repository | string | `"registry1.dso.mil/ironbank/opensource/dexidp/dex"` |  |
| dex.image.tag | string | `"v2.30.0"` |  |
| dex.image.imagePullPolicy | string | `"IfNotPresent"` |  |
| dex.initImage.repository | string | `""` (defaults to global.image.repository) | Argo CD init image repository |
| dex.initImage.tag | string | `""` (defaults to global.image.tag) | Argo CD init image tag |
| dex.initImage.imagePullPolicy | string | `""` (defaults to global.image.imagePullPolicy) | Argo CD init image imagePullPolicy |
| dex.env | list | `[]` | Environment variables to pass to the Dex server |
| dex.envFrom | list | `[]` (See [values.yaml]) | envFrom to pass to the Dex server |
| dex.podAnnotations | object | `{}` | Annotations to be added to the Dex server pods |
| dex.podLabels | object | `{}` | Labels to be added to the Dex server pods |
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
| dex.volumeMounts | list | `[{"mountPath":"/shared","name":"static-files"}]` | Additional volumeMounts to the dex main container |
| dex.volumes | list | `[{"emptyDir":{},"name":"static-files"}]` | Additional volumes to the dex pod |
| dex.extraVolumes | list | `[]` | Extra volumes to the dex pod |
| dex.extraVolumeMounts | list | `[]` | Extra volumeMounts to the dex pod |
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
| dex.topologySpreadConstraints | list | `[]` | Assign custom [TopologySpreadConstraints] rules to dex |
| dex.priorityClassName | string | `""` | Priority class for dex |
| dex.containerSecurityContext | object | `{}` | Dex container-level security context |
| dex.resources.limits.cpu | string | `"10m"` |  |
| dex.resources.limits.memory | string | `"128Mi"` |  |
| dex.resources.requests.cpu | string | `"10m"` |  |
| dex.resources.requests.memory | string | `"128Mi"` |  |
| dex.extraContainers | list | `[]` | Additional containers to be added to the dex pod |
| dex.initContainers | list | `[]` | Init containers to add to the dex pod |
| redis.enabled | bool | `true` | Enable redis |
| redis.name | string | `"redis"` | Redis name |
| redis.imagePullSecrets[0].name | string | `"private-registry"` |  |
| redis.image.registry | string | `"registry1.dso.mil"` |  |
| redis.image.repository | string | `"ironbank/opensource/redis/redis6"` |  |
| redis.image.tag | string | `"6.2.6"` |  |
| redis.image.imagePullPolicy | string | `"IfNotPresent"` |  |
| redis.extraArgs | list | `[]` | Additional command line arguments to pass to redis-server |
| redis.containerPort | int | `6379` | Redis container port |
| redis.servicePort | int | `6379` | Redis service port |
| redis.env | list | `[]` | Environment variables to pass to the Redis server |
| redis.envFrom | list | `[]` (See [values.yaml]) | envFrom to pass to the Redis server |
| redis.podAnnotations | object | `{}` | Annotations to be added to the Redis server pods |
| redis.podLabels | object | `{}` | Labels to be added to the Redis server pods |
| redis.nodeSelector | object | `{}` | [Node selector] |
| redis.tolerations | list | `[]` | [Tolerations] for use with node taints |
| redis.affinity | object | `{}` | Assign custom [affinity] rules to the deployment |
| redis.topologySpreadConstraints | list | `[]` | Assign custom [TopologySpreadConstraints] rules to redis |
| redis.priorityClassName | string | `""` | Priority class for redis |
| redis.containerSecurityContext | object | `{}` | Redis container-level security context |
| redis.securityContext | object | `{"runAsNonRoot":true,"runAsUser":999}` | Redis pod-level security context |
| redis.serviceAccount.create | bool | `false` | Create a service account for the redis pod |
| redis.serviceAccount.name | string | `""` | Service account name for redis pod |
| redis.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| redis.serviceAccount.automountServiceAccountToken | bool | `false` | Automount API credentials for the Service Account |
| redis.resources.limits.cpu | string | `"50m"` |  |
| redis.resources.limits.memory | string | `"64Mi"` |  |
| redis.resources.requests.cpu | string | `"50m"` |  |
| redis.resources.requests.memory | string | `"64Mi"` |  |
| redis.volumeMounts | list | `[]` | Additional volumeMounts to the redis container |
| redis.volumes | list | `[]` | Additional volumes to the redis pod |
| redis.extraContainers | list | `[]` | Additional containers to be added to the redis pod  |
| redis.initContainers | list | `[]` | Init containers to add to the redis pod |
| redis.service.annotations | object | `{}` | Redis service annotations |
| redis.service.labels | object | `{}` | Additional redis service labels |
| redis.metrics.enabled | bool | `false` | Deploy metrics service and redis-exporter sidecar |
| redis.metrics.image.repository | string | `"quay.io/bitnami/redis-exporter"` | redis-exporter image repository |
| redis.metrics.image.tag | string | `"1.26.0-debian-10-r2"` | redis-exporter image tag |
| redis.metrics.image.imagePullPolicy | string | `"IfNotPresent"` | redis-exporter image PullPolicy |
| redis.metrics.containerPort | int | `9121` | Port to use for redis-exporter sidecar |
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
| redis.metrics.serviceMonitor.namespace | string | `""` | Prometheus ServiceMonitor namespace |
| redis.metrics.serviceMonitor.additionalLabels | object | `{}` | Prometheus ServiceMonitor labels |
| redis-bb.enabled | bool | `false` |  |
| redis-bb.auth.enabled | bool | `false` |  |
| redis-bb.istio.redis.enabled | bool | `false` |  |
| redis-bb.master.resources.requests.memory | string | `"256Mi"` |  |
| redis-bb.master.resources.requests.cpu | string | `"100m"` |  |
| redis-bb.master.resources.limits.memory | string | `"256Mi"` |  |
| redis-bb.master.resources.limits.cpu | string | `"100m"` |  |
| redis-bb.replica.resources.requests.memory | string | `"256Mi"` |  |
| redis-bb.replica.resources.requests.cpu | string | `"100m"` |  |
| redis-bb.replica.resources.limits.memory | string | `"256Mi"` |  |
| redis-bb.replica.resources.limits.cpu | string | `"100m"` |  |
| redis-bb.commonConfiguration | string | `"maxmemory 200mb\nsave \"\""` |  |
| server.name | string | `"server"` | Argo CD server name |
| server.replicas | int | `1` | The number of server pods to run |
| server.autoscaling.enabled | bool | `false` | Enable Horizontal Pod Autoscaler ([HPA]) for the Argo CD server |
| server.autoscaling.minReplicas | int | `1` | Minimum number of replicas for the Argo CD server [HPA] |
| server.autoscaling.maxReplicas | int | `5` | Maximum number of replicas for the Argo CD server [HPA] |
| server.autoscaling.targetCPUUtilizationPercentage | int | `50` | Average CPU utilization percentage for the Argo CD server [HPA] |
| server.autoscaling.targetMemoryUtilizationPercentage | int | `50` | Average memory utilization percentage for the Argo CD server [HPA] |
| server.image.repository | string | `"registry1.dso.mil/ironbank/big-bang/argocd"` |  |
| server.image.tag | string | `"v2.1.7"` |  |
| server.image.imagePullPolicy | string | `"Always"` |  |
| server.extraArgs[0] | string | `"--insecure"` |  |
| server.staticAssets.enabled | bool | `true` | Disable deprecated flag `--staticassets` |
| server.env | list | `[]` | Environment variables to pass to Argo CD server |
| server.envFrom | list | `[]` (See [values.yaml]) | envFrom to pass to Argo CD server |
| server.lifecycle | object | `{}` | Specify postStart and preStop lifecycle hooks for your argo-cd-server container |
| server.logFormat | string | `"text"` | Argo CD server log format: Either `text` or `json` |
| server.logLevel | string | `"info"` | Argo CD server log level |
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
| server.topologySpreadConstraints | list | `[]` | Assign custom [TopologySpreadConstraints] rules to the Argo CD server |
| server.priorityClassName | string | `""` | Priority class for the Argo CD server |
| server.containerSecurityContext | object | `{}` | Servers container-level security context |
| server.resources.limits.cpu | string | `"20m"` |  |
| server.resources.limits.memory | string | `"128Mi"` |  |
| server.resources.requests.cpu | string | `"20m"` |  |
| server.resources.requests.memory | string | `"128Mi"` |  |
| server.certificate.enabled | bool | `false` | Enables a certificate manager certificate |
| server.certificate.domain | string | `"argocd.example.com"` | Certificate manager domain |
| server.certificate.issuer.kind | string | `nil` | Certificate manager issuer |
| server.certificate.issuer.name | string | `nil` | Certificate manager name |
| server.certificate.additionalHosts | list | `[]` | Certificate manager additional hosts |
| server.certificate.secretName | string | `"argocd-server-tls"` | Certificate manager secret name |
| server.service.annotations | object | `{}` | Server service annotations |
| server.service.labels | object | `{}` | Server service labels |
| server.service.type | string | `"ClusterIP"` | Server service type |
| server.service.nodePortHttp | int | `30080` | Server service http port for NodePort service type (only if `server.service.type` is set to "NodePort") |
| server.service.nodePortHttps | int | `30443` | Server service https port for NodePort service type (only if `server.service.type` is set to "NodePort") |
| server.service.servicePortHttp | int | `80` | Server service http port |
| server.service.servicePortHttps | int | `443` | Server service https port |
| server.service.servicePortHttpName | string | `"tcp-server"` |  |
| server.service.servicePortHttpsName | string | `"https"` |  |
| server.service.namedTargetPort | bool | `true` | Use named target port for argocd |
| server.service.loadBalancerIP | string | `""` | LoadBalancer will get created with the IP specified in this field |
| server.service.loadBalancerSourceRanges | list | `[]` | Source IP ranges to allow access to service from |
| server.service.externalIPs | list | `[]` | Server service external IPs |
| server.service.externalTrafficPolicy | string | `""` | Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints |
| server.service.sessionAffinity | string | `""` | Used to maintain session affinity. Supports `ClientIP` and `None` |
| server.metrics.enabled | bool | `false` | Deploy metrics service |
| server.metrics.service.annotations | object | `{}` | Metrics service annotations |
| server.metrics.service.labels | object | `{}` | Metrics service labels |
| server.metrics.service.servicePort | int | `8083` | Metrics service port |
| server.metrics.serviceMonitor.enabled | bool | `false` | Enable a prometheus ServiceMonitor |
| server.metrics.serviceMonitor.interval | string | `"30s"` | Prometheus ServiceMonitor interval |
| server.metrics.serviceMonitor.relabelings | list | `[]` | Prometheus [RelabelConfigs] to apply to samples before scraping |
| server.metrics.serviceMonitor.metricRelabelings | list | `[]` | Prometheus [MetricRelabelConfigs] to apply to samples before ingestion |
| server.metrics.serviceMonitor.selector | object | `{}` | Prometheus ServiceMonitor selector |
| server.metrics.serviceMonitor.namespace | string | `""` | Prometheus ServiceMonitor namespace |
| server.metrics.serviceMonitor.additionalLabels | object | `{}` | Prometheus ServiceMonitor labels |
| server.serviceAccount.create | bool | `true` | Create server service account |
| server.serviceAccount.name | string | `"argocd-server"` | Server service account name |
| server.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| server.serviceAccount.automountServiceAccountToken | bool | `true` | Automount API credentials for the Service Account |
| server.ingress.enabled | bool | `false` | Enable an ingress resource for the Argo CD server |
| server.ingress.annotations | object | `{}` | Additional ingress annotations |
| server.ingress.labels | object | `{}` | Additional ingress labels |
| server.ingress.ingressClassName | string | `""` | Defines which ingress controller will implement the resource |
| server.ingress.hosts | list | `[]` | List of ingress hosts |
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
| server.ingressGrpc.awsALB.serviceType | string | `"NodePort"` | Service type for the AWS ALB gRPC service |
| server.ingressGrpc.awsALB.backendProtocolVersion | string | `"HTTP2"` | Backend protocol version for the AWS ALB gRPC service |
| server.ingressGrpc.hosts | list | `[]` | List of ingress hosts for dedicated [gRPC-ingress] |
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
| server.configEnabled | bool | `true` | Manage ArgoCD configmap (Declarative Setup) |
| server.config | object | See [values.yaml] | [General Argo CD configuration] |
| server.configAnnotations | object | `{}` | Annotations to be added to ArgoCD ConfigMap |
| server.rbacConfig | object | `{}` | ArgoCD rbac config ([ArgoCD RBAC policy]) |
| server.rbacConfigAnnotations | object | `{}` | Annotations to be added to ArgoCD rbac ConfigMap |
| server.rbacConfigCreate | bool | `true` | Whether or not to create the configmap. If false, it is expected the configmap will be created by something else. ArgoCD will not work if there is no configMap created with the name above. |
| server.additionalApplications | list | `[]` (See [values.yaml]) | Deploy ArgoCD Applications within this helm release |
| server.additionalProjects | list | `[]` (See [values.yaml]) | Deploy ArgoCD Projects within this helm release |
| server.clusterAdminAccess.enabled | bool | `true` | Enable RBAC for local cluster deployments |
| server.GKEbackendConfig.enabled | bool | `false` | Enable BackendConfig custom resource for Google Kubernetes Engine |
| server.GKEbackendConfig.spec | object | `{}` | [BackendConfigSpec] |
| server.extraContainers | list | `[]` | Additional containers to be added to the server pod |
| server.initContainers | list | `[]` | Init containers to add to the server pod |
| repoServer.name | string | `"repo-server"` | Repo server name |
| repoServer.replicas | int | `1` | The number of repo server pods to run |
| repoServer.autoscaling.enabled | bool | `false` | Enable Horizontal Pod Autoscaler ([HPA]) for the repo server |
| repoServer.autoscaling.minReplicas | int | `1` | Minimum number of replicas for the repo server [HPA] |
| repoServer.autoscaling.maxReplicas | int | `5` | Maximum number of replicas for the repo server [HPA] |
| repoServer.autoscaling.targetCPUUtilizationPercentage | int | `50` | Average CPU utilization percentage for the repo server [HPA] |
| repoServer.autoscaling.targetMemoryUtilizationPercentage | int | `50` | Average memory utilization percentage for the repo server [HPA] |
| repoServer.image.repository | string | `"registry1.dso.mil/ironbank/big-bang/argocd"` |  |
| repoServer.image.tag | string | `"v2.1.7"` |  |
| repoServer.image.imagePullPolicy | string | `nil` |  |
| repoServer.extraArgs | list | `[]` |  |
| repoServer.env | list | `[]` | Environment variables to pass to repo server |
| repoServer.envFrom | list | `[]` (See [values.yaml]) | envFrom to pass to repo server |
| repoServer.logFormat | string | `"text"` | Repo server log format: Either `text` or `json` |
| repoServer.logLevel | string | `"info"` | Repo server log level |
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
| repoServer.topologySpreadConstraints | list | `[]` | Assign custom [TopologySpreadConstraints] rules to the repo server |
| repoServer.priorityClassName | string | `""` | Priority class for the repo server |
| repoServer.containerSecurityContext | object | `{}` | Repo server container-level security context |
| repoServer.resources.limits.cpu | string | `"100m"` |  |
| repoServer.resources.limits.memory | string | `"1Gi"` |  |
| repoServer.resources.requests.cpu | string | `"100m"` |  |
| repoServer.resources.requests.memory | string | `"1Gi"` |  |
| repoServer.service.annotations | object | `{}` | Repo server service annotations |
| repoServer.service.labels | object | `{}` | Repo server service labels |
| repoServer.service.port | int | `8081` | Repo server service port |
| repoServer.service.portName | string | `"tcp-repo-server"` |  |
| repoServer.metrics.enabled | bool | `false` | Deploy metrics service |
| repoServer.metrics.service.annotations | object | `{}` | Metrics service annotations |
| repoServer.metrics.service.labels | object | `{}` | Metrics service labels |
| repoServer.metrics.service.servicePort | int | `8084` | Metrics service port |
| repoServer.metrics.serviceMonitor.enabled | bool | `false` | Enable a prometheus ServiceMonitor |
| repoServer.metrics.serviceMonitor.interval | string | `"30s"` | Prometheus ServiceMonitor interval |
| repoServer.metrics.serviceMonitor.relabelings | list | `[]` | Prometheus [RelabelConfigs] to apply to samples before scraping |
| repoServer.metrics.serviceMonitor.metricRelabelings | list | `[]` | Prometheus [MetricRelabelConfigs] to apply to samples before ingestion |
| repoServer.metrics.serviceMonitor.selector | object | `{}` | Prometheus ServiceMonitor selector |
| repoServer.metrics.serviceMonitor.namespace | string | `""` | Prometheus ServiceMonitor namespace |
| repoServer.metrics.serviceMonitor.additionalLabels | object | `{}` | Prometheus ServiceMonitor labels |
| repoServer.clusterAdminAccess.enabled | bool | `false` | Enable RBAC for local cluster deployments |
| repoServer.clusterRoleRules.enabled | bool | `false` | Enable custom rules for the Repo server's Cluster Role resource |
| repoServer.clusterRoleRules.rules | list | `[]` | List of custom rules for the Repo server's Cluster Role resource |
| repoServer.serviceAccount.create | bool | `false` | Create repo server service account |
| repoServer.serviceAccount.name | string | `""` | Repo server service account name |
| repoServer.serviceAccount.annotations | object | `{}` | Annotations applied to created service account |
| repoServer.serviceAccount.automountServiceAccountToken | bool | `true` | Automount API credentials for the Service Account |
| repoServer.extraContainers | list | `[]` | Additional containers to be added to the repo server pod |
| repoServer.rbac | list | `[]` | Repo server rbac rules |
| repoServer.initContainers | list | `[]` | Init containers to add to the repo server pods |
| configs.clusterCredentials | list | `[]` (See [values.yaml]) | Provide one or multiple [external cluster credentials] |
| configs.gpgKeysAnnotations | object | `{}` | GnuPG key ring annotations |
| configs.gpgKeys | object | `{}` (See [values.yaml]) | [GnuPG](https://argoproj.github.io/argo-cd/user-guide/gpg-verification/) keys to add to the key ring |
| configs.knownHostsAnnotations | object | `{}` | Known Hosts configmap annotations |
| configs.knownHosts.data.ssh_known_hosts | string | See [values.yaml] | Known Hosts |
| configs.tlsCertsAnnotations | object | `{}` | TLS certificate configmap annotations |
| configs.tlsCerts | object | See [values.yaml] | TLS certificate |
| configs.repositoryCredentials | object | `{}` | *DEPRECATED:* Instead, use `configs.credentialTemplates` and/or `configs.repositories` |
| configs.credentialTemplates | object | `{}` | Repository credentials to be used as Templates for other repos |
| configs.repositories | object | `{}` | Repositories list to be used by applications |
| configs.secret.createSecret | bool | `true` | Create the argocd-secret |
| configs.secret.annotations | object | `{}` | Annotations to be added to argocd-secret |
| configs.secret.githubSecret | string | `""` | Shared secret for authenticating GitHub webhook events |
| configs.secret.gitlabSecret | string | `""` | Shared secret for authenticating GitLab webhook events |
| configs.secret.bitbucketServerSecret | string | `""` | Shared secret for authenticating BitbucketServer webhook events |
| configs.secret.bitbucketUUID | string | `""` | UUID for authenticating Bitbucket webhook events |
| configs.secret.gogsSecret | string | `""` | Shared secret for authenticating Gogs webhook events |
| configs.secret.extra | object | `{}` | add additional secrets to be added to argocd-secret |
| configs.secret.argocdServerTlsConfig | object | `{}` | Argo TLS Data |
| configs.secret.argocdServerAdminPassword | string | `""` | Bcrypt hashed admin password |
| configs.secret.argocdServerAdminPasswordMtime | string | `""` (defaults to current time) | Admin password modification time. Eg. `"2006-01-02T15:04:05Z"` |
| configs.styles | string | `""` (See [values.yaml]) | Define custom [CSS styles] for your argo instance. This setting will automatically mount the provided CSS and reference it in the argo configuration. |
| openshift.enabled | bool | `false` | enables using arbitrary uid for argo repo server |
| sso.enabled | bool | `false` |  |
| sso.rbac."policy.csv" | string | `"g, Impact Level 2 Authorized, role:admin\n"` |  |
| sso.keycloakClientSecret | string | `"this-can-be-anything-for-dev"` |  |
| sso.config."oidc.config" | string | `"name: Keycloak\nissuer: https://login.dso.mil/auth/realms/baby-yoda\nclientID: platform1_a8604cc9-f5e9-4656-802d-d05624370245_bb8-argocd\nclientSecret: $oidc.keycloak.clientSecret\nrequestedScopes: [\"openid\",\"ArgoCD\"]\n"` |  |
| domain | string | `"bigbang.dev"` |  |
| istio.enabled | bool | `false` |  |
| istio.argocd.enabled | bool | `true` |  |
| istio.argocd.annotations | object | `{}` |  |
| istio.argocd.labels | object | `{}` |  |
| istio.argocd.gateways[0] | string | `"istio-system/main"` |  |
| istio.argocd.hosts[0] | string | `"argocd.{{ .Values.domain }}"` |  |
| monitoring.enabled | bool | `false` |  |
| networkPolicies.enabled | bool | `false` |  |
| networkPolicies.ingressLabels.app | string | `"istio-ingressgateway"` |  |
| networkPolicies.ingressLabels.istio | string | `"ingressgateway"` |  |
| networkPolicies.controlPlaneCidr | string | `"0.0.0.0/0"` |  |
| bbtests.enabled | bool | `false` |  |
| bbtests.cypress.artifacts | bool | `true` |  |
| bbtests.cypress.envs.cypress_url | string | `"http://argocd-server:80"` |  |
| bbtests.cypress.envs.cypress_user | string | `"admin"` |  |
| bbtests.cypress.envs.cypress_password | string | `"Password123"` |  |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.
# redis

![Version: 14.1.0-bb.7](https://img.shields.io/badge/Version-14.1.0--bb.7-informational?style=flat-square) ![AppVersion: 6.2.2](https://img.shields.io/badge/AppVersion-6.2.2-informational?style=flat-square)

Open source, advanced key-value store. It is often referred to as a data structure server since keys can contain strings, hashes, lists, sets and sorted sets.

## Upstream References
* <https://github.com/bitnami/charts/tree/master/bitnami/redis>

* <https://github.com/bitnami/bitnami-docker-redis>
* <http://redis.io/>

## Learn More
* [Application Overview](docs/overview.md)
* [Other Documentation](docs/)

## Pre-Requisites

* Kubernetes Cluster deployed
* Kubernetes config installed in `~/.kube/config`
* Helm installed

Install Helm

https://helm.sh/docs/intro/install/

## Deployment

* Clone down the repository
* cd into directory
```bash
helm install redis chart/
```

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| hostname | string | `"bigbang.dev"` |  |
| istio.enabled | bool | `false` |  |
| istio.redis.enabled | bool | `false` |  |
| istio.redis.labels | object | `{}` |  |
| istio.redis.annotations | object | `{}` |  |
| istio.redis.gateway.port | int | `15443` |  |
| istio.redis.hosts[0] | string | `"*"` |  |
| monitoring.enabled | bool | `false` |  |
| cleanUpgrade.enabled | bool | `false` |  |
| cleanUpgrade.image | string | `"registry1.dso.mil/ironbank/big-bang/base:8.4"` |  |
| cleanUpgrade.resources.requests.memory | string | `"256Mi"` |  |
| cleanUpgrade.resources.requests.cpu | string | `"100m"` |  |
| cleanUpgrade.resources.limits.memory | string | `"256Mi"` |  |
| cleanUpgrade.resources.limits.cpu | string | `"100m"` |  |
| networkPolicies.enabled | bool | `true` |  |
| networkPolicies.controlPlaneCidr | string | `"0.0.0.0/0"` |  |
| global.imagePullSecrets[0] | string | `"private-registry"` |  |
| global.redis | object | `{}` |  |
| kubeVersion | string | `nil` |  |
| nameOverride | string | `nil` |  |
| fullnameOverride | string | `nil` |  |
| commonLabels | object | `{}` |  |
| commonAnnotations | object | `{}` |  |
| clusterDomain | string | `"cluster.local"` |  |
| extraDeploy | list | `[]` |  |
| image.registry | string | `"registry1.dso.mil"` |  |
| image.repository | string | `"ironbank/bitnami/redis"` |  |
| image.tag | string | `"6.2.2"` |  |
| image.pullPolicy | string | `"Always"` |  |
| image.debug | bool | `false` |  |
| architecture | string | `"replication"` |  |
| auth.enabled | bool | `true` |  |
| auth.sentinel | bool | `true` |  |
| auth.password | string | `""` |  |
| auth.existingSecret | string | `nil` |  |
| auth.existingSecretPasswordKey | string | `nil` |  |
| auth.usePasswordFiles | bool | `false` |  |
| commonConfiguration | string | `"# Enable AOF https://redis.io/topics/persistence#append-only-file\nappendonly yes\n# Disable RDB persistence, AOF persistence already enabled.\nsave \"\""` |  |
| existingConfigmap | string | `nil` |  |
| master.configuration | string | `nil` |  |
| master.disableCommands[0] | string | `"FLUSHDB"` |  |
| master.disableCommands[1] | string | `"FLUSHALL"` |  |
| master.command | list | `[]` |  |
| master.args | list | `[]` |  |
| master.preExecCmds | list | `[]` |  |
| master.extraFlags | list | `[]` |  |
| master.extraEnvVars | list | `[]` |  |
| master.extraEnvVarsCM | string | `nil` |  |
| master.extraEnvVarsSecret | string | `nil` |  |
| master.containerPort | int | `6379` |  |
| master.livenessProbe.enabled | bool | `true` |  |
| master.livenessProbe.initialDelaySeconds | int | `5` |  |
| master.livenessProbe.periodSeconds | int | `5` |  |
| master.livenessProbe.timeoutSeconds | int | `5` |  |
| master.livenessProbe.successThreshold | int | `1` |  |
| master.livenessProbe.failureThreshold | int | `5` |  |
| master.readinessProbe.enabled | bool | `true` |  |
| master.readinessProbe.initialDelaySeconds | int | `5` |  |
| master.readinessProbe.periodSeconds | int | `5` |  |
| master.readinessProbe.timeoutSeconds | int | `1` |  |
| master.readinessProbe.successThreshold | int | `1` |  |
| master.readinessProbe.failureThreshold | int | `5` |  |
| master.customLivenessProbe | object | `{}` |  |
| master.customReadinessProbe | object | `{}` |  |
| master.resources.requests.memory | string | `"256Mi"` |  |
| master.resources.requests.cpu | string | `"100m"` |  |
| master.resources.limits.memory | string | `"256Mi"` |  |
| master.resources.limits.cpu | string | `"100m"` |  |
| master.podSecurityContext.enabled | bool | `true` |  |
| master.podSecurityContext.fsGroup | int | `1001` |  |
| master.containerSecurityContext.enabled | bool | `true` |  |
| master.containerSecurityContext.runAsUser | int | `1001` |  |
| master.schedulerName | string | `nil` |  |
| master.updateStrategy.type | string | `"RollingUpdate"` |  |
| master.updateStrategy.rollingUpdate | object | `{}` |  |
| master.priorityClassName | string | `""` |  |
| master.hostAliases | list | `[]` |  |
| master.podLabels | object | `{}` |  |
| master.podAnnotations | object | `{}` |  |
| master.shareProcessNamespace | bool | `false` |  |
| master.podAffinityPreset | string | `""` |  |
| master.podAntiAffinityPreset | string | `"soft"` |  |
| master.nodeAffinityPreset.type | string | `""` |  |
| master.nodeAffinityPreset.key | string | `""` |  |
| master.nodeAffinityPreset.values | list | `[]` |  |
| master.affinity | object | `{}` |  |
| master.nodeSelector | object | `{}` |  |
| master.tolerations | list | `[]` |  |
| master.spreadConstraints | object | `{}` |  |
| master.lifecycleHooks | object | `{}` |  |
| master.extraVolumes | list | `[]` |  |
| master.extraVolumeMounts | list | `[]` |  |
| master.sidecars | object | `{}` |  |
| master.initContainers | object | `{}` |  |
| master.persistence.enabled | bool | `true` |  |
| master.persistence.path | string | `"/data"` |  |
| master.persistence.subPath | string | `""` |  |
| master.persistence.storageClass | string | `nil` |  |
| master.persistence.accessModes[0] | string | `"ReadWriteOnce"` |  |
| master.persistence.size | string | `"8Gi"` |  |
| master.persistence.annotations | object | `{}` |  |
| master.persistence.selector | object | `{}` |  |
| master.persistence.existingClaim | string | `nil` |  |
| master.service.type | string | `"ClusterIP"` |  |
| master.service.port | int | `6379` |  |
| master.service.nodePort | string | `nil` |  |
| master.service.externalTrafficPolicy | string | `"Cluster"` |  |
| master.service.clusterIP | string | `nil` |  |
| master.service.loadBalancerIP | string | `nil` |  |
| master.service.loadBalancerSourceRanges | list | `[]` |  |
| master.service.annotations | object | `{}` |  |
| master.terminationGracePeriodSeconds | int | `30` |  |
| replica.replicaCount | int | `2` |  |
| replica.configuration | string | `nil` |  |
| replica.disableCommands[0] | string | `"FLUSHDB"` |  |
| replica.disableCommands[1] | string | `"FLUSHALL"` |  |
| replica.command | list | `[]` |  |
| replica.args | list | `[]` |  |
| replica.preExecCmds | list | `[]` |  |
| replica.extraFlags | list | `[]` |  |
| replica.extraEnvVars | list | `[]` |  |
| replica.extraEnvVarsCM | string | `nil` |  |
| replica.extraEnvVarsSecret | string | `nil` |  |
| replica.containerPort | int | `6379` |  |
| replica.livenessProbe.enabled | bool | `true` |  |
| replica.livenessProbe.initialDelaySeconds | int | `5` |  |
| replica.livenessProbe.periodSeconds | int | `5` |  |
| replica.livenessProbe.timeoutSeconds | int | `5` |  |
| replica.livenessProbe.successThreshold | int | `1` |  |
| replica.livenessProbe.failureThreshold | int | `5` |  |
| replica.readinessProbe.enabled | bool | `true` |  |
| replica.readinessProbe.initialDelaySeconds | int | `5` |  |
| replica.readinessProbe.periodSeconds | int | `5` |  |
| replica.readinessProbe.timeoutSeconds | int | `1` |  |
| replica.readinessProbe.successThreshold | int | `1` |  |
| replica.readinessProbe.failureThreshold | int | `5` |  |
| replica.customLivenessProbe | object | `{}` |  |
| replica.customReadinessProbe | object | `{}` |  |
| replica.resources.requests.memory | string | `"256Mi"` |  |
| replica.resources.requests.cpu | string | `"100m"` |  |
| replica.resources.limits.memory | string | `"256Mi"` |  |
| replica.resources.limits.cpu | string | `"100m"` |  |
| replica.podSecurityContext.enabled | bool | `true` |  |
| replica.podSecurityContext.fsGroup | int | `1001` |  |
| replica.containerSecurityContext.enabled | bool | `true` |  |
| replica.containerSecurityContext.runAsUser | int | `1001` |  |
| replica.schedulerName | string | `nil` |  |
| replica.updateStrategy.type | string | `"RollingUpdate"` |  |
| replica.updateStrategy.rollingUpdate | object | `{}` |  |
| replica.priorityClassName | string | `""` |  |
| replica.hostAliases | list | `[]` |  |
| replica.podLabels | object | `{}` |  |
| replica.podAnnotations | object | `{}` |  |
| replica.shareProcessNamespace | bool | `false` |  |
| replica.podAffinityPreset | string | `""` |  |
| replica.podAntiAffinityPreset | string | `"soft"` |  |
| replica.nodeAffinityPreset.type | string | `""` |  |
| replica.nodeAffinityPreset.key | string | `""` |  |
| replica.nodeAffinityPreset.values | list | `[]` |  |
| replica.affinity | object | `{}` |  |
| replica.nodeSelector | object | `{}` |  |
| replica.tolerations | list | `[]` |  |
| replica.spreadConstraints | object | `{}` |  |
| replica.lifecycleHooks | object | `{}` |  |
| replica.extraVolumes | list | `[]` |  |
| replica.extraVolumeMounts | list | `[]` |  |
| replica.sidecars | object | `{}` |  |
| replica.initContainers | object | `{}` |  |
| replica.persistence.enabled | bool | `true` |  |
| replica.persistence.path | string | `"/data"` |  |
| replica.persistence.subPath | string | `""` |  |
| replica.persistence.storageClass | string | `nil` |  |
| replica.persistence.accessModes[0] | string | `"ReadWriteOnce"` |  |
| replica.persistence.size | string | `"8Gi"` |  |
| replica.persistence.annotations | object | `{}` |  |
| replica.persistence.selector | object | `{}` |  |
| replica.service.type | string | `"ClusterIP"` |  |
| replica.service.port | int | `6379` |  |
| replica.service.nodePort | string | `nil` |  |
| replica.service.externalTrafficPolicy | string | `"Cluster"` |  |
| replica.service.clusterIP | string | `nil` |  |
| replica.service.loadBalancerIP | string | `nil` |  |
| replica.service.loadBalancerSourceRanges | list | `[]` |  |
| replica.service.annotations | object | `{}` |  |
| replica.terminationGracePeriodSeconds | int | `30` |  |
| replica.resources.requests.memory | string | `"256Mi"` |  |
| replica.resources.requests.cpu | string | `"100m"` |  |
| replica.resources.limits.memory | string | `"256Mi"` |  |
| replica.resources.limits.cpu | string | `"100m"` |  |
| sentinel.enabled | bool | `false` |  |
| sentinel.image.registry | string | `"docker.io"` |  |
| sentinel.image.repository | string | `"bitnami/redis-sentinel"` |  |
| sentinel.image.tag | string | `"6.2.2-debian-10-r2"` |  |
| sentinel.image.pullPolicy | string | `"IfNotPresent"` |  |
| sentinel.image.pullSecrets | list | `[]` |  |
| sentinel.image.debug | bool | `false` |  |
| sentinel.masterSet | string | `"mymaster"` |  |
| sentinel.quorum | int | `2` |  |
| sentinel.downAfterMilliseconds | int | `60000` |  |
| sentinel.failoverTimeout | int | `18000` |  |
| sentinel.cleanDelaySeconds | int | `5` |  |
| sentinel.parallelSyncs | int | `1` |  |
| sentinel.staticID | bool | `false` |  |
| sentinel.configuration | string | `nil` |  |
| sentinel.command | list | `[]` |  |
| sentinel.args | list | `[]` |  |
| sentinel.preExecCmds | list | `[]` |  |
| sentinel.containerPort | int | `26379` |  |
| sentinel.livenessProbe.enabled | bool | `true` |  |
| sentinel.livenessProbe.initialDelaySeconds | int | `5` |  |
| sentinel.livenessProbe.periodSeconds | int | `5` |  |
| sentinel.livenessProbe.timeoutSeconds | int | `5` |  |
| sentinel.livenessProbe.successThreshold | int | `1` |  |
| sentinel.livenessProbe.failureThreshold | int | `5` |  |
| sentinel.readinessProbe.enabled | bool | `true` |  |
| sentinel.readinessProbe.initialDelaySeconds | int | `5` |  |
| sentinel.readinessProbe.periodSeconds | int | `5` |  |
| sentinel.readinessProbe.timeoutSeconds | int | `1` |  |
| sentinel.readinessProbe.successThreshold | int | `1` |  |
| sentinel.readinessProbe.failureThreshold | int | `5` |  |
| sentinel.customLivenessProbe | object | `{}` |  |
| sentinel.customReadinessProbe | object | `{}` |  |
| sentinel.resources.requests.memory | string | `"256Mi"` |  |
| sentinel.resources.requests.cpu | string | `"100m"` |  |
| sentinel.resources.limits.memory | string | `"256Mi"` |  |
| sentinel.resources.limits.cpu | string | `"100m"` |  |
| sentinel.containerSecurityContext.enabled | bool | `true` |  |
| sentinel.containerSecurityContext.runAsUser | int | `1001` |  |
| sentinel.lifecycleHooks | object | `{}` |  |
| sentinel.extraVolumes | list | `[]` |  |
| sentinel.extraVolumeMounts | list | `[]` |  |
| sentinel.service.type | string | `"ClusterIP"` |  |
| sentinel.service.port | int | `6379` |  |
| sentinel.service.sentinelPort | int | `26379` |  |
| sentinel.service.nodePorts.redis | string | `nil` |  |
| sentinel.service.nodePorts.sentinel | string | `nil` |  |
| sentinel.service.externalTrafficPolicy | string | `"Cluster"` |  |
| sentinel.service.clusterIP | string | `nil` |  |
| sentinel.service.loadBalancerIP | string | `nil` |  |
| sentinel.service.loadBalancerSourceRanges | list | `[]` |  |
| sentinel.service.annotations | object | `{}` |  |
| sentinel.terminationGracePeriodSeconds | int | `30` |  |
| networkPolicy.enabled | bool | `false` |  |
| networkPolicy.allowExternal | bool | `true` |  |
| networkPolicy.extraIngress | list | `[]` |  |
| networkPolicy.extraEgress | list | `[]` |  |
| networkPolicy.ingressNSMatchLabels | object | `{}` |  |
| networkPolicy.ingressNSPodMatchLabels | object | `{}` |  |
| podSecurityPolicy.create | bool | `false` |  |
| rbac.create | bool | `false` |  |
| rbac.rules | list | `[]` |  |
| serviceAccount.create | bool | `true` |  |
| serviceAccount.name | string | `""` |  |
| serviceAccount.annotations | object | `{}` |  |
| pdb.create | bool | `false` |  |
| pdb.minAvailable | int | `1` |  |
| pdb.maxUnavailable | string | `nil` |  |
| tls.enabled | bool | `false` |  |
| tls.authClients | bool | `true` |  |
| tls.certificatesSecret | string | `nil` |  |
| tls.certFilename | string | `nil` |  |
| tls.certKeyFilename | string | `nil` |  |
| tls.certCAFilename | string | `nil` |  |
| tls.dhParamsFilename | string | `nil` |  |
| metrics.enabled | bool | `false` |  |
| metrics.image.registry | string | `"registry1.dso.mil"` |  |
| metrics.image.repository | string | `"ironbank/bitnami/analytics/redis-exporter"` |  |
| metrics.image.tag | string | `"1.18.0"` |  |
| metrics.image.pullPolicy | string | `"Always"` |  |
| metrics.redisTargetHost | string | `"localhost"` |  |
| metrics.extraArgs | object | `{}` |  |
| metrics.containerSecurityContext.enabled | bool | `true` |  |
| metrics.containerSecurityContext.runAsUser | int | `1001` |  |
| metrics.resources.requests.memory | string | `"256Mi"` |  |
| metrics.resources.requests.cpu | string | `"100m"` |  |
| metrics.resources.limits.memory | string | `"256Mi"` |  |
| metrics.resources.limits.cpu | string | `"100m"` |  |
| metrics.podLabels | object | `{}` |  |
| metrics.podAnnotations."prometheus.io/scrape" | string | `"true"` |  |
| metrics.podAnnotations."prometheus.io/port" | string | `"9121"` |  |
| metrics.service.type | string | `"ClusterIP"` |  |
| metrics.service.port | int | `9121` |  |
| metrics.service.externalTrafficPolicy | string | `"Cluster"` |  |
| metrics.service.loadBalancerIP | string | `""` |  |
| metrics.service.loadBalancerSourceRanges | list | `[]` |  |
| metrics.service.annotations | object | `{}` |  |
| metrics.sentinel.enabled | bool | `false` |  |
| metrics.sentinel.image.registry | string | `"docker.io"` |  |
| metrics.sentinel.image.repository | string | `"bitnami/redis-sentinel-exporter"` |  |
| metrics.sentinel.image.tag | string | `"1.7.1-debian-10-r122"` |  |
| metrics.sentinel.image.pullPolicy | string | `"IfNotPresent"` |  |
| metrics.sentinel.image.pullSecrets | list | `[]` |  |
| metrics.sentinel.extraArgs | object | `{}` |  |
| metrics.sentinel.containerSecurityContext.enabled | bool | `true` |  |
| metrics.sentinel.containerSecurityContext.runAsUser | int | `1001` |  |
| metrics.sentinel.resources.requests.memory | string | `"256Mi"` |  |
| metrics.sentinel.resources.requests.cpu | string | `"100m"` |  |
| metrics.sentinel.resources.limits.memory | string | `"256Mi"` |  |
| metrics.sentinel.resources.limits.cpu | string | `"100m"` |  |
| metrics.sentinel.service.type | string | `"ClusterIP"` |  |
| metrics.sentinel.service.port | int | `9355` |  |
| metrics.sentinel.service.externalTrafficPolicy | string | `"Cluster"` |  |
| metrics.sentinel.service.loadBalancerIP | string | `""` |  |
| metrics.sentinel.service.loadBalancerSourceRanges | list | `[]` |  |
| metrics.sentinel.service.annotations | object | `{}` |  |
| metrics.serviceMonitor.enabled | bool | `false` |  |
| metrics.serviceMonitor.namespace | string | `"monitoring"` |  |
| metrics.serviceMonitor.selector.prometheus | string | `"kube-prometheus"` |  |
| metrics.serviceMonitor.namespace | string | `nil` |  |
| metrics.serviceMonitor.interval | string | `"30s"` |  |
| metrics.serviceMonitor.scrapeTimeout | string | `nil` |  |
| metrics.serviceMonitor.relabellings | list | `[]` |  |
| metrics.serviceMonitor.honorLabels | bool | `false` |  |
| metrics.serviceMonitor.additionalLabels | object | `{}` |  |
| metrics.prometheusRule.enabled | bool | `false` |  |
| metrics.prometheusRule.namespace | string | `nil` |  |
| metrics.prometheusRule.additionalLabels | object | `{}` |  |
| metrics.prometheusRule.rules[0].alert | string | `"RedisDown"` |  |
| metrics.prometheusRule.rules[0].expr | string | `"redis_up{service=\"{{ template \"common.names.fullname\" . }}-metrics\"} == 0"` |  |
| metrics.prometheusRule.rules[0].for | string | `"2m"` |  |
| metrics.prometheusRule.rules[0].labels.severity | string | `"error"` |  |
| metrics.prometheusRule.rules[0].annotations.summary | string | `"Redis(TM) instance {{ \"{{ $labels.instance }}\" }} down"` |  |
| metrics.prometheusRule.rules[0].annotations.description | string | `"Redis(TM) instance {{ \"{{ $labels.instance }}\" }} is down"` |  |
| metrics.prometheusRule.rules[1].alert | string | `"RedisMemoryHigh"` |  |
| metrics.prometheusRule.rules[1].expr | string | `"redis_memory_used_bytes{service=\"{{ template \"common.names.fullname\" . }}-metrics\"} * 100 / redis_memory_max_bytes{service=\"{{ template \"common.names.fullname\" . }}-metrics\"} > 90\n"` |  |
| metrics.prometheusRule.rules[1].for | string | `"2m"` |  |
| metrics.prometheusRule.rules[1].labels.severity | string | `"error"` |  |
| metrics.prometheusRule.rules[1].annotations.summary | string | `"Redis(TM) instance {{ \"{{ $labels.instance }}\" }} is using too much memory"` |  |
| metrics.prometheusRule.rules[1].annotations.description | string | `"Redis(TM) instance {{ \"{{ $labels.instance }}\" }} is using {{ \"{{ $value }}\" }}% of its available memory.\n"` |  |
| metrics.prometheusRule.rules[2].alert | string | `"RedisKeyEviction"` |  |
| metrics.prometheusRule.rules[2].expr | string | `"increase(redis_evicted_keys_total{service=\"{{ template \"common.names.fullname\" . }}-metrics\"}[5m]) > 0\n"` |  |
| metrics.prometheusRule.rules[2].for | string | `"1s"` |  |
| metrics.prometheusRule.rules[2].labels.severity | string | `"error"` |  |
| metrics.prometheusRule.rules[2].annotations.summary | string | `"Redis(TM) instance {{ \"{{ $labels.instance }}\" }} has evicted keys"` |  |
| metrics.prometheusRule.rules[2].annotations.description | string | `"Redis(TM) instance {{ \"{{ $labels.instance }}\" }} has evicted {{ \"{{ $value }}\" }} keys in the last 5 minutes.\n"` |  |
| volumePermissions.enabled | bool | `false` |  |
| volumePermissions.image.registry | string | `"docker.io"` |  |
| volumePermissions.image.repository | string | `"bitnami/bitnami-shell"` |  |
| volumePermissions.image.tag | string | `"10"` |  |
| volumePermissions.image.pullPolicy | string | `"Always"` |  |
| volumePermissions.image.pullSecrets | list | `[]` |  |
| volumePermissions.resources.requests.memory | string | `"256Mi"` |  |
| volumePermissions.resources.requests.cpu | string | `"100m"` |  |
| volumePermissions.resources.limits.memory | string | `"256Mi"` |  |
| volumePermissions.resources.limits.cpu | string | `"100m"` |  |
| volumePermissions.containerSecurityContext.runAsUser | int | `0` |  |
| sysctl.enabled | bool | `false` |  |
| sysctl.image.registry | string | `"docker.io"` |  |
| sysctl.image.repository | string | `"bitnami/bitnami-shell"` |  |
| sysctl.image.tag | string | `"10"` |  |
| sysctl.image.pullPolicy | string | `"Always"` |  |
| sysctl.image.pullSecrets | list | `[]` |  |
| sysctl.command | list | `[]` |  |
| sysctl.mountHostSys | bool | `false` |  |
| sysctl.resources.requests.memory | string | `"256Mi"` |  |
| sysctl.resources.requests.cpu | string | `"100m"` |  |
| sysctl.resources.limits.memory | string | `"256Mi"` |  |
| sysctl.resources.limits.cpu | string | `"100m"` |  |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.
