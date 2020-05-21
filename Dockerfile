FROM argoproj/argocd:v1.5.5

# Switch to root for the ability to perform install
USER root

# Set the kustomize home directory
ENV XDG_CONFIG_HOME=$HOME/.config
ENV KUSTOMIZE_PLUGIN_PATH=$XDG_CONFIG_HOME/kustomize/plugin/

# Install kustomize
COPY --from=registry.dsop.io/platform-one/plugins/kustomize/all:master /go/bin/kustomize /usr/local/bin/kustomize

# Install plguins
COPY --from=registry.dsop.io/platform-one/plugins/kustomize/all:master ${KUSTOMIZE_PLUGIN_PATH}/ ${KUSTOMIZE_PLUGIN_PATH}/

# Switch back to non-root user
USER argocd
