# Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---
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
Added documemtation for affinity

## [2.14.7-bb.2] - 2021-03-23
Minor changes to deployments

## [2.14.7-bb.1] - 2021-03-23
Moved redis-ha chart to redis-bb chart

## [0.0.1] - 2020-06-10s
Upstream argocd version - v1.5.5-0.1.2

## [0.2.5] - 2020-08-9
Iron Bank ArgoCD - v1.6.1 with kustomize 3.8.0 plugins helmGenerator 0.2.0 SopGenerator 1.3.0

