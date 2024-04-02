// import groq from 'groq';
import Vue from 'vue';
import Vuex from 'vuex';
import { createStore } from 'vuex'

Vue.use(Vuex);

export default createStore({
  loaded: false,
  menu_open: false,
  modal_open: false,
  modal_residents: false,
  modal_tour: false,
  mobile_nav: false,
  presented: false,
  submitted: false,
  svg_faded: true,
  has_scrolled: false,
  prev_scroll_y: 0,
  is_desktop: undefined,
  scroll_y: 0,
  scroll_top: 0,
  scroll_direction: 'up',
  scroll_past_hero: false,
  window_mid_y: 2000,
  window_width: 0,
  preloaded_imgs: {},
  viewportWidth: 0,
  viewportHeight: 0,
  wrapperWidth: 0,
  wrapperHeight: 0,
  breakpoint: null,
  forms: {},
  inquiryUnit: 'N/A',
  siteName: null,
  siteDescription: null,
  siteImage: null
});

export const mutations = {
  menu_state(state, menu_open) {
    state.menu_open = menu_open;
  },
  modal_state(state, modal_open) {
    if(!modal_open) {
      state.inquiryUnit = 'N/A';
    }
    state.modal_open = modal_open;
  },
  modal_state_residents(state, modal_residents) {
    state.modal_residents = modal_residents;
  },
  modal_state_tour(state, modal_tour) {
    state.modal_tour = modal_tour;
  },
  mobile_nav_state(state, mobile_nav) {
    state.mobile_nav = mobile_nav;
  },
  presented(state) {
    state.presented = true;
  },
  hasLoaded(state) {
    state.loaded = true;
  },
  submitted(state) {
    state.submitted = true;
  },
  setBreakpoint(state, val) {
    state.breakpoint = val;
  },
  setViewportWidth(state, val) {
    state.viewportWidth = val;
  },
  setViewportHeight(state, val) {
    state.viewportHeight = val;
  },
  setWrapperWidth(state, val) {
    state.wrapperWidth = val;
  },
  setWrapperHeight(state, val) {
    state.wrapperHeight = val;
  },
  scrollPastHero(state, scroll_past_hero) {
    state.scroll_past_hero = scroll_past_hero;
  },
  // onResize(state) {
  //   state.window_mid_y = window.innerHeight / 2;
  //   state.window_width = window.innerWidth;
  //   state.is_desktop = window.innerWidth > 960;
  // },
  onScroll(state) {
    let _prev_scroll_y = state.scroll_y;
    let _new_scroll_y = Math.max(window.pageYOffset, 0);
    state.scroll_top = Math.max(window.pageYOffset, 0);
    state.prev_scroll_y = _prev_scroll_y;
    state.scroll_y = _new_scroll_y;
    state.scroll_direction = _new_scroll_y > _prev_scroll_y ? 'down' : 'up';
    state.has_scrolled = window.pageYOffset >= 2;
  },
  onWheel(state) {
    if (this._mac) {
      //   this._wrapper.scrollLeft += e.deltaY;
      // } else {
      //   let d = e.deltaY < 0 ? -1 : 1;
      //   if (this._smooth) this._wrapper.scrollLeft += 240 * d;
      //   else this._wrapper.scrollLeft += 40 * d;
    }
  },
  changeSvgFade(state, is_faded) {
    state.svg_faded = is_faded;
  },
  onFormSubmit(state, formId) {
    state.submitted_forms[formId] = true;
  },
  registerForm(state, formId) {
    state.forms[formId] = false;
  },
  setInquiryUnit(state, val) {
    state.inquiryUnit = val;
  },
  setSiteName(state, val) {
    state.siteName = val;
  },
  setSiteDescription(state, val) {
    state.siteDescription = val;
  },
  setSiteImage(state, val) {
    state.siteImage = val;
  }
};

// export const actions = {
//   async nuxtServerInit(vuexCtx, ctx) {
//     const request = groq`
//       *[_type == 'siteSettings'][0] {
//         ...,
//         'siteImage': siteImage.asset->url
//       }
//     `;

//     const result = await ctx.$sanity.getClient().fetch(request);

//     if(result && result.siteName) {
//       vuexCtx.commit('setSiteName', result.siteName);
//     }

//     if(result && result.siteDescription) {
//       vuexCtx.commit('setSiteDescription', result.siteDescription);
//     }

//     if(result && result.siteImage) {
//       vuexCtx.commit('setSiteImage', result.siteImage);
//     }
//   }
// };