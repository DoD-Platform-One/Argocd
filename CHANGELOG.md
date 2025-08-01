# Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---
## [8.2.4-bb.0] (2025-07-31)

### Changed

- Upgrade argo-cd helm chart 8.2.0 -> 8.2.4

## [8.2.0-bb.2] (2025-07-30)

### Changed

- ironbank/big-bang/argocd (source) v3.0.11 -> v3.0.12
- registry1.dso.mil/ironbank/big-bang/argocd v3.0.11 -> v3.0.12

## [8.2.0-bb.1] (2025-07-23)

### Changed

- gluon 0.6.2 -> 0.7.0
- ironbank/big-bang/argocd (source) v3.0.6 -> v3.0.11
- ironbank/bitnami/redis (source) 8.0.2 -> 8.0.3
- redis 21.1.11-bb.0 -> 21.2.9-bb.0
- registry1.dso.mil/ironbank/big-bang/argocd v3.0.6 -> v3.0.11
- registry1.dso.mil/ironbank/bitnami/analytics/redis-exporter v1.73.0 -> v1.74.0
- registry1.dso.mil/ironbank/bitnami/redis 8.0.2 -> 8.0.3

## [8.2.0-bb.0] (2025-07-23)

### Changed

- Upgrade argo-cd helm chart 8.0.10 -> 8.2.0

## [8.0.10-bb.2] (2025-07-12)

### Changed

- fix redis implementation to use redis-bb
- refactor SSO from upstream to bake into configs properly

## [8.0.10-bb.1] (2025-07-03)

### Changed

- Update chart for passthrough pattern

## [8.0.10-bb.0] (2025-06-13)

### Changed

- gluon 0.5.17 -> 0.6.2
- redis 20.13.2 -> 21.0.2
- registry1.dso.mil/ironbank/big-bang/argocd v2.14.11 -> v3.0.6
- registry1.dso.mil/ironbank/bitnami/analytics/redis-exporter v1.71.0 -> v1.73.0
- registry1.dso.mil/ironbank/bitnami/redis 7.4.3 -> 8.0.2
- registry1.dso.mil/ironbank/opensource/dexidp/dex v2.42.1 -> v2.43.1

## [7.9.0-bb.0] (2025-05-07)

### Changed

- gluon 0.5.15 -> 0.5.17
- redis 20.13.0 -> 20.13.2
- registry1.dso.mil/ironbank/big-bang/argocd v2.14.10 -> v2.14.11
- registry1.dso.mil/ironbank/bitnami/analytics/redis-exporter v1.70.0 -> v1.71.0
- registry1.dso.mil/ironbank/bitnami/redis 7.4.2 -> 7.4.3
- registry1.dso.mil/ironbank/opensource/dexidp/dex v2.42.0 -> v2.42.1

## [7.8.26-bb.0] (2025-04-17)

### Changed

- registry1.dso.mil/ironbank/big-bang/argocd v2.14.9 -> v2.14.10
- registry1.dso.mil/ironbank/bitnami/analytics/redis-exporter v1.69.0 -> v1.70.0
- registry1.dso.mil/ironbank/opensource/dexidp/dex v2.41.1 -> v2.42.0
- Update redis chart 20.11.4-bb.1 -> 20.13.0-bb.0

## [7.8.23-bb.2] (2025-04-25)

### Changed

- Updated labels for cypress tests to avoid conflict

## [7.8.23-bb.1] (2025-04-15)

### Changed

- Change argocd-apps dependency to refernce helm repo

### Updated

- Updated argocd-apps default values

## [7.8.23-bb.0] (2025-04-09)

### Changed

- registry1.dso.mil/ironbank/big-bang/argocd v2.14.8 -> v2.14.9

## [7.8.21-bb.1] (2025-04-08)

### Changed

- Reverted chart name from `argo-cd` to `argocd`

## [7.8.21-bb.0] (2025-04-02)

### Changed

- Update gluon 0.5.14 -> 0.5.15
- Update registry1.dso.mil/ironbank/big-bang/argocd v2.14.5 -> v2.14.8
- Update argocd-apps 0.0.9 -> 2.0.2

## [7.8.11-bb.0] (2025-03-31)

### Changed

- redis 20.6.2 -> 20.11.4
- registry1.dso.mil/ironbank/big-bang/argocd v2.14.3 -> v2.14.5
- registry1.dso.mil/ironbank/bitnami/analytics/redis-exporter v1.67.0 -> v1.69.0

## [7.8.7-bb.1] - 2025-03-05

### Changed

- Adding dynamic namespace support in network policy for operatorless Istio compability

## [7.8.7-bb.0] (2025-03-05)

### Changed

- registry1.dso.mil/ironbank/big-bang/argocd v2.14.2 -> v2.14.3
- ironbank/big-bang/argocd v2.14.2 -> v2.14.3

## [7.8.2-bb.0] - 2025-02-20

### Changed

- Update ironbank/big-bang/argocd v2.14.1 -> v2.14.2
- Update registry1.dso.mil/ironbank/big-bang/argocd v2.14.1 -> v2.14.2

## [7.8.0-bb.0] - 2025-02-06

### Changed

- Update ironbank/big-bang/argocd v2.13.3 -> v2.14.1
- Update registry1.dso.mil/ironbank/big-bang/argocd v2.13.3 -> v2.14.1

## [7.7.13-bb.1] - 2025-01-21

### Changed

- Updated gluon from 0.5.12 -> 0.5.14

## [7.7.13-bb.0] - 2025-01-14

### Changed

- Update ironbank/big-bang/argocd v2.13.2 -> v2.13.3
- Update registry1.dso.mil/ironbank/big-bang/argocd v2.13.2 -> v2.13.3
- Update redis chart 20.6.0-bb.0 -> 20.6.2-bb.0
- Update registry1.dso.mil/ironbank/bitnami/redis 7.4.1 -> 7.4.2

## [7.7.10-bb.0] - 2025-01-08

### Changed

- Update ironbank/big-bang/argocd v2.13.1 -> v2.13.2
- Update registry1.dso.mil/ironbank/big-bang/argocd v2.13.1 -> v2.13.2
- Update registry1.dso.mil/ironbank/bitnami/analytics/redis-exporter v1.66.0 -> v1.67.0
- Update redis chart 20.2.1-bb.4 -> 20.6.0-bb.0

## [7.7.5-bb.1] - 2024-12-05

### Changed

- Updated timeouts for  readiness and liveness probes

## [7.7.5-bb.0] - 2024-12-04

### Changed

- Update redis chart 20.0.1-bb.1 -> 20.2.1-bb.4
- Update registry1.dso.mil/ironbank/bitnami/analytics/redis-exporter v1.63.0 -> v1.66.0
- Update registry1.dso.mil/ironbank/big-bang/argocd v2.12.4 -> v2.13.1
- Updated gluon from 0.5.4 -> 0.5.12
- Update ironbank/big-bang/argocd v2.12.4 -> v2.13.1
- Update registry1.dso.mil/ironbank/bitnami/redis 7.4.0 -> 7.4.1

## [7.6.6-bb.0] - 2024-09-30

### Changed

- update ironbank/big-bang/argocd v2.12.3 -> v2.12.4
- update registry1.dso.mil/ironbank/big-bang/argocd v2.12.3 -> v2.12.4

## [7.5.2-bb.0] - 2024-09-16

### Changed

- Update gluon 0.5.3 -> 0.5.4
- Update ironbank/big-bang/argocd v2.12.0 -> v2.12.3
- Update redis chart 19.6.2-bb.0 -> 20.0.1-bb.0
- Update registry1.dso.mil/ironbank/big-bang/argocd v2.12.0 -> v2.12.3
- Update registry1.dso.mil/ironbank/bitnami/analytics/redis-exporter v1.62.0 -> v1.63.0
- Update registry1.dso.mil/ironbank/bitnami/redis 7.2.5 -> 7.4.0

## [7.4.0-bb.1] - 2024-08-22

### Changed

- Updated cypress test to use new test project
- Removed kyverno policy overrides from test values

## [7.4.0-bb.0] - 2024-08-09

### Changed

- Update gluon 0.5.2 -> 0.5.3
- Update registry1.dso.mil/ironbank/big-bang/argocd v2.11.7 -> v.2.12.0
- Update registry1.dso.mil/ironbank/opensource/dexidp/dex v2.40.0 -> v2.41.1

## [7.3.11-bb.0] - 2024-07-29

### Changed

- Update ironbank/big-bang/argocd v2.11.5 -> v2.11.7
- Updated registry1.dso.mil/ironbank/big-bang/argocd v2.11.5 -> v2.11.7
- Updated gluon from 0.5.0 -> 0.5.2

## [7.3.9-bb.0] - 2024-07-19

### Changed

- Update ironbank/big-bang/argocd v2.11.3 -> v2.11.4
- Updated registry1.dso.mil/ironbank/big-bang/argocd v2.11.4 -> v2.11.5
- Updated registry1.dso.mil/ironbank/bitnami/analytics/redis-exporter v1.61.0 -> v1.62.0
- Updated redis-bb /registry1.dso.mil/bigbang 19.5.5-bb.0 -> 19.6.2-bb.0

## [7.3.4-bb.0] - 2024-07-05

### Changed

- Update ironbank/big-bang/argocd v2.11.3 -> v2.11.4

## [7.3.2-bb.1] - 2024-07-01

### Changed

- Removed the allow nothing policy
- Moved the authorization policies
- Updated the istio hardened doc

## [7.3.2-bb.0] - 2024-06-28

### Changed

- Update ironbank/big-bang/argocd v2.11.2 -> v2.11.3
- Update redis 19.5.0-bb.0 -> 19.5.5-bb.0
- Update registry1.dso.mil/ironbank/big-bang/argocd v2.11.2 -> v2.11.3
- Update registry1.dso.mil/ironbank/bitnami/analytics/redis-exporter v1.59.0 -> v1.61.0

## [6.11.1-bb.1] - 2024-06-07

### Changed

- Updated registry1.dso.mil/ironbank/opensource/dexidp/dex from 2.39.1 -> 2.40.0

## [6.11.1-bb.0] - 2024-06-03

### Changed

- Updated ArgoCD chart to 6.11.1
- Updated ArgoCD from 2.11.0 -> 2.11.2
- Updated redis dependency chart from 19.3.2-bb.0 -> 19.5.0-bb.0
- Updated redis-exporter from 1.58.0 -> 1.59.0
- Updated redis-bb from 7.2.4 -> 7.2.5

## [6.11.0-bb.1] - 2024-05-28

### Fixed

- Disabled redisSecretInit by default

## [6.11.0-bb.0] - 2024-05-23

### Changed

- Updated ArgoCD chart to 6.11.0
- Updated ArgoCD from 2.10.7 -> 2.11.0
- Updated Redis dependency chart to 19.3.2-bb.0
- Updated redis-exports from 1.58.0 -> 1.59.0

## [6.7.15-bb.5] - 2024-05-20

### Fixed

- Argocd Authz Authorization Policy

## [6.7.15-bb.4] - 2024-05-08

### Added

- Added Istio Sidecar to restrict egress traffic to REGISTRY_ONLY
- Added Istio ServiceEntry
- Added istiohardened doc

## [6.7.15-bb.3] - 2024-05-03

### Changed

- Updated gluon from 0.4.10 -> 0.5.0
(Update gluon Docker tag to v0.5.0)

## [6.7.15-bb.2] - 2024-04-30

### Changed

- Update securityContext for guestbook-ui

## [6.7.15-bb.1] - 2024-04-29

### Changed

- Custom network policies
- Updated gluon from 0.4.9 -> 0.4.10

## [6.7.15-bb.0] - 2024-04-24

### Changed

- Update ArgoCD chart to 6.7.15
- Update ArgoCD application version to 2.10.7

## [6.7.2-bb.2] - 2024-04-19

### Changed

- Update ArgoCD application version to 2.10.6
- Update gluon to 0.4.9
- Update dexidp dependency to 2.39.1

## [6.7.2-bb.1] - 2024-03-19

### Changed

- Update ArgoCD chart name to `argocd`

## [6.7.2-bb.0] - 2024-03-14

### Changed

- Update ArgoCD chart to 6.7.2
- Updated ArgoCD application version to v2.10.3
- Update gluon to 0.4.8

## [6.1.0-bb.3] - 2024-03-12

### Changed

- Fixed issue where the `argocd-secret` template was not having its `data` block populated, even if `sso.keycloakClientSecret` was set

## [6.1.0-bb.2] - 2024-02-29

### Changed

- Fixed chart name to be `argocd` rather than `argo-cd`

## [6.1.0-bb.1] - 2024-02-29

### Changed

- Added `before-hook-creation` delete policy to upgrade hook job resources (#addresses #144)

## [6.1.0-bb.0] - 2024-02-22

### Changed

- Update ArgoCD chart to 6.1.0
- Updated ArgoCD application version to v2.10.1

## [5.53.1-bb.2] - 2024-01-23

### Changed

- Update Redis dependency chart to 18.7.1-bb.1

## [5.53.1-bb.1] - 2024-01-22

### Changed

- Fixed chart name from previous update

## [5.53.1-bb.0] - 2024-01-22

### Changed

- Updated application version to `v2.9.4` from `v2.9.3`
- Updated chart version to 5.53.1-bb.0
- Update Redis dependency chart to 18.7.1-bb.0

## [5.52.0-bb.1] - 2024-01-16

### Changed

- Updated gluon to 0.4.7
- Renamed cypress test file and updated cypress test to use shared command for keycloak login
- Combined create and delete application in Cypress test to one test so it only attempts to delete if creation was successful
- Removed cypress config as it is now using shared config from gluon

## [5.52.0-bb.0] - 2024-01-08

### Changed

- Bumping application version to `v2.9.3` from `v2.8.4`
- Update chart version to 5.52.0-bb.0

## [5.46.7-bb.11] - 2024-01-05

### Changed

- Bumped Redis chart dependency to `18.3.2-bb.2`

## [5.46.7-bb.10] - 2023-12-11

### Added

- Added istio `allow-nothing` policy
- Added istio `allow-monitoring` policy
- Added istio `allow-http` policy
- Added istio `allow-http-envoy` policy
- Added istio `allow-redis` policy
- Added istio `argocd` policy
- Added istio custom policy template

## [5.46.7-bb.9] - 2023-11-28

### Updated

- Updated redis to 7.2.3
- Bumped Redis chart dependency to `18.3.2-bb.1`
- Updated bigbang base chart dependancy to `2.1.0`

## [5.46.7-bb.8] - 2023-11-03

### Updated

- Updated remote `gluon` chart dependency to 0.4.4

## [5.46.7-bb.7] - 2023-11-02

### Updated

- Updated redis to 7.2.2
- Bumped Redis chart dependency to `18.2.0-bb.0`
- Added non-root group for redis

## [5.46.7-bb.6] - 2023-10-31

### Updated

- Update redis-exporter to v1.55.0

## [5.46.7-bb.5] - 2023-10-24

### Updated

- Updating contributing file to link to external github contributions

## [5.46.7-bb.4] - 2023-10-11

### Updated

- Updated annotation for bigbang.dev/applicationVersions to 2.8.4 in chart.yaml

## [5.46.7-bb.3] - 2023-10-06

### Updated

- Updated OSCAL to 1.1.1

## [5.46.7-bb.2] - 2023-10-02

### Updated

- Updated Argo to 2.8.4

## [5.46.7-bb.1] - 2023-09-29

### Updated

- Updated Cypress test to use guestbook from repo1 git

## [5.46.7-bb.0] - 2023-09-26

### Updated

- Updated chart to 5.46.7
- Bumped Redis chart dependency to `18.0.4-bb.0`
- Updated to redis 7.2.1
- Updated to redis-exporter 1.54.0

## [5.45.2-bb.1] - 2023-09-18

### Updated

- Updated Cypress to 13.x
- Updated Cypress tests to work with new version

## [5.45.2-bb.0] - 2023-09-08

### Updated

- Updated to Argo 2.8.2

## [5.42.2-bb.1] - 2023-08-30

### Updated

- Refactored Cypress test to improve readability and maintainability
- Removed frequent use of waits and reloads
- Updated to work properly with KeyCloak enabled

## [5.42.2-bb.0] - 2023-08-15

### Updated

- Updated to Argo 2.7.10
- Updated to redis-exporter 1.52.0
- Updated to redis 7.2.0

## [5.39.0-bb.1] - 2023-08-18

### Updated

- Setting new variable for cypress test timeout
- If no value is given it will use default timeout value.

## [5.39.0-bb.0] - 2023-07-14

### Updated

- Updated to Argo 2.7.7
- Updated to dex 2.37.0
- Updated to redis 7.0.12

## [5.36.1-bb.0] - 2023-06-21

### Updated

- updated argocd appversion

## [5.33.1-bb.2] - 2023-06-06

### Updated

- Openshift conditional update to not reference enabled

## [5.33.1-bb.1] - 2023-06-06

### Updated

- Openshift conditional update

## [5.33.1-bb.0] - 2023-06-05

### Updated

- Updated to Argo 2.7.1

## [5.28.0-bb.5] - 2023-05-25

### Changed

- Add scc permissions for OpenShift
- Add NetworkAttachmentDefinition for OpenShift

## [5.28.0-bb.4] - 2023-05-22

### Fix

- Fix Cypress test

## [5.28.0-bb.3] - 2023-05-11

### Changed

- Bumped Redis chart dependency to `17.10.2-bb.1`

## [5.28.0-bb.2] - 2023-05-08

### Changed

- Bumped Redis chart dependency to `17.10.2-bb.0`

## [5.28.0-bb.1] - 2023-04-11

### Updated

- Add redis-exporter image annotation to Chart.yaml

## [5.28.0-bb.0] - 2023-04-05

### Updated

- Updated to Argo 2.6.7

## [5.27.1-bb.2] - 2023-04-06

### Updated

- Fixing issue where Argo image wasn't correctly updated to 2.6.6

## [5.27.1-bb.1] - 2023-03-30

### Updated

- Updates KeyCloak file for `argocd-apps` to match correct format

## [5.27.1-bb.0] - 2023-03-22

### Updated

- Updated to Argo 2.6.6
- Updated to dex 2.36.0

## [5.22.1-bb.2] - 2023-03-14

### Updated

- Updates Kpt file for `argocd-apps` to match 0.x.x format

## [5.22.1-bb.1] - 2023-03-01

### Updated

- Adds `argocd-apps` as a subchart of ArgoCD

## [5.22.1-bb.0] - 2023-02-22

### Updated

- Updated to Argo 2.6.1
- Updated chart to latest 5.22.1

## [5.19.15-bb.0] - 2023-02-07

### Updated

- Updated to Argo 2.5.10
- Updated chart to latest 5.19.15

## [5.17.0-bb.1] - 2023-02-06

### Fixed

- Fxied missing Argo SSO values in configmap

## [5.17.0-bb.0] - 2023-01-17

### Updated

- ArgoCD version from v2.5.3 to v2.5.5
- Chart version from 5.16.1 to 5.17.0

## [5.16.1-bb.2] - 2023-01-24

### Updated

- Changed chart name to `argocd` for OCI consistency

## [5.16.1-bb.1] - 2022-12-21

### Updated

- Update gluon to new registry1 location + latest version (0.3.2)

## [5.16.1-bb.0] - 2022-12-21

### Updated

- ArgoCD version from v2.5.0 to v2.5.3

## [5.13.0-bb.0] - 2022-12-13

### Updated

- ArgoCD version from v2.4.12 to v2.5.0
- Chart version from 5.5.7 to 5.13.0
- SSO documentation for setting up SSO login with Keycloak
- Troubleshooting documentation with information about `argocd-server` TLS configuration

## [5.5.7-bb.6] - 2022-12-15

### Changed

- Change redis subchart to utilize oci

## [5.5.7-bb.5] - 2022-11-9

### Fixed

- Removed helm template value in upgrade job that was preventing the job's sidecar from terminating

## [5.5.7-bb.4] - 2022-11-9

### Added

- Job sidecar termination

## [5.5.7-bb.3] - 2022-11-7

### Added

- Job that adds annotations and labels to custom resource definitions so they can be managed by helm

## [5.5.7-bb.2] - 2022-10-31

### Updated

- Upgraded Redis sub-chart to 16.12.3-bb.3

### Changed

- Deleted metrics PeerAuthentication policy exceptions to support mTLS metrics scraping

### Fixed

- Fixed indent on SSO configmap

## [5.5.7-bb.1] - 2022-10-20

### Fixed

- Moved crds out of helm templates

## [5.5.7-bb.0] - 2022-10-12

### Updated

- Upstream chart updated to 5.5.7
- ArgoCD image to 2.4.12

## [4.10.8-bb.0] - 2022-08-29

### Updated

- Upstream chart updated to 4.10.8
- ArgoCD image to 2.4.10
- redis updated to 7.0.4

## [4.10.0-bb.1] - 2022-08-01

### Added

- Keycloak SSO integration cypress test
- Had to revert to older gluon `0.2.8` due to an issue with the new cypress version

## [4.10.0-bb.0] - 2022-07-22

### Updated

- argocd image upgrade `v2.4.4` --> `v2.4.7`
- redis dependency chart upgrade `16.12.3-bb.1` --> `16.12.3-bb.2`

## [4.9.13-bb.0] - 2022-07-13

### Added

- Added keycloak SSO integration test

## [4.9.12-bb.2] - 2022-07-13

### Updated

- Updated `containerSecurityContext` for controller,dex,server,reposerver and redis to explicitly set `runAsUser`/`runAsGroup`/`runAsNonRoot`, and capabilities drop all

## [4.9.12-bb.1] - 2022-07-13

### Fixed

- argo to `v2.4.4`

## [4.9.12-bb.0] - 2022-07-11

### Updated

- Redis dependency version bump to `16.12.3-bb.1` appVersion `6.2.7`
- kpt'd upstream chart to `argo-cd-4.9.12`
- Updated argo to `v2.4.4`

### Changed

- Updated gluon library to 0.2.10

## [4.2.3-bb.3] - 2022-05-31

### Changed

- Redis dependency version bump to `16.9.2-bb.0` appVersion `6.2.6`

## [4.2.3-bb.2] - 2022-04-08

### Added

- Added OSCAL component for ArgoCD

## [4.2.3-bb.1] - 2022-03-28

### Added

- Added Tempo Zipkin Egress Policy

## [4.2.3-bb.0] - 2022-03-28

### Updated

- Updated to latest IB image 2.3.2
- Updated to latest upstream chart 4.2.3

## [4.2.2-bb.0] - 2022-03-22

### Updated

- Updated to latest IB image 2.3.1
- Updated to latest upstream chart for 2.3.1 images, chart version 4.2.2

## [3.33.5-bb.8] - 2022-03-15

### Fixed

- Fixed duplicate envFrom key in repo server deployment

## [3.33.5-bb.7] - 2022-03-10

### Changed

- Updated Redis networkPolicies to have better conditionals

## [3.33.5-bb.6] - 2022-03-02

### Changed

- Added ability to overide the default argocd redis fullname

## [3.33.5-bb.5] - 2022-03-01

### Added

- Added network policy for Redis clients

## [3.33.5-bb.4] - 2022-03-01

### Changed

- Added AWS credentials mounting for repo server

## [3.33.5-bb.3] - 2022-02-22

### Changed

- Update PeerAuthentication documentation

## [3.33.5-bb.2] - 2022-02-10

### Changed

- Added PeerAuthentication file for mTLS between argocd and istio

## [3.33.5-bb.1] - 2022-02-10

### Fixed

- Fixed SSO, monitoring values passthroughs, and redis-bb

## [3.33.5-bb.0] - 2022-02-09

### Updated

- Updated to latest IB image 2.2.5
- Updated to latest upstream chart for 2.2.5 images, chart version 3.33.5-bb.0

## [3.28.1-bb.0] - 2022-02-01

### Updated

- Updated to latest IB image 2.1.8
- Updated to latest upstream chart for 2.1.x images, chart version 3.28.1

## [3.27.1-bb.5] - 2022-01-31

### Updated

- Update Chart.yaml to follow new standardization for release automation
- Added renovate check to update new standardization

## [3.27.1-bb.4] - 2022-01-21

### Deleted

- Relocated bbtests from `test-values.yaml` to `values.yaml`

## [3.27.1-bb.3] - 2022-01-11

### Deleted

- Removed duplicate .yaml files

## [3.27.1-bb.2] - 2022-01-10

### Updated

- Update redis sub-chart dependency to version `14.1.0-bb.6`

### Added

- `redis-bb` commonConfiguration item to set `maxmemory` inside redis cluster for accurate Prometheus alerts

## [3.27.1-bb.1] - 2022-01-03

### Updated

- monitoring allow networkpolicy adding 9121 redis metrics ingress whitelist

## [3.27.1-bb.0] - 2021-12-10

### Updated

- Updated argocd image to 2.1.7
- Updated argocd chart to 3.27.1
- Updated dex image to 2.30.0
- Updated redis image to 6.2.6
- Updated redis-bb chart to 14.1.0-bb.5
- Cypress test fixes to work after upgrade

## [3.6.8-bb.12] - 2021-11-18

### Changed

- Updated the cypress test to make it more tolerant of slow clusters, including:
  - A new function to take screenshots of the event log in test app (uncomment when debugging)
  - Recursive functions to replace certain steps in the test where waiting for certain conditions won't work without action from the user, such as closing a pane and reopening it
  - Now logging the test's progress to the cypress container's stdout, which is passed into the pipeline output
- Updated to gluon 0.2.4

## [3.6.8-bb.11] - 2021-11-17

### Changed

- Rename hostname to domain

## [3.6.8-bb.10] - 2021-10-13

### Changed

- Service port names for proper istio traffic handling

## [3.6.8-bb.9] - 2021-09-30

### Added

- Ingress network policy for prometheus scraping

## [3.6.8-bb.8] - 2021-09-16

### Changed

- Increased the resources for redis-bb, controller, and repoServer

## [3.6.8-bb.7] - 2021-09-08

### Changed

- Removed buggy test policy that causes failures when cidr is set

## [3.6.8-bb.6] - 2021-08-20

### Added/Updated

- Added resource requests and limits for argocd pods
- Updated redis-bb version to 14.1.0-bb.3 which sets redis resource requests/limits

## [3.6.8-bb.5] - 2021-08-11

### Fixes

- redis-bb service endpoint fix

## [3.6.8-bb.4] - 2021-07-13

### Updated

- Updated redis-bb version to 14.1.0-bb.2 which uses new bigbang/base cleanUpgrade image

## [3.6.8-bb.3] - 2021-07-01

### Fixed

- Fixed scraping network policy podSelector

## [3.6.8-bb.2] - 2021-06-28

### Fixed

- Fixed how Bigbang HA redis chart is called from argocd chart.

## [3.6.8-bb.1] - 2021-06-28

### Upgrade

- Updated bigbang HA redis chart.

## [3.6.8-bb.0] - 2021-06-17

### Upgrade

- KPT updated and moved argocd to v2.0.1, redis to redis6:6.2.4, and dex to v2.28.1

## [2.14.7-bb.7] - 2021-06-22

### Fixed

- Issues with networkPolicies not always allowing git repo access

## [2.14.7-bb.6] - 2021-06-17

### Added

- Added bigbang network policies.

## [2.14.7-bb.5] - 2021-05-17

### Added

- Added bigbang monitoring enabled (default false) which if enabled will enable metrics.

## [2.14.7-bb.4] - 2021-05-13

### Changed

- Moved cypress testing to the new helm test structure.

## [2.14.7-bb.3] - 2021-03-26

### Added

- Added documemtation for affinity

## [2.14.7-bb.2] - 2021-03-23

### Changed

- Minor changes to deployments

## [2.14.7-bb.1] - 2021-03-23

### Changed

- Moved redis-ha chart to redis-bb chart

## [0.0.1] - 2020-06-10s

### Changed

- Upstream argocd version - v1.5.5-0.1.2

## [0.2.5] - 2020-08-9

### Changed

- Iron Bank ArgoCD - v1.6.1 with kustomize 3.8.0 plugins helmGenerator 0.2.0 SopGenerator 1.3.0
