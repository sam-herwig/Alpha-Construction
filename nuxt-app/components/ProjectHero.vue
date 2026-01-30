<template>
  <section class="project-hero-wrapper">
    <div class="project-hero-inner">
      <div class="hero-image-container">
        <img :src="heroImage.src" :alt="title">
      </div>
      <div class="hero-content">
        <span class="hero-label">Project</span>
        <h1 class="hero-title">{{ title }}</h1>
      </div>
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
.project-hero-wrapper {
  width: 100%; 
  min-height: 70vh;
  position: relative;

  .project-hero-inner {
    width: 100%; 
    height: 70vh;
    position: relative;
  }

  .hero-image-container {
    @include abs-fill;
    
    &::after {
      content: ''; 
      @include abs-fill;
      background: linear-gradient(
        to bottom, 
        rgba($dark, 0.1) 0%,
        rgba($dark, 0.2) 60%,
        rgba($dark, 0.7) 100%
      );
    }
    
    img {
      @include abs-fill;
      object-fit: cover;
    }
  }
  
  .hero-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: span(1);
    z-index: 2;
  }
  
  .hero-label {
    display: inline-block;
    font-family: $font-body;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: $copper;
    margin-bottom: 0.75rem;
    padding: 0.5rem 1rem;
    background: rgba($white, 0.95);
    border-radius: 2px;
  }

  .hero-title {
    font-family: $font-display;
    font-size: clamp(2.5rem, 7vw, 4.5rem);
    font-weight: 400;
    color: $white;
    line-height: 1.1;
    text-shadow: 0 2px 30px rgba($black, 0.3);
    max-width: 700px;
  }

  @include respond-to($tablet) { 
    min-height: 80vh;
    
    .project-hero-inner {
      height: 80vh;
    }
    
    .hero-content {
      padding: span(2);
    }
  }
  
  @include respond-to($desktop) {
    min-height: 85vh;
    
    .project-hero-inner {
      height: 85vh;
    }
  }
}

</style>



