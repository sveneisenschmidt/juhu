FROM node:10-alpine

LABEL org.label-schema.name="yuhu" \
      org.label-schema.url="https://github.com/sveneisenschmidt/yuhu" \
      org.label-schema.vcs-url="https://github.com/sveneisenschmidt/yuhu.git"

RUN apk add --no-cache \
    bash

WORKDIR /data

COPY ./ /data

RUN yarn --production=false
