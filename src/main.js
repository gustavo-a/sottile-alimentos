// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueGtag from 'vue-gtag'

if (process.isClient) {
  const WebFont = require('webfontloader')

  WebFont.load({
    google: {
      families: ['Raleway:400,600,800&display=swap']
    }
  })
}

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueGtag, {
    config: { id: 'UA-157606195-1' }
  })
  head.htmlAttrs = { lang: 'pt-BR' }
}
