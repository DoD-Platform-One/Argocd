<!-- Warning: Do not manually edit this file. See notes on gluon + helm-docs at the end of this file for more information. -->
# argocd

![Version: 8.3.5-bb.0](https://img.shields.io/badge/Version-8.3.5--bb.0-informational?style=flat-square) ![AppVersion: v3.1.4](https://img.shields.io/badge/AppVersion-v3.1.4-informational?style=flat-square) ![Maintenance Track: bb_integrated](https://img.shields.io/badge/Maintenance_Track-bb_integrated-green?style=flat-square)

A Helm chart for Argo CD, a declarative, GitOps continuous delivery tool for Kubernetes.

## Upstream References

- <https://github.com/argoproj/argo-helm>
- <https://github.com/argoproj/argo-helm/tree/main/charts/argo-cd>
- <https://github.com/argoproj/argo-cd>

## Upstream Release Notes

The [upstream chart's release notes](https://github.com/argoproj/argo-helm/tree/main/charts/argo-cd#changelog) may help when reviewing this package.

## Learn More

- [Application Overview](docs/overview.md)
- [Other Documentation](docs/)

## Pre-Requisites

- Kubernetes Cluster deployed
- Kubernetes config installed in `~/.kube/config`
- Helm installed

Kubernetes: `>=1.25.0-0`

Install Helm

https://helm.sh/docs/intro/install/

## Deployment

- Clone down the repository
- cd into directory

```bash
helm install argocd chart/
```

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| awsCredentials.awsAccessKeyId | string | `""` |  |
| awsCredentials.awsSecretAccessKey | string | `""` |  |
| awsCredentials.awsDefaultRegion | string | `"us-gov-west-1"` |  |
| domain | string | `"dev.bigbang.mil"` |  |
| istio.enabled | bool | `false` | Toggle BigBang istio integration |
| istio.hardened.enabled | bool | `false` |  |
| istio.hardened.outboundTrafficPolicyMode | string | `"REGISTRY_ONLY"` |  |
| istio.hardened.customServiceEntries | list | `[]` |  |
| istio.hardened.customAuthorizationPolicies | list | `[]` |  |
| istio.hardened.monitoring.enabled | bool | `true` |  |
| istio.hardened.monitoring.namespaces[0] | string | `"monitoring"` |  |
| istio.hardened.monitoring.principals[0] | string | `"cluster.local/ns/monitoring/sa/monitoring-grafana"` |  |
| istio.hardened.monitoring.principals[1] | string | `"cluster.local/ns/monitoring/sa/monitoring-monitoring-kube-alertmanager"` |  |
| istio.hardened.monitoring.principals[2] | string | `"cluster.local/ns/monitoring/sa/monitoring-monitoring-kube-operator"` |  |
| istio.hardened.monitoring.principals[3] | string | `"cluster.local/ns/monitoring/sa/monitoring-monitoring-kube-prometheus"` |  |
| istio.hardened.monitoring.principals[4] | string | `"cluster.local/ns/monitoring/sa/monitoring-monitoring-kube-state-metrics"` |  |
| istio.hardened.monitoring.principals[5] | string | `"cluster.local/ns/monitoring/sa/monitoring-monitoring-prometheus-node-exporter"` |  |
| istio.hardened.argocd.enabled | bool | `true` |  |
| istio.hardened.argocd.namespaces[0] | string | `"argocd"` |  |
| istio.hardened.argocd.principals[0] | string | `"cluster.local/ns/argocd/sa/argocd-application-controller"` |  |
| istio.hardened.argocd.principals[1] | string | `"cluster.local/ns/argocd/sa/argocd-applicationset-controller"` |  |
| istio.hardened.argocd.principals[2] | string | `"cluster.local/ns/argocd/sa/argocd-argocd-redis-bb"` |  |
| istio.hardened.argocd.principals[3] | string | `"cluster.local/ns/argocd/sa/argocd-argocd-repo-server"` |  |
| istio.hardened.argocd.principals[4] | string | `"cluster.local/ns/argocd/sa/argocd-dex-server"` |  |
| istio.hardened.argocd.principals[5] | string | `"cluster.local/ns/argocd/sa/argocd-notifications-controller"` |  |
| istio.hardened.argocd.principals[6] | string | `"cluster.local/ns/argocd/sa/argocd-server"` |  |
| istio.hardened.argocd.principals[7] | string | `"cluster.local/ns/argocd/sa/upgrade-job-svc-account"` |  |
| istio.hardened.argocd.principals[8] | string | `"cluster.local/ns/argocd/sa/argocd-argocd-redis-bb-metrics"` |  |
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
| networkPolicies.additionalPolicies | list | `[]` |  |
| upgradeJob.enabled | bool | `true` |  |
| upgradeJob.image.repository | string | `"registry1.dso.mil/ironbank/big-bang/base"` |  |
| upgradeJob.image.tag | string | `"2.1.0"` |  |
| upgradeJob.image.imagePullPolicy | string | `"IfNotPresent"` |  |
| bbtests.enabled | bool | `false` |  |
| bbtests.cypress.artifacts | bool | `true` |  |
| bbtests.cypress.envs.cypress_url | string | `"http://argocd-server"` |  |
| bbtests.cypress.envs.cypress_user | string | `"admin"` |  |
| bbtests.cypress.envs.cypress_password | string | `"Password123"` |  |
| bbtests.cypress.envs.cypress_timeout | string | `"120000"` |  |
| bbtests.cypress.resources.requests.cpu | int | `4` |  |
| bbtests.cypress.resources.requests.memory | string | `"4Gi"` |  |
| bbtests.cypress.resources.limits.cpu | int | `4` |  |
| bbtests.cypress.resources.limits.memory | string | `"8Gi"` |  |
| bbtests.scripts.image | string | `"registry1.dso.mil/bigbang-ci/devops-tester:1.1.2"` |  |
| bbtests.scripts.envs.ARGOCD_SERVER | string | `"http://argocd-server"` |  |
| bbtests.scripts.envs.ARGOCD_USER | string | `"admin"` |  |
| bbtests.scripts.envs.ARGOCD_PASSWORD | string | `"Password123"` |  |
| redis-bb | object | `{"cleanUpgrade":{"enabled":true},"enabled":true,"networkPolicies":{"enabled":true},"upstream":{"auth":{"enabled":false},"commonConfiguration":"maxmemory 200mb\nsave \"\"","image":{"pullSecrets":["private-registry"]},"istio":{"redis":{"enabled":false}},"master":{"containerSecurityContext":{"capabilities":{"drop":["ALL"]},"enabled":true,"runAsGroup":1001,"runAsNonRoot":true,"runAsUser":1001},"resources":{"limits":{"cpu":"100m","memory":"256Mi"},"requests":{"cpu":"100m","memory":"256Mi"}}},"metrics":{"containerSecurityContext":{"enabled":true,"runAsGroup":1001,"runAsUser":1001},"enabled":true,"labels":{"app.kubernetes.io/name":"argocd-redis-ha-haproxy"},"metrics":null},"replica":{"containerSecurityContext":{"capabilities":{"drop":["ALL"]},"enabled":true,"runAsGroup":1001,"runAsNonRoot":true,"runAsUser":1001},"readinessProbe":{"failureThreshold":3,"initialDelaySeconds":5,"periodSeconds":10,"successThreshold":1,"tcpSocket":{"port":6379},"timeoutSeconds":30},"resources":{"limits":{"cpu":"100m","memory":"256Mi"},"requests":{"cpu":"100m","memory":"256Mi"}}}}}` | BigBang HA Redis Passthrough |
| redis-bb.upstream.metrics.labels | object | `{"app.kubernetes.io/name":"argocd-redis-ha-haproxy"}` | Custom labels for the haproxy pod. This is relevant for Argo CD CLI. |
| redis-bb.upstream.metrics.containerSecurityContext | object | `{"enabled":true,"runAsGroup":1001,"runAsUser":1001}` | HAProxy enable prometheus metric scraping |
| global.image.repository | string | `"registry1.dso.mil/ironbank/big-bang/argocd"` |  |
| global.image.tag | string | `"v3.1.4"` |  |
| global.image.imagePullPolicy | string | `"IfNotPresent"` |  |
| global.imagePullSecrets[0].name | string | `"private-registry"` |  |
| argocd-apps.applications | object | `{}` |  |
| argocd-apps.projects | object | `{}` |  |
| argocd-apps.applicationsets | object | `{}` |  |
| argocd-apps.itemTemplates | list | `[]` |  |
| argocd-apps.exports | object | `{}` |  |
| upstream | object | `{"applicationSet":{"containerSecurityContext":{"runAsGroup":1000,"runAsUser":1000},"enabled":true,"livenessProbe":{"failureThreshold":5,"timeoutSeconds":30},"readinessProbe":{"failureThreshold":5,"timeoutSeconds":30}},"configs":{"params":{"server.insecure":true}},"controller":{"containerSecurityContext":{"runAsGroup":1000,"runAsUser":1000},"readinessProbe":{"timeoutSeconds":30},"resources":{"limits":{"cpu":"500m","memory":"3Gi"},"requests":{"cpu":"500m","memory":"3Gi"}}},"dex":{"containerSecurityContext":{"runAsGroup":1000,"runAsUser":1000},"image":{"repository":"registry1.dso.mil/ironbank/opensource/dexidp/dex","tag":"v2.44.0"},"livenessProbe":{"timeoutSeconds":30},"readinessProbe":{"timeoutSeconds":30},"resources":{"limits":{"cpu":"20m","memory":"256Mi"},"requests":{"cpu":"10m","memory":"128Mi"}}},"externalRedis":{"host":"redis-bb-headless.argocd.svc.cluster.local"},"notifications":{"containerSecurityContext":{"runAsGroup":1000,"runAsUser":1000}},"redis":{"enabled":false},"redisSecretInit":{"enabled":false},"repoServer":{"containerSecurityContext":{"runAsGroup":1000,"runAsUser":1000},"livenessProbe":{"failureThreshold":5,"timeoutSeconds":30},"readinessProbe":{"failureThreshold":5,"timeoutSeconds":30},"resources":{"limits":{"cpu":"100m","memory":"1Gi"},"requests":{"cpu":"100m","memory":"1Gi"}}},"server":{"containerSecurityContext":{"runAsGroup":1000,"runAsUser":1000},"livenessProbe":{"failureThreshold":5,"timeoutSeconds":30},"readinessProbe":{"failureThreshold":5,"timeoutSeconds":30},"resources":{"limits":{"cpu":"20m","memory":"128Mi"},"requests":{"cpu":"20m","memory":"128Mi"}}}}` | We are exposing only the keys that BigBang overrides from the upstream chart. Please refer to the [upstream chart](https://github.com/argoproj/argo-helm/blob/main/charts/argo-cd/values.yaml) for other value configs. |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.

---

_This file is programatically generated using `helm-docs` and some BigBang-specific templates. The `gluon` repository has [instructions for regenerating package READMEs](https://repo1.dso.mil/big-bang/product/packages/gluon/-/blob/master/docs/bb-package-readme.md)._

