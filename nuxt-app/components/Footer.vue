<template>
  <footer> 
    <div class="footer-inner">
      <div class="footer-main">
        <div class="footer__logo">
          <img src="https://cdn.sanity.io/images/u2pvdjb3/production/731a0e68021cdaa0298bfe7172650c9a4470c914-1116x834.png" alt="Alpha Construction Main Logo">
        </div>
        
        <div class="footer-tagline">
          <p>Building high alpine homes in Summit County since 1995.</p>
        </div>
      </div>

      <div class="contact">
        <h5 class="contact-title">Get In Touch</h5>
        <div class="contact-cta">
          <a href="tel:970-485-5345" class="contact-item">
            <span class="contact-label">Phone</span>
            <span class="contact-value">970-485-5345</span>
          </a>
          <a href="mailto:merrick@alphaconstructionbreck.com" class="contact-item">
            <span class="contact-label">Email</span>
            <span class="contact-value">merrick@alphaconstructionbreck.com</span>
          </a>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">© {{ new Date().getFullYear() }} Alpha Construction. All rights reserved.</p>
        <p class="location">Breckenridge, Colorado</p>
      </div>
    </div>
  </footer>
</template>


<style lang="scss">
footer {
  padding: span(2) span(1);
  background-color: $dark;
  
  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: span(2);
    padding-bottom: span(2);
    border-bottom: 1px solid rgba($white, 0.1);
  }

  .footer__logo {
    width: 120px;
    position: relative;
    aspect-ratio: 186 / 139;
    margin-bottom: 1.5rem;

    img {
      @include abs-fill;
      object-fit: contain;
    }
  }
  
  .footer-tagline {
    p {
      font-family: $font-display;
      font-size: 1.125rem;
      font-style: italic;
      color: rgba($white, 0.6);
      max-width: 300px;
    }
  }

  .contact {
    margin-bottom: span(2);
    text-align: center;

    .contact-title {
      font-family: $font-body;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: $copper;
      margin-bottom: 1.5rem;
    }

    .contact-cta {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .contact-item {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      transition: transform 0.2s ease;
      
      &:hover {
        transform: translateY(-2px);
        
        .contact-value {
          color: $copper;
        }
      }
      
      .contact-label {
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: rgba($white, 0.5);
        margin-bottom: 0.25rem;
      }
      
      .contact-value {
        font-family: $font-display;
        font-size: 1.25rem;
        color: $white;
        transition: color 0.2s ease;
      }
    }
  }
  
  .footer-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    padding-top: span(1);
    border-top: 1px solid rgba($white, 0.1);
    
    .copyright,
    .location {
      font-size: 0.875rem;
      color: rgba($white, 0.4);
    }
  }

  @include respond-to($tablet) { 
    padding: span(3) span(2);

    .footer__logo {
      width: 140px;
    }
    
    .contact {
      .contact-cta {
        flex-direction: row;
        justify-content: center;
        gap: span(2);
      }
    }
    
    .footer-bottom {
      flex-direction: row;
      justify-content: space-between;
    }
  }
}

</style>