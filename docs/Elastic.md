### Kibana / ECK log notes

Log in to https://kibana.<domain>.<tld>

Create an index pattern for fluentd if not already created
```
argocd*
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
