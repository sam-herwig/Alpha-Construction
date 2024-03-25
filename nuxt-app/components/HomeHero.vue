<template>
  <section class="hero-wrapper">
    <div class="hero-inner">
      <h1>{{ title }}</h1>
      <img :bind="heroImage">
    </div>
  </section>
</template>


<script>

export default {
  props: {
    title: {
      default: 'Alpha Construction'
    }, 
    heroImage: Object
  }, 
}

</script>

<style lang="scss">
.hero-wrapper {
  width: 100%; 

  .hero-inner {
    aspect-ratio: 16 /9; 
    width: 100; 
    
    img {
      @include abs-fill;
    }
  }
}

</style>