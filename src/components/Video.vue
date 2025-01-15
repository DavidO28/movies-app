<template>
  <LoadingStatus v-if="loading" />
  <iframe
    v-else-if="item && item.results.length > 0"
    class="rounded-xl"
    :src="'https://www.youtube.com/embed/' + item.results[0].key"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script setup lang="ts">
  import { useFetch } from '@/composables/useFetch'
  import LoadingStatus from './LoadingStatus.vue'

  const props = defineProps<{ type: string; id: string }>()

  const { item, loading } = useFetch(
    `https://api.themoviedb.org/3/${props.type}/${props.id}/videos`,
  )
</script>

<style scoped>
  iframe {
    width: 100%;
    max-width: 1000px;
    height: 70vh;
  }

  iframe:focus {
    outline: none;
  }

  iframe[seamless] {
    display: block;
  }
</style>
