FROM argoproj/argocd:v1.6.1

# Switch to root for the ability to perform install
USER root

# Set the kustomize home directory
ENV XDG_CONFIG_HOME=$HOME/.config
ENV KUSTOMIZE_PLUGIN_PATH=$XDG_CONFIG_HOME/kustomize/plugin/

# Install plguins
COPY --from=registry.dsop.io/platform-one/plugins/kustomize/all:v0.1.1 ${KUSTOMIZE_PLUGIN_PATH}/ ${KUSTOMIZE_PLUGIN_PATH}/

# Switch back to non-root user
USER argocd
