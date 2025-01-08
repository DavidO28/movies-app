<template>
  <div
    v-if="loading"
    class="w-100 d-flex flex-column justify-center align-center"
  >
    <v-progress-circular
      color="primary"
      indeterminate
    />
  </div>
  <div v-else>
    <Slider />
    <h2 class="mt-10 mb-3 text-center">New movies</h2>
    <CardLayout :list-data="listData" />
  </div>
</template>

<script setup lang="ts">
  import CardLayout from '@/layouts/CardLayout.vue'
  import Slider from '@/components/Slider.vue'
  import { useFetch } from '@/composables/useFetch'

  const { listData, loading } = useFetch(
    'https://api.themoviedb.org/3/movie/popular',
  )
</script>
