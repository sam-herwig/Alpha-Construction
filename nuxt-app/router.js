import { createRouter, createWebHistory } from 'vue-router'
import _slug from './pages/projects/_slug.vue'
 console.log(_slug);
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/projects/:slug',
      component: _slug
    }
  ]
});

