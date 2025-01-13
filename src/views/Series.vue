<template>
  <LoadingStatus v-if="loading" />
  <div v-else>
    <h2 class="mt-10 mb-3 text-center">New TV series</h2>
    <CardLayout :list-data="listData" />
  </div>
</template>

<script setup lang="ts">
  import CardLayout from '@/layouts/CardLayout.vue'
  import { useFetch } from '@/composables/useFetch'
  import LoadingStatus from '@/components/LoadingStatus.vue'

  const { listData, loading } = useFetch(
    'https://api.themoviedb.org/3/tv/popular',
  )
</script>
