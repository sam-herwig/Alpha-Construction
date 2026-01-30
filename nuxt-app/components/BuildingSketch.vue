<template>
  <div class="building-sketch" ref="sketchContainer" :class="{ 'is-visible': isVisible }">
    <svg 
      viewBox="0 0 440 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      class="sketch-svg"
    >
      <!-- Mountain backdrop - minimal Breck silhouette -->
      <polyline class="draw-line delay-0" points="0,85 40,78 70,65 100,72 130,55 160,48 190,58 220,42 250,50 280,38 310,48 340,42 370,55 400,50 440,60" stroke="#A69585" stroke-width="0.75" stroke-opacity="0.2"/>
      
      <!-- Ground line -->
      <line class="draw-line delay-1" x1="0" y1="175" x2="440" y2="175" stroke="#A69585" stroke-width="1"/>
      
      <!-- LEFT SECTION - lower level with deck -->
      <rect class="draw-line delay-2" x="40" y="115" width="95" height="60" stroke="#A69585" stroke-width="1"/>
      <!-- Left roof - shed style sloping left -->
      <polyline class="draw-line delay-3" points="35,115 40,100 140,115" stroke="#A69585" stroke-width="1.25"/>
      <!-- Left windows -->
      <rect class="draw-line delay-4" x="50" y="128" width="28" height="22" stroke="#A69585" stroke-width="0.75"/>
      <rect class="draw-line delay-4" x="88" y="128" width="28" height="22" stroke="#A69585" stroke-width="0.75"/>
      <!-- Deck railing -->
      <line class="draw-line delay-5" x1="40" y1="118" x2="40" y2="175" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-5" x1="25" y1="125" x2="40" y2="125" stroke="#A69585" stroke-width="0.5"/>
      <line class="draw-line delay-5" x1="25" y1="135" x2="40" y2="135" stroke="#A69585" stroke-width="0.5"/>
      <line class="draw-line delay-5" x1="25" y1="125" x2="25" y2="175" stroke="#A69585" stroke-width="0.5"/>
      
      <!-- CENTER SECTION - main entry with stairs -->
      <rect class="draw-line delay-2" x="135" y="105" width="100" height="70" stroke="#A69585" stroke-width="1"/>
      <!-- Center roof - flat with overhang + beam -->
      <line class="draw-line delay-3" x1="125" y1="105" x2="245" y2="105" stroke="#A69585" stroke-width="1.25"/>
      <line class="draw-line delay-3" x1="130" y1="100" x2="240" y2="100" stroke="#A69585" stroke-width="0.75"/>
      <!-- Support beam angled -->
      <line class="draw-line delay-3" x1="130" y1="100" x2="145" y2="125" stroke="#A69585" stroke-width="0.75"/>
      <!-- Large center windows -->
      <rect class="draw-line delay-4" x="145" y="115" width="35" height="30" stroke="#A69585" stroke-width="0.75"/>
      <rect class="draw-line delay-4" x="190" y="115" width="35" height="30" stroke="#A69585" stroke-width="0.75"/>
      <!-- Entry stairs -->
      <line class="draw-line delay-5" x1="160" y1="175" x2="160" y2="158" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-5" x1="205" y1="175" x2="205" y2="158" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-5" x1="160" y1="158" x2="205" y2="158" stroke="#A69585" stroke-width="0.5"/>
      <line class="draw-line delay-5" x1="160" y1="163" x2="205" y2="163" stroke="#A69585" stroke-width="0.5"/>
      <line class="draw-line delay-5" x1="160" y1="168" x2="205" y2="168" stroke="#A69585" stroke-width="0.5"/>
      <!-- Stair railing -->
      <line class="draw-line delay-6" x1="158" y1="155" x2="158" y2="175" stroke="#A69585" stroke-width="0.5"/>
      <line class="draw-line delay-6" x1="207" y1="155" x2="207" y2="175" stroke="#A69585" stroke-width="0.5"/>
      
      <!-- RIGHT SECTION - tall with peaked gable -->
      <rect class="draw-line delay-2" x="235" y="85" width="90" height="90" stroke="#A69585" stroke-width="1"/>
      <!-- Peaked gable roof -->
      <polyline class="draw-line delay-3" points="230,85 280,55 330,85" stroke="#A69585" stroke-width="1.25"/>
      <!-- Roof overhang detail -->
      <line class="draw-line delay-3" x1="275" y1="55" x2="340" y2="80" stroke="#A69585" stroke-width="0.75"/>
      <!-- Tall windows (stacked) -->
      <rect class="draw-line delay-4" x="250" y="95" width="25" height="20" stroke="#A69585" stroke-width="0.75"/>
      <rect class="draw-line delay-4" x="250" y="120" width="25" height="20" stroke="#A69585" stroke-width="0.75"/>
      <rect class="draw-line delay-4" x="285" y="95" width="25" height="20" stroke="#A69585" stroke-width="0.75"/>
      <rect class="draw-line delay-4" x="285" y="120" width="25" height="20" stroke="#A69585" stroke-width="0.75"/>
      
      <!-- GARAGE - right side -->
      <rect class="draw-line delay-2" x="325" y="115" width="75" height="60" stroke="#A69585" stroke-width="1"/>
      <!-- Garage roof -->
      <line class="draw-line delay-3" x1="320" y1="115" x2="405" y2="115" stroke="#A69585" stroke-width="1"/>
      <!-- Garage doors -->
      <rect class="draw-line delay-7" x="335" y="135" width="55" height="40" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-7" x1="362" y1="135" x2="362" y2="175" stroke="#A69585" stroke-width="0.5"/>
      <!-- Horizontal door lines -->
      <line class="draw-line delay-7" x1="335" y1="145" x2="390" y2="145" stroke="#A69585" stroke-width="0.35"/>
      <line class="draw-line delay-7" x1="335" y1="155" x2="390" y2="155" stroke="#A69585" stroke-width="0.35"/>
      <line class="draw-line delay-7" x1="335" y1="165" x2="390" y2="165" stroke="#A69585" stroke-width="0.35"/>
      
      <!-- Stone pillars at entry -->
      <rect class="draw-line delay-6" x="155" y="155" width="6" height="20" stroke="#A69585" stroke-width="0.5"/>
      <rect class="draw-line delay-6" x="204" y="155" width="6" height="20" stroke="#A69585" stroke-width="0.5"/>
      
      <!-- Landscape - simple boulder hint -->
      <path class="draw-line delay-8" d="M100,175 Q110,170 120,175 M125,175 Q135,168 150,175" stroke="#A69585" stroke-width="0.5" stroke-linecap="round"/>
      
      <!-- Small tree left -->
      <line class="draw-line delay-8" x1="55" y1="175" x2="55" y2="155" stroke="#A69585" stroke-width="0.5"/>
      <polyline class="draw-line delay-8" points="48,162 55,152 62,162" stroke="#A69585" stroke-width="0.5"/>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const sketchContainer = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  nextTick(() => {
    if (typeof window === 'undefined' || !sketchContainer.value) return
    
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15, rootMargin: '50px' }
    )
    
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
  max-width: 500px;
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
  animation: drawIn 1.2s ease-out forwards;
}

.is-visible .delay-0 { animation-delay: 0s; }
.is-visible .delay-1 { animation-delay: 0.1s; }
.is-visible .delay-2 { animation-delay: 0.25s; }
.is-visible .delay-3 { animation-delay: 0.45s; }
.is-visible .delay-4 { animation-delay: 0.65s; }
.is-visible .delay-5 { animation-delay: 0.85s; }
.is-visible .delay-6 { animation-delay: 1.0s; }
.is-visible .delay-7 { animation-delay: 1.15s; }
.is-visible .delay-8 { animation-delay: 1.35s; }

@keyframes drawIn {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
