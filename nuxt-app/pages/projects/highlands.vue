<template>
  <div class="build-page">
    <ProjectHero 
      :title="data.build.buildTitle"
      :heroImage="data.build.buildImage"
    />
    <ProjectIntro
      :buildArchitect="data.build.buildArchitect"
      :buildAddress="data.build.buildAddress"
      :buildBedBath="data.build.buildBedBath"
      :buildSquareFeet="data.build.buildSquareFeet"
    />
    <ProjectsCarousel 
      title="Exterior"
      :slides="data.build.exteriorImages"
    />
     <ProjectsCarousel 
      title="Interior"
      :slides="data.build.interiorImages"
    />
     <Contact />
  </div>
</template>

<script setup>
import groq from 'groq';

const { $sanity } = useNuxtApp();
const slug = 'highlands';

const request = groq`{
    "build": *[_type == "singleBuild" && slug.current == $slug] {
          ...,
          buildTitle,
          buildDescription,
          slug,
          buildImage {
            'src': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
          },
          exteriorImages[] {
            'src': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
          },
          interiorImages[] {
            'src': asset->url,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
          },
        }[0], 
  }`;

  const data = await $sanity.fetch(request, { slug }) 
</script>
