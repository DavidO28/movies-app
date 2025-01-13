<template>
  <div
    v-if="loading"
    class="w-100 d-flex flex-column justify-center align-center"
  >
    <v-progress-circular
      color="primary"
      indeterminate
    />
  </div>
  <div
    class="d-flex fill-height justify-center align-center px-3"
    v-else
  >
    <div v-if="item">
      <img
        v-if="item.poster_path"
        :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
        :alt="item.title"
      />
      <div
        class="d-flex flex-column justify-center align-center text-center px-3"
      >
        <h3>{{ item.title }}</h3>
        <h4>{{ item.release_date }}</h4>
        <h5>Rating: {{ item.vote_average }}</h5>
        <span>{{ item.overview }}</span>
      </div>
      <Videos
        :type="type"
        :id="id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useFetch } from '@/composables/useFetch'
  import Videos from './Video.vue'

  const route = useRoute()

  const type = route.params.type as string
  const id = route.params.id as string

  const { item, loading } = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}`,
  )
</script>

<style scoped>
  img {
    object-fit: contain;
  }
</style>
