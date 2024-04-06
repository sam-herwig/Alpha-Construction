require('dotenv').config({ path: '.env' });

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

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
 components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
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
