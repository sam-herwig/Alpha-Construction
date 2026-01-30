<template>
  <section class="about-wrapper">
    <div class="about-inner">
      <div class="left-side">
        <span class="about-label">About Us</span>
        <h2 class="about-title">We create high alpine homes<br><em>in Summit County</em></h2>
        <p class="about-description">From custom builds to thoughtful renovations, we bring decades of mountain construction expertise to every project.</p>
      </div>
      <div class="right-side">
        <div class="image-frame">
          <img src="https://cdn.sanity.io/images/u2pvdjb3/production/5c28fbf959d84c2b6c4b7441e978d0e7c58fc1b9-6407x5501.jpg" alt="Alpha Construction team">
        </div>
      </div>
    </div>
  </section>
</template>


<script>

</script>

<style lang="scss">
.about-wrapper {
  padding: span(2) span(1);
  background-color: $cream;

  .about-inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .left-side {
    margin-bottom: span(1.5);
  }
  
  .about-label {
    display: inline-block;
    font-family: $font-body;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: $copper;
    margin-bottom: 1rem;
  }
  
  .about-title {
    font-family: $font-display;
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 400;
    color: $dark;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    
    em {
      font-style: italic;
      color: $stone;
    }
  }
  
  .about-description {
    font-size: 1.125rem;
    line-height: 1.7;
    color: rgba($dark, 0.7);
    max-width: 500px;
  }

  .right-side {
    .image-frame {
      width: 100%; 
      aspect-ratio: 4 / 5;
      position: relative;
      overflow: hidden;
      border-radius: 4px;
      box-shadow: 0 20px 60px rgba($dark, 0.15);

      img {
        @include abs-fill;
        object-fit: cover;
        transition: transform 0.6s ease;
      }
      
      &:hover img {
        transform: scale(1.03);
      }
    }
  }

  @include respond-to($large-tablet) {
    padding: span(3) span(2);
    
    .about-inner {
      display: flex; 
      align-items: center;
      justify-content: space-between;
      gap: span(2);
    }
    
    .left-side {
      flex: 1;
      margin-bottom: 0;
    }

    .right-side {
      flex: 1;
      max-width: 500px;
    }
  }
}

</style>