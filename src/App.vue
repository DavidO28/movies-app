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
        <div
          v-if="
            searchStore.searchQuery && !$route.params.type && !$route.params.id
          "
        >
          <h2 class="text-center mb-3">Search results</h2>
          <CardLayout :list-data="searchResults" />
        </div>
        <CardContent
          v-else-if="
            searchStore.searchQuery && $route.params.type && $route.params.id
          "
          :type="$route.params.type"
          :id="$route.params.id"
        />
        <router-view v-else></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed, watch } from 'vue'
  import { useTheme } from 'vuetify'
  import AppBar from './components/AppBar.vue'
  import CardLayout from './layouts/CardLayout.vue'
  import CardContent from './components/CardContent.vue'
  import { useSearchStore } from '@/store/search'
  import { useFetch } from '@/composables/useFetch'
  import { useRoute, useRouter } from 'vue-router'

  const searchStore = useSearchStore()
  const router = useRouter()
  const route = useRoute()
  const theme = useTheme()

  const currentTheme = ref<string>('light')

  const updateTheme = (newTheme: string) => {
    currentTheme.value = newTheme
    theme.global.name.value = newTheme
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
  
  watch(
    () => searchStore.searchQuery,
    (newQuery) => {
      if (newQuery) {
        router.push('/')
      }
    },
  )

  watch(
    () => route.params,
    () => {
      if (route.params.type && route.params.id) {
        searchStore.searchQuery = ''
        router.push({
          name: 'content',
          params: {
            type: route.params.type,
            id: route.params.id,
          },
        })
      }
    },
  )
</script>
