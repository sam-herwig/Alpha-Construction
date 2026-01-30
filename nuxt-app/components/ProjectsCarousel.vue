<template>
  <section class="gallery-wrapper">
    <div class="gallery-inner">
      <div class="gallery-header">
        <span class="gallery-label">{{ isInterior ? 'Interior' : 'Exterior' }}</span>
        <h2 class="gallery-title">{{ title }}</h2>
      </div>

      <div class="gallery-grid" :class="{ 'few-images': slides && slides.length <= 3 }">
        <div 
          v-for="(slide, index) in slides" 
          :key="index"
          class="gallery-item"
          :class="getItemClass(index, slides.length)"
          @click="openLightbox(index)"
        >
          <div class="image-container">
            <img :src="slide.src" :alt="`${title} - Image ${index + 1}`"/>
            <div class="image-overlay">
              <span class="view-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                  <path d="M11 8v6M8 11h6"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
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
    slides: Array, 
    isInterior: {
      default: false
    }
  },
  methods: {
    getItemClass(index, total) {
      // Create visual variety based on position
      if (total <= 2) return 'size-large';
      if (total <= 4) {
        return index === 0 ? 'size-large' : 'size-medium';
      }
      // For larger galleries, create a pattern
      const pattern = index % 5;
      if (pattern === 0) return 'size-large';
      if (pattern === 1 || pattern === 2) return 'size-medium';
      return 'size-small';
    },
    openLightbox(index) {
      // Could add lightbox functionality later
      console.log('Open lightbox for image', index);
    }
  }
}

</script>

<style lang="scss" scoped>

.gallery-wrapper {
  background: $snow;

  .gallery-inner {
    padding: span(2) span(1);
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .gallery-header {
    margin-bottom: span(1.5);
    
    .gallery-label {
      display: inline-block;
      font-family: $font-body;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: $copper;
      margin-bottom: 0.5rem;
    }
    
    .gallery-title {
      font-family: $font-display;
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 400;
      color: $dark;
    }
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    
    &.few-images {
      .gallery-item {
        aspect-ratio: 4 / 3;
      }
    }
  }
  
  .gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    cursor: pointer;
    aspect-ratio: 1;
    
    &.size-large {
      grid-column: span 2;
      aspect-ratio: 16 / 10;
    }
    
    &.size-medium {
      aspect-ratio: 4 / 3;
    }
    
    &.size-small {
      aspect-ratio: 1;
    }
    
    .image-container {
      @include abs-fill;
      
      img {
        @include abs-fill;
        object-fit: cover;
        transition: transform 0.6s ease;
      }
      
      .image-overlay {
        @include abs-fill;
        background: rgba($dark, 0);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
        
        .view-icon {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s ease;
          
          svg {
            width: 40px;
            height: 40px;
            color: $white;
          }
        }
      }
    }
    
    &:hover {
      .image-container {
        img {
          transform: scale(1.05);
        }
        
        .image-overlay {
          background: rgba($dark, 0.4);
          
          .view-icon {
            opacity: 1;
            transform: scale(1);
          }
        }
      }
    }
  }

  @include respond-to($tablet) {
    .gallery-inner {
      padding: span(2);
    }
    
    .gallery-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      
      .gallery-item.size-large {
        grid-column: span 2;
      }
    }
  }
  
  @include respond-to($desktop) {
    .gallery-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 1.25rem;
    }
  }
}

</style>