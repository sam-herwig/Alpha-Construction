require('dotenv').config({ path: '.env' });
const defaultSiteName = 'Alpha Construction';
const defaultTitle = 'Alpha Construction | Custom Home Builder in Breckenridge, CO';
const defaultDescription = 'Alpha Construction has been building luxury custom homes in Summit County since 1995. Specializing in mountain home construction in Breckenridge, Frisco, and Keystone.';
const defaultUrl = 'https://alphaconstructionbreck.com/';
const defaultImage = 'https://cdn.sanity.io/images/u2pvdjb3/production/731a0e68021cdaa0298bfe7172650c9a4470c914-1116x834.png';

// LocalBusiness structured data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  'name': 'Alpha Construction',
  'description': defaultDescription,
  'url': defaultUrl,
  'logo': defaultImage,
  'image': defaultImage,
  'telephone': '970-485-5345',
  'email': 'merrick@alphaconstructionbreck.com',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Breckenridge',
    'addressRegion': 'CO',
    'addressCountry': 'US'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 39.4817,
    'longitude': -106.0384
  },
  'areaServed': [
    'Breckenridge, CO',
    'Frisco, CO',
    'Keystone, CO',
    'Silverthorne, CO',
    'Dillon, CO',
    'Summit County, CO'
  ],
  'priceRange': '$$$',
  'openingHours': 'Mo-Fr 08:00-17:00',
  'sameAs': []
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sitemap'
  ],

  site: {
    url: 'https://alphaconstructionbreck.com',
    name: 'Alpha Construction'
  },

  sitemap: {
    strictNuxtContentPaths: true
  },

  app: {
    head: {
      title: defaultTitle,
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'description', content: defaultDescription },
        { name: 'keywords', content: 'custom home builder, Breckenridge construction, Summit County contractor, mountain home builder, luxury home construction, Colorado home builder' },
        { name: 'author', content: 'Alpha Construction' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: defaultSiteName },
        { property: 'og:title', content: defaultTitle },
        { property: 'og:description', content: defaultDescription },
        { property: 'og:image', content: defaultImage },
        { property: 'og:url', content: defaultUrl },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:title', content: defaultTitle },
        { name: 'twitter:description', content: defaultDescription },
        { name: 'twitter:image', content: defaultImage },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: defaultUrl }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(structuredData)
        }
      ]
    }
  },

  runtimeConfig: {
    // Private keys (server-side only)
    resendApiKey: process.env.RESEND_API_KEY,
    // Public keys (exposed to client)
    public: {
      SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
      siteUrl: defaultUrl
    },
  },

  devtools: { enabled: true }, 

  css: [
    "~/assets/styles/app.scss",
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
