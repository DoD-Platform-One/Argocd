# ArgoCD

This is a standard deployment of ArgoCD with a few exceptions:



```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: argocd-server
spec:
  template:
    spec:
      containers:
      - command:
        - argocd-server
        - --staticassets
        - /shared/app
        - --repo-server
        - argocd-repo-server:8081
        - --insecure
```

## Custom `repo-server`

To support the various Kustomize plugins, a custom `repo-server` image is used following the standard ArgoCD custom tooling walkthrough [here](https://argoproj.github.io/argo-cd/operator-manual/custom_tools/#byoi-build-your-own-image).  The image and the contents can be found in the root level `Dockerfile`.

The image is located in the P1 repo:

registry.dsop.io/platform-one/apps/argocd/argocd-repo-server:v1.5.5-0.1.2

## Usage

### Prerequisites

Kubernetes cluster deployed
Kubernetes config installed in ~/.kube/config




Install kubectl
brew install kubectl
Install kustomize
brew install kustomize

### Deployment
Clone repository
git clone https://repo1.dsop.io/platform-one/apps/argocd.git
cd fluentd-elasticsearch
Apply kustomized manifest
kubectl -k ./

### Operations

Deploy ArgoCD in the `--insecure` mode so that the ingress controller (Istio) can be the one to handle HTTPS instead.  This does __not__ mean we're "insecure"!

### HTTP server

https://argocd.<your.namespace.goes.here>

