# argo-cd

![Version: 3.6.8-bb.12](https://img.shields.io/badge/Version-3.6.8--bb.12-informational?style=flat-square) ![AppVersion: 2.0.1](https://img.shields.io/badge/AppVersion-2.0.1-informational?style=flat-square)

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
| nameOverride | string | `"argocd"` |  |
| fullnameOverride | string | `""` |  |
| kubeVersionOverride | string | `""` |  |
| awsCredentials.awsAccessKeyId | string | `""` |  |
| awsCredentials.awsSecretAccessKey | string | `""` |  |
| awsCredentials.awsDefaultRegion | string | `"us-gov-west-1"` |  |
| global.image.repository | string | `"registry1.dso.mil/ironbank/big-bang/argocd"` |  |
| global.image.tag | string | `"v2.0.1"` |  |
| global.image.imagePullPolicy | string | `"IfNotPresent"` |  |
| global.securityContext | object | `{}` |  |
| global.imagePullSecrets[0].name | string | `"private-registry"` |  |
| global.hostAliases | list | `[]` |  |
| controller.name | string | `"application-controller"` |  |
| controller.imagePullSecrets[0].name | string | `"private-registry"` |  |
| controller.image.repository | string | `"registry1.dso.mil/ironbank/big-bang/argocd"` |  |
| controller.image.tag | string | `"v2.0.1"` |  |
| controller.image.imagePullPolicy | string | `nil` |  |
| controller.replicas | int | `1` |  |
| controller.enableStatefulSet | bool | `false` |  |
| controller.args.statusProcessors | string | `"20"` |  |
| controller.args.operationProcessors | string | `"10"` |  |
| controller.args.appResyncPeriod | string | `"180"` |  |
| controller.args.selfHealTimeout | string | `"5"` |  |
| controller.logFormat | string | `"text"` |  |
| controller.logLevel | string | `"info"` |  |
| controller.extraArgs | list | `[]` |  |
| controller.env | list | `[]` |  |
| controller.envFrom | list | `[]` |  |
| controller.podAnnotations | object | `{}` |  |
| controller.podLabels | object | `{}` |  |
| controller.containerSecurityContext | object | `{}` |  |
| controller.containerPort | int | `8082` |  |
| controller.readinessProbe.failureThreshold | int | `3` |  |
| controller.readinessProbe.initialDelaySeconds | int | `10` |  |
| controller.readinessProbe.periodSeconds | int | `10` |  |
| controller.readinessProbe.successThreshold | int | `1` |  |
| controller.readinessProbe.timeoutSeconds | int | `1` |  |
| controller.livenessProbe.failureThreshold | int | `3` |  |
| controller.livenessProbe.initialDelaySeconds | int | `10` |  |
| controller.livenessProbe.periodSeconds | int | `10` |  |
| controller.livenessProbe.successThreshold | int | `1` |  |
| controller.livenessProbe.timeoutSeconds | int | `1` |  |
| controller.volumeMounts | list | `[]` |  |
| controller.volumes | list | `[]` |  |
| controller.service.annotations | object | `{}` |  |
| controller.service.labels | object | `{}` |  |
| controller.service.port | int | `8082` |  |
| controller.service.portName | string | `"tcp-controller"` |  |
| controller.nodeSelector | object | `{}` |  |
| controller.tolerations | list | `[]` |  |
| controller.affinity | object | `{}` |  |
| controller.priorityClassName | string | `""` |  |
| controller.resources.limits.cpu | string | `"500m"` |  |
| controller.resources.limits.memory | string | `"3Gi"` |  |
| controller.resources.requests.cpu | string | `"500m"` |  |
| controller.resources.requests.memory | string | `"3Gi"` |  |
| controller.serviceAccount.create | bool | `true` |  |
| controller.serviceAccount.name | string | `"argocd-application-controller"` |  |
| controller.serviceAccount.annotations | object | `{}` |  |
| controller.serviceAccount.automountServiceAccountToken | bool | `true` |  |
| controller.metrics.enabled | bool | `false` |  |
| controller.metrics.service.annotations | object | `{}` |  |
| controller.metrics.service.labels | object | `{}` |  |
| controller.metrics.service.servicePort | int | `8082` |  |
| controller.metrics.serviceMonitor.enabled | bool | `false` |  |
| controller.metrics.serviceMonitor.interval | string | `"30s"` |  |
| controller.metrics.rules.enabled | bool | `false` |  |
| controller.metrics.rules.spec | list | `[]` |  |
| controller.clusterAdminAccess.enabled | bool | `true` |  |
| controller.clusterRoleRules.enabled | bool | `false` |  |
| controller.clusterRoleRules.rules | list | `[]` |  |
| dex.enabled | bool | `true` |  |
| dex.name | string | `"dex-server"` |  |
| dex.imagePullSecrets[0].name | string | `"private-registry"` |  |
| dex.metrics.enabled | bool | `false` |  |
| dex.metrics.service.annotations | object | `{}` |  |
| dex.metrics.service.labels | object | `{}` |  |
| dex.metrics.serviceMonitor.enabled | bool | `false` |  |
| dex.metrics.serviceMonitor.interval | string | `"30s"` |  |
| dex.image.repository | string | `"registry1.dso.mil/ironbank/opensource/dexidp/dex"` |  |
| dex.image.tag | string | `"v2.28.1"` |  |
| dex.image.imagePullPolicy | string | `"IfNotPresent"` |  |
| dex.initImage.repository | string | `nil` |  |
| dex.initImage.tag | string | `nil` |  |
| dex.initImage.imagePullPolicy | string | `nil` |  |
| dex.env | list | `[]` |  |
| dex.envFrom | list | `[]` |  |
| dex.podAnnotations | object | `{}` |  |
| dex.podLabels | object | `{}` |  |
| dex.serviceAccount.create | bool | `true` |  |
| dex.serviceAccount.name | string | `"argocd-dex-server"` |  |
| dex.serviceAccount.annotations | object | `{}` |  |
| dex.serviceAccount.automountServiceAccountToken | bool | `true` |  |
| dex.volumeMounts[0].name | string | `"static-files"` |  |
| dex.volumeMounts[0].mountPath | string | `"/shared"` |  |
| dex.volumes[0].name | string | `"static-files"` |  |
| dex.volumes[0].emptyDir | object | `{}` |  |
| dex.containerPortHttp | int | `5556` |  |
| dex.servicePortHttp | int | `5556` |  |
| dex.containerPortGrpc | int | `5557` |  |
| dex.servicePortGrpc | int | `5557` |  |
| dex.containerPortMetrics | int | `5558` |  |
| dex.servicePortMetrics | int | `5558` |  |
| dex.nodeSelector | object | `{}` |  |
| dex.tolerations | list | `[]` |  |
| dex.affinity | object | `{}` |  |
| dex.priorityClassName | string | `""` |  |
| dex.containerSecurityContext | object | `{}` |  |
| dex.resources.limits.cpu | string | `"10m"` |  |
| dex.resources.limits.memory | string | `"128Mi"` |  |
| dex.resources.requests.cpu | string | `"10m"` |  |
| dex.resources.requests.memory | string | `"128Mi"` |  |
| redis.enabled | bool | `true` |  |
| redis.name | string | `"redis"` |  |
| redis.imagePullSecrets[0].name | string | `"private-registry"` |  |
| redis.image.repository | string | `"registry1.dso.mil/ironbank/opensource/redis/redis6"` |  |
| redis.image.tag | string | `"6.2.4"` |  |
| redis.image.imagePullPolicy | string | `"IfNotPresent"` |  |
| redis.extraArgs | list | `[]` |  |
| redis.containerPort | int | `6379` |  |
| redis.servicePort | int | `6379` |  |
| redis.env | list | `[]` |  |
| redis.envFrom | list | `[]` |  |
| redis.podAnnotations | object | `{}` |  |
| redis.podLabels | object | `{}` |  |
| redis.nodeSelector | object | `{}` |  |
| redis.tolerations | list | `[]` |  |
| redis.affinity | object | `{}` |  |
| redis.priorityClassName | string | `""` |  |
| redis.containerSecurityContext | object | `{}` |  |
| redis.securityContext.runAsUser | int | `1000` |  |
| redis.securityContext.runAsGroup | int | `1000` |  |
| redis.securityContext.fsGroup | int | `1000` |  |
| redis.securityContext.runAsNonRoot | bool | `true` |  |
| redis.resources.limits.cpu | string | `"50m"` |  |
| redis.resources.limits.memory | string | `"64Mi"` |  |
| redis.resources.requests.cpu | string | `"50m"` |  |
| redis.resources.requests.memory | string | `"64Mi"` |  |
| redis.volumeMounts | list | `[]` |  |
| redis.volumes | list | `[]` |  |
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
| server.name | string | `"server"` |  |
| server.replicas | int | `1` |  |
| server.autoscaling.enabled | bool | `false` |  |
| server.autoscaling.minReplicas | int | `1` |  |
| server.autoscaling.maxReplicas | int | `5` |  |
| server.autoscaling.targetCPUUtilizationPercentage | int | `50` |  |
| server.autoscaling.targetMemoryUtilizationPercentage | int | `50` |  |
| server.image.repository | string | `"registry1.dso.mil/ironbank/big-bang/argocd"` |  |
| server.image.tag | string | `"v2.0.1"` |  |
| server.image.imagePullPolicy | string | `"Always"` |  |
| server.extraArgs[0] | string | `"--insecure"` |  |
| server.env | list | `[]` |  |
| server.envFrom | list | `[]` |  |
| server.lifecycle | object | `{}` |  |
| server.logFormat | string | `"text"` |  |
| server.logLevel | string | `"info"` |  |
| server.podAnnotations | object | `{}` |  |
| server.podLabels | object | `{}` |  |
| server.containerPort | int | `8080` |  |
| server.readinessProbe.failureThreshold | int | `3` |  |
| server.readinessProbe.initialDelaySeconds | int | `10` |  |
| server.readinessProbe.periodSeconds | int | `10` |  |
| server.readinessProbe.successThreshold | int | `1` |  |
| server.readinessProbe.timeoutSeconds | int | `1` |  |
| server.livenessProbe.failureThreshold | int | `3` |  |
| server.livenessProbe.initialDelaySeconds | int | `10` |  |
| server.livenessProbe.periodSeconds | int | `10` |  |
| server.livenessProbe.successThreshold | int | `1` |  |
| server.livenessProbe.timeoutSeconds | int | `1` |  |
| server.volumeMounts | list | `[]` |  |
| server.volumes | list | `[]` |  |
| server.nodeSelector | object | `{}` |  |
| server.tolerations | list | `[]` |  |
| server.affinity | object | `{}` |  |
| server.priorityClassName | string | `""` |  |
| server.containerSecurityContext | object | `{}` |  |
| server.resources.limits.cpu | string | `"20m"` |  |
| server.resources.limits.memory | string | `"128Mi"` |  |
| server.resources.requests.cpu | string | `"20m"` |  |
| server.resources.requests.memory | string | `"128Mi"` |  |
| server.certificate.enabled | bool | `false` |  |
| server.certificate.domain | string | `"argocd.example.com"` |  |
| server.certificate.issuer.kind | string | `nil` |  |
| server.certificate.issuer.name | string | `nil` |  |
| server.certificate.additionalHosts | list | `[]` |  |
| server.certificate.secretName | string | `"argocd-server-tls"` |  |
| server.service.annotations | object | `{}` |  |
| server.service.labels | object | `{}` |  |
| server.service.type | string | `"ClusterIP"` |  |
| server.service.nodePortHttp | int | `30080` |  |
| server.service.nodePortHttps | int | `30443` |  |
| server.service.servicePortHttp | int | `80` |  |
| server.service.servicePortHttps | int | `443` |  |
| server.service.servicePortHttpName | string | `"tcp-server"` |  |
| server.service.servicePortHttpsName | string | `"https"` |  |
| server.service.namedTargetPort | bool | `true` |  |
| server.service.loadBalancerIP | string | `""` |  |
| server.service.loadBalancerSourceRanges | list | `[]` |  |
| server.service.externalIPs | list | `[]` |  |
| server.service.externalTrafficPolicy | string | `""` |  |
| server.metrics.enabled | bool | `false` |  |
| server.metrics.service.annotations | object | `{}` |  |
| server.metrics.service.labels | object | `{}` |  |
| server.metrics.service.servicePort | int | `8083` |  |
| server.metrics.serviceMonitor.enabled | bool | `false` |  |
| server.metrics.serviceMonitor.interval | string | `"30s"` |  |
| server.serviceAccount.create | bool | `true` |  |
| server.serviceAccount.name | string | `"argocd-server"` |  |
| server.serviceAccount.annotations | object | `{}` |  |
| server.serviceAccount.automountServiceAccountToken | bool | `true` |  |
| server.ingress.enabled | bool | `false` |  |
| server.ingress.annotations | object | `{}` |  |
| server.ingress.labels | object | `{}` |  |
| server.ingress.ingressClassName | string | `""` |  |
| server.ingress.hosts | list | `[]` |  |
| server.ingress.paths[0] | string | `"/"` |  |
| server.ingress.extraPaths | list | `[]` |  |
| server.ingress.tls | list | `[]` |  |
| server.ingress.https | bool | `false` |  |
| server.ingressGrpc.enabled | bool | `false` |  |
| server.ingressGrpc.annotations | object | `{}` |  |
| server.ingressGrpc.labels | object | `{}` |  |
| server.ingressGrpc.ingressClassName | string | `""` |  |
| server.ingressGrpc.hosts | list | `[]` |  |
| server.ingressGrpc.paths[0] | string | `"/"` |  |
| server.ingressGrpc.extraPaths | list | `[]` |  |
| server.ingressGrpc.tls | list | `[]` |  |
| server.ingressGrpc.https | bool | `false` |  |
| server.route.enabled | bool | `false` |  |
| server.route.hostname | string | `""` |  |
| server.configEnabled | bool | `true` |  |
| server.config.url | string | `"https://argocd.bigbang.dev"` |  |
| server.config."application.instanceLabelKey" | string | `"argocd.argoproj.io/instance"` |  |
| server.configAnnotations | object | `{}` |  |
| server.rbacConfig | object | `{}` |  |
| server.rbacConfigAnnotations | object | `{}` |  |
| server.rbacConfigCreate | bool | `true` |  |
| server.additionalApplications | list | `[]` |  |
| server.additionalProjects | list | `[]` |  |
| server.clusterAdminAccess.enabled | bool | `true` |  |
| server.GKEbackendConfig.enabled | bool | `false` |  |
| server.GKEbackendConfig.spec | object | `{}` |  |
| server.extraContainers | list | `[]` |  |
| repoServer.name | string | `"repo-server"` |  |
| repoServer.replicas | int | `1` |  |
| repoServer.autoscaling.enabled | bool | `false` |  |
| repoServer.autoscaling.minReplicas | int | `1` |  |
| repoServer.autoscaling.maxReplicas | int | `5` |  |
| repoServer.autoscaling.targetCPUUtilizationPercentage | int | `50` |  |
| repoServer.autoscaling.targetMemoryUtilizationPercentage | int | `50` |  |
| repoServer.image.repository | string | `"registry1.dso.mil/ironbank/big-bang/argocd"` |  |
| repoServer.image.tag | string | `"v2.0.1"` |  |
| repoServer.image.imagePullPolicy | string | `nil` |  |
| repoServer.extraArgs | list | `[]` |  |
| repoServer.env | list | `[]` |  |
| repoServer.envFrom | list | `[]` |  |
| repoServer.logFormat | string | `"text"` |  |
| repoServer.logLevel | string | `"info"` |  |
| repoServer.podAnnotations | object | `{}` |  |
| repoServer.podLabels | object | `{}` |  |
| repoServer.containerPort | int | `8081` |  |
| repoServer.readinessProbe.failureThreshold | int | `3` |  |
| repoServer.readinessProbe.initialDelaySeconds | int | `10` |  |
| repoServer.readinessProbe.periodSeconds | int | `10` |  |
| repoServer.readinessProbe.successThreshold | int | `1` |  |
| repoServer.readinessProbe.timeoutSeconds | int | `1` |  |
| repoServer.livenessProbe.failureThreshold | int | `3` |  |
| repoServer.livenessProbe.initialDelaySeconds | int | `10` |  |
| repoServer.livenessProbe.periodSeconds | int | `10` |  |
| repoServer.livenessProbe.successThreshold | int | `1` |  |
| repoServer.livenessProbe.timeoutSeconds | int | `1` |  |
| repoServer.volumeMounts | list | `[]` |  |
| repoServer.volumes | list | `[]` |  |
| repoServer.nodeSelector | object | `{}` |  |
| repoServer.tolerations | list | `[]` |  |
| repoServer.affinity | object | `{}` |  |
| repoServer.priorityClassName | string | `""` |  |
| repoServer.containerSecurityContext | object | `{}` |  |
| repoServer.resources.limits.cpu | string | `"100m"` |  |
| repoServer.resources.limits.memory | string | `"1Gi"` |  |
| repoServer.resources.requests.cpu | string | `"100m"` |  |
| repoServer.resources.requests.memory | string | `"1Gi"` |  |
| repoServer.service.annotations | object | `{}` |  |
| repoServer.service.labels | object | `{}` |  |
| repoServer.service.port | int | `8081` |  |
| repoServer.service.portName | string | `"tcp-repo-server"` |  |
| repoServer.metrics.enabled | bool | `false` |  |
| repoServer.metrics.service.annotations | object | `{}` |  |
| repoServer.metrics.service.labels | object | `{}` |  |
| repoServer.metrics.service.servicePort | int | `8084` |  |
| repoServer.metrics.serviceMonitor.enabled | bool | `false` |  |
| repoServer.metrics.serviceMonitor.interval | string | `"30s"` |  |
| repoServer.serviceAccount.create | bool | `false` |  |
| repoServer.serviceAccount.annotations | object | `{}` |  |
| repoServer.serviceAccount.automountServiceAccountToken | bool | `true` |  |
| configs.clusterCredentials | list | `[]` |  |
| configs.knownHostsAnnotations | object | `{}` |  |
| configs.knownHosts.data.ssh_known_hosts | string | `"bitbucket.org ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAubiN81eDcafrgMeLzaFPsw2kNvEcqTKl/VqLat/MaB33pZy0y3rJZtnqwR2qOOvbwKZYKiEO1O6VqNEBxKvJJelCq0dTXWT5pbO2gDXC6h6QDXCaHo6pOHGPUy+YBaGQRGuSusMEASYiWunYN0vCAI8QaXnWMXNMdFP3jHAJH0eDsoiGnLPBlBp4TNm6rYI74nMzgz3B9IikW4WVK+dc8KZJZWYjAuORU3jc1c/NPskD2ASinf8v3xnfXeukU0sJ5N6m5E8VLjObPEO+mN2t/FZTMZLiFqPWc/ALSqnMnnhwrNi2rbfg/rd/IpL8Le3pSBne8+seeFVBoGqzHM9yXw==\ngithub.com ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==\ngitlab.com ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBFSMqzJeV9rUzU4kWitGjeR4PWSa29SPqJ1fVkhtj3Hw9xjLVXVYrU9QlYWrOLXBpQ6KWjbjTDTdDkoohFzgbEY=\ngitlab.com ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAfuCHKVTjquxvt6CM6tdG4SLp1Btn/nOeHHE5UOzRdf\ngitlab.com ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCsj2bNKTBSpIYDEGk9KxsGh3mySTRgMtXL583qmBpzeQ+jqCMRgBqB98u3z++J1sKlXHWfM9dyhSevkMwSbhoR8XIq/U0tCNyokEi/ueaBMCvbcTHhO7FcwzY92WK4Yt0aGROY5qX2UKSeOvuP4D6TPqKF1onrSzH9bx9XUf2lEdWT/ia1NEKjunUqu1xOB/StKDHMoX4/OKyIzuS0q/T1zOATthvasJFoPrAjkohTyaDUz2LN5JoH839hViyEG82yB+MjcFV5MU3N1l1QL3cVUCh93xSaua1N85qivl+siMkPGbO5xR/En4iEY6K2XPASUEMaieWVNTRCtJ4S8H+9\nssh.dev.azure.com ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC7Hr1oTWqNqOlzGJOfGJ4NakVyIzf1rXYd4d7wo6jBlkLvCA4odBlL0mDUyZ0/QUfTTqeu+tm22gOsv+VrVTMk6vwRU75gY/y9ut5Mb3bR5BV58dKXyq9A9UeB5Cakehn5Zgm6x1mKoVyf+FFn26iYqXJRgzIZZcZ5V6hrE0Qg39kZm4az48o0AUbf6Sp4SLdvnuMa2sVNwHBboS7EJkm57XQPVU3/QpyNLHbWDdzwtrlS+ez30S3AdYhLKEOxAG8weOnyrtLJAUen9mTkol8oII1edf7mWWbWVf0nBmly21+nZcmCTISQBtdcyPaEno7fFQMDD26/s0lfKob4Kw8H\nvs-ssh.visualstudio.com ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC7Hr1oTWqNqOlzGJOfGJ4NakVyIzf1rXYd4d7wo6jBlkLvCA4odBlL0mDUyZ0/QUfTTqeu+tm22gOsv+VrVTMk6vwRU75gY/y9ut5Mb3bR5BV58dKXyq9A9UeB5Cakehn5Zgm6x1mKoVyf+FFn26iYqXJRgzIZZcZ5V6hrE0Qg39kZm4az48o0AUbf6Sp4SLdvnuMa2sVNwHBboS7EJkm57XQPVU3/QpyNLHbWDdzwtrlS+ez30S3AdYhLKEOxAG8weOnyrtLJAUen9mTkol8oII1edf7mWWbWVf0nBmly21+nZcmCTISQBtdcyPaEno7fFQMDD26/s0lfKob4Kw8H\n"` |  |
| configs.tlsCertsAnnotations | object | `{}` |  |
| configs.tlsCerts | object | `{}` |  |
| configs.repositoryCredentials | object | `{}` |  |
| configs.secret.createSecret | bool | `true` |  |
| configs.secret.annotations | object | `{}` |  |
| configs.secret.githubSecret | string | `""` |  |
| configs.secret.gitlabSecret | string | `""` |  |
| configs.secret.bitbucketServerSecret | string | `""` |  |
| configs.secret.bitbucketUUID | string | `""` |  |
| configs.secret.gogsSecret | string | `""` |  |
| configs.secret.extra | object | `{}` |  |
| configs.secret.argocdServerTlsConfig | object | `{}` |  |
| openshift.enabled | bool | `false` |  |
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

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.
# redis

![Version: 14.1.0-bb.3](https://img.shields.io/badge/Version-14.1.0--bb.3-informational?style=flat-square) ![AppVersion: 6.2.2](https://img.shields.io/badge/AppVersion-6.2.2-informational?style=flat-square)

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
| cleanUpgrade.enabled | bool | `true` |  |
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
| metrics.prometheusRule.rules | list | `[]` |  |
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
