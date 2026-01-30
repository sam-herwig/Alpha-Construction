<template>
  <div class="building-sketch" ref="sketchContainer" :class="{ 'is-visible': isVisible }">
    <svg 
      viewBox="0 0 400 300" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      class="sketch-svg"
    >
      <!-- Ground line -->
      <line 
        class="draw-line delay-0"
        x1="0" y1="260" x2="400" y2="260" 
        stroke="#A69585" 
        stroke-width="2"
      />
      
      <!-- Mountain backdrop -->
      <polyline 
        class="draw-line delay-1"
        points="0,260 60,200 100,230 160,170 220,210 280,150 340,190 400,160"
        stroke="#A69585" 
        stroke-width="1"
        stroke-opacity="0.4"
      />
      
      <!-- House base -->
      <rect 
        class="draw-line delay-2"
        x="120" y="180" width="160" height="80" 
        stroke="#A69585" 
        stroke-width="1.5"
      />
      
      <!-- Roof -->
      <polyline 
        class="draw-line delay-3"
        points="100,180 200,110 300,180"
        stroke="#B87333" 
        stroke-width="2"
      />
      
      <!-- Door -->
      <rect 
        class="draw-line delay-4"
        x="180" y="210" width="40" height="50" 
        stroke="#A69585" 
        stroke-width="1.5"
      />
      
      <!-- Window left -->
      <rect 
        class="draw-line delay-5"
        x="135" y="200" width="30" height="30" 
        stroke="#A69585" 
        stroke-width="1.5"
      />
      
      <!-- Window right -->
      <rect 
        class="draw-line delay-5"
        x="235" y="200" width="30" height="30" 
        stroke="#A69585" 
        stroke-width="1.5"
      />
      
      <!-- Chimney -->
      <rect 
        class="draw-line delay-6"
        x="240" y="100" width="20" height="40" 
        stroke="#A69585" 
        stroke-width="1.5"
      />
      
      <!-- Smoke -->
      <path 
        class="draw-line delay-7 smoke-path"
        d="M250 95 Q255 80 248 70 Q241 60 250 45"
        stroke="#A69585" 
        stroke-width="1"
        stroke-opacity="0.5"
        stroke-linecap="round"
      />
      
      <!-- Tree left -->
      <g class="draw-line delay-6">
        <line x1="60" y1="260" x2="60" y2="230" stroke="#A69585" stroke-width="1.5"/>
        <polyline points="45,240 60,225 75,240" stroke="#A69585" stroke-width="1.5" stroke-linecap="round"/>
      </g>
      
      <!-- Tree right -->
      <g class="draw-line delay-7">
        <line x1="340" y1="260" x2="340" y2="220" stroke="#A69585" stroke-width="1.5"/>
        <polyline points="320,235 340,215 360,235" stroke="#A69585" stroke-width="1.5" stroke-linecap="round"/>
        <polyline points="325,250 340,235 355,250" stroke="#A69585" stroke-width="1.5" stroke-linecap="round"/>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

console.log('[BuildingSketch] Script setup running')

const sketchContainer = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  console.log('[BuildingSketch] mounted, sketchContainer:', sketchContainer.value)
  
  nextTick(() => {
    console.log('[BuildingSketch] nextTick, sketchContainer:', sketchContainer.value)
    
    if (typeof window === 'undefined') {
      console.log('[BuildingSketch] SSR - skipping observer')
      return
    }
    
    if (!sketchContainer.value) {
      console.log('[BuildingSketch] No ref - skipping observer')
      return
    }
    
    observer = new IntersectionObserver(
      (entries) => {
        console.log('[BuildingSketch] IntersectionObserver fired:', entries)
        entries.forEach((entry) => {
          console.log('[BuildingSketch] entry.isIntersecting:', entry.isIntersecting)
          if (entry.isIntersecting) {
            console.log('[BuildingSketch] Setting isVisible = true')
            isVisible.value = true
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )
    
    console.log('[BuildingSketch] Observing element')
    observer.observe(sketchContainer.value)
  })
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style lang="scss" scoped>
.building-sketch {
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  padding: 1rem;
}

.sketch-svg {
  width: 100%;
  height: auto;
  overflow: visible;
}

.draw-line {
  fill: none;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}

// Only animate when visible
.is-visible .draw-line {
  animation: drawIn 1.5s ease-out forwards;
}

.is-visible .delay-0 { animation-delay: 0s; }
.is-visible .delay-1 { animation-delay: 0.2s; }
.is-visible .delay-2 { animation-delay: 0.5s; }
.is-visible .delay-3 { animation-delay: 0.8s; }
.is-visible .delay-4 { animation-delay: 1.1s; }
.is-visible .delay-5 { animation-delay: 1.3s; }
.is-visible .delay-6 { animation-delay: 1.5s; }
.is-visible .delay-7 { animation-delay: 1.8s; }

.is-visible .smoke-path {
  animation: drawIn 1s ease-out forwards, floatSmoke 3s ease-in-out 2.8s infinite;
}

@keyframes drawIn {
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
