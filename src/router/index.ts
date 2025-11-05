import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 1. IMPORT halaman Register Anda
import RegisterView from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // 2. TAMBAHKAN rute ini
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/about',
      name: 'about',
      // Rute ini biarkan saja
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
