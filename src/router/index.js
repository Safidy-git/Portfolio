import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Detail from '../detail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/details-projets', name: 'Detail', component: Detail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔑 L’export par défaut doit être présent
export default router
