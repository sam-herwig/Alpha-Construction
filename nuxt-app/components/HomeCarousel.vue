<template>
  <section class="carousel-wrapper">
    <div class="carousel-inner">
      <!-- <div class="carousel-titles">
        <h1 class="main-title h2">{{ title }}</h1>
        <h6 class="work-title">{{ description }}</h6>
      </div> -->
        <!--<ResponsiveImage :bind="slides[0].slide.img"/> -->

      <carousel :items-to-show="1" :wrap-around="true">
        <slide v-for="slide in slides" :key="slide">
          <!-- {{ slide }} -->
          <img :src="slide.buildImage.src" :width="slide.buildImage.width" :height="slide.buildImage.height"/>
          <h6 class="slide-title">{{slide.buildTitle}}</h6>
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
import ResponsiveImage from '~/components/ResponsiveImage.vue'

export default {
  props: {
    title: {
      default: 'Alpha Construction'
    }, 
    description: {
      default: 'Creating homes in the high alpine'
    }, 
    slides: Array
  }, 
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    ResponsiveImage
},
  mounted() {
    console.log(this.slides)
  }
}

</script>

<style lang="scss">

.carousel-wrapper {
  position: relative;

  .carousel-inner {
    padding: span(2);
    text-align: center;

    .carousel__item {
      min-height: 200px;
      width: 100%;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90vh;
      position: relative;
    }

    .carousel__slide {
      padding: 10px;
        // height: 40vh;
      position: relative;
      @include aspect-ratio(120%);


       img {
        @include abs-fill;
        object-fit: cover;
        // width: 100%; 
        // height: 300px;
      }

      .slide-title {
       @include abs-center;
      }
    }

    .carousel__prev,
    .carousel__next {
      box-sizing: content-box;

      svg {
        fill: white;
        width: 40px; 
        height: 40px;
      }
    }

    .carousel__pagination-button {
      &::after {
        background-color: white;
        width: 50px;
      }

      &.--active {
         &::after {
          background-color: $brown;
        }
      }
    }

    .carousel__pagination-button--active {
      ::after {
        background-color: blue;
      }
    }

    .carousel__pagination {

      .carousel__pagination__item {
        .carousel__pagination-button {
           &::after {
            background-color: white;
            width: 50px;
          }
        }
         
      }
    }
    // .carousel-titles {
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

  @include respond-to($tablet) {
    .carousel-inner {
      padding: 0 span(2);

      .carousel__item {
        min-height: 200px;
        width: 100%;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
        position: relative;
      }

      .carousel__slide {
        padding: 10px;
        @include aspect-ratio(66%);
      }
     }
  }
}


</style>