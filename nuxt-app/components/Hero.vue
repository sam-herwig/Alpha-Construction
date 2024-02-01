<template>
  <section class="hero-wrapper">
    <div class="hero-inner">
      <!-- <div class="hero-titles">
        <h1 class="main-title h2">{{ title }}</h1>
        <h6 class="work-title">{{ description }}</h6>
      </div> -->

    <carousel :items-to-show="1.5">
      <slide v-for="slide in 10" :key="slide">
        {{ slide }}
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
    </div>
  </section>

</template> 

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default {
  props: {
    title: {
      default: 'Alpha Construction'
    }, 
    description: {
      default: 'Creating homes in the high alpine'
    }
  }, 
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  mounted() {
    console.log(this.title)
  }
}

</script>

<style lang="scss">

.hero-wrapper {
  position: relative;

  .hero-inner {
    padding: span(2);
    text-align: center;

    // .hero-titles {
    // }

    // .main-title {
    //   margin-bottom: $margin-large;

    //   span {
    //     display: block;
    //   }
    // }

    // .work-title {
    //   color: $brown;
    // }
  }
}


</style>