<template>
  <div id="app wrapper">
    <NuxtLayout>
      <Header/>
      <NuxtPage/>
      <Footer/>
      <!-- <RouterView /> -->
    </NuxtLayout>
  </div>
  <!-- <router-view/> -->
</template>


<script>
import { mapMutations } from 'vuex';
import {useStore} from "vuex";
import _ from 'lodash'; 


export default {
  data() {
    return {
      is_active: false, 
      store: null
    };
  },
  head() {
 
  },
  name: "App",
  computed: {
    // menu_open() {
    //   return store.state.menu_open;
    // },
    // modal_open() {
    //   return store.state.modal_open;
    // },
    // mobile_nav_open() {
    //   return store.state.mobile_nav;
    // },
    // middle_x() {
    //   return (this.app_width === 0 ? 0 : Math.round(this.app_width / 2)).toString();
    // },
    // middle_y() {
    //   return (this.app_height === 0 ? 0 : Math.round(this.app_height / 2)).toString();
    // },
    // isPreview() {
    //   return !!(this.$route && this.$route.query && this.$route.query.preview && this.$route.query.preview === 'true');
    // }
  },
  mounted() {

    // this.consoleBrand();
    // //this.applyVueScrollFix();
    // this.applyScrollbarClass();

    // // this.is_active = false;
    // this.is_active = true;
    // this.observe();
    // this.onScroll();
    // // window.addEventListener('resize', this.onViewportResize);
    // window.addEventListener('resize', _.throttle(this.onViewportResize, 300));
    // window.addEventListener('DOMContentLoaded', this.onViewportResize, { once: true });
    // setTimeout(this.onViewportResize, 0);
    // this.onViewportResize();
  },
  methods: {
    // observe some events
    observe() {
      // window.addEventListener('resize', _.throttle(this.onResize, 10));
      window.addEventListener('scroll', _.throttle(this.onScroll, 10));
    },
    onViewportResize() {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      document.documentElement.style.setProperty('--viewport-width', `${viewportWidth}px`);
      document.documentElement.style.setProperty('--viewport-height', `${viewportHeight}px`);
      this.$store.commit('setViewportWidth', viewportWidth);
      this.$store.commit('setViewportHeight', viewportHeight);
      let breakpoint;
      if (viewportWidth < 768) {
        breakpoint = 'mobile';
      }
      else if(viewportWidth < 1280 && viewportWidth >= 768) {
        breakpoint = 'tablet';
      }
      else {
        breakpoint = 'desktop';
      }
      this.$store.commit('setBreakpoint', breakpoint);
      if(this.$refs.wrapper) {
        const wrapperWidth = this.$refs.wrapper.clientWidth;
        //const wrapperHeight = this.$refs.wrapper.clientHeight;
        // wrapper client height is reporting large, need to use viewport height here
        const wrapperHeight = viewportHeight;
        document.documentElement.style.setProperty('--wrapper-width', `${wrapperWidth}px`);
        document.documentElement.style.setProperty('--wrapper-height', `${wrapperHeight}px`);
        this.$store.commit('setWrapperWidth', wrapperWidth);
        this.$store.commit('setWrapperHeight', wrapperHeight);
      }
      this.$nuxt.$emit('viewportResize');
    },
    consoleBrand() {
      console.log('%', 'background-color: #000; color: #fff;', 'background-color: #fff; color: #000;');
    },
    applyVueScrollFix() {
      // temporary fix for scroll element being a custom wrapper, not the body
      // https://github.com/vuejs/vue-router/issues/1187#issuecomment-893964727
      Object.defineProperty(window, 'pageYOffset', {
        get() { return document.querySelector('.wrapper')?.scrollTop ?? 0; }
      });
      Object.defineProperty(window, 'scrollTo', {
        value: (option) => {
          let els = document.querySelectorAll('.wrapper');
          let el = els[els.length - 1];
          el?.scrollTo(0, option.top);
        }
      });
    },
    applyScrollbarClass() {
      // check to see if scrollbars have width, if so, apply class to root
      // used to only apply custom scrollbar styles if it has width
      // https://www.filamentgroup.com/lab/scrollbars/
      const parent = document.createElement('div');
      parent.setAttribute('style', 'width:30px;height:30px;overflow-y:auto;');
      parent.classList.add('scrollbar-test');

      const child = document.createElement('div');
      child.setAttribute('style', 'width:100%;height:40px');
      parent.appendChild(child);
      document.body.appendChild(parent);

      const scrollbarWidth = 30 - parent.firstChild.clientWidth;
      if(scrollbarWidth) {
        document.documentElement.classList.add('scrollbar-has-width');
      }

      document.body.removeChild(parent);
    },
    // ...mapMutations(['onScroll'])
  }
};
</script>