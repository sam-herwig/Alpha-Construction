<template>
  <div class="home-page">
    <Placeholder 
      title="Header"
    />
    <Placeholder 
      :title="data.home.homeTitle"
      :aspect-ratio="2"
    />
    <!-- <Hero
      :title="title"
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

<script setup>
import groq from 'groq';

const { $sanity } = useNuxtApp();
const request = groq`{
    'home': *[_type == "home"]{
            homeTitle,
            homeDescription,
          }[0]
  }`;

  const data = await $sanity.fetch(request)
  console.log(data.home.homeTitle) 

  //   const { data, refresh } = $sanity(request)

  //   console.log( data)

  // const data = await useSanityData({
  //   query: request,
  // })

  // console.log(data);

// const { data } = await useAsyncData('home', () => sanity.fetch(query))

// console.log(data);


// export default {






  // async asyncData({ $sanity }) {
  //   const request = groq`{
  //     'home': *[_type == "home"]
  //   }`;



    
  //   const result = await $sanity.getClient().fetch(request);
  //   console.log(result);
  //   return result;
  // },
// }

</script>