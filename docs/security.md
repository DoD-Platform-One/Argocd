# Security

ArgoCD is [PCI compliant](https://www.pcisecuritystandards.org/).  Continuous internal reviews and penetration testing has been completed to satisfy security requirements. 

### Authentication

JSON Web Tokens (JWT) are utilized for Authentication to ARGOCD API server using the following methods:

1. For the local admin user, a username/password is exchanged for a JWT using the /api/v1/session endpoint. This token is signed & issued by the Argo CD API server itself, and has no expiration. When the admin password is updated, all existing admin JWT tokens are immediately revoked. The password is stored as a bcrypt hash in the argocd-secret Secret.


2. For Single Sign-On users, the user completes an OAuth2 login flow to the configured OIDC identity provider (either delegated through the bundled Dex provider, or directly to a self-managed OIDC provider). This JWT is signed & issued by the IDP, and expiration and revocation is handled by the provider. Dex tokens expire after 24 hours.


3. Automation tokens are generated for a project using the /api/v1/projects/{project}/roles/{role}/token endpoint, and are signed & issued by Argo CD. These tokens are limited in scope and privilege, and can only be used to manage application resources in the project which it belongs to. Project JWTs have a configurable expiration and can be immediately revoked by deleting the JWT reference ID from the project role.


Click [here](https://argoproj.github.io/argo-cd/operator-manual/security/) for more security information.
