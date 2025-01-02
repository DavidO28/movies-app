<template>
  <header>
    <nav>
      <AppBar />
    </nav>
  </header>
  <v-main>
      <router-view></router-view>
    </v-main>
</template>

<script setup lang="ts">
  import AppBar from './components/AppBar.vue'
</script>
