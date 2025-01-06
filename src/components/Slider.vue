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
      <v-sheet
        height="100%"
        class="px-15"
      >
        <div class="d-flex fill-height justify-center align-center px-3">
          <img
            :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
            class="w-100 h-100"
            :alt="item.title"
          />
          <div
            class="d-none d-md-flex flex-column justify-center align-center text-center px-3"
          >
            <h3>
              {{ item.title }}
            </h3>
            <h4>{{ item.release_date }}</h4>
            <h5>Rating: {{ item.vote_average }}</h5>
            <span>{{ item.overview }}</span>
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import type { Movie } from '@/types'

  const currentSlide = ref(0)
  const url = 'https://api.themoviedb.org/3/movie/upcoming'

  const listData = ref<Movie[]>([])
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
    console.log(listData)
  })
</script>

<style scoped>
  img {
    object-fit: contain;
  }
</style>
