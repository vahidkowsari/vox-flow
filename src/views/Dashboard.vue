<template>
  <div>
    <h2>Dashboard</h2>
    <button @click="signOut">Sign Out</button>
  </div>
</template>

<script>
import { supabase } from '../supabase'

export default {
  name: 'Dashboard',
  setup() {
    const signOut = async () => {
      await supabase.auth.signOut()
      window.location = '/'
    }

    return { signOut }
  },
}
</script>
