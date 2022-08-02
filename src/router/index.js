import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/main/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/AboutView.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../views/service/ServiceView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/blog/BlogView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact/ContactView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
