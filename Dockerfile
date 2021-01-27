# Base builder (needs to be buster)
FROM golang:1.13-buster as build

ENV GOARCH="amd64"
ENV GOENV="linux"

WORKDIR /plugins

ARG KUSTOMIZE_PLUGIN_PATH=/.config/kustomize/plugin

# --------------------------------------------------------------------------
# Kustomize Generator
# --------------------------------------------------------------------------
# Kustomization
ARG KUSTOMIZE_VERISON="3.8.0"
RUN curl -Lo kustomize.tar.gz https://github.com/kubernetes-sigs/kustomize/releases/download/kustomize/v${KUSTOMIZE_VERISON}/kustomize_v${KUSTOMIZE_VERISON}_linux_amd64.tar.gz && \
    tar -xzf kustomize.tar.gz && \
    chmod +x kustomize

# --------------------------------------------------------------------------
# Helm Generator
# --------------------------------------------------------------------------
ARG HELMGENERATOR_NAME="HelmGenerator"
ARG HELMGENERATOR_VERSION="0.2.0"
ARG HELMGENERATOR_URL="https://github.com/joshrwolf/kustomize-helmgenerator/releases/download/v${HELMGENERATOR_VERSION}/${HELMGENERATOR_NAME}_${HELMGENERATOR_VERSION}_${GOENV}_${GOARCH}"

RUN curl -Lo ${HELMGENERATOR_NAME} ${HELMGENERATOR_URL} && \
    chmod +x ${HELMGENERATOR_NAME}

# --------------------------------------------------------------------------
# Sops Generator
# --------------------------------------------------------------------------
ARG SOPSGENERATOR_NAME="SopsSecretGenerator"
ARG SOPSGENERATOR_VERSION="1.3.0"
ARG SOPSGENERATOR_URL="https://github.com/goabout/kustomize-sopssecretgenerator/releases/download/v${SOPSGENERATOR_VERSION}/${SOPSGENERATOR_NAME}_${SOPSGENERATOR_VERSION}_${GOENV}_${GOARCH}"

RUN curl -Lo ${SOPSGENERATOR_NAME} ${SOPSGENERATOR_URL} && \
    chmod +x ${SOPSGENERATOR_NAME}

# Move things into their correct folder

# Copy over to IB container
FROM registry.dso.mil/platform-one/apps/argocd/ib-argocd:v1.6.1-ironbank AS IBArgo

USER root

ENV XDG_CONFIG_HOME=/.config
ENV KUSTOMIZE_PLUGIN_PATH=${XDG_CONFIG_HOME}/kustomize/plugin

# Copy over plugins
COPY --from=build /plugins/HelmGenerator ${KUSTOMIZE_PLUGIN_PATH}/p1.dso.mil/v1beta1/helmgenerator/
COPY --from=build /plugins/SopsSecretGenerator ${KUSTOMIZE_PLUGIN_PATH}/goabout.com/v1beta1/sopssecretgenerator/
COPY --from=build /plugins/kustomize /usr/local/bin/kustomize

USER argocd
