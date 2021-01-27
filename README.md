# ArgoCD Documentation
 
# Table of Contents
- [ArgoCD Development](#development)
- [Prerequisites](#prerequisites)
- [Deploy ArgoCD using helm](#deployment)
- [ArgoCD Metrics](docs/Prometheus.md)
- [ArgoCD ECK Integration](docs/Elastic.md)
- [ArgoCD SSO Integration](docs/Keycloak.md)
- [Slightly Old Usage Docs](docs/README.md)

---

# Development

At P1 we use a slightly customized version of argocd via argocd plugins that allow for building with encryption for secrets that are in the git repo and using kustomize for templating.

Because of this we use a multistage build process as you can see in the Dockerfile.

We use one container to build the plugins, and then we pull the IronBank secured container to insert the plugins for use.

In our deployment files we use kustomize to template the overwrite of the common argocd with the customized IB image (this is located in the kustomization.yaml). If you want to use these manifests, but not pull the specialized one...or pull your own specialized version, just edit the newName and newTag field in kustomization.yaml.


# Prerequisites
* Kubernetes Cluster deployed
* Kubernetes config installed in `~/.kube/config`
* Helm installed

Install Helm

https://helm.sh/docs/intro/install/


# Deployment

Clone repository

```
git clone https://repo1.dso.mil/platform-one/big-bang/apps/core/argocd.git
helm install argocd chart
```