# ArgoCD Keycloak Configuration
This document will explain how to configure keycloak with argocd. This assumes you have the sample manifests applied.

## Configuration items
* Keycloak
* ArgoCD

These are the items you need to do after keycloak and argocd are working on your cluster.

### Keycloak Configuration

- Create an argocd client scope with the following mappings

  | Name      | Mapper Type      | Mapper Selection Sub | Token Claim Name   | Claim JSON Type |
  |-----------|------------------|----------------------|--------------------|-----------------|
  | profile   | User Attribute   | profile              | profile            | String          |
  | email     | User Property    | email                | email              | String          |
  | nickname  | User Attribute   | nickname             | nickname           | String          |
  | full name | User's Full Name | full name            | N/A                | N/A             |
  | groups    | Group Membership | groups               | groups             | N/A             |
  | username  | User Property    | username             | preferred_username | String          |

Keycloak client configuration should look like the following:
```json
{
  "id": "a752f27c-dc07-46c9-832a-11759b722ab3",
  "clientId": "il2_00eb8904-5b88-4c68-ad67-cec0d2e07aa6_argocd",
  "name": "IL2 ArgoCD",
  "baseUrl": "/applications",
  "surrogateAuthRequired": false,
  "enabled": true,
  "alwaysDisplayInConsole": false,
  "clientAuthenticatorType": "client-secret",
  "secret": "**********",
  "redirectUris": [
    "https://argocd.fences.dso.mil/auth/callback"
  ],
  "webOrigins": [
    "https://argocd.fences.dso.mil"
  ],
  "notBefore": 0,
  "bearerOnly": false,
  "consentRequired": false,
  "standardFlowEnabled": true,
  "implicitFlowEnabled": false,
  "directAccessGrantsEnabled": false,
  "serviceAccountsEnabled": false,
  "publicClient": false,
  "frontchannelLogout": false,
  "protocol": "openid-connect",
  "attributes": {
    "saml.assertion.signature": "false",
    "saml.multivalued.roles": "false",
    "saml.force.post.binding": "false",
    "saml.encrypt": "false",
    "saml.server.signature": "false",
    "saml.server.signature.keyinfo.ext": "false",
    "exclude.session.state.from.auth.response": "false",
    "saml_force_name_id_format": "false",
    "saml.client.signature": "false",
    "tls.client.certificate.bound.access.tokens": "false",
    "saml.authnstatement": "false",
    "display.on.consent.screen": "false",
    "saml.onetimeuse.condition": "false"
  },
  "authenticationFlowBindingOverrides": {},
  "fullScopeAllowed": true,
  "nodeReRegistrationTimeout": -1,
  "defaultClientScopes": [
    "role_list",
    "ArgoCD"
  ],
  "optionalClientScopes": []
}
```

User Permission:
* Go to Realm
* Click on Users tab on the left pane
* Set "User Enabled" to yes and Email Verified to on.
* Go to Credentials tab and set a non-temp password for the newly created user
* Go to Groups tab and select "Impact Level 2 Authorized" and click Join up to the right.

Client Configuration
* Go to Configured realm (eg: baby-yoda)
* Click on Clients
* Click on Il2_00eb8904-5b88-4c68-ad67-cec0d2e07aa6_argocd
* Click the Credentials tab
* Press Regenerate Secret and copy it to clipboard

### ArgoCD Configuration
Update chart/values.yaml to enable sso and ArgoCD keycloak client secret:
1. modify values.yaml. This will apply changes to argo-cm argo-rbac-cm and argo-secret:
```
# SSO Additions
sso:
  enabled: true <--change to true
  keycloakClientSecret: <place secret here>
```
2. Apply helm chart:
```
helm upgrade -i -n argocd --create-namespace argocd chart/
```

3. Restart ArgoCD to apply changes by executing  "kubectl -n argocd delete pod --all" within bastion or environment.

4. Go to https://argocd.<domain>.<tld> select login with keycloak and use the created username and password. 

## OIDC Custom CA

ArgoCD does not support pointing to a kubernetes secret to trust SSO (OIDC) connections that are not trusted by the container already.
To get around this limitation a kubernetes secret can be mounted to a file at `/etc/pki/tls/certs/` which is the current location of the system trust store for the argocd image from IronBank.

Here is an example when using Big Bang to deploy argocd, assuming you are populating a secret named "ca-cert" in the same namespace, with a key of cert.pem and value of a single PEM encoded certificate (an easy way to make this secret is included below as well):

```yaml
addons:
  argocd:
    values:
      server:
        volumes:
          - name: ca-cert
            secret:
              secretName: ca-secret
              defaultMode: 0644
        volumeMounts:
          - name: ca-cert
            mountPath: /etc/pki/tls/certs
            readOnly: true
```

For secret creation with this example and a pem file at `/path/to/cert.pem`:
```bash
kubectl create secret generic ca-secret --from-file=cert.pem=/path/to/cert.pem -n argocd
```
