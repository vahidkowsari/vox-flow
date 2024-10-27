<template>
  <div id="app">
    <header>
      <h1>My Supabase Vue App</h1>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* Basic styling */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  background-color: #42b983;
  color: white;
  padding: 1rem;
}
</style>
