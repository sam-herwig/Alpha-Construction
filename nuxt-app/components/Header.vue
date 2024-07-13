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
  transition: opacity 333ms ease;
  opacity: 1;
}
.header.v-leave-active {
 
}

header {
  padding: span(0.25) span(1);
  display: flex; 
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(22,22,22, 0.8);
  height: 80px;
  transition: all $speed-demon $evil-ease;
  z-index: 20;
  opacity: 0;


  .main-logo {
    width: auto;
    opacity: 1; 
    pointer-events: auto;
    visibility: visible;
    margin: 0 auto;
    position: relative; 
    aspect-ratio: 186 / 139;
    height: 90px;
    margin-top: 10px;
    
    img {
      @include abs-fill;
    }
  }

  // .controls {
  //   width: 20px; 
  //   height: 20px;
  //   position: absolute;
  //   top: 50%; 
  //   right: span(1);
  //   transform: translateY(-50%);

  //   .hamburger {
  //     @include hamburger($black);
  //     @include abs-fill;
  //     opacity: 1; 
  //     pointer-events: auto;
  //     visibility: visible;
  //     transition: all $speed-demon $evil-ease;

  //     &.open {
  //       @include close($cream);
  //       transition: all $speed-demon $evil-ease;
  //     }
  //   }
  // }
}

</style>