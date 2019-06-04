FROM node:latest as build-prod
ENV CONTAINER_DIR /app
WORKDIR ${CONTAINER_DIR}
COPY ./ ./
RUN npm install
RUN npm run generate

FROM nginx as prod
COPY --from=build-prod /app/dist /usr/share/nginx/html