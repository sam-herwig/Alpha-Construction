<template>
  <div class="home-page">
    <!-- <Header/> -->

    <HomeHero 
      :title="data.home.homeTitle"
      :heroImage="data.home.heroImage"
    />

    <HomeCarousel
      :slides="data.build"
    />
    
    <About 
    />

    <Contact 
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
    'home': *[_type == "home"] {
            homeTitle,
            homeDescription,
            heroImage {
              'src': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
            },
          }[0], 
    'build': *[_type == "singleBuild"] {
            ...,
            buildTitle,
            buildDescription,
            slug,
            buildImage {
              'src': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
            },
          }, 
  }`;

  const data = await $sanity.fetch(request)
</script>