<template>
  <v-progress-circular
    v-if="loading"
    color="primary"
    indeterminate
  />
  <div v-else>
    <Slider />
    <h2 class="mt-10 mb-3 text-center">Popular movies</h2>
    <CardLayout :list-data="listData" />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import CardLayout from '@/layouts/CardLayout.vue'
  import Slider from '@/components/Slider.vue'

  const url = 'https://api.themoviedb.org/3/movie/popular'

  const listData = ref([])
  const loading = ref(false)

  const getMovies = async () => {
    try {
      loading.value = true
      const response = await fetch(url, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjdkMjVhMjc0MDA1OWY0MGFlMmZlMzE0NzI2ODMyMyIsIm5iZiI6MTczNTg5NzcyMy43NDgsInN1YiI6IjY3NzdiMjdiODE2YjI4MTBkMTY2ODgzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FLRkmRV9YMlOp7FLzoMVgG_ebEqKNbLHXocNhXNjJFw',
          Accept: 'application/json',
        },
      })
      const data = await response.json()
      listData.value = data.results
      loading.value = false
    } catch (error) {
      console.error(error)
    }
  }

  onMounted(() => {
    getMovies()
  })
</script>
