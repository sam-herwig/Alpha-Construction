<template>
  <div class="building-sketch" ref="sketchContainer">
    <svg 
      viewBox="0 0 400 300" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="1"
      :class="{ 'is-visible': isVisible }"
    >
      <!-- Mountain backdrop -->
      <path 
        class="draw-line mountain" 
        d="M0 280 L80 180 L120 220 L180 140 L240 200 L300 120 L400 200 L400 300 L0 300 Z"
        stroke-width="0.5"
      />
      
      <!-- House main structure -->
      <path class="draw-line structure" d="M100 280 L100 180" />
      <path class="draw-line structure" d="M300 280 L300 180" />
      <path class="draw-line structure" d="M100 180 L300 180" />
      
      <!-- Roof -->
      <path class="draw-line roof" d="M80 180 L200 100 L320 180" />
      <path class="draw-line roof" d="M200 100 L200 180" />
      
      <!-- Windows -->
      <rect class="draw-line windows" x="120" y="200" width="40" height="50" />
      <rect class="draw-line windows" x="240" y="200" width="40" height="50" />
      <rect class="draw-line windows" x="170" y="130" width="60" height="40" />
      
      <!-- Door -->
      <rect class="draw-line door" x="180" y="220" width="40" height="60" />
      <circle class="draw-line door" cx="212" cy="252" r="3" />
      
      <!-- Chimney -->
      <path class="draw-line chimney" d="M260 100 L260 70 L280 70 L280 115" />
      
      <!-- Smoke wisps -->
      <path class="draw-line smoke" d="M270 65 Q275 50 265 40 Q255 30 265 15" />
      <path class="draw-line smoke delay-1" d="M268 68 Q280 55 272 42 Q264 30 275 20" />
      
      <!-- Ground line -->
      <path class="draw-line ground" d="M0 280 L400 280" stroke-width="2" />
      
      <!-- Trees -->
      <path class="draw-line trees" d="M50 280 L50 250 M40 260 L50 250 L60 260" />
      <path class="draw-line trees delay-1" d="M350 280 L350 240 M335 255 L350 240 L365 255 M340 265 L350 255 L360 265" />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      observer: null
    }
  },
  mounted() {
    this.setupObserver();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    setupObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isVisible = true;
            }
          });
        },
        { threshold: 0.3 }
      );
      
      if (this.$refs.sketchContainer) {
        this.observer.observe(this.$refs.sketchContainer);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.building-sketch {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  
  svg {
    width: 100%;
    height: auto;
    color: $stone;
    
    .draw-line {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      transition: stroke-dashoffset 0s;
    }
    
    &.is-visible {
      .draw-line {
        animation: drawLine 2s ease forwards;
        
        &.mountain {
          animation-delay: 0s;
          animation-duration: 1.5s;
        }
        
        &.ground {
          animation-delay: 0.2s;
        }
        
        &.structure {
          animation-delay: 0.5s;
        }
        
        &.roof {
          animation-delay: 0.8s;
        }
        
        &.windows {
          animation-delay: 1.2s;
        }
        
        &.door {
          animation-delay: 1.4s;
        }
        
        &.chimney {
          animation-delay: 1.6s;
        }
        
        &.smoke {
          animation-delay: 2s;
          animation-duration: 1.5s;
        }
        
        &.trees {
          animation-delay: 1s;
        }
        
        &.delay-1 {
          animation-delay: 2.3s;
        }
      }
    }
  }
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
