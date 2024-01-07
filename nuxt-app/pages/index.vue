<template>
  <div class="home-page">
    <Placeholder 
      title="Header"
    />
    <!-- <Placeholder 
      :title="title"
      :aspect-ratio="2"
    /> -->
    <Hero
      :title="title"
    />
     <Placeholder 
      title="About"
      :aspect-ratio="2"
      :to="'/about'"
    />
    <Placeholder 
      title="Work Carousel"
      :aspect-ratio="2"
    />
    <Placeholder 
      title="Footer"
      :aspect-ratio="3"
    />
  </div>
</template>

<script >
import { typeFilter, imageProjection } from '@/utils/groq-common';
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type == "home"][0].homeTitle`
  // const query = groq` {
  //    ${typeFilter('home')} {
  //       homeTitle
  //     },
  //   }
  // `;

export default {
  data() {
    return {
      title: ''
    }
  },
  async fetch() {
    console.log(this.title)
    console.log(await this.$sanity.fetch(query));
    this.title = await this.$sanity.fetch(query)
    
  },
  // asyncData({ $sanity }) {
  //   return $sanity.fetch(query)
  // },
  
  mounted() {
   
  },
}

</script>