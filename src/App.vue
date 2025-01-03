<template>
  <v-app>
    <header>
      <nav>
        <AppBar
          @update:theme="updateTheme"
          :currentTheme="currentTheme"
        />
      </nav>
    </header>
    <v-main :theme="theme">
      <v-container class="mt-5">
        <router-view></router-view>
      </v-container>
    </v-main>
    <footer>this is footer</footer>
  </v-app>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useTheme } from 'vuetify'
  import AppBar from './components/AppBar.vue'

  const currentTheme = ref('light')

  const theme = useTheme()

  const updateTheme = (newTheme: string) => {
    currentTheme.value = newTheme
    theme.global.name.value = newTheme
    currentTheme.value = newTheme
    localStorage.setItem('theme', newTheme)
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      currentTheme.value = savedTheme
      theme.global.name.value = savedTheme
    } else {
      currentTheme.value = 'light'
      theme.global.name.value = 'light'
    }
  })
</script>
