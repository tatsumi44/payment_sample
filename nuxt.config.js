module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'payment_app',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    modules: [
      '@nuxtjs/axios',
      '@nuxtjs/proxy'
    ],
    proxy: {
      '/api': {
        target: 'https://us-central1-mercafe-ba882.cloudfunctions.net',
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
    script: [{
      src: 'https://js.stripe.com/v3/'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    transpile: [
      '/plugins',
    ],
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
