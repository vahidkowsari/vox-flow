<!-- src/views/Login.vue -->
<template>
  <div>
    <h2>Login</h2>
    <input v-model="email" placeholder="Enter your email" />
    <button @click="signIn">Sign In</button>
  </div>
  <router-link to="/signup">Signup</router-link>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../supabase'

export default {
  name: 'Login',
  setup() {
    const email = ref('')
    const password = ref('')

    const signIn = async () => {
      const { user, error } = await supabase.auth.signInWithPassword({ email: email.value, password: password.value })
      if (error) console.error('Error:', error.message)
      else console.log('User signed in:', user)
    }
    return { email, password, signIn }
  },
}
</script>
