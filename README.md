# PersonalPage

Personal Web page based on nuxt vue vuetify and buttercms

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

# run local docker static site
$ docker build --rm -f "dockerfile" -t personalpage:latest .
$ docker run --rm -d -p 80:80/tcp personalpage:latest

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
