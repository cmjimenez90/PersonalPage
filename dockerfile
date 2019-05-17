
FROM node:8-alpine as dev
COPY package*.json /usr/src/app/
WORKDIR /usr/src/app
RUN npm install
COPY . /usr/src/app
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000
CMD ["npm", "run", "dev"]


FROM node:8-alpine as build-prod
COPY package*.json /usr/src/app/
WORKDIR /usr/src/app
RUN npm ci --only=production
COPY . /usr/src/app
RUN npm run generate

FROM nginx
COPY --from=build-prod /usr/src/app/website/dist /usr/share/nginx/html