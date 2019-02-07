const pkg = require('./package')
require('dotenv').config();

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '有效調整體質 - 雀巢能恩水解成長配方',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        name: 'robots',
        content: process.env.ENV == 'DEV' ? 'noarchive, nofollow, noimageindex, noindex, noodp, nosnippet, notranslate, noydir' : 'follow, index',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
    'nuxt-sass-resources-loader',
  ],
  sassResources: [
    '@/assets/scss/style.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
