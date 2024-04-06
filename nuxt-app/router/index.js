import { createRouter, createWebHistory } from 'vue-router'
import slug from './pages/projects/_slug.vue'
import about from './pages/about.vue'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/projects/:slug',
      component: slug
    }, 
    {
      path: '/about',
      component: about
    }
  ]
});

console.log(router);

export default router;

