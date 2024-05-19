import { createRouter, createWebHistory } from 'vue-router'
// import slug from './pages/projects/_slug.vue'
import dickerson from './pages/projects/dickerson.vue'
import tirmanMorgan from './pages/projects/tirmanMorgan.vue'
import brown from './pages/projects/brown.vue'
import oglee from './pages/projects/oglee.vue'
import about from './pages/about.vue'
export const router = createRouter({
  routes: [
    {
      path: '/about',
      component: about
    }, 
    {
      path: '/projects/dickerson',
      component: dickerson
    },
    {
      path: '/projects/tirmanMorgan',
      component: tirmanMorgan
    },
    {
      path: '/projects/brown',
      component: brown
    },
    {
      path: '/projects/oglee',
      component: oglee
    }
  ]
});


export default router;

