# ArgoCD Keycloak Configuration

This document will explain how to configure keycloak with argocd. This assumes you have the sample manifests applied.

## Configuration items

* Keycloak
* ArgoCD

These are the items you need to do after keycloak and argocd are working on your cluster.

### Keycloak Configuration

* Create an argocd client scope with the following mappings

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
  "clientId": "il2_00eb8904-5b88-4c68-ad67-cec0d2e07aa6_argocd",
  "name": "IL2 ArgoCD",
  "rootUrl": "",
  "adminUrl": "",
  "baseUrl": "/applications",
  "surrogateAuthRequired": false,
  "enabled": true,
  "alwaysDisplayInConsole": false,
  "clientAuthenticatorType": "client-secret",
  "redirectUris": [
    "https://argocd.example.mil/auth/callback"
  ],
  "webOrigins": [
    "https://argocd.example.mil"
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
    "id.token.as.detached.signature": "false",
    "saml.multivalued.roles": "false",
    "saml.force.post.binding": "false",
    "saml.encrypt": "false",
    "oauth2.device.authorization.grant.enabled": "false",
    "saml.server.signature": "false",
    "backchannel.logout.revoke.offline.tokens": "false",
    "saml.server.signature.keyinfo.ext": "false",
    "use.refresh.tokens": "true",
    "exclude.session.state.from.auth.response": "false",
    "oidc.ciba.grant.enabled": "false",
    "saml.artifact.binding": "false",
    "backchannel.logout.session.required": "true",
    "client_credentials.use_refresh_token": "false",
    "saml_force_name_id_format": "false",
    "saml.client.signature": "false",
    "tls.client.certificate.bound.access.tokens": "false",
    "require.pushed.authorization.requests": "false",
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
  "optionalClientScopes": [],
  "access": {
    "view": true,
    "configure": true,
    "manage": true
  }
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

4. Go to <https://argocd>.<domain>.<tld> select login with keycloak and use the created username and password.

## OIDC Custom CA

ArgoCD does not seem to support pointing to a kubernetes secret to trust SSO (OIDC) connections that are not trusted by the container inherently.
To get around this limitation, you can specify your "self-signed" Certificate Authority within BigBang's `sso.certificate_authority` value and it will be inserted into the sso configuration options starting with ArgoCD v2.5.X .

Here is an example when using Big Bang to deploy argocd with SSO and feeding in a certificate authority PEM to trust for the OIDC connection:

```yaml
sso:
  certificate_authority: |
    -----BEGIN CERTIFICATE-----
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    ...
    -----END CERTIFICATE-----
addons:
  argocd:
    sso:
      enabled: true
      client_id: "XXXX"
      client_secret: "XXXX"
      provider_name: "XXXXX"
```
