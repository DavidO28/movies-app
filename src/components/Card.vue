<template>
  <v-card class="movie-card">
    <img
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      :alt="movie.title"
      class="w-100 h-100"
    />
    <div class="pa-2">
      <h3 class="movie-title">
        {{ movie.title === undefined ? movie.name : movie.title }}
      </h3>
    </div>
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
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
  }

  .movie-card:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  .movie-title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
