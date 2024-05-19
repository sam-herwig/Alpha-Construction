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
const slug = 'dickerson-residence';
const request = groq`{
    'build': *[_type == "singleBuild" && slug.current == $slug] {
            ...,
            buildTitle,
            buildDescription,
            slug,
            buildImage {
              'src': asset->url,
              'width': asset->metadata.dimensions.width,
              'height': asset->metadata.dimensions.height,
            },
          }[0], 
  }`;

   const data = await $sanity.fetch(request, { slug }) 
  console.log(data);
// import groq from 'groq';

// export default {
//   async asyncData({ $sanity }) {
//     const slug = 'north-woods'; // Hardcoded slug value
//     const request = groq`{
//       'build': *[_type == "singleBuild" && slug.current == $slug] {
//         buildTitle,
//         buildDescription,
//         slug,
//         buildArchitect, 
//         buildAddress, 
//         buildBedBath, 
//         buildSquareFeet,
//         buildImage {
//           'src': asset->url,
//           'width': asset->metadata.dimensions.width,
//           'height': asset->metadata.dimensions.height,
//         },
//       },
//     }`;

//     // const data = await $sanity.fetch(request, { slug });

//   const data = await $sanity.fetch(request)

//     console.log(data);

//     return { data };
//   },
// };
</script>
