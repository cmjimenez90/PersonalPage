FROM node:latest as dev
ENV WRK_DIR /app/
COPY package*.json ${WRK_DIR}
WORKDIR ${WRK_DIR}
RUN npm install
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000


FROM node:latest as build-prod
ENV CONTAINER_DIR /app
WORKDIR ${CONTAINER_DIR}
COPY package*.json ./
RUN npm ci --only=production
COPY ./ ./
RUN npm run generate

FROM nginx as prod
COPY --from=build-prod /usr/src/app/website/dist /usr/share/nginx/html