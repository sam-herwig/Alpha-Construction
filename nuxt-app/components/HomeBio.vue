<template>
  <section class="home-bio-wrapper">
    <div class="home-bio-inner">
      <div class="bio-header">
        <span class="bio-label">Our Story</span>
        <h2 class="bio-title">Building Summit County<br><em>since 1995</em></h2>
      </div>
      <div class="bio-content">
        <p class="p1">{{ homeBioLeft }}</p>
        <p class="p1">{{ homeBioRight }}</p>
      </div>
      <div class="bio-stats">
        <div class="stat">
          <span class="stat-number">250+</span>
          <span class="stat-label">Projects Completed</span>
        </div>
        <div class="stat">
          <span class="stat-number">30</span>
          <span class="stat-label">Years Experience</span>
        </div>
        <div class="stat">
          <span class="stat-number">100%</span>
          <span class="stat-label">Locally Owned</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    homeBioRight: {
      default: ''
    }, 
    homeBioLeft: {
      default: ''
    }
  }
}

</script>

<style lang="scss">

.home-bio-wrapper {
  padding: span(2) span(1);
  background-color: $snow;

  .home-bio-inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .bio-header {
    margin-bottom: span(1.5);
    
    .bio-label {
      display: inline-block;
      font-family: $font-body;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: $copper;
      margin-bottom: 1rem;
    }
    
    .bio-title {
      font-family: $font-display;
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 400;
      color: $dark;
      line-height: 1.2;
      
      em {
        font-style: italic;
        color: $stone;
      }
    }
  }
  
  .bio-content {
    margin-bottom: span(2);
    
    .p1 {
      font-size: 1.125rem;
      line-height: 1.8;
      color: rgba($dark, 0.8);
      margin-bottom: 1.5rem;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  
  .bio-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding-top: span(1);
    border-top: 1px solid rgba($dark, 0.1);
    
    .stat {
      text-align: center;
      
      .stat-number {
        display: block;
        font-family: $font-display;
        font-size: clamp(2rem, 4vw, 3rem);
        font-weight: 500;
        color: $copper;
        line-height: 1;
        margin-bottom: 0.5rem;
      }
      
      .stat-label {
        font-family: $font-body;
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: $stone;
      }
    }
  }

  @include respond-to($tablet) {
    padding: span(3) span(2);
    
    .bio-content {
      display: flex; 
      gap: span(1);

      .p1 {
        flex: 1;
        margin-bottom: 0;
      }
    }
    
    .bio-stats {
      .stat {
        text-align: left;
      }
    }
  }
}

</style>