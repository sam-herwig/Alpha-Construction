import { createStore } from 'vuex'

export default createStore({
  menu_open: false,
  new_mouse_pos: {x: -1000, y: -1000},
  y_offset: has_window && pageYOffset,
  mouse_listeners: false,
  dark_mode: false,
  projects_filter: "",
  from_menu: false,
  show_mask: false,
  mask_mode: "mask-out",
  is_mobile: has_window && innerWidth < 768,
  site_name: undefined,
  site_title: undefined,
  site_description: undefined,
  studio_email: undefined,
  studio_phone: undefined,
  studio_address: undefined
});

export const mutations = {
  menu_state(state, bool) {
    state.menu_open = bool;
  },
  mousemove(state, pos) {
    state.mouse_listeners = true;
    state.new_mouse_pos = pos;
  },
  scroll(state, y) {
    state.mouse_listeners = true;
    state.y_offset = y;
  },
  mode_change(state, new_mode) {
    state.dark_mode = new_mode;
  },
  active_projects_filter(state, filter) {
    state.projects_filter = filter;
  },
  page_transition(state, bool) {
    state.show_mask = bool;
  },
  page_transition_from_menu(state, bool) {
    state.from_menu = bool;
  },
  update_mask_mode(state, mode) {
    state.mask_mode = mode;
  },
  resize(state) {
    state.is_mobile = window.innerWidth < 768;
  },
  update_site_name(state, site_name) {
    state.site_name = site_name;
  },
  update_site_title(state, site_title) {
    state.site_title = site_title;
  },
  update_site_description(state, site_description) {
    state.site_description = site_description;
  },
  update_studio_email(state, studio_email) {
    state.studio_email = studio_email;
  },
  update_studio_phone(state, studio_phone) {
    state.studio_phone = studio_phone;
  },
  update_studio_address(state, studio_address) {
    state.studio_address = studio_address;
  },
  update_vimeo_link(state, vimeo_link) {
    state.vimeo_link = vimeo_link;
  },
  update_instagram_link(state, instagram_link) {
    state.instagram_link = instagram_link;
  },
  update_linkedin_link(state, linkedin_link) {
    state.linkedin_link = linkedin_link;
  },
  update_facebook_link(state, facebook_link) {
    state.facebook_link = facebook_link;
  },
  update_twitter_link(state, twitter_link) {
    state.twitter_link = twitter_link;
  }
}

// export const actions = {
//   async nuxtServerInit ({ commit }) {
//     const site = await client
//       .getEntries({
//         content_type: "site",
//         include: 10,
//         limit: 1
//     });

//     const site_fields = site.items[0].fields;

//     const site_name = site_fields.siteName;
//     const site_title = site_fields.siteTitle;
//     const site_description = site_fields.siteDescription;
//     const studio_email = site_fields.studioEmail;
//     const studio_phone = site_fields.studioPhone;
//     const studio_address = site_fields.studioAddress;
//     const vimeo_link = site_fields.vimeoLink;
//     const instagram_link = site_fields.instagramLink;
//     const linkedin_link = site_fields.linkedInLink;
//     const facebook_link = site_fields.facebookLink;
//     const twitter_link = site_fields.twitterLink;

//     commit("update_site_name", site_name);
//     commit("update_site_title", site_title);
//     commit("update_site_description", site_description);
//     commit("update_studio_email", studio_email);
//     commit("update_studio_phone", studio_phone);
//     commit("update_studio_address", studio_address);
//     commit("update_vimeo_link", vimeo_link);
//     commit("update_instagram_link", instagram_link);
//     commit("update_linkedin_link", linkedin_link);
//     commit("update_facebook_link", facebook_link);
//     commit("update_twitter_link", twitter_link);
//   }
// }
