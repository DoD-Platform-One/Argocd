# Elastic Keycloak Configuration
This document will explain how to configure keycloak with elastic search. This assumes you have the sample manifests applied.

## Configuration items
* Keycloak
* ArgoCD

These are the items you need to do after keycloak and elastic search are working on your cluster.

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
    "https://argocd.fences.dsop.io/auth/callback"
  ],
  "webOrigins": [
    "https://argocd.fences.dsop.io"
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
Update ArgoCD keycloak client secret:

1. Use secret from keycloak client configuration in clipboard and encode with base64 (NOTE: -n is required)
 
    ``echo -n '<secret>' | base64``

2. Copy output to update the secret value in this file: argocd-secret.yaml

3. Push to git and let Argo update the client secret it uses for keycloak communication.

4. Restart ArgoCD to apply changes by executing  "kubectl -n argocd delete pod --all" within bastion or environment.

5. Go to https://argocd.<domain>.<tld> select login with keycloak and use the created username and password. 
