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
      <v-container>
        <div v-if="searchStore.searchQuery">
          <CardLayout :list-data="searchResults" />
        </div>
        <router-view v-else></router-view>
      </v-container>
    </v-main>
    <footer>this is footer</footer>
  </v-app>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import { useTheme } from 'vuetify'
  import AppBar from './components/AppBar.vue'
  import CardLayout from './layouts/CardLayout.vue'
  import { useSearchStore } from '@/store/search'
  import { useFetch } from '@/composables/useFetch'

  const searchStore = useSearchStore()

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

  const { listData: searchResults } = useFetch(
    computed(() => {
      return searchStore.searchQuery
        ? `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&query=${searchStore.searchQuery}`
        : ''
    }),
  )
</script>
