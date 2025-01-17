<template>
  <LoadingStatus v-if="loading" />

  <div
    v-else-if="item"
    :style="{
      backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.poster_path})`,
    }"
    class="content-container pa-3 py-10 d-flex flex-column justify-center text-center align-center rounded-xl"
  >
    <div class="py-3 video-container">
      <Video
        :type="type"
        :id="id"
      />
    </div>

    <div class="font-weight-bold text-container pa-3 rounded-xl text-white">
      <h2 class="text-truncate">{{ item.title }}</h2>
      <h4>{{ item.release_date }}</h4>
      <h5>Rating: {{ item.vote_average }}</h5>
      <span>{{ item.overview }}</span>
    </div>
  </div>

  <div
    class="text-center"
    v-else
  >
    Content isn't available.
    {{ error }}
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useFetch } from '@/composables/useFetch'
  import Video from './Video.vue'
  import LoadingStatus from './LoadingStatus.vue'

  const route = useRoute()

  const type = route.params.type as string
  const id = route.params.id as string

  const { item, loading, error } = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}`,
  )
</script>

<style scoped>
  .content-container {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  .text-container {
    width: 100%;
    max-width: 1000px;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .video-container {
    width: 100%;
  }
</style>
