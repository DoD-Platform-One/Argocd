<!-- Warning: Do not manually edit this file. See notes on gluon + helm-docs at the end of this file for more information. -->
# argocd

![Version: 9.4.2-bb.0](https://img.shields.io/badge/Version-9.4.2--bb.0-informational?style=flat-square) ![AppVersion: v3.3.0](https://img.shields.io/badge/AppVersion-v3.3.0-informational?style=flat-square) ![Maintenance Track: bb_integrated](https://img.shields.io/badge/Maintenance_Track-bb_integrated-green?style=flat-square)

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
| istio.injection | string | `"disabled"` | Toggle BigBang istio injection |
| istio.mtls | object | `{"mode":"STRICT"}` | Default argocd peer authentication |
| istio.mtls.mode | string | `"STRICT"` | STRICT = Allow only mutual TLS traffic, PERMISSIVE = Allow both plain text and mutual TLS traffic |
| istio.sidecar | object | `{"enabled":false,"outboundTrafficPolicyMode":"REGISTRY_ONLY"}` | Sidecar configuration for hardened mode |
| istio.serviceEntries | object | `{"custom":[]}` | Custom ServiceEntries for hardened mode |
| istio.authorizationPolicies | object | `{"custom":[],"enabled":false,"generateFromNetpol":false}` | Authorization policies for hardened mode |
| istio.authorizationPolicies.generateFromNetpol | bool | `false` | Generate AuthorizationPolicies from NetworkPolicy rules |
| routes | object | `{"inbound":{"argocd":{"annotations":{},"containerPort":8080,"enabled":true,"gateways":["istio-gateway/public-ingressgateway"],"hosts":["argocd.{{ .Values.domain }}"],"labels":{},"port":80,"selector":{"app.kubernetes.io/name":"argocd-server"},"service":"argocd-argocd-server"}}}` | Inbound routes for VirtualService generation |
| monitoring.enabled | bool | `false` | Toggle BigBang monitoring integration |
| networkPolicies.enabled | bool | `true` | Toggle BigBang networkPolicies integration |
| networkPolicies.ingress.to.argocd-server:8083 | object | `{"from":{"k8s":{"monitoring-monitoring-kube-prometheus@monitoring/prometheus":true}}}` | Ingress to argocd-server for metrics from prometheus |
| networkPolicies.ingress.to.argocd-repo-server:8084 | object | `{"from":{"k8s":{"monitoring-monitoring-kube-prometheus@monitoring/prometheus":true}}}` | Ingress to argocd-repo-server for metrics from prometheus |
| networkPolicies.ingress.to.argocd-application-controller:8082 | object | `{"from":{"k8s":{"monitoring-monitoring-kube-prometheus@monitoring/prometheus":true}}}` | Ingress to argocd-application-controller for metrics from prometheus |
| networkPolicies.ingress.to.redis-bb:6379 | object | `{"from":{"k8s":{"monitoring/grafana":true}}}` | Ingress to redis from grafana for dashboards |
| networkPolicies.ingress.to.redis-bb:9121 | object | `{"from":{"k8s":{"monitoring-monitoring-kube-prometheus@monitoring/prometheus":true}}}` | Ingress to redis-exporter for metrics from prometheus |
| networkPolicies.egress.from.* | object | `{"to":{"k8s":{"tempo/tempo:9411":false}}}` | Egress to tempo for tracing from all pods |
| networkPolicies.egress.from.argocd-application-controller | object | `{"to":{"definition":{"kubeAPI":true}}}` | Egress to kube API for application-controller (needed for reconciling resources) |
| networkPolicies.egress.from.argocd-server | object | `{"to":{"definition":{"kubeAPI":true}}}` | Egress to kube API for server (needed for secrets/configmaps) |
| networkPolicies.egress.from.argocd-applicationset-controller | object | `{"to":{"definition":{"kubeAPI":true}}}` | Egress to kube API for applicationset-controller |
| networkPolicies.egress.from.argocd-dex-server | object | `{"to":{"definition":{"kubeAPI":true}}}` | Egress to kube API for dex-server |
| networkPolicies.egress.from.argocd-notifications-controller | object | `{"to":{"definition":{"kubeAPI":true}}}` | Egress to kube API for notifications-controller |
| networkPolicies.egress.from.argocd-upgrade-job | object | `{"to":{"definition":{"kubeAPI":true}}}` | Egress to kube API for upgrade job (needed for labeling CRDs) |
| networkPolicies.egress.from.argocd-repo-server | object | `{"to":{"cidr":{"0.0.0.0/0:443":true}}}` | Egress to external git repos for repo-server |
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
| bbtests.scripts.image | string | `"registry1.dso.mil/ironbank/big-bang/devops-tester:1.1"` |  |
| bbtests.scripts.envs.ARGOCD_SERVER | string | `"http://argocd-server"` |  |
| bbtests.scripts.envs.ARGOCD_USER | string | `"admin"` |  |
| bbtests.scripts.envs.ARGOCD_PASSWORD | string | `"Password123"` |  |
| redis-bb | object | `{"cleanUpgrade":{"enabled":true},"enabled":true,"networkPolicies":{"enabled":true},"upstream":{"auth":{"enabled":false},"commonConfiguration":"maxmemory 200mb\nsave \"\"","image":{"pullSecrets":["private-registry"]},"istio":{"redis":{"enabled":false}},"master":{"containerSecurityContext":{"capabilities":{"drop":["ALL"]},"enabled":true,"runAsGroup":1001,"runAsNonRoot":true,"runAsUser":1001},"resources":{"limits":{"cpu":"100m","memory":"256Mi"},"requests":{"cpu":"100m","memory":"256Mi"}}},"metrics":{"containerSecurityContext":{"enabled":true,"runAsGroup":1001,"runAsUser":1001},"enabled":true,"image":{"tag":"v1.81.0"},"labels":{"app.kubernetes.io/name":"argocd-redis-ha-haproxy"},"metrics":null},"replica":{"containerSecurityContext":{"capabilities":{"drop":["ALL"]},"enabled":true,"runAsGroup":1001,"runAsNonRoot":true,"runAsUser":1001},"readinessProbe":{"failureThreshold":3,"initialDelaySeconds":5,"periodSeconds":10,"successThreshold":1,"tcpSocket":{"port":6379},"timeoutSeconds":30},"resources":{"limits":{"cpu":"100m","memory":"256Mi"},"requests":{"cpu":"100m","memory":"256Mi"}}}}}` | BigBang HA Redis Passthrough |
| redis-bb.upstream.metrics.labels | object | `{"app.kubernetes.io/name":"argocd-redis-ha-haproxy"}` | Custom labels for the haproxy pod. This is relevant for Argo CD CLI. |
| redis-bb.upstream.metrics.containerSecurityContext | object | `{"enabled":true,"runAsGroup":1001,"runAsUser":1001}` | HAProxy enable prometheus metric scraping |
| global.image.repository | string | `"registry1.dso.mil/ironbank/big-bang/argocd"` |  |
| global.image.tag | string | `"v3.3.0"` |  |
| global.image.imagePullPolicy | string | `"IfNotPresent"` |  |
| global.imagePullSecrets[0].name | string | `"private-registry"` |  |
| argocd-apps.applications | object | `{}` |  |
| argocd-apps.projects | object | `{}` |  |
| argocd-apps.applicationsets | object | `{}` |  |
| argocd-apps.itemTemplates | list | `[]` |  |
| argocd-apps.exports | object | `{}` |  |
| upstream | object | `{"applicationSet":{"containerSecurityContext":{"runAsGroup":1000,"runAsUser":1000},"enabled":true,"livenessProbe":{"failureThreshold":5,"timeoutSeconds":30},"readinessProbe":{"failureThreshold":5,"timeoutSeconds":30}},"configs":{"params":{"server.insecure":true}},"controller":{"containerSecurityContext":{"runAsGroup":1000,"runAsUser":1000},"readinessProbe":{"timeoutSeconds":30},"resources":{"limits":{"cpu":"500m","memory":"3Gi"},"requests":{"cpu":"500m","memory":"3Gi"}}},"dex":{"containerSecurityContext":{"runAsGroup":1000,"runAsUser":1000},"image":{"repository":"registry1.dso.mil/ironbank/opensource/dexidp/dex","tag":"v2.44.0"},"livenessProbe":{"timeoutSeconds":30},"readinessProbe":{"timeoutSeconds":30},"resources":{"limits":{"cpu":"20m","memory":"256Mi"},"requests":{"cpu":"10m","memory":"128Mi"}}},"externalRedis":{"host":"redis-bb-headless.argocd.svc.cluster.local"},"notifications":{"containerSecurityContext":{"runAsGroup":1000,"runAsUser":1000}},"openshift":{"enabled":false},"redis":{"enabled":false},"redisSecretInit":{"enabled":false},"repoServer":{"containerSecurityContext":{"runAsGroup":1000,"runAsUser":1000},"livenessProbe":{"failureThreshold":5,"timeoutSeconds":30},"readinessProbe":{"failureThreshold":5,"timeoutSeconds":30},"resources":{"limits":{"cpu":"100m","memory":"1Gi"},"requests":{"cpu":"100m","memory":"1Gi"}}},"server":{"containerSecurityContext":{"runAsGroup":1000,"runAsUser":1000},"livenessProbe":{"failureThreshold":5,"timeoutSeconds":30},"readinessProbe":{"failureThreshold":5,"timeoutSeconds":30},"resources":{"limits":{"cpu":"20m","memory":"128Mi"},"requests":{"cpu":"20m","memory":"128Mi"}}}}` | We are exposing only the keys that BigBang overrides from the upstream chart. Please refer to the [upstream chart](https://github.com/argoproj/argo-helm/blob/main/charts/argo-cd/values.yaml) for other value configs. |
| upstream.openshift.enabled | bool | `false` | enables using arbitrary uid for argo repo server |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.

---

_This file is programatically generated using `helm-docs` and some BigBang-specific templates. The `gluon` repository has [instructions for regenerating package READMEs](https://repo1.dso.mil/big-bang/product/packages/gluon/-/blob/master/docs/bb-package-readme.md)._

