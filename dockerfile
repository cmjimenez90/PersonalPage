FROM node:latest as dev
ENV WRK_DIR /app/
USER node
COPY package*.json ${WRK_DIR}
WORKDIR ${WRK_DIR}
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000
ENTRYPOINT /bin/bash