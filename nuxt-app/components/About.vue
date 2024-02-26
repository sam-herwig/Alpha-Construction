<template>
  <section class="about-wrapper">
    <div class="about-inner">
      <div class="left-side">
        <h3 class="about-title">About Us</h3>
        <h6 class="subtitle">We Are Alpha Construction</h6>
        <p class="about-description">We hav been creating high alpine homes in Summit county for XX years. </p>
      </div>
      <div class="right-side">
        <img src="https://cdn.sanity.io/images/u2pvdjb3/production/5c28fbf959d84c2b6c4b7441e978d0e7c58fc1b9-6407x5501.jpg" alt="">
      </div>
    </div>
  </section>
</template>


<script>

</script>

<style lang="scss">
.about-wrapper {
  padding: 0 span(2) span(2) span(2); 

  .about-inner {
    .about-title {
      margin-bottom: $margin-small; 
    }

    .subtitle {
      margin-bottom: $margin-small; 
    }
    .about-description {
      margin-bottom: $margin-small; 
    }

    .right-side {
      width: 100%; 
      @include aspect-ratio(120%); 
      position: relative;

      img {
        @include abs-fill;
        object-fit: cover;
      }
    }
  }

  @include respond-to($large-tablet) {
    .about-inner {
      display: flex; 
      align-items: center;
      justify-content: space-between;

      .right-side {
        width: span(12);
      }

    }
  }

}

</style>