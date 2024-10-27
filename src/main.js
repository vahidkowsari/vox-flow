import { createApp } from 'vue'
import './style.css'
import router from './router'
import { supabase } from './supabase'
import App from './App.vue'


const app = createApp(App)

// Listen to Supabase auth changes
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') router.push({ name: 'Dashboard' })
  if (event === 'SIGNED_OUT') router.push({ name: 'Login' })
})

app.use(router)
app.mount('#app')
