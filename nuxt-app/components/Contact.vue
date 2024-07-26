<template>
  <section class="contact-wrapper">
    <div class="contact-inner">
      <div class="left-side">
        <h3 class="contact-title">Contact Us</h3>
        <a href="tel:970-485-5345" class="t1">Give us a call at 970-485-5345</a>
        <a href="mailto:970-485-5345" class="t1">Send us an Email merrick@alphaconstructionbreck.com</a>
      </div>

       <div class="right-side">
        <img src="https://cdn.sanity.io/images/u2pvdjb3/production/f9e334f059704c0856b0c7d43f7d67ffb5a3e8f3-4375x5737.jpg" alt="">
      </div>
   </div>
  </section>
</template>

<script>

</script>

<style lang="scss">
.contact-wrapper {
  padding: span(2); 

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

    .left-side {
      a {
        display: block;
        margin-bottom: $margin-small;
      }
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
