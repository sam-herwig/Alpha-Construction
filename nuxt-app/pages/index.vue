<template>
  <div class="home-page">
    <!-- <Placeholder 
      title="Header"
    />
    <Placeholder 
      :title="data.home.homeTitle"
      :aspect-ratio="2"
    /> -->

    <!-- <HomeHero 
      :title="data.home.homeTitle"
      :image="data.home.heroImage"
    /> -->
    
    <Carousel
      :slides="data.build"
    />
    <About 
      
    />
    <Contact 
      
    />
    <!-- <ResponsiveImage :bind="slide.img"/>  -->
    <!-- 'https://cdn.sanity.io/images/u2pvdjb3/production/9838983e25252134344e0002a2c7b8320dab981c-1498x1000.jpg" -->
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
          }[0], 
    'build': *[_type == "singleBuild"] {
            ...,
            buildTitle,
            buildDescription,
            buildImage {
              'src': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
            },
          }, 
  }`;

  const data = await $sanity.fetch(request)
  console.log(data) 

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