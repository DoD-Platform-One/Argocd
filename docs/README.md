# ArgoCD

This argocd app is based on the base image from Iron Bank ArgoCD - v1.6.1 with kustomize 3.8.0 plugins helmGenerator 0.2.0 SopGenerator 1.3.0

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

To support the various Kustomize plugins, a custom `repo-server` image is used following the standard ArgoCD custom 
tooling walkthrough [here](https://argoproj.github.io/argo-cd/operator-manual/custom_tools/#byoi-build-your-own-image). 
 The image and the contents can be found in the root level `Dockerfile`.

The image is located in the P1 repo:

registry.dso.mil/platform-one/apps/argocd/argocd-repo-server:v1.5.5-0.1.2

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
git clone https://repo1.dso.mil/platform-one/apps/argocd.git
cd fluentd-elasticsearch
Apply kustomized manifest
kubectl -k ./

### Operations

Deploy ArgoCD in the `--insecure` mode so that the ingress controller (Istio) can be the one to handle HTTPS instead.  
This does __not__ mean we're "insecure"!

### HTTP server

https://argocd.<your.namespace.goes.here>

### Allow SSO login 

Once cluster is up and running use the docs in the keycloak repository for creating users to create the developer user. 
Once the developer user is created login to keycloak using the admin password and assign that user to the ArgoCDAdmins
group. Go to https://argocd.<domain>.<tld> select login with keycloak and use the developer username and password. 



### Kibana / ECK log notes

Log in to https://kibana.<domain>.<tld>

Create an index pattern for fluentd if not already created
```
logstash-*
```

Build filter for argocd namespace
```
{
  "query": {
    "match_phrase": {
      "kubernetes.namespace_name": "argocd"
    }
  }
}
```

Link that describes ArgoCD components  
https://argoproj.github.io/argo-cd/operator-manual/architecture/  
  

Build filters by argocd container name.   
  
argocd server: exposes the api server and the REST server for the UI
```
{
  "query": {
    "match_phrase": {
      "kubernetes.container_name": "argocd-server"
    }
  }
}
```

argocd repo server: The repository server is an internal service which maintains a local cache of the Git repository holding the application manifests. It is responsible for generating and returning the Kubernetes manifests
```
{
  "query": {
    "match_phrase": {
      "kubernetes.container_name": "argocd-repo-server"
    }
  }
}

ArgoCD application controller: The application controller is a Kubernetes controller which continuously monitors running applications and compares the current, live state against the desired target state
```
{
  "query": {
    "match_phrase": {
      "kubernetes.container_name": "argocd-application-controller"
    }
  }
}
```


After filtering to target specific components of ArgoCD you can search for specific text in the logs with Kibana Query Language (KQL)
```
log: "error"
``` 
