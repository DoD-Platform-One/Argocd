# ArgoCD Development Overrides

## make sure to replcae git branch and image tag with your development branch and tag values

```yaml
addons:
  argocd:
    enabled: true
    sso:
      enabled: true
      client_id: platform1_a8604cc9-f5e9-4656-802d-d05624370245_bb8-argocd
      client_secret: this-can-be-anything-for-dev
      groups: "g, /Impact Level 2 Authorized, role:admin"
    git:
      tag: null
      branch: "your-dev-branch-here"
    values:
      global:
        redis:
          password: "testing"
      upstream:
        dex:
          metrics:
            enabled: true
          servicemonitor:
            enabled: true
        configs:
          secret:
            argocdServerAdminPassword: '$2a$10$rUDZDckdDZ2TEwk9PDs3QuqjkL58qR1IHE1Kj4MwDx.7/m5dytZJm'
```
