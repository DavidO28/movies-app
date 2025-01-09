<template>
  <h2 class="mb-3 text-center">Popular movies</h2>
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
      @click="openContent(item)"
      class="carousel-item"
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
            <h4>{{ item.id }}</h4>
            <h5>Rating: {{ item.vote_average }}</h5>
            <span>{{ item.overview }}</span>
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useFetch } from '@/composables/useFetch'
  import { useRouter } from 'vue-router'
  import type { Movie } from '@/types'

  const router = useRouter()

  const currentSlide = ref(0)

  const { listData } = useFetch('https://api.themoviedb.org/3/movie/upcoming')

  const openContent = (item: Movie) => {
    router.push({
      name: 'content',
      params: {
        type: `${item.title ? 'movie' : 'tv'}`,
        id: `${item.id}`,
      },
    })
  }
</script>

<style scoped>
  img {
    object-fit: contain;
  }

  .carousel-item:hover {
    cursor: pointer;
  }
</style>
