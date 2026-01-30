<template>
  <div class="building-sketch" ref="sketchContainer" :class="{ 'is-visible': isVisible }">
    <svg 
      viewBox="0 0 500 320" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      class="sketch-svg"
    >
      <!-- Mountain range backdrop - layered -->
      <polyline class="draw-line delay-0" points="0,280 40,240 70,255 110,210 150,235 190,195 230,220 270,180 310,200 350,165 390,190 430,155 470,175 500,160" stroke="#A69585" stroke-width="0.75" stroke-opacity="0.25"/>
      <polyline class="draw-line delay-0" points="0,280 50,235 90,250 130,205 175,230 220,185 260,215 300,175 345,195 385,155 425,180 465,145 500,165" stroke="#A69585" stroke-width="0.75" stroke-opacity="0.35"/>
      
      <!-- Ground line -->
      <line class="draw-line delay-1" x1="0" y1="280" x2="500" y2="280" stroke="#A69585" stroke-width="1.5"/>
      
      <!-- Foundation stones -->
      <path class="draw-line delay-2" d="M95 280 L95 275 L405 275 L405 280" stroke="#A69585" stroke-width="1"/>
      <line class="draw-line delay-2" x1="130" y1="275" x2="130" y2="280" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-2" x1="180" y1="275" x2="180" y2="280" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-2" x1="240" y1="275" x2="240" y2="280" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-2" x1="300" y1="275" x2="300" y2="280" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-2" x1="360" y1="275" x2="360" y2="280" stroke="#A69585" stroke-width="0.75"/>
      
      <!-- Main house - left wing -->
      <rect class="draw-line delay-3" x="100" y="180" width="120" height="95" stroke="#A69585" stroke-width="1.25"/>
      
      <!-- Main house - center/great room -->
      <rect class="draw-line delay-3" x="220" y="160" width="100" height="115" stroke="#A69585" stroke-width="1.25"/>
      
      <!-- Main house - right wing -->
      <rect class="draw-line delay-3" x="320" y="185" width="80" height="90" stroke="#A69585" stroke-width="1.25"/>
      
      <!-- Main roof - left wing -->
      <polyline class="draw-line delay-4" points="90,180 160,120 230,180" stroke="#B87333" stroke-width="1.75"/>
      <line class="draw-line delay-4" x1="160" y1="120" x2="160" y2="100" stroke="#B87333" stroke-width="1"/>
      
      <!-- Main roof - center (taller) -->
      <polyline class="draw-line delay-4" points="210,160 270,85 330,160" stroke="#B87333" stroke-width="2"/>
      <line class="draw-line delay-4" x1="270" y1="85" x2="270" y2="65" stroke="#B87333" stroke-width="1"/>
      
      <!-- Main roof - right wing -->
      <polyline class="draw-line delay-4" points="310,185 360,135 410,185" stroke="#B87333" stroke-width="1.75"/>
      
      <!-- Roof detail lines -->
      <line class="draw-line delay-5" x1="125" y1="150" x2="160" y2="120" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-5" x1="195" y1="150" x2="160" y2="120" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-5" x1="240" y1="122" x2="270" y2="85" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-5" x1="300" y1="122" x2="270" y2="85" stroke="#A69585" stroke-width="0.75"/>
      
      <!-- Dormer on center roof -->
      <rect class="draw-line delay-6" x="255" y="105" width="30" height="25" stroke="#A69585" stroke-width="1"/>
      <polyline class="draw-line delay-6" points="250,105 270,88 290,105" stroke="#B87333" stroke-width="1.25"/>
      <line class="draw-line delay-6" x1="270" y1="105" x2="270" y2="130" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-6" x1="255" y1="117" x2="285" y2="117" stroke="#A69585" stroke-width="0.75"/>
      
      <!-- Front door with detail -->
      <rect class="draw-line delay-7" x="245" y="215" width="30" height="60" stroke="#A69585" stroke-width="1.25"/>
      <line class="draw-line delay-7" x1="260" y1="215" x2="260" y2="275" stroke="#A69585" stroke-width="0.75"/>
      <circle class="draw-line delay-7" cx="268" cy="248" r="2" stroke="#A69585" stroke-width="1"/>
      <circle class="draw-line delay-7" cx="252" cy="248" r="2" stroke="#A69585" stroke-width="1"/>
      <!-- Door transom -->
      <path class="draw-line delay-7" d="M245 215 Q260 200 275 215" stroke="#A69585" stroke-width="1"/>
      
      <!-- Porch -->
      <line class="draw-line delay-8" x1="235" y1="210" x2="285" y2="210" stroke="#A69585" stroke-width="1"/>
      <line class="draw-line delay-8" x1="238" y1="210" x2="238" y2="275" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-8" x1="282" y1="210" x2="282" y2="275" stroke="#A69585" stroke-width="0.75"/>
      <rect class="draw-line delay-8" x="232" y="275" width="56" height="5" stroke="#A69585" stroke-width="0.75"/>
      
      <!-- Left wing windows (3 with panes) -->
      <g class="draw-line delay-9">
        <rect x="115" y="200" width="28" height="35" stroke="#A69585" stroke-width="1"/>
        <line x1="129" y1="200" x2="129" y2="235" stroke="#A69585" stroke-width="0.5"/>
        <line x1="115" y1="217" x2="143" y2="217" stroke="#A69585" stroke-width="0.5"/>
      </g>
      <g class="draw-line delay-9">
        <rect x="155" y="200" width="28" height="35" stroke="#A69585" stroke-width="1"/>
        <line x1="169" y1="200" x2="169" y2="235" stroke="#A69585" stroke-width="0.5"/>
        <line x1="155" y1="217" x2="183" y2="217" stroke="#A69585" stroke-width="0.5"/>
      </g>
      <g class="draw-line delay-9">
        <rect x="195" y="200" width="20" height="35" stroke="#A69585" stroke-width="1"/>
        <line x1="205" y1="200" x2="205" y2="235" stroke="#A69585" stroke-width="0.5"/>
        <line x1="195" y1="217" x2="215" y2="217" stroke="#A69585" stroke-width="0.5"/>
      </g>
      
      <!-- Center great room windows (large with many panes) -->
      <g class="draw-line delay-10">
        <rect x="225" y="170" width="22" height="35" stroke="#A69585" stroke-width="1"/>
        <line x1="236" y1="170" x2="236" y2="205" stroke="#A69585" stroke-width="0.5"/>
        <line x1="225" y1="182" x2="247" y2="182" stroke="#A69585" stroke-width="0.5"/>
        <line x1="225" y1="193" x2="247" y2="193" stroke="#A69585" stroke-width="0.5"/>
      </g>
      <g class="draw-line delay-10">
        <rect x="298" y="170" width="22" height="35" stroke="#A69585" stroke-width="1"/>
        <line x1="309" y1="170" x2="309" y2="205" stroke="#A69585" stroke-width="0.5"/>
        <line x1="298" y1="182" x2="320" y2="182" stroke="#A69585" stroke-width="0.5"/>
        <line x1="298" y1="193" x2="320" y2="193" stroke="#A69585" stroke-width="0.5"/>
      </g>
      
      <!-- Right wing windows -->
      <g class="draw-line delay-11">
        <rect x="335" y="205" width="25" height="30" stroke="#A69585" stroke-width="1"/>
        <line x1="347" y1="205" x2="347" y2="235" stroke="#A69585" stroke-width="0.5"/>
        <line x1="335" y1="220" x2="360" y2="220" stroke="#A69585" stroke-width="0.5"/>
      </g>
      <g class="draw-line delay-11">
        <rect x="370" y="205" width="25" height="30" stroke="#A69585" stroke-width="1"/>
        <line x1="382" y1="205" x2="382" y2="235" stroke="#A69585" stroke-width="0.5"/>
        <line x1="370" y1="220" x2="395" y2="220" stroke="#A69585" stroke-width="0.5"/>
      </g>
      
      <!-- Chimney with detail -->
      <rect class="draw-line delay-12" x="145" y="105" width="18" height="35" stroke="#A69585" stroke-width="1.25"/>
      <line class="draw-line delay-12" x1="145" y1="115" x2="163" y2="115" stroke="#A69585" stroke-width="0.5"/>
      <line class="draw-line delay-12" x1="145" y1="125" x2="163" y2="125" stroke="#A69585" stroke-width="0.5"/>
      <rect class="draw-line delay-12" x="143" y="100" width="22" height="5" stroke="#A69585" stroke-width="1"/>
      
      <!-- Second chimney -->
      <rect class="draw-line delay-12" x="355" y="115" width="14" height="30" stroke="#A69585" stroke-width="1"/>
      <rect class="draw-line delay-12" x="353" y="110" width="18" height="5" stroke="#A69585" stroke-width="1"/>
      
      <!-- Smoke wisps -->
      <path class="draw-line delay-13 smoke-path" d="M154 95 Q158 80 152 70 Q146 60 154 45" stroke="#A69585" stroke-width="0.75" stroke-opacity="0.4" stroke-linecap="round"/>
      <path class="draw-line delay-13 smoke-path-2" d="M362 105 Q368 90 360 78 Q352 66 362 52" stroke="#A69585" stroke-width="0.75" stroke-opacity="0.4" stroke-linecap="round"/>
      
      <!-- Garage/workshop on right -->
      <rect class="draw-line delay-14" x="420" y="220" width="60" height="60" stroke="#A69585" stroke-width="1"/>
      <polyline class="draw-line delay-14" points="415,220 450,185 485,220" stroke="#B87333" stroke-width="1.5"/>
      <rect class="draw-line delay-14" x="430" y="245" width="40" height="35" stroke="#A69585" stroke-width="1"/>
      <line class="draw-line delay-14" x1="450" y1="245" x2="450" y2="280" stroke="#A69585" stroke-width="0.75"/>
      
      <!-- Pine tree left - detailed -->
      <g class="draw-line delay-15">
        <line x1="50" y1="280" x2="50" y2="220" stroke="#A69585" stroke-width="1.5"/>
        <polyline points="30,260 50,240 70,260" stroke="#A69585" stroke-width="1" stroke-linecap="round"/>
        <polyline points="33,248 50,228 67,248" stroke="#A69585" stroke-width="1" stroke-linecap="round"/>
        <polyline points="36,236 50,218 64,236" stroke="#A69585" stroke-width="1" stroke-linecap="round"/>
        <polyline points="40,225 50,210 60,225" stroke="#A69585" stroke-width="1" stroke-linecap="round"/>
      </g>
      
      <!-- Pine tree right - detailed -->
      <g class="draw-line delay-16">
        <line x1="470" y1="280" x2="470" y2="210" stroke="#A69585" stroke-width="1.5"/>
        <polyline points="448,265 470,242 492,265" stroke="#A69585" stroke-width="1" stroke-linecap="round"/>
        <polyline points="451,250 470,228 489,250" stroke="#A69585" stroke-width="1" stroke-linecap="round"/>
        <polyline points="454,236 470,215 486,236" stroke="#A69585" stroke-width="1" stroke-linecap="round"/>
        <polyline points="458,222 470,203 482,222" stroke="#A69585" stroke-width="1" stroke-linecap="round"/>
        <polyline points="462,210 470,195 478,210" stroke="#A69585" stroke-width="1" stroke-linecap="round"/>
      </g>
      
      <!-- Small decorative bushes -->
      <path class="draw-line delay-17" d="M105 278 Q100 270 105 265 Q110 260 115 265 Q120 260 125 265 Q130 270 125 278" stroke="#A69585" stroke-width="0.75"/>
      <path class="draw-line delay-17" d="M385 278 Q380 272 385 267 Q390 262 395 267 Q400 272 395 278" stroke="#A69585" stroke-width="0.75"/>
      
      <!-- Pathway to door -->
      <path class="draw-line delay-18" d="M260 280 L255 295 L265 295 L260 280 M250 295 L245 310 L275 310 L270 295" stroke="#A69585" stroke-width="0.75"/>
      
      <!-- Fence detail left -->
      <g class="draw-line delay-19">
        <line x1="70" y1="280" x2="70" y2="268" stroke="#A69585" stroke-width="0.75"/>
        <line x1="80" y1="280" x2="80" y2="268" stroke="#A69585" stroke-width="0.75"/>
        <line x1="68" y1="272" x2="82" y2="272" stroke="#A69585" stroke-width="0.5"/>
        <line x1="68" y1="276" x2="82" y2="276" stroke="#A69585" stroke-width="0.5"/>
      </g>
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
  max-width: 550px;
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
.is-visible .delay-1 { animation-delay: 0.15s; }
.is-visible .delay-2 { animation-delay: 0.3s; }
.is-visible .delay-3 { animation-delay: 0.5s; }
.is-visible .delay-4 { animation-delay: 0.7s; }
.is-visible .delay-5 { animation-delay: 0.9s; }
.is-visible .delay-6 { animation-delay: 1.1s; }
.is-visible .delay-7 { animation-delay: 1.3s; }
.is-visible .delay-8 { animation-delay: 1.5s; }
.is-visible .delay-9 { animation-delay: 1.7s; }
.is-visible .delay-10 { animation-delay: 1.9s; }
.is-visible .delay-11 { animation-delay: 2.1s; }
.is-visible .delay-12 { animation-delay: 2.3s; }
.is-visible .delay-13 { animation-delay: 2.5s; }
.is-visible .delay-14 { animation-delay: 2.7s; }
.is-visible .delay-15 { animation-delay: 2.9s; }
.is-visible .delay-16 { animation-delay: 3.1s; }
.is-visible .delay-17 { animation-delay: 3.3s; }
.is-visible .delay-18 { animation-delay: 3.5s; }
.is-visible .delay-19 { animation-delay: 3.7s; }

.is-visible .smoke-path {
  animation: drawIn 1s ease-out forwards, floatSmoke 3s ease-in-out 3.5s infinite;
}

.is-visible .smoke-path-2 {
  animation: drawIn 1s ease-out forwards, floatSmoke 3s ease-in-out 4s infinite reverse;
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
