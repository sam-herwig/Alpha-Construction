<template>
  <div class="build-page">
    <template v-if="data?.build">
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
        v-if="data.build.exteriorImages?.length"
        title="Exterior"
        :slides="data.build.exteriorImages"
      />
      <ProjectsCarousel 
        v-if="data.build.interiorImages?.length"
        title="Interior"
        :slides="data.build.interiorImages"
      />
      <Contact />
    </template>
    
    <template v-else-if="!pending">
      <div class="not-found">
        <h1>Project Not Found</h1>
        <p>Sorry, we couldn't find that project.</p>
        <NuxtLink to="/">Return Home</NuxtLink>
      </div>
    </template>
  </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const query = `{
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
  }`

const { data, pending } = await useSanityFetch(`project-${slug}`, query, { slug })

// 404 if no project found
if (!pending.value && !data.value?.build) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project Not Found'
  })
}
</script>

<style lang="scss" scoped>
.not-found {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  
  h1 {
    font-family: $font-display;
    margin-bottom: 1rem;
  }
  
  p {
    color: $stone;
    margin-bottom: 2rem;
  }
  
  a {
    color: $copper;
    text-decoration: underline;
  }
}
</style>
