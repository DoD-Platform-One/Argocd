# ArgoCD

This is a standard deployment of ArgoCD _except_ that it is deployed with the following patch:

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

This ensures that HTTPS can be handled by the ingress (such as Istio).