import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Dashboard from './views/Dashboard.vue'
import { supabase } from './supabase'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation guard to check for auth status
router.beforeEach((to, from, next) => {
  const user = supabase.auth.getUser()
  if (to.matched.some(record => record.meta.requiresAuth) && !user) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
