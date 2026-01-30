<template>
  <section class="hero-wrapper">
    <div class="hero-inner">
      <div class="hero-image-container">
        <img :src="heroImage.src" alt="Alpha Construction Hero">
      </div>
      <div class="hero-content">
        <h1 class="hero-title">{{ title }}</h1>
        <div class="hero-scroll-indicator">
          <span class="scroll-text">Scroll to explore</span>
          <div class="scroll-line"></div>
        </div>
      </div>
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
  mounted() {
    console.log(this.heroImage)
  }
}

</script>

<style lang="scss">
.hero-wrapper {
  width: 100%; 
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  .hero-inner {
    width: 100%; 
    height: 100vh;
    position: relative;

    .hero-image-container {
      @include abs-fill;
      
      &::after {
        content: ''; 
        @include abs-fill;
        background: linear-gradient(
          to bottom, 
          rgba($dark, 0.2) 0%,
          rgba($dark, 0.1) 50%,
          rgba($dark, 0.6) 100%
        );
      }
      
      img {
        @include abs-fill;
        object-fit: cover;
        transform: scale(1.05);
        animation: heroZoom 20s ease-out forwards;
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

    .hero-title {
      font-family: $font-display;
      font-size: clamp(2.5rem, 8vw, 5rem);
      font-weight: 400;
      color: $white;
      max-width: 800px;
      line-height: 1.1;
      margin-bottom: span(1);
      text-shadow: 0 2px 20px rgba($black, 0.3);
    }
    
    .hero-scroll-indicator {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: span(1);
      
      .scroll-text {
        font-family: $font-body;
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: rgba($white, 0.7);
      }
      
      .scroll-line {
        width: 60px;
        height: 1px;
        background: linear-gradient(to right, rgba($white, 0.5), transparent);
      }
    }
  }
}

@keyframes heroZoom {
  0% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@include respond-to($tablet) { 
  .hero-wrapper {
    .hero-inner {
      .hero-content {
        padding: span(2);
      }
      
      .hero-title {
        font-size: clamp(3rem, 6vw, 4.5rem);
      }
    }
  }
}

@include respond-to($desktop) { 
  .hero-wrapper {
    .hero-inner {
      .hero-content {
        padding: span(1) span(2);
        padding-bottom: span(2);
      }
    }
  }
}

</style>