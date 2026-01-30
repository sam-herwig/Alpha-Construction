<template>
    <header :class="{'showHeader':isHeaderVisible}">
      <!-- <MainLogo/> -->
      <router-link class="main-logo" to="/">
        <img src="https://cdn.sanity.io/images/u2pvdjb3/production/731a0e68021cdaa0298bfe7172650c9a4470c914-1116x834.png" alt="Alpha Construction Main Logo">
      </router-link>

      <!-- <div class="controls" :class="{'open': menuOpen}">
        <button class="hamburger" :class="{'open': menuOpen}" aria-label="open main menu" @click="openMainMenu"></button>
      </div> -->
    </header>
<!-- :class="{'open': menuOpen}" -->
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const isHeaderVisible = ref(true);
    let lastScrollPosition = 0;

    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      isHeaderVisible.value = currentScrollPosition < lastScrollPosition;
      lastScrollPosition = currentScrollPosition;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return { isHeaderVisible };
  },
};
</script>


<style lang="scss"> 

.showHeader {
  transition: opacity 333ms ease, transform 333ms ease;
  opacity: 1;
  transform: translateY(0);
}

header {
  padding: span(0.25) span(1);
  display: flex; 
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgba($snow, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  height: 80px;
  transition: all $speed-demon $evil-ease;
  z-index: 20;
  opacity: 0;
  transform: translateY(-10px);
  border-bottom: 1px solid rgba($dark, 0.08);

  .main-logo {
    width: auto;
    opacity: 1; 
    pointer-events: auto;
    visibility: visible;
    margin: 0 auto;
    position: relative; 
    aspect-ratio: 186 / 139;
    height: 70px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
    
    img {
      @include abs-fill;
      object-fit: contain;
    }
  }
}

@media #{$tablet} {
  header {
    height: 100px;
    
    .main-logo {
      height: 85px;
    }
  }
}

</style>