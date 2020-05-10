FROM argoproj/argocd:v1.5.4

# Switch to root for the ability to perform install
USER root

# Set the kustomize home directory
ENV XDG_CONFIG_HOME=$HOME/.config
ENV KUSTOMIZE_PLUGIN_PATH=$XDG_CONFIG_HOME/kustomize/plugin/

# Install ksops
# Override the default kustomize executable with the Go built version
COPY --from=registry.dsop.io/platform-one/plugins/kustomize/all-plugins:v0.1.0 /usr/local/bin/kustomize /usr/local/bin/kustomize

# Copy KSOPS plugin from pre-built docker image
# TODO: Build our own?
COPY --from=viaductoss/ksops:v2.1.0 /go/src/github.com/viaduct-ai/kustomize-sops/*  $KUSTOMIZE_PLUGIN_PATH/viaduct.ai/v1/ksops/

# Copy plugins from p1.dsop.io/v1
COPY --from=registry.dsop.io/platform-one/plugins/kustomize/all-plugins:v0.1.0 ${KUSTOMIZE_PLUGIN_PATH}/p1.dsop.io/v1/ ${KUSTOMIZE_PLUGIN_PATH}/p1.dsop.io/v1/

# Switch back to non-root user
USER argocd
