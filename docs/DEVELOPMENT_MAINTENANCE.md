# Upgrading to a new version

The below details the steps required to update to a new version of the Argocd package.

1. Review the [upstream release notes](https://github.com/argoproj/argo-cd/releases) for the update you are going to, as well as any versions skipped over between the last BB release and this one. Note any breaking changes and new features.

2. Use `kpt` to pull the upstream chart via the latest tag that corresponds to the application version

3. Based on the upstream changelog review from earlier, make any changes required to resolve breaking changes and reconcile the Big Bang modifications.

4. Modify the `version` in `Chart.yaml`. Also modify the `appVersion` and the `bigbang.dev/applicationVersions` to the new upstream version of Argocd.

5. Update `CHANGELOG.md` adding an entry for the new version and noting all changes (at minimum should include `Updated Mattermost to x.x.x`).

6. Generate the `README.md` updates by following the [guide in gluon](https://repo1.dso.mil/platform-one/big-bang/apps/library-charts/gluon/-/blob/master/docs/bb-package-readme.md).

7. Open an MR in "Draft" status and validate that CI passes. This will perform a number of smoke tests against the package, but it is good to manually deploy to test some things that CI doesn't. Follow the steps below for manual testing.

8. Once all manual testing is complete take your MR out of "Draft" status and add the review label.

# Testing for updates

NOTE: For these testing steps it is good to do them on both a clean install and an upgrade. For clean install, point argocd to your branch. For an upgrade do an install with argocd pointing to the latest tag, then perform a helm upgrade with argocd pointing to your branch.

You will want to install with:
- Argocd enabled
    - Set admin password for testing determinism
    - ``` 
        configs:
            secret:
                argocdServerAdminPassword: '$2a$10$rUDZDckdDZ2TEwk9PDs3QuqjkL58qR1IHE1Kj4MwDx.7/m5dytZJm'
        ```
- Istio enabled

Testing Steps:
- Ensure all resources have reconciled and are healthy
- Ensure the application is resolvable at `argocd.bigbang.dev`
- Run the cyrpress tests to confirm functionality of adding and deleting an application via the UI

When in doubt with any testing or upgrade steps ask one of the CODEOWNERS for assistance.
