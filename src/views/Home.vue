<template>
    <v-row justify="center" class="mt-3">
      <v-col
        v-for="n in 10"
        :key="n"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <MovieCard />
      </v-col>
    </v-row>
</template>

<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue'
</script>