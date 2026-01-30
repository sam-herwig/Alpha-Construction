<template>
  <section class="contact-wrapper">
    <div class="contact-inner">
      <div class="left-side">
        <span class="contact-label">Start a Project</span>
        <h3 class="contact-title">Ready to build your<br><em>mountain home?</em></h3>
        <p class="contact-description">We'd love to hear about your project. Reach out and let's start the conversation.</p>
        
        <div class="contact-methods">
          <a href="mailto:merrick@alphaconstructionbreck.com" class="contact-method primary">
            <span class="method-icon">✉</span>
            <div class="method-content">
              <span class="method-label">Email Us</span>
              <span class="method-value">merrick@alphaconstructionbreck.com</span>
            </div>
          </a>
          
          <a href="tel:970-485-5345" class="contact-method">
            <span class="method-icon">📞</span>
            <div class="method-content">
              <span class="method-label">Call Us</span>
              <span class="method-value">970-485-5345</span>
            </div>
          </a>
        </div>
      </div>

      <div class="right-side">
        <div class="image-frame">
          <img src="https://cdn.sanity.io/images/u2pvdjb3/production/f9e334f059704c0856b0c7d43f7d67ffb5a3e8f3-4375x5737.jpg" alt="Alpha Construction project">
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss">
.contact-wrapper {
  padding: span(2) span(1);
  background-color: $snow;

  .contact-inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .left-side {
    margin-bottom: span(2);
  }
  
  .contact-label {
    display: inline-block;
    font-family: $font-body;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: $copper;
    margin-bottom: 1rem;
  }
  
  .contact-title {
    font-family: $font-display;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 400;
    color: $dark;
    line-height: 1.2;
    margin-bottom: 1rem;
    
    em {
      font-style: italic;
      color: $stone;
    }
  }
  
  .contact-description {
    font-size: 1.125rem;
    line-height: 1.7;
    color: rgba($dark, 0.7);
    margin-bottom: 2rem;
    max-width: 400px;
  }
  
  .contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-method {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
    background: $white;
    border-radius: 8px;
    text-decoration: none;
    box-shadow: 0 2px 12px rgba($dark, 0.06);
    transition: all 0.3s ease;
    border: 1px solid transparent;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba($dark, 0.1);
      border-color: rgba($copper, 0.2);
    }
    
    &.primary {
      background: $dark;
      
      .method-label {
        color: rgba($white, 0.6);
      }
      
      .method-value {
        color: $white;
      }
      
      .method-icon {
        background: rgba($white, 0.1);
        color: $copper;
      }
      
      &:hover {
        background: lighten($dark, 5%);
      }
    }
    
    .method-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $cream;
      border-radius: 8px;
      font-size: 1.25rem;
    }
    
    .method-content {
      display: flex;
      flex-direction: column;
    }
    
    .method-label {
      font-size: 0.75rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: $stone;
      margin-bottom: 0.25rem;
    }
    
    .method-value {
      font-family: $font-body;
      font-size: 1rem;
      font-weight: 500;
      color: $dark;
    }
  }

  .right-side {
    .image-frame {
      width: 100%; 
      aspect-ratio: 3 / 4;
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
    
    .contact-inner {
      display: flex; 
      align-items: center;
      flex-direction: row-reverse;
      justify-content: space-between;
      gap: span(2);
    }
    
    .left-side {
      flex: 1;
      margin-bottom: 0;
    }

    .right-side {
      flex: 1;
      max-width: 450px;
    }
  }
}

</style>
