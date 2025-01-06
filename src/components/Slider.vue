<template>
  <v-divider><h2 class="mb-3">Upcoming movies</h2></v-divider>
  <v-window
    v-model="window"
    show-arrows
  >
    <v-window-item
      v-for="item in listData"
      :key="item"
    >
      <v-card
        class="d-flex justify-center align-center"
        height="400"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
          class="movie-image w-100 h-100"
          :alt="item.title"
        />
      </v-card>
    </v-window-item>
  </v-window>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const window = ref(0)
  const length = 5

  const url = 'https://api.themoviedb.org/3/movie/upcoming'

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
    console.log(listData, 'slider')
  })
</script>

<style scoped>
  img {
    object-fit: contain;
  }
</style>
