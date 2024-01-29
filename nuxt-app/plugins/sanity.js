import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  const config = useRuntimeConfig()
  return {
    provide: {
      sanity: createClient({
        projectId: config.public.SANITY_STUDIO_PROJECT_ID,
        dataset: 'production',
        useCdn: false, // set to `false` to bypass the edge cache
        apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
        // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
      })
    }
  }
})

