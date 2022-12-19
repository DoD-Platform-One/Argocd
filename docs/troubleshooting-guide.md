# Troubleshooting Guide

The `argocd admin` command can be utilized to simplify settings and troubleshoot connectivity issues.

See the [install docs](https://argo-cd.readthedocs.io/en/stable/cli_installation/) to see how to install it on your machine.

If you have issues using the `argocd` cli to query your cluster, be sure your kubeconfig is configured to talk to your cluster. The default location for Kubernetes to store the kubeconfig file is at `$HOME/.kube/config`. You could do this by:

```bash
export KUBECONFIG="<path-to-kubeconfig-file>"
```

### Settings

Use the following command to validate settings configured in the `argocd-cm` configmap:

```bash
argocd admin settings validate \
    --load-cluster-settings=true \
    --namespace argocd
```

This should produce output similar to this:
```bash
INFO[0000] Starting configmap/secret informers          
INFO[0000] Configmap/secret informer synced             
✅ accounts
1 accounts

✅ general
SSO is not configured

✅ kustomize
--enable-alpha-plugins

✅ plugins
0 plugins

✅ repositories
0 repositories
0 repository credentials

✅ resource-overrides
1 resource overrides
```

Another way you can check the configuration in the `argocd-cm` configmap is by using `kubectl`:

```bash
kubectl get configmap argocd-cm --namespace argocd -o yaml
```

The key-value pairs under the `.data` field stores some basic configuration data for the `argocd-server` service:

```yaml
apiVersion: v1
data:
  admin.enabled: "true"
  application.instanceLabelKey: argocd.argoproj.io/instance
  exec.enabled: "false"
  kustomize.buildOptions: --enable-alpha-plugins
  server.rbac.log.enforce.enable: "false"
  url: https://argocd.bigbang.dev
kind: ConfigMap
```

To learn more about where and how ArgoCD stores configuration data, see [this doc](https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#declarative-setup).

### ArgoCD Server TLS

The `argocd-server` service is deployed by this helm chart.

This is the component that serves the API and UI of ArgoCD.

For this component to function properly in Big Bang, TLS must be disabled because TLS is terminated at the Istio ingress gateway before routing to the backend service. This results in a faulty redirect and the UI will be inaccessible.

As of this release, the TLS configuration for `argocd-server` is stored in the `argocd-cmd-params-cm` configmap using the `server.insecure` key. This should be set to `server.insecure: "true"`.
### More Troubleshooting

See the [troubleshooting guide](https://argo-cd.readthedocs.io/en/stable/operator-manual/troubleshooting/)