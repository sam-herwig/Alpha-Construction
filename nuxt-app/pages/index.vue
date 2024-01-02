<template>
  <div class="home-page">
    <Placeholder 
      title="Header"
    />
    <!-- <Placeholder 
      :title="home.homeTitle"
      :aspect-ratio="2"
    /> -->
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

<script>
import { groq } from '@nuxtjs/sanity';

// console.log(groq);
import { typeFilter, imageProjection } from '@/utils/groq-common';
 const query =  typeFilter('home');
 console.log(query);
// console.log(typeFilter)
export default {

  asyncData({ $sanity }) {
    return $sanity.fetch(query)
  },
 
  // asyncData({ query, $sanity }) {
  //   const request = groq` {
  //    ${typeFilter('home')} {
  //       homeTitle
  //     },
  //   }
  //   `;
  //   // const result = await (query.preview === 'true' ? $sanity.preview.fetch(request) : $sanity.fetch(request));
  //   const result = await ($sanity.fetch(request));
  //   console.log(result);
  //   return result;
  // },

  mounted() {
    console.log(query);
  }
}

</script>