<template>
  <header>
    <nav>
      <AppBar />
    </nav>
  </header>
  <section>
    <main>
      <Home />
    </main>
  </section>
</template>

<script setup lang="ts">
  import AppBar from './components/AppBar.vue'
  import Home from './views/Home.vue'
</script>
