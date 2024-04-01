<template>
  <!-- Entire thing to be a link -->
  <div class="card-wrapper">
    <div class="card-inner">
      <div class="card-image-wrapper">
        <img :src="cardImage.src" :width="cardImage.width" :height="cardImage.height"/>
        <!-- <ResponsiveImage :bind="cardImage"/> -->
      </div>
      <div class="card-content-wrapper">
        <h6 class="slide-title">{{title}}</h6>
        <p class="slide-title">{{description}}</p>
      </div>
    </div>
  </div>
</template>


<script>
// import type { ResponsiveImage } from '#build/components';

export default {
    props: {
        title: {
            default: 'Alpha Construction'
        },
        description: {
            default: 'Creating homes in the high alpine'
        },
        cardImage: Object
    },
    // components: { ResponsiveImage }
}

</script>

<style lang="scss">
.card-wrapper {
  padding: 0; 
  border: solid 2px $brown;
  border-radius: 10px 10px 0 0;
  overflow: hidden;

  .card-inner {

    .card-image-wrapper {
      aspect-ratio: 16 /9; 
      width: 100; 
      height: 100%;
      position: relative;

      img {
        @include abs-fill;
      }
    }
    
    .card-content-wrapper {
      padding: 15px;

      .slide-title {
        margin-bottom: $margin-small;
      }
    }


  }
}


</style>