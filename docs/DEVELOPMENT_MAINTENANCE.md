# Development and Maintenance Guide

  __Table of Contents__

* [Upgrading to a new version](#upgrading-to-a-new-version)
* [Testing for updates](#testing-for-updates)
  * [Testing steps](#testing-steps)
* [Testing with Monitoring](#testing-with-monitoring)
* [Deploying with Keycloak](#deploying-with-keycloak)
<!-- Disabled until Keycloak tests in Cypress work  -->
  <!-- * [Testing with Keycloak](#testing-with-keycloak) -->

This wrapper chart is based on the [argo-cd](https://github.com/argoproj/argo-cd) helm chart maintained by ArgoCD, however it is renamed to `argocd` in Big Bang. You can override values in the ArgoCD chart by using the `upstream` heading. See [dev-overrides.yaml](./dev-overrides.yaml#L18) for an example.

There are certain integrations within the bigbang ecosystem and this package that require additional testing outside of the specific package tests ran during CI.  This is a requirement when files within those integrations are changed, as to avoid causing breaks up through the bigbang umbrella.  Currently, these include changes to the istio implementation within argocd (see: [istio templates](../chart/templates/bigbang/istio/), [network policy templates](../chart/templates/bigbang/networkpolicies/), [service entry templates](../chart/templates/bigbang/serviceentries/)).

## Upgrading to a new version

The below details the steps required to update to a new version of the Argocd package. If you are performing a renovate, renovatebot may have performed most of these steps for you.

1. Review the [upstream release notes](https://github.com/argoproj/argo-cd/releases) for the update you are going to perform, as well as any versions skipped over between the last BB release and this one. Note any breaking changes and new features.

1. Modify the `version` in [`Chart.yaml`](../chart/Chart.yaml#L6). Also modify the [`appVersion`](../chart/Chart.yaml#L2) and the [`bigbang.dev/applicationVersions`](../chart/Chart.yaml#L39) to the new upstream version of Argocd.  Also confirm any additional dependency updates are in place in the [`Chart.yaml`](../chart/Chart.yaml#L19).

1. Once you have configured the [`Chart.yaml`](../chart/Chart.yaml) with the proper versions (or validated from renovate changes), use `helm dependency update chart/` from the root of the repo to pull the new version of the upstream argocd chart, as well as any dependencies into the [`chart/charts/`](../chart/charts) directory.

1. Update [`CHANGELOG.md`](../CHANGELOG.md#L7) adding an entry for the new version and noting all changes (at minimum should include `Updated Argocd to x.x.x`).

1. Generate the [`README.md`](../README.md) updates by following the [guide in gluon](https://repo1.dso.mil/platform-one/big-bang/apps/library-charts/gluon/-/blob/master/docs/bb-package-readme.md).

1. Open an MR in "Draft" status and validate that CI passes. This will perform a number of smoke tests against the package, but it is good to manually deploy to test some things that CI doesn't. Follow the [Testing for updates](#testing-for-updates) steps below for manual testing.

1. Once all manual testing is complete take your MR out of "Draft" status and add the review label. Be sure to include screenshots of a successful deployment in kubernetes, as well as a screenshot of the application loaded in the browser.

## Testing for updates

NOTE: For these testing steps it is good to do them on both a clean install and an upgrade. For clean install, point argocd to your branch. For an upgrade do an install with argocd pointing to the latest tag, then perform a helm upgrade with argocd pointing to your branch.

You will want to install with:

- Istio enabled
- Argocd enabled
  - Set `admin` password for testing determinism (this sets password to `Password123`)

This can be accomplished by using the overrides listed in [dev-overrides.yaml](./dev-overrides.yaml)

## Testing Steps

1. Deploy a Big Bang cluster by following the [quickstart](https://repo1.dso.mil/big-bang/bigbang/-/blob/master/docs/guides/deployment-scenarios/quickstart.md) guide, including [dev-overrides.yaml](./dev-overrides.yaml) in your deployment.

1. Check to ensure the helm chart has deployed successfully

      ```shell
      kubectl get helmrelease argocd -n bigbang
      ```

      The __READY__ column should be `True` and the __STATUS__ should state the Helm install succeeded

      ```log
      NAME     AGE     READY   STATUS
      argocd   3h26m   True    Helm install succeeded for release argocd/argocd-argocd.v1 with chart argocd@8.5.8-bb.2
      ```

1. Ensure the application is resolvable by visiting [`argocd.dev.bigbang.mil`](https://argocd.dev.bigbang.mil)

1. Run the cypress tests to confirm functionality of adding and deleting an application via the UI

    1. Follow the [Cypress Installation Documentation](https://docs.cypress.io/app/get-started/install-cypress) to install Cypress on your local machine

    1. Navigate to [/chart/tests](../chart/tests/) and run cypress using the [devmaint.config.js](../chart/tests/cypress/config/devmaint.config.js) configuration file. This file includes default overrides necessary for Cypress to run properly on your local machine.

    ```shell
    cd chart/tests/

    cypress run --config-file cypress/config/devmaint.config.js
    ```

    1. After reviewing the log output and validating the test was successful, navigate to [/chart/tests/cypress/videos](../chart/tests/cypress/videos) to view the test video. If you are performing these steps as part of a renovate, attach this video to your MR.

When in doubt with any testing or upgrade steps ask one of the [CODEOWNERS](../CODEOWNERS) for assistance.

## Testing with monitoring

You can test with monitoring by uncommenting the `server:` section in [dev-overrides.yaml](./dev-overrides.yaml#L42). Metrics for each component must be enabled, and you can do so by uncommenting each section to enable it.

Once deployed, you can validate that metrics are working by visiting [Prometheus](https://prometheus.dev.bigbang.mil/query) and running the following query

```promql
  argocd_info
```

The resulting output should look similar to the following:

```log
argocd_info{container="server", endpoint="http-metrics", instance="10.42.2.33:8083", job="argocd-argocd-server-metrics", namespace="argocd", pod="argocd-argocd-server-8d8db9f5c-xzld4", service="argocd-argocd-server-metrics", version="v3.1.8+becb020"}
```

This confirms that metrics are flowing into Prometheus, and can be used to build dashboards in Grafana.

## Deploying with Keycloak

When deploying with Keycloak, it is strongly recommended to use Keycloak's [Testing Environment Setup](https://repo1.dso.mil/big-bang/product/packages/keycloak/-/blob/main/docs/DEVELOPMENT_MAINTENANCE.md?ref_type=heads#testing-environment-setup) instructions to create a working keycloak environment. Additionally, you will want to uncomment the OIDC Parameters in [dev-overrides.yaml](./dev-overrides.yaml#L23) to configure the keycloak integration with ArgoCD

<!-- Disabling this section until Keycloak testing in Cypress works -->
<!-- ## Testing with Keycloak

After following instructions in the [Deploying with Keycloak](#deploying-with-keycloak) section, you will need to set `keycloak_test_enable` to `true` in [devmaint.config.js](../chart/tests/cypress/config/devmaint.config.js#L11) to allow cypress tests to log in via keycloak.

You can continue following the [Testing Steps](#testing-steps) with these changes to complete your testing. You should also notice a `Log in via Keycloak` button on the login screen when visiting [argocd.dev.bigbang.mil](https://argocd.dev.bigbang.mil). -->
