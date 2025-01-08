<template>
  <v-card class="movie-card">
    <template v-if="movie.poster_path && movie.poster_path !== 'null'">
      <v-img
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        :alt="movie.title"
        class="movie-image"
        aspect-ratio="1.5"
      />
    </template>
    <template v-else>
      <v-row
        align="center"
        justify="center"
        class="no-image-placeholder"
        height="350px"
      >
        <span>No Image Available</span>
      </v-row>
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
    height: 440px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease;
  }

  .movie-card:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  .movie-image {
    margin-top: 10px;
    height: 380px;
    object-fit: cover;
  }

  .movie-title {
    padding: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
