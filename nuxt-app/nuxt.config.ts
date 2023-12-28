// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  }
})
