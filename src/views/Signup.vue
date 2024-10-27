<!-- src/views/Login.vue -->
<template>
  <div>
    <h2>Signup</h2>
    <input v-model="email" placeholder="Enter your email" />
    <input v-model="password" placeholder="Enter your password" />
    <button @click="signUp">Sign Up</button>
  </div>
  <router-link to="/login">Login</router-link>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../supabase'

export default {
  name: 'Signup',
  setup() {
    const email = ref('')
    const password = ref('')

    const signUp = async () => {
      const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value
      })
    }
    return { email, password, signUp }
  },
}
</script>
