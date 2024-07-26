<template>
  <footer> 
    <div class="footer__logo">
      <img src="https://cdn.sanity.io/images/u2pvdjb3/production/731a0e68021cdaa0298bfe7172650c9a4470c914-1116x834.png" alt="Alpha Construction Main Logo">
    </div>
    <div class="footer__nav">
      <ul>
        <!-- <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li> -->
        <!-- <li><a href="/projects">Projects</a></li> -->
        <!-- <li><a href="/contact">Contact</a></li> -->
      </ul>
    </div>

    <div class="contact">
        <h5 class="contact-title">Contact Us</h5>
        <div class="contact-cta">
          <a href="tel:970-485-5345" class="left p1">Give us a call at <span>970-485-5345</span></a>
          <a href="mailto:970-485-5345" class="p1 right">Send us an Email <span>merrick@alpha<span>constructionbreck.com</span></span></a>
        </div>
      </div>
      <!-- <div class="footer__social">
        <ul>
          <li><a href="https://www.instagram.com/" target="_blank"><img src="/instagram.svg" alt="Instagram" /></a></li>
          <li><a href="https://www.facebook.com/" target="_blank"><img src="/facebook.svg" alt="Facebook" /></a></li>
          <li><a href="https://www.twitter.com/" target="_blank"><img src="/twitter.svg" alt="Twitter" /></a></li>
        </ul>
      </div> -->


  </footer>
</template>


<style lang="scss">
footer {
  padding: span(1);
  padding-bottom: span(3);

  .footer__logo {
    margin: 0 auto;
    width: span(8);
    position: relative;
    @include aspect-ratio(74.7%);
    margin-bottom: $margin-large;

    img {
      @include abs-fill;
    }
  }

  .t1 {
    display: block;
  }

  .contact {
    margin: 0 auto;

    .contact-title {
      text-align: center;
      margin-bottom: $margin-small;
    }

    .contact-cta {
      text-align: center;


      .right {
      }

      span {
        display: block;
        color: $brown;
      }
    }
  }

  @include respond-to($tablet) { 
    padding-bottom: span(2);

    .footer__logo {
      margin: 0 auto;
      width: span(4);
    }

    .contact {
      width: span(14);

      .contact-title {
        margin-bottom: $margin-large;
      }

      .contact-cta {
        display: flex; 
        justify-content: space-between;
        align-items: flex-start;
        text-align: left;
        
        .right {
          text-align: right;
        }
      }
    }

  }
}



</style>