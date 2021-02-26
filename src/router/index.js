import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// const registerdLayouts =['App']

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  // {
  //   path: '/users',
  //   name:'Users'
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes
})

export default router
