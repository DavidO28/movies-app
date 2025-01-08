<template>
  <v-card class="movie-card">
    <template v-if="movie.poster_path && movie.poster_path !== 'null'">
      <img
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        :alt="movie.title"
        class="movie-image"
      />
    </template>
    <template v-else>
      <v-icon>mdi-image</v-icon>
    </template>

    <v-card-title class="movie-title">
      {{ movie.title === undefined ? movie.name : movie.title }}
    </v-card-title>
  </v-card>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  defineProps({
    movie: {
      type: Object,
      required: true,
    },
  })
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

  .movie-title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
