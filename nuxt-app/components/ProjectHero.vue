<template>
  <section class="hero-wrapper">
    <div class="hero-inner">
     
      <img :src="heroImage.src">
      <h1 class="h2">{{ title }}</h1>
    </div>
  </section>
</template>


<script>

export default {
  props: {
    title: {
      default: ''
    }, 
    heroImage: Object
  }, 
  mounted() {
  }
}
</script>

<style lang="scss">
.hero-wrapper {
  width: 100%; 
  height: 100%;
  margin-bottom: span(2);
  position: relative;

  &::after {
    content: ''; 
    @include abs-fill;
      background-image: linear-gradient(to bottom, 
    rgba(0,0,0,0), $black);
  }

  .hero-inner {
    aspect-ratio: 16 / 9; 
    width: 100; 
    height: 100%;
    position: relative;

    .h2 {
      width: 60%; 
      position: absolute; 
      left: span(2);
      // text-align: center;
      bottom: 0;
      z-index: 2;

    }
    
    img {
      @include abs-fill;
    }
  }
}

</style>



