export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: 'Co-ReTweet | お金のかからない集客ツール',
    meta: [
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://co-retweet.web.app/' },
      { property: 'og:title', content: 'Co-ReTweet' },
      { property: 'og:description', content: 'お金のかからない集客ツール' },
      { property: 'og:image', content: 'https://co-retweet-pre.web.app/thumbnail.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@webshina' },
    ],
    link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Hind:wght@600&family=Lobster&display=swap' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: { 
    dir: 'public' 
  } 
}
