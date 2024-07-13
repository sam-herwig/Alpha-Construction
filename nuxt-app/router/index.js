import { createRouter, createWebHistory } from 'vue-router'
import delaware from './pages/projects/delaware.vue'
import burroLane from './pages/projects/burro-lane.vue'
import brown from './pages/projects/brown-residence.vue'
import northWoods from './pages/projects/north-woods.vue'
import IronMask from './pages/projects/iron-mask.vue'
import about from './pages/about.vue'
export const router = createRouter({
  routes: [
    {
      path: '/about',
      component: about
    }, 
    {
      path: '/projects/delaware',
      component: delaware
    },
    {
      path: '/projects/burro-lane',
      component: burroLane
    },
    {
      path: '/projects/brown',
      component: brown
    },
    {
      path: '/projects/north-woods',
      component: northWoods
    }, 
    {
      path: '/projects/iron-mask',
      component: IronMask
    }
  ]
});


export default router;

