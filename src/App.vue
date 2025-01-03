<template>
  <v-app>
    <header>
      <nav>
        <AppBar />
      </nav>
    </header>
    <v-main>
      <v-container class="mt-5">
        <router-view></router-view>
      </v-container>
    </v-main>
    <footer>this is footer</footer>
  </v-app>
</template>

<script setup lang="ts">
  import AppBar from './components/AppBar.vue'
</script>
