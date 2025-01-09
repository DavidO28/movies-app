<template>
  <v-card
    class="movie-card"
    @click="openContent"
  >
    <img
      v-if="hasPoster"
      :src="posterUrl"
      :alt="movieTitle"
      class="movie-image"
    />
    <div
      v-else
      class="no-poster"
    >
      <v-icon size="xxx-large">mdi-image-off</v-icon>
    </div>

    <v-card-title class="movie-title">
      {{ movieTitle }}
    </v-card-title>
  </v-card>
</template>

<script setup lang="ts">
  import { defineProps, computed } from 'vue'
  import { useRouter } from 'vue-router'

  const props = defineProps({
    movie: {
      type: Object,
      required: true,
    },
  })

  const router = useRouter()

  const movieTitle = computed(() => props.movie.title || props.movie.name)
  const hasPoster = computed(
    () => props.movie.poster_path && props.movie.poster_path !== 'null',
  )
  const posterUrl = computed(
    () => `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`,
  )

  const openContent = () => {
    router.push({
      name: 'content',
      params: { id: `${props.movie.title ? 'movie' : 'tv'}-${props.movie.id}` },
    })
  }
</script>

<style scoped>
  .movie-card {
    display: flex;
    flex-direction: column;
    height: 470px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease;
  }

  .movie-card:hover {
    transform: scale(1.025);
    cursor: pointer;
  }

  .movie-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .no-poster {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .movie-title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
