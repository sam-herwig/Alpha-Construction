<template>
  <div class="building-sketch" ref="sketchContainer">
    <svg 
      viewBox="0 0 400 300" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Ground line -->
      <line 
        class="draw-line" 
        :class="{ 'animate': isVisible }"
        x1="0" y1="260" x2="400" y2="260" 
        stroke="#A69585" 
        stroke-width="2"
        style="--delay: 0s; --duration: 0.8s;"
      />
      
      <!-- Mountain backdrop -->
      <polyline 
        class="draw-line"
        :class="{ 'animate': isVisible }"
        points="0,260 60,200 100,230 160,170 220,210 280,150 340,190 400,160"
        stroke="#A69585" 
        stroke-width="1"
        stroke-opacity="0.4"
        style="--delay: 0.2s; --duration: 1.2s;"
      />
      
      <!-- House base -->
      <rect 
        class="draw-line"
        :class="{ 'animate': isVisible }"
        x="120" y="180" width="160" height="80" 
        stroke="#A69585" 
        stroke-width="1.5"
        style="--delay: 0.5s; --duration: 1s;"
      />
      
      <!-- Roof -->
      <polyline 
        class="draw-line"
        :class="{ 'animate': isVisible }"
        points="100,180 200,110 300,180"
        stroke="#B87333" 
        stroke-width="2"
        style="--delay: 0.8s; --duration: 0.8s;"
      />
      
      <!-- Door -->
      <rect 
        class="draw-line"
        :class="{ 'animate': isVisible }"
        x="180" y="210" width="40" height="50" 
        stroke="#A69585" 
        stroke-width="1.5"
        style="--delay: 1.2s; --duration: 0.6s;"
      />
      
      <!-- Window left -->
      <rect 
        class="draw-line"
        :class="{ 'animate': isVisible }"
        x="135" y="200" width="30" height="30" 
        stroke="#A69585" 
        stroke-width="1.5"
        style="--delay: 1.4s; --duration: 0.5s;"
      />
      
      <!-- Window right -->
      <rect 
        class="draw-line"
        :class="{ 'animate': isVisible }"
        x="235" y="200" width="30" height="30" 
        stroke="#A69585" 
        stroke-width="1.5"
        style="--delay: 1.5s; --duration: 0.5s;"
      />
      
      <!-- Chimney -->
      <rect 
        class="draw-line"
        :class="{ 'animate': isVisible }"
        x="240" y="100" width="20" height="40" 
        stroke="#A69585" 
        stroke-width="1.5"
        style="--delay: 1.7s; --duration: 0.5s;"
      />
      
      <!-- Smoke -->
      <path 
        class="draw-line smoke"
        :class="{ 'animate': isVisible }"
        d="M250 95 Q255 80 248 70 Q241 60 250 45"
        stroke="#A69585" 
        stroke-width="1"
        stroke-opacity="0.5"
        stroke-linecap="round"
        style="--delay: 2s; --duration: 1s;"
      />
      
      <!-- Tree left -->
      <path 
        class="draw-line"
        :class="{ 'animate': isVisible }"
        d="M60 260 L60 230 M45 240 L60 225 L75 240"
        stroke="#A69585" 
        stroke-width="1.5"
        stroke-linecap="round"
        style="--delay: 1.8s; --duration: 0.6s;"
      />
      
      <!-- Tree right -->
      <path 
        class="draw-line"
        :class="{ 'animate': isVisible }"
        d="M340 260 L340 220 M320 235 L340 215 L360 235 M325 250 L340 235 L355 250"
        stroke="#A69585" 
        stroke-width="1.5"
        stroke-linecap="round"
        style="--delay: 1.9s; --duration: 0.7s;"
      />
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
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      this.setupObserver();
    }, 100);
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    setupObserver() {
      if (typeof IntersectionObserver === 'undefined') {
        // Fallback for SSR or no support
        this.isVisible = true;
        return;
      }
      
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isVisible = true;
              this.observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
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
  max-width: 450px;
  margin: 0 auto;
  padding: 1rem;
  
  svg {
    width: 100%;
    height: auto;
    overflow: visible;
  }
  
  .draw-line {
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    fill: none;
  }
  
  .draw-line.animate {
    animation: drawLine var(--duration, 1s) ease-out forwards;
    animation-delay: var(--delay, 0s);
  }
  
  .draw-line.smoke.animate {
    animation: drawLine var(--duration, 1s) ease-out forwards, 
               floatSmoke 3s ease-in-out infinite;
    animation-delay: var(--delay, 0s), calc(var(--delay, 0s) + var(--duration, 1s));
  }
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes floatSmoke {
  0%, 100% {
    transform: translateX(0);
    opacity: 0.5;
  }
  50% {
    transform: translateX(5px);
    opacity: 0.3;
  }
}
</style>
