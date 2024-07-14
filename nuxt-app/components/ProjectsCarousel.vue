<template>
  <section class="carousel-wrapper">
    <div class="carousel-inner">
      <h2 class="main-title h5">{{ title }}</h2>

      <carousel :items-to-show="1" :wrap-around="true">
        <slide v-for="slide in slides" :key="slide">
            <img :src="slide.src" :width="slide.width" :height="slide.height"/>
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
      default: ''
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
    ResponsiveImage,
  },
  mounted() {
    console.log(this.slides);
  }
}

</script>

<style lang="scss" scoped>

.carousel-wrapper {
  position: relative;

  .carousel-inner {
    padding: span(2);

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
      position: relative;
      @include aspect-ratio(120%);

      &::after {
        content: ''; 
        @include abs-fill;
        pointer-events: none;
        background: radial-gradient(circle at bottom left, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.7%);

      }

       img {
        @include abs-fill;
        object-fit: cover;
      }
    }

    .carousel__prev,
    .carousel__next {
      box-sizing: content-box;

      svg {
        fill: white;
        width: 60px; 
        height: 60px;
      }
    }

    .carousel__next {
      right: span(-2);
    }

    .carousel__prev {
      left: span(-2);
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

    .main-title {
      margin-bottom: $margin-large;


      span {
        display: block;
      }
    }

    .work-title {
      color: $brown;
    }
  }

  @include respond-to($tablet) {
    .carousel-inner {
      padding: span(2);
      display: flex; 
      justify-content: space-between;
      align-items: flex-start;

      .carousel {
        width: span(18);
        // flex: 1;
      }

      .carousel__item {
        min-height: 200px;
        width: 100%;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
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