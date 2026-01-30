<template>
  <div class="building-sketch" ref="sketchContainer" :class="{ 'is-visible': isVisible }">
    <svg 
      viewBox="0 0 440 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      class="sketch-svg"
    >
      <!-- Subtle grid/construction lines background -->
      <line class="draw-line delay-0" x1="0" y1="180" x2="440" y2="180" stroke="#A69585" stroke-width="0.25" stroke-opacity="0.15"/>
      <line class="draw-line delay-0" x1="0" y1="140" x2="440" y2="140" stroke="#A69585" stroke-width="0.25" stroke-opacity="0.1"/>
      <line class="draw-line delay-0" x1="0" y1="100" x2="440" y2="100" stroke="#A69585" stroke-width="0.25" stroke-opacity="0.08"/>
      
      <!-- Mountain silhouette - single clean line -->
      <path class="draw-line delay-0" d="M0,82 Q30,78 55,65 T110,72 T160,48 T210,42 T260,52 T310,46 T360,58 T410,50 L440,58" stroke="#A69585" stroke-width="0.75" stroke-opacity="0.12" stroke-linecap="round"/>
      
      <!-- Ground plane with shadow hint -->
      <line class="draw-line delay-1" x1="15" y1="180" x2="425" y2="180" stroke="#A69585" stroke-width="1.25"/>
      <line class="draw-line delay-1" x1="25" y1="183" x2="415" y2="183" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.2"/>
      
      <!-- Building shadow on ground -->
      <path class="draw-line delay-8" d="M45 180 L35 183 L415 183 L405 180" stroke="#A69585" stroke-width="0.3" stroke-opacity="0.15" fill="none"/>
      
      <!-- ====== LEFT WING ====== -->
      <!-- Main outline - confident single stroke -->
      <path class="draw-line delay-2" d="M45,118 L45,180 L140,180 L140,118" stroke="#A69585" stroke-width="1.1"/>
      
      <!-- Shed roof with overhang -->
      <path class="draw-line delay-3" d="M38,118 L48,98 L148,118" stroke="#A69585" stroke-width="1.4"/>
      <!-- Roof edge thickness -->
      <line class="draw-line delay-3" x1="38" y1="118" x2="38" y2="121" stroke="#A69585" stroke-width="0.8"/>
      
      <!-- Windows - clean rectangles with single shadow line -->
      <rect class="draw-line delay-4" x="55" y="130" width="32" height="28" stroke="#A69585" stroke-width="0.9"/>
      <line class="draw-line delay-4" x1="55" y1="130" x2="52" y2="127" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.4"/>
      <line class="draw-line delay-4" x1="52" y1="127" x2="52" y2="155" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.4"/>
      
      <rect class="draw-line delay-4" x="98" y="130" width="32" height="28" stroke="#A69585" stroke-width="0.9"/>
      <line class="draw-line delay-4" x1="98" y1="130" x2="95" y2="127" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.4"/>
      <line class="draw-line delay-4" x1="95" y1="127" x2="95" y2="155" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.4"/>
      
      <!-- Deck/balcony -->
      <path class="draw-line delay-5" d="M45,120 L28,120 L28,180" stroke="#A69585" stroke-width="0.7"/>
      <!-- Railing - horizontal cables -->
      <line class="draw-line delay-5" x1="28" y1="130" x2="45" y2="130" stroke="#A69585" stroke-width="0.35"/>
      <line class="draw-line delay-5" x1="28" y1="138" x2="45" y2="138" stroke="#A69585" stroke-width="0.35"/>
      <line class="draw-line delay-5" x1="28" y1="146" x2="45" y2="146" stroke="#A69585" stroke-width="0.35"/>
      
      <!-- ====== CENTER SECTION ====== -->
      <!-- Main form -->
      <path class="draw-line delay-2" d="M138,105 L138,180 L248,180 L248,105" stroke="#A69585" stroke-width="1.1"/>
      
      <!-- Flat roof with deep overhang -->
      <line class="draw-line delay-3" x1="128" y1="105" x2="258" y2="105" stroke="#A69585" stroke-width="1.6"/>
      <!-- Roof fascia depth -->
      <path class="draw-line delay-3" d="M128,105 L128,100 L258,100 L258,105" stroke="#A69585" stroke-width="0.6"/>
      
      <!-- Angled beam/bracket -->
      <line class="draw-line delay-3" x1="130" y1="100" x2="150" y2="128" stroke="#A69585" stroke-width="1.3"/>
      
      <!-- Large windows -->
      <rect class="draw-line delay-4" x="150" y="115" width="42" height="38" stroke="#A69585" stroke-width="0.9"/>
      <line class="draw-line delay-4" x1="150" y1="115" x2="146" y2="111" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.4"/>
      <line class="draw-line delay-4" x1="146" y1="111" x2="146" y2="150" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.4"/>
      <!-- Window mullion -->
      <line class="draw-line delay-4" x1="171" y1="115" x2="171" y2="153" stroke="#A69585" stroke-width="0.35"/>
      
      <rect class="draw-line delay-4" x="200" y="115" width="42" height="38" stroke="#A69585" stroke-width="0.9"/>
      <line class="draw-line delay-4" x1="200" y1="115" x2="196" y2="111" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.4"/>
      <line class="draw-line delay-4" x1="196" y1="111" x2="196" y2="150" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.4"/>
      <line class="draw-line delay-4" x1="221" y1="115" x2="221" y2="153" stroke="#A69585" stroke-width="0.35"/>
      
      <!-- Entry stairs - perspective -->
      <path class="draw-line delay-5" d="M165,180 L165,162 L230,162 L230,180" stroke="#A69585" stroke-width="0.8"/>
      <!-- Step lines -->
      <line class="draw-line delay-5" x1="165" y1="168" x2="230" y2="168" stroke="#A69585" stroke-width="0.4"/>
      <line class="draw-line delay-5" x1="165" y1="174" x2="230" y2="174" stroke="#A69585" stroke-width="0.4"/>
      <!-- Stair side depth -->
      <path class="draw-line delay-5" d="M230,162 L235,158 L235,180" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.5"/>
      
      <!-- Stone pillar accents -->
      <rect class="draw-line delay-6" x="163" y="158" width="6" height="22" stroke="#A69585" stroke-width="0.6"/>
      <rect class="draw-line delay-6" x="226" y="158" width="6" height="22" stroke="#A69585" stroke-width="0.6"/>
      
      <!-- ====== RIGHT TALL SECTION ====== -->
      <!-- Main form -->
      <path class="draw-line delay-2" d="M246,85 L246,180 L338,180 L338,85" stroke="#A69585" stroke-width="1.1"/>
      
      <!-- Peaked gable -->
      <path class="draw-line delay-3" d="M240,85 L292,48 L344,85" stroke="#A69585" stroke-width="1.6"/>
      <!-- Ridge and eave extension -->
      <path class="draw-line delay-3" d="M292,48 L300,42 L358,82" stroke="#A69585" stroke-width="0.8"/>
      <line class="draw-line delay-3" x1="344" y1="85" x2="358" y2="82" stroke="#A69585" stroke-width="0.6"/>
      
      <!-- Stacked windows -->
      <rect class="draw-line delay-4" x="258" y="95" width="30" height="26" stroke="#A69585" stroke-width="0.9"/>
      <line class="draw-line delay-4" x1="258" y1="95" x2="254" y2="91" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.4"/>
      
      <rect class="draw-line delay-4" x="258" y="128" width="30" height="26" stroke="#A69585" stroke-width="0.9"/>
      <line class="draw-line delay-4" x1="258" y1="128" x2="254" y2="124" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.4"/>
      
      <rect class="draw-line delay-4" x="298" y="95" width="30" height="26" stroke="#A69585" stroke-width="0.9"/>
      <rect class="draw-line delay-4" x="298" y="128" width="30" height="26" stroke="#A69585" stroke-width="0.9"/>
      
      <!-- ====== GARAGE ====== -->
      <!-- Main form -->
      <path class="draw-line delay-2" d="M336,118 L336,180 L410,180 L410,118" stroke="#A69585" stroke-width="1.1"/>
      
      <!-- Flat roof -->
      <line class="draw-line delay-3" x1="330" y1="118" x2="416" y2="118" stroke="#A69585" stroke-width="1.4"/>
      <path class="draw-line delay-3" d="M330,118 L330,114 L416,114 L416,118" stroke="#A69585" stroke-width="0.5"/>
      
      <!-- Garage door -->
      <rect class="draw-line delay-7" x="344" y="138" width="58" height="42" stroke="#A69585" stroke-width="0.9"/>
      <!-- Door panels - horizontal -->
      <line class="draw-line delay-7" x1="344" y1="150" x2="402" y2="150" stroke="#A69585" stroke-width="0.3"/>
      <line class="draw-line delay-7" x1="344" y1="162" x2="402" y2="162" stroke="#A69585" stroke-width="0.3"/>
      <line class="draw-line delay-7" x1="344" y1="174" x2="402" y2="174" stroke="#A69585" stroke-width="0.3"/>
      <!-- Center divide -->
      <line class="draw-line delay-7" x1="373" y1="138" x2="373" y2="180" stroke="#A69585" stroke-width="0.5"/>
      
      <!-- ====== LANDSCAPE ====== -->
      <!-- Boulder grouping - organic curves -->
      <path class="draw-line delay-8" d="M108,180 C112,175 118,175 122,180" stroke="#A69585" stroke-width="0.6"/>
      <path class="draw-line delay-8" d="M125,180 C132,172 142,173 150,180" stroke="#A69585" stroke-width="0.6"/>
      
      <!-- Single pine tree - simple elegant -->
      <line class="draw-line delay-8" x1="62" y1="180" x2="62" y2="155" stroke="#A69585" stroke-width="0.6"/>
      <path class="draw-line delay-8" d="M52,168 L62,154 L72,168" stroke="#A69585" stroke-width="0.5"/>
      <path class="draw-line delay-8" d="M54,175 L62,162 L70,175" stroke="#A69585" stroke-width="0.4"/>
      
      <!-- Dimension line hint (architectural touch) -->
      <line class="draw-line delay-8" x1="45" y1="192" x2="140" y2="192" stroke="#A69585" stroke-width="0.25" stroke-opacity="0.3"/>
      <line class="draw-line delay-8" x1="45" y1="190" x2="45" y2="194" stroke="#A69585" stroke-width="0.25" stroke-opacity="0.3"/>
      <line class="draw-line delay-8" x1="140" y1="190" x2="140" y2="194" stroke="#A69585" stroke-width="0.25" stroke-opacity="0.3"/>
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
  max-width: 520px;
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

.is-visible .draw-line {
  animation: drawIn 1s ease-out forwards;
}

.is-visible .delay-0 { animation-delay: 0s; }
.is-visible .delay-1 { animation-delay: 0.08s; }
.is-visible .delay-2 { animation-delay: 0.18s; }
.is-visible .delay-3 { animation-delay: 0.35s; }
.is-visible .delay-4 { animation-delay: 0.55s; }
.is-visible .delay-5 { animation-delay: 0.72s; }
.is-visible .delay-6 { animation-delay: 0.85s; }
.is-visible .delay-7 { animation-delay: 0.98s; }
.is-visible .delay-8 { animation-delay: 1.12s; }

@keyframes drawIn {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
