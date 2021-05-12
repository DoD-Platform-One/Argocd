# Troubleshooting Guide

Argocd-tool binary command can be utilized to simplify settings and troubleshoot connectivity issues.

### Settings

The argocd-util binary can be used to ensure the validity of setting. The latest argocd-util binary can be downloaded from the  [repository](https://argoproj.github.io/argo-cd/operator-manual/troubleshooting/) along with examples. 

    docker run --rm -it -w /src -v $(pwd):/src argoproj/argocd:<version> \
    argocd-util settings validate --argocd-cm-path ./argocd-cm.yaml

If you are using Linux you can extract argocd-util binary from docker image:


    docker run --rm -it -w /src -v $(pwd):/src argocd cp /usr/local/bin/argocd-util ./argocd-util
    The argocd-util settings validate command performs basic settings validation and print short summary of each settings group.

### Connectivity Issues

To manually create Secret with cluster credentials argocd-util cluster kubeconfig can be utilized using the following.

SSH into argocd-application-controller pod.


    kubectl exec -n argocd -it \
     $(kubectl get pods -n argocd -l app.kubernetes.io/name=argocd-application-controller -o jsonpath='{.items[0].metadata.name}') bash

Use argocd-util cluster kubeconfig command to export kubeconfig file from the configured Secret:


    argocd-util cluster kubeconfig https://<api-server-url> /tmp/kubeconfig --namespace argocd

Use kubectl to get more details about connection issues, fix them and apply changes back to secret:


    export KUBECONFIG=/tmp/kubeconfig
    kubectl get pods -v 9

Additional troubleshooting information can be found [here](https://argoproj.github.io/argo-cd/operator-manual/troubleshooting/).


