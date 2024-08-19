import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MainHome.vue'),
    },
    {
      path: '/discover',
      name: 'discover',
      component: () => import('../views/Discover.vue'),
    },
    {
      path: '/creators',
      name: 'creators',
      component: () => import('../views/Creators.vue'),
    },
    {
      path: '/sell',
      name: 'sell',
      component: () => import('../views/Sell.vue'),
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import('../views/Stats.vue'),
    }
  ]
})

export default router
