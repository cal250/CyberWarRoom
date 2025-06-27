import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import('./components/About.vue') },
  { path: '/scenarios', name: 'Scenarios', component: () => import('./components/Scenarios.vue') },
  { path: '/pricing', name: 'Pricing', component: () => import('./components/Pricing.vue') },
  { path: '/login', name: 'Login', component: () => import('./components/Login.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 