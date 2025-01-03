<template>
  <v-row justify="center">
    <v-col
      v-for="item in listData"
      cols="12"
      sm="6"
      md="4"
      lg="3"
      xl="2"
    >
      <MovieCard :movie="item" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  import MovieCard from '@/components/MovieCard.vue'

  interface Movie {
    id: number
    title: string
    poster_path: string
  }
  defineProps<{
    listData: Movie[]
  }>()
</script>
