<template>
  <section class="gallery-wrapper">
    <div class="gallery-inner">
      <div class="gallery-header">
        <span class="gallery-label">{{ isInterior ? 'Interior' : 'Exterior' }}</span>
        <h2 class="gallery-title">{{ title }}</h2>
      </div>

      <div class="gallery-grid" :class="`count-${slides ? slides.length : 0}`">
        <div 
          v-for="(slide, index) in slides" 
          :key="index"
          class="gallery-item"
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
    
    <!-- Lightbox Modal -->
    <Teleport to="body">
      <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <button v-if="slides && slides.length > 1" class="lightbox-nav prev" @click.stop="prevImage">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <div class="lightbox-content" @click.stop>
          <img v-if="slides && slides[currentIndex]" :src="slides[currentIndex].src" :alt="`${title} - Image ${currentIndex + 1}`"/>
        </div>
        <button v-if="slides && slides.length > 1" class="lightbox-nav next" @click.stop="nextImage">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
        <div v-if="slides && slides.length > 1" class="lightbox-counter">
          {{ currentIndex + 1 }} / {{ slides.length }}
        </div>
      </div>
    </Teleport>
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
  data() {
    return {
      lightboxOpen: false,
      currentIndex: 0
    }
  },
  methods: {
    openLightbox(index) {
      this.currentIndex = index;
      this.lightboxOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeLightbox() {
      this.lightboxOpen = false;
      document.body.style.overflow = '';
    },
    nextImage() {
      if (this.slides && this.slides.length > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      }
    },
    prevImage() {
      if (this.slides && this.slides.length > 0) {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      }
    }
  },
  mounted() {
    // Keyboard navigation
    this.handleKeydown = (e) => {
      if (!this.lightboxOpen) return;
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowRight') this.nextImage();
      if (e.key === 'ArrowLeft') this.prevImage();
    };
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    document.body.style.overflow = '';
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
    grid-auto-rows: 200px;
    gap: 0.75rem;
    
    // Different layouts based on image count
    &.count-1 .gallery-item { grid-column: span 2; grid-row: span 2; }
    
    &.count-2 .gallery-item { grid-row: span 2; }
    
    &.count-3 {
      .gallery-item:first-child { grid-column: span 2; grid-row: span 2; }
    }
    
    &.count-4 {
      .gallery-item:first-child { grid-row: span 2; }
      .gallery-item:nth-child(4) { grid-row: span 2; }
    }
    
    &.count-5,
    &.count-6,
    &.count-7,
    &.count-8,
    &.count-9 {
      .gallery-item:first-child { grid-column: span 2; grid-row: span 2; }
    }
  }
  
  .gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    cursor: pointer;
    
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
      grid-auto-rows: 220px;
      gap: 1rem;
      
      &.count-2 .gallery-item { grid-row: span 1; }
      &.count-2 .gallery-item:first-child { grid-column: span 2; }
      
      &.count-4 {
        .gallery-item:first-child { grid-column: span 2; grid-row: span 2; }
        .gallery-item:nth-child(4) { grid-row: span 1; }
      }
      
      &.count-5 {
        .gallery-item:first-child { grid-column: span 2; grid-row: span 2; }
        .gallery-item:nth-child(4) { grid-column: span 2; }
      }
      
      &.count-6 {
        .gallery-item:first-child { grid-column: span 2; grid-row: span 2; }
      }
      
      &.count-7,
      &.count-8,
      &.count-9 {
        .gallery-item:first-child { grid-column: span 2; grid-row: span 2; }
        .gallery-item:nth-child(5) { grid-column: span 2; }
      }
    }
  }
  
  @include respond-to($desktop) {
    .gallery-grid {
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 200px;
      gap: 1rem;
      
      &.count-3 {
        .gallery-item:first-child { grid-column: span 2; grid-row: span 2; }
        .gallery-item:nth-child(2),
        .gallery-item:nth-child(3) { grid-row: span 1; }
      }
      
      &.count-4 {
        .gallery-item { grid-row: span 1; grid-column: span 1; }
        .gallery-item:first-child { grid-column: span 2; grid-row: span 2; }
        .gallery-item:nth-child(4) { grid-column: span 2; }
      }
      
      &.count-5 {
        .gallery-item:first-child { grid-column: span 2; grid-row: span 2; }
        .gallery-item:nth-child(4),
        .gallery-item:nth-child(5) { grid-row: span 1; }
      }
      
      &.count-6,
      &.count-7,
      &.count-8,
      &.count-9 {
        .gallery-item:first-child { grid-column: span 2; grid-row: span 2; }
      }
    }
  }
}

</style>

<style lang="scss">
// Lightbox styles - unscoped for Teleport to body
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

.lightbox-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  z-index: 10;
  
  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  z-index: 10;
  
  svg {
    width: 28px;
    height: 28px;
    color: white;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  &.prev { left: 1.5rem; }
  &.next { right: 1.5rem; }
}

.lightbox-content {
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 100%;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 4px;
  }
}

.lightbox-counter {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 500;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

</style>