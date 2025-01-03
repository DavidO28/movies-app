<template>
  <CardLayout :list-data="listData" />
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import CardLayout from '@/layouts/CardLayout.vue'

  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=f27d25a2740059f40ae2fe3147268323&language=en-US'
  const listData = ref([])

  const getMovies = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjdkMjVhMjc0MDA1OWY0MGFlMmZlMzE0NzI2ODMyMyIsIm5iZiI6MTczNTg5NzcyMy43NDgsInN1YiI6IjY3NzdiMjdiODE2YjI4MTBkMTY2ODgzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FLRkmRV9YMlOp7FLzoMVgG_ebEqKNbLHXocNhXNjJFw',
          Accept: 'application/json',
        },
      })
      const data = await response.json()
      listData.value = data.results
    } catch (error) {
      console.error(error)
    }
  }

  onMounted(() => {
    getMovies()
  })
</script>
