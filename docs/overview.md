# Argo CD

Argo CD is a declarative, [GitOps](https://www.gitops.tech/) continuous delivery tool for Kubernetes.

ArgoCD is a kubernetes native tool that enables the delivery of GitOps practices.  It uses a git repository as a source of truth in defining the desired state.  It is implemented as a kubernetes controller continuously monitoring running applications and reconciling it against the desired state in the source git repository.

Argo CD uses an Application Controller component to continuously watch applications that are executing.  Argo CD then differentiates the applications live state against the target state that resides in the Git repository. It supports a range of configuration management tools such as [Helm](https://helm.sh/), [kustomize](https://kustomize.io/), and [jsonnet](https://jsonnet.org/).

## Key Features

- Manage and Deploy multiple clusters
- Automated application deployment
- SSO Integration (OIDC, OAuth2, LDAP, SAML 2.0, GitHub, GitLab, Microsoft, LinkedIn).
- Multiple tenants and RBAC policies for authorization
- Monitoring of deployed applications continuously
- Rollback/Roll-anywhere to any application state committed in the Git repository
- PreSync, Sync, PostSync hooks to support complex application rollouts
- Web UI which provides real-time view of application activity
- Prometheus metrics
- Health status analysis of application resources

View the [ArgoCD Official Documentation](https://argo-cd.readthedocs.io/en/stable/#what-is-argo-cd) for additional ArgoCD features.

## Get Started

To quickly get started using Argo CD execute the below commands:

    kubectl create namespace argocd
    kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

Or follow along in [ArgoCD's getting started guide](https://argo-cd.readthedocs.io/en/stable/getting_started/).

Explore this [Architectural Overview](https://argo-cd.readthedocs.io/en/stable/operator-manual/architecture/) for an architectural overview and component definition.

### Here are Additional Links and More Resources to get to know ArgoCD

- [Readme](../README.md)
- [Security](./security.md)
- [Disaster Recovery](./disaster-recovery.md)
- [Troubleshooting Guide](./troubleshooting-guide.md)
- [Argo CD - Applying GitOps Principles To Manage Production Environment In Kubernetes](https://www.youtube.com/watch?v=vpWQeoaiRM4)
- [CDF Online Meetup presents - Continuous Delivery and GitOps with ArgoCD](https://www.youtube.com/watch?v=xAN8eTWHRU0)
- [Applied GitOps with argocd](https://thenewstack.io/applied-gitops-with-argocd/)
