## Setting Affinity, nodeSelector, and tolerations within ArgoCD Chart

### Each component has they ability to set:
```
## Node selectors and tolerations for server scheduling to nodes with taints
## Ref: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
##
nodeSelector: {}
tolerations: []
affinity: {}
```
### To enable set the values in the values.yaml
```
controller:
  nodeSelector: {}
  tolerations: []
  affinity: {}

dex:
  nodeSelector: {}
  tolerations: []
  affinity: {}

redis:
  nodeSelector: {}
  tolerations: []
  affinity: {}

server:
  nodeSelector: {}
  tolerations: []
  affinity: {}

repoServer:
  nodeSelector: {}
  tolerations: []
  affinity: {}
```
