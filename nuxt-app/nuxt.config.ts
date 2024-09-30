require('dotenv').config({ path: '.env' });
const defaultSiteName = 'Alpha Construction';
const defaultTitle = 'Alpha Construction';
const defaultDescription = 'Alpha Construction was founded in 1995 to provide residential construction services in Summit County.';
const defaultUrl = 'https://alphaconstructionbreck.com/';
const defaultImage = 'https://cdn.sanity.io/images/u2pvdjb3/production/731a0e68021cdaa0298bfe7172650c9a4470c914-1116x834.png';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: defaultTitle,
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { hid: 'format-detection', name: 'format-detection', content: 'telephone=no' },
        { hid: 'description', name: 'description', content: defaultDescription },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:site_name', property: 'og:site_name', content: defaultSiteName },
        { hid: 'og:title', property: 'og:title', content: defaultTitle },
        { hid: 'og:description', property: 'og:description', content: defaultDescription },
        { hid: 'og:image', property: 'og:image', content: defaultImage },
        { hid: 'og:url', property: 'og:url', content: defaultUrl },
        { hid: 'twitter:title', name: 'twitter:title', content: defaultTitle },
        { hid: 'twitter:description', name: 'twitter:description', content: defaultDescription },
        { hid: 'twitter:image', name: 'twitter:image', content: defaultImage },
        { hid: 'twitter:url', name: 'twitter:url', content: defaultUrl },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
    },
  },

  devtools: { enabled: true }, 

  css: [
    // SCSS file in the project
    "~/assets/styles/app.scss", // you should add main.scss somewhere in your app
  ],
 components: true,
  vite: {
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_vars.scss";',
        },
      },
    },
    optimizeDeps: { exclude: ["fsevents"] },
  }, 
})
