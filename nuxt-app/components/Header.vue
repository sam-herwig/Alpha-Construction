<template>
    <header>
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


<style lang="scss"> 
header {
  padding: span(0.25) span(1);
  display: flex; 
  align-items: center;
  width: 100%;
  // justify-content: space-between;
  position: fixed;
  top: 0;
  // background-color: $black;
  background-color: rgba(22,22,22, 0.8);
  height: 80px;
  transition: all $speed-demon $evil-ease;
  z-index: 20;

  // &.open {
  //   background-color: $black;
  //   transition: all $speed-demon $evil-ease;

  //   .main-logo {
  //     opacity: 0; 
  //     pointer-events: none;
  //     visibility: hidden;
  //   }
  // }

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