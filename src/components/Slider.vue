<template>
  <h2 class="mb-3 text-center">Upcoming movies</h2>
  <v-carousel
    class="mt-3 pt-3"
    height="400"
    progress="primary"
    hide-delimiters
    v-model="currentSlide"
  >
    <v-carousel-item
      v-for="(item, i) in listData"
      :key="i"
    >
      <v-sheet height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <span>
            {{ item.title }}
          </span>
          <img
            :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
            class="movie-image w-100 h-100"
            :alt="item.title"
          />
          <span>{{ item.release_date }}</span>
          <span>{{ item.total_average }}</span>
          <span>{{ item.overview }}</span>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const url = 'https://api.themoviedb.org/3/movie/upcoming'

  const listData = ref([])
  const currentSlide = ref(0)
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
