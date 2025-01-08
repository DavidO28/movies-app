<template>
  <div
    v-if="isLoading"
    class="w-100 d-flex flex-column justify-center align-center"
  >
    <v-progress-circular
      color="primary"
      indeterminate
    />
  </div>
  <div v-else-if="searchStore.searchQuery.trim()">
    <CardLayout :list-data="searchResults" />
  </div>
  <div v-else>
    <Slider />
    <h2 class="mt-10 mb-3 text-center">New movies</h2>
    <CardLayout :list-data="listData" />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import CardLayout from '@/layouts/CardLayout.vue'
  import Slider from '@/components/Slider.vue'
  import { useFetch } from '@/composables/useFetch'
  import { useSearchStore } from '@/store/search'

  const searchStore = useSearchStore()

  const { listData, loading } = useFetch(
    'https://api.themoviedb.org/3/movie/popular'
  )

  const { listData: searchResults, loading: searchLoading } = useFetch(
    computed(() => {
      return searchStore.searchQuery.trim()
        ? `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&query=${searchStore.searchQuery.trim()}`
        : ''
    }),
  )

  const isLoading = computed(() => loading.value || searchLoading.value)
</script>
