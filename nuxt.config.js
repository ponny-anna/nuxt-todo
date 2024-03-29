const webpack = require('webpack')

export default {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [
    { src: '~/plugins/persistedstate.js', ssr: false }
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    'nuxt-buefy',
    '@nuxtjs/dotenv'
  ],
  axios: {
  },
  build: {
    extend (config, ctx) {
    },
    
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ]
  }
}
