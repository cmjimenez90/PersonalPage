FROM node:8-alpine as build
COPY  . /build/website
WORKDIR /build/website
RUN npm install
RUN npm run generate

FROM nginx
COPY --from=build /build/website/dist /usr/share/nginx/html