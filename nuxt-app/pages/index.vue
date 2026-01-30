<template>
  <div class="home-page">
    <HomeHero 
      :title="data?.home?.homeTitle"
      :heroImage="data?.home?.heroImage"
    />

    <HomeBio 
      :homeBioRight="data?.home?.homeBioRight"
      :homeBioLeft="data?.home?.homeBioLeft"
    />

    <HomeCarousel
      :slides="data?.build"
    />
    
    <About />

    <Contact />
  </div>
</template>

<script setup>
const query = `{
    'home': *[_type == "home"] {
            homeTitle,
            homeDescription,
            heroImage {
              'src': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
            },
            homeBioRight, 
            homeBioLeft,
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
  }`

const { data } = await useSanityFetch('home-data', query)
</script>
