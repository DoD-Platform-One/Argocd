# Disaster Recovery

To import and export all Argo CD data utilize argocd-util. First, ensure that you have ~/.kube/config pointing to the Argo CD cluster. 

To determine the version of Argo CD running:

    argocd version | grep server
    # ...
    export VERSION=v1.0.1

Import from a backup:


    docker run -i -v ~/.kube:/home/argocd/.kube --rm argoproj/argocd:$VERSION argocd-util import - < backup.yaml


Export to a backup:


    docker run -v ~/.kube:/home/argocd/.kube --rm argoproj/argocd:$VERSION argocd-util export > backup.yaml

For more information on Argo CD disaster recovery see the following [link](https://argoproj.github.io/argo-cd/operator-manual/disaster_recovery/).
