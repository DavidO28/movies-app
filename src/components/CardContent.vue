<template>
  <LoadingStatus v-if="loading" />
  <div
    class="d-flex fill-height justify-center align-center px-3"
    v-else
  >
    <div
      v-if="item"
      :style="{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.poster_path})`,
      }"
      class="content-container"
    >
      <div class="content px-3">
        <div>
          <h3>{{ item.title }}</h3>
          <h4>{{ item.release_date }}</h4>
          <h5>Rating: {{ item.vote_average }}</h5>
          <span>{{ item.overview }}</span>
        </div>
        <Video
          :type="type"
          :id="id"
        />
      </div>
    </div>
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

  const { item, loading } = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}`,
  )
</script>

<style scoped>
  .content-container {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    width: 100vw;
  }

  .content-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    height: 100vh;
    color: white;
    position: absolute;
    z-index: 1;
  }
</style>
