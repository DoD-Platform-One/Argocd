# Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---
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

