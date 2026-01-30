<template>
  <div class="building-sketch" ref="sketchContainer" :class="{ 'is-visible': isVisible }">
    <svg 
      viewBox="0 0 440 210" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      class="sketch-svg"
    >
      <!-- Mountain backdrop - minimal Breck silhouette -->
      <polyline class="draw-line delay-0" points="0,90 40,82 70,68 100,75 130,58 160,50 190,62 220,45 250,52 280,40 310,50 340,44 370,58 400,52 440,65" stroke="#A69585" stroke-width="0.75" stroke-opacity="0.15"/>
      
      <!-- Ground line with subtle depth -->
      <line class="draw-line delay-1" x1="0" y1="185" x2="440" y2="185" stroke="#A69585" stroke-width="1.5"/>
      <line class="draw-line delay-1" x1="0" y1="188" x2="440" y2="188" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.3"/>
      
      <!-- === LEFT SECTION - lower level === -->
      <!-- Back wall hint (depth) -->
      <line class="draw-line delay-2" x1="135" y1="120" x2="142" y2="112" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.4"/>
      <line class="draw-line delay-2" x1="142" y1="112" x2="142" y2="175" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.4"/>
      
      <!-- Main left structure -->
      <rect class="draw-line delay-2" x="40" y="120" width="95" height="65" stroke="#A69585" stroke-width="1.25"/>
      
      <!-- Left roof with 3D thickness -->
      <polyline class="draw-line delay-3" points="32,120 42,102 143,120" stroke="#A69585" stroke-width="1.5"/>
      <!-- Roof depth/fascia -->
      <line class="draw-line delay-3" x1="32" y1="120" x2="32" y2="124" stroke="#A69585" stroke-width="1"/>
      <line class="draw-line delay-3" x1="32" y1="124" x2="42" y2="106" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-3" x1="42" y1="102" x2="42" y2="106" stroke="#A69585" stroke-width="0.75"/>
      <!-- Roof underside shadow -->
      <line class="draw-line delay-3" x1="40" y1="120" x2="135" y2="120" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.5"/>
      
      <!-- Left windows with depth -->
      <rect class="draw-line delay-4" x="52" y="132" width="30" height="26" stroke="#A69585" stroke-width="1"/>
      <polyline class="draw-line delay-4" points="52,132 48,128 48,154 52,158" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.5"/>
      <line class="draw-line delay-4" x1="48" y1="128" x2="78" y2="128" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.5"/>
      
      <rect class="draw-line delay-4" x="92" y="132" width="30" height="26" stroke="#A69585" stroke-width="1"/>
      <polyline class="draw-line delay-4" points="92,132 88,128 88,154 92,158" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.5"/>
      <line class="draw-line delay-4" x1="88" y1="128" x2="118" y2="128" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.5"/>
      
      <!-- Deck with 3D railing -->
      <line class="draw-line delay-5" x1="40" y1="123" x2="40" y2="185" stroke="#A69585" stroke-width="1"/>
      <line class="draw-line delay-5" x1="22" y1="123" x2="40" y2="123" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-5" x1="22" y1="123" x2="22" y2="185" stroke="#A69585" stroke-width="0.75"/>
      <!-- Railing horizontals -->
      <line class="draw-line delay-5" x1="22" y1="133" x2="40" y2="133" stroke="#A69585" stroke-width="0.5"/>
      <line class="draw-line delay-5" x1="22" y1="143" x2="40" y2="143" stroke="#A69585" stroke-width="0.5"/>
      <!-- Railing posts -->
      <line class="draw-line delay-5" x1="28" y1="123" x2="28" y2="145" stroke="#A69585" stroke-width="0.4"/>
      <line class="draw-line delay-5" x1="34" y1="123" x2="34" y2="145" stroke="#A69585" stroke-width="0.4"/>
      
      <!-- === CENTER SECTION - main entry === -->
      <!-- Back wall depth -->
      <line class="draw-line delay-2" x1="240" y1="108" x2="248" y2="100" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.4"/>
      <line class="draw-line delay-2" x1="248" y1="100" x2="248" y2="178" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.4"/>
      
      <!-- Main center structure -->
      <rect class="draw-line delay-2" x="138" y="108" width="102" height="77" stroke="#A69585" stroke-width="1.25"/>
      
      <!-- Center flat roof with depth -->
      <line class="draw-line delay-3" x1="128" y1="108" x2="250" y2="108" stroke="#A69585" stroke-width="1.75"/>
      <!-- Roof top surface -->
      <line class="draw-line delay-3" x1="128" y1="102" x2="250" y2="102" stroke="#A69585" stroke-width="1"/>
      <!-- Roof thickness sides -->
      <line class="draw-line delay-3" x1="128" y1="102" x2="128" y2="108" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-3" x1="250" y1="102" x2="250" y2="108" stroke="#A69585" stroke-width="0.75"/>
      <!-- Angled support beam with depth -->
      <line class="draw-line delay-3" x1="130" y1="102" x2="148" y2="130" stroke="#A69585" stroke-width="1.25"/>
      <line class="draw-line delay-3" x1="134" y1="102" x2="152" y2="130" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.4"/>
      
      <!-- Large center windows with depth -->
      <rect class="draw-line delay-4" x="150" y="118" width="38" height="35" stroke="#A69585" stroke-width="1"/>
      <polyline class="draw-line delay-4" points="150,118 146,114 146,149 150,153" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.5"/>
      <line class="draw-line delay-4" x1="146" y1="114" x2="184" y2="114" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.5"/>
      
      <rect class="draw-line delay-4" x="198" y="118" width="38" height="35" stroke="#A69585" stroke-width="1"/>
      <polyline class="draw-line delay-4" points="198,118 194,114 194,149 198,153" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.5"/>
      <line class="draw-line delay-4" x1="194" y1="114" x2="232" y2="114" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.5"/>
      
      <!-- Entry stairs with 3D steps -->
      <line class="draw-line delay-5" x1="162" y1="185" x2="162" y2="165" stroke="#A69585" stroke-width="1"/>
      <line class="draw-line delay-5" x1="212" y1="185" x2="212" y2="165" stroke="#A69585" stroke-width="1"/>
      <!-- Step treads with depth -->
      <polygon class="draw-line delay-5" points="162,165 212,165 216,168 166,168" stroke="#A69585" stroke-width="0.5" fill="none"/>
      <polygon class="draw-line delay-5" points="162,172 212,172 216,175 166,175" stroke="#A69585" stroke-width="0.5" fill="none"/>
      <polygon class="draw-line delay-5" points="162,179 212,179 216,182 166,182" stroke="#A69585" stroke-width="0.5" fill="none"/>
      <!-- Stair risers -->
      <line class="draw-line delay-5" x1="216" y1="168" x2="216" y2="185" stroke="#A69585" stroke-width="0.5"/>
      
      <!-- Metal railings with posts -->
      <line class="draw-line delay-6" x1="158" y1="160" x2="158" y2="185" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-6" x1="216" y1="160" x2="216" y2="185" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-6" x1="158" y1="165" x2="158" y2="160" stroke="#A69585" stroke-width="1"/>
      <line class="draw-line delay-6" x1="216" y1="165" x2="216" y2="160" stroke="#A69585" stroke-width="1"/>
      
      <!-- Stone pillars with 3D -->
      <rect class="draw-line delay-6" x="160" y="160" width="8" height="25" stroke="#A69585" stroke-width="0.75"/>
      <polyline class="draw-line delay-6" points="168,160 172,156 172,181 168,185" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.5"/>
      <rect class="draw-line delay-6" x="206" y="160" width="8" height="25" stroke="#A69585" stroke-width="0.75"/>
      <polyline class="draw-line delay-6" points="214,160 218,156 218,181 214,185" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.5"/>
      
      <!-- === RIGHT TALL SECTION === -->
      <!-- Back wall depth -->
      <line class="draw-line delay-2" x1="330" y1="88" x2="340" y2="78" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.4"/>
      <line class="draw-line delay-2" x1="340" y1="78" x2="340" y2="178" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.4"/>
      
      <!-- Main right structure -->
      <rect class="draw-line delay-2" x="242" y="88" width="88" height="97" stroke="#A69585" stroke-width="1.25"/>
      
      <!-- Peaked gable roof with 3D -->
      <polyline class="draw-line delay-3" points="235,88 286,52 337,88" stroke="#A69585" stroke-width="1.75"/>
      <!-- Roof ridge depth -->
      <line class="draw-line delay-3" x1="286" y1="52" x2="296" y2="45" stroke="#A69585" stroke-width="1"/>
      <line class="draw-line delay-3" x1="296" y1="45" x2="347" y2="82" stroke="#A69585" stroke-width="1"/>
      <line class="draw-line delay-3" x1="337" y1="88" x2="347" y2="82" stroke="#A69585" stroke-width="0.75"/>
      <!-- Extended eave -->
      <line class="draw-line delay-3" x1="290" y1="52" x2="350" y2="80" stroke="#A69585" stroke-width="0.75"/>
      <!-- Gable underside -->
      <line class="draw-line delay-3" x1="242" y1="88" x2="286" y2="58" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.3"/>
      <line class="draw-line delay-3" x1="286" y1="58" x2="330" y2="88" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.3"/>
      
      <!-- Tall stacked windows with depth -->
      <rect class="draw-line delay-4" x="255" y="98" width="28" height="24" stroke="#A69585" stroke-width="1"/>
      <polyline class="draw-line delay-4" points="255,98 251,94 251,118 255,122" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.5"/>
      
      <rect class="draw-line delay-4" x="255" y="128" width="28" height="24" stroke="#A69585" stroke-width="1"/>
      <polyline class="draw-line delay-4" points="255,128 251,124 251,148 255,152" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.5"/>
      
      <rect class="draw-line delay-4" x="293" y="98" width="28" height="24" stroke="#A69585" stroke-width="1"/>
      <rect class="draw-line delay-4" x="293" y="128" width="28" height="24" stroke="#A69585" stroke-width="1"/>
      
      <!-- === GARAGE === -->
      <!-- Back wall depth -->
      <line class="draw-line delay-2" x1="405" y1="120" x2="415" y2="112" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.4"/>
      <line class="draw-line delay-2" x1="415" y1="112" x2="415" y2="182" stroke="#A69585" stroke-width="0.5" stroke-opacity="0.4"/>
      
      <!-- Garage structure -->
      <rect class="draw-line delay-2" x="332" y="120" width="73" height="65" stroke="#A69585" stroke-width="1.25"/>
      
      <!-- Garage roof flat with depth -->
      <line class="draw-line delay-3" x1="327" y1="120" x2="410" y2="120" stroke="#A69585" stroke-width="1.5"/>
      <line class="draw-line delay-3" x1="327" y1="115" x2="410" y2="115" stroke="#A69585" stroke-width="0.75"/>
      <line class="draw-line delay-3" x1="327" y1="115" x2="327" y2="120" stroke="#A69585" stroke-width="0.5"/>
      <line class="draw-line delay-3" x1="410" y1="115" x2="410" y2="120" stroke="#A69585" stroke-width="0.5"/>
      
      <!-- Garage doors with 3D panels -->
      <rect class="draw-line delay-7" x="340" y="140" width="58" height="45" stroke="#A69585" stroke-width="1"/>
      <!-- Door depth -->
      <polyline class="draw-line delay-7" points="340,140 336,136 336,181 340,185" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.5"/>
      <!-- Center divide -->
      <line class="draw-line delay-7" x1="369" y1="140" x2="369" y2="185" stroke="#A69585" stroke-width="0.75"/>
      <!-- Horizontal panels -->
      <line class="draw-line delay-7" x1="340" y1="152" x2="398" y2="152" stroke="#A69585" stroke-width="0.4"/>
      <line class="draw-line delay-7" x1="340" y1="164" x2="398" y2="164" stroke="#A69585" stroke-width="0.4"/>
      <line class="draw-line delay-7" x1="340" y1="176" x2="398" y2="176" stroke="#A69585" stroke-width="0.4"/>
      
      <!-- Landscape boulders with dimension -->
      <path class="draw-line delay-8" d="M105,185 Q115,178 125,185" stroke="#A69585" stroke-width="0.75"/>
      <path class="draw-line delay-8" d="M108,183 Q115,180 122,183" stroke="#A69585" stroke-width="0.4" stroke-opacity="0.4"/>
      <path class="draw-line delay-8" d="M128,185 Q138,176 152,185" stroke="#A69585" stroke-width="0.75"/>
      
      <!-- Tree with dimension -->
      <line class="draw-line delay-8" x1="60" y1="185" x2="60" y2="158" stroke="#A69585" stroke-width="0.75"/>
      <polyline class="draw-line delay-8" points="50,168 60,155 70,168" stroke="#A69585" stroke-width="0.75"/>
      <polyline class="draw-line delay-8" points="53,175 60,162 67,175" stroke="#A69585" stroke-width="0.5"/>
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

// Only animate when visible
.is-visible .draw-line {
  animation: drawIn 1.2s ease-out forwards;
}

.is-visible .delay-0 { animation-delay: 0s; }
.is-visible .delay-1 { animation-delay: 0.1s; }
.is-visible .delay-2 { animation-delay: 0.2s; }
.is-visible .delay-3 { animation-delay: 0.4s; }
.is-visible .delay-4 { animation-delay: 0.6s; }
.is-visible .delay-5 { animation-delay: 0.8s; }
.is-visible .delay-6 { animation-delay: 0.95s; }
.is-visible .delay-7 { animation-delay: 1.1s; }
.is-visible .delay-8 { animation-delay: 1.3s; }

@keyframes drawIn {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
