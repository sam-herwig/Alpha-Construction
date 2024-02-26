<template>
  <section class="contact-wrapper">
    <div class="contact-inner">
      <div class="left-side">
        <h3 class="contact-title">Contact Us</h3>
        <p class="t1">Give us a call at XXX-XXX-XXXX</p>
        <p class="t1">Send us an Email XXX@gmail.com</p>
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
.contact-wrapper {
  padding: 0 span(2); 

  .contact-inner {
    .contact-title {
      margin-bottom: $margin-small; 
    }

    .subtitle {
      margin-bottom: $margin-small; 
    }
    .contact-description {
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
    .contact-inner {
      display: flex; 
      align-items: center;
      flex-direction: row-reverse;
      justify-content: space-between;

      .left-side {
        width: span(12);
      }

      .right-side {
        width: span(12);
        // margin-right: span(2);
      }

    }
  }
}

</style>
