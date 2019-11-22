import { butter } from './buttercms'
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'The Problem Solver | Carlos Jimenez',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/cj_icon_base.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/style/app.styl', '~/assets/style/main.styl'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vuetify'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    '@nuxtjs/feed'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  googleAnalytics: {
    id: 'UA-146223618-1'
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  watchers: {
    webpack: {
      poll: true
    }
  },
  feed: [
    {
      path: '/blog/feed.xml',
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
      async create (feed) {
        feed.options = {
          title: "CMJImenez Blog Feed",
          description: "RSS Feed for Carlos Jimenez's Blog",
          id: "https://www.cmjimenez.com",
          link: "https://www.cmjimenez.com/blog"
        }
        feed.author = {
          name: "Carlos M Jimenez",
          email: "developer@cmjimenez.com",
          link: "https://www.cmjimenez.com/blog"
        }

        const response = await butter.post.list();
        for(const post of response.data.data) {
          feed.addItem({
            title: post.title,
            description: post.description,
            link: post.url,
            id: post.slug,
            content: post.body
          })
        }
      }
    }
  ],
  generate: {
    routes: async function() {
      const response = await butter.post.list()
      return response.data.data.map(post => {
        return {
          route: '/blog/' + post.slug,
          payload: post
        }
      })
    }
  }
}
