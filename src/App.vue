<template>
  <header>
    <nav>
      <AppBar />
    </nav>
  </header>
  <main>
    <Home />
  </main>
</template>

<script setup lang="ts">
  import AppBar from './components/AppBar.vue'
  import Home from './views/Home.vue'
</script>
