// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: 'qbtech.local',
    https: {
      // key: './ssl/localhost-key.pem',
      // cert:'./ssl/localhost.pem'
      key: './ssl/qbtech.local-key.pem',
      cert: './ssl/qbtech.local.pem',
    },
    port: 443,
  },
  app:{
    head:{
      htmlAttrs:{
        lang:'en',
      }
    },
    buildAssetsDir:"/qb_technology_assets/",
    rootId:"__qbtechnology"
  },
  site: {
    url: process.env.SITE_URL,
    name: 'QB Technology - Boosting Business Through Digitization',
    description: 'QB-Tech offers fast, secure, reliable, and highly performant web technologies to help businesses grow through smart, innovative solutions.',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  extends: [
    process.env.NODE_ENV == 'production' ? 'github:qb-technology/ui' : '../ui'
  ],
  modules: [// '@logto/nuxt',
    '@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxtjs/seo', '@vueuse/nuxt'],
  css: [
    '~/assets/css/main.css',
  ],
  runtimeConfig: {
    public: {
      storage_bucket_url: process.env.STORAGE_BUCKET_URL,
    },
  },
  ui: {
    global: true,
  },
  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
    ],
  },
  // logto:{
  //   pathnames:{
  //     signIn:'/auth/login',
  //     signOut:'/auth/logout',
  //     callback:'/auth/callback'
  //   }
  // },
  image: {
    domains: [process.env.STORAGE_BUCKET_URL ?? ''],
    quality: 90,
    format: ['avif', 'webp', 'png', 'jpg'],
  },
  eslint: {
    config: {
      stylistic: {
        indent: 4,

      },

    },
  },
  nitro:{
    prerender:{
      autoSubfolderIndex: false
    }
  }
})
