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
      <v-icon size="xxx-large">mdi-video-off</v-icon>
      <span>Content isn't available</span>
    </div>

    <v-card-title class="movie-title">
      {{ movieTitle }}
    </v-card-title>
    <div class="card-hover no-poster">
      <v-icon size="xxx-large">mdi-play</v-icon>
    </div>
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
  const hasPoster = computed(() => props.movie.poster_path)
  const posterUrl = computed(
    () => `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`,
  )

  const openContent = () => {
    if (
      !posterUrl.value ||
      posterUrl.value === 'https://image.tmdb.org/t/p/w500undefined'
    ) {
      return
    }
    router.push({
      name: 'content',
      params: {
        type: `${props.movie.title ? 'movie' : 'tv'}`,
        id: `${props.movie.id}`,
      },
    })
  }
</script>

<style scoped>
  .movie-card {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 475px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease;
  }

  .card-hover {
    position: absolute;
    background-color: black;
    color: white;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 0;
    height: 0;
    overflow: hidden;
  }

  .movie-card:hover {
    transform: scale(1.025);
    cursor: pointer;
  }

  .movie-card:hover .card-hover {
    width: 100%;
    height: 90%;
    background-color: rgba(0, 0, 0, 0.5);
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
