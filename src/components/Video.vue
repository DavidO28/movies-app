<template>
  <div v-if="item && item.results.length > 0">
    <div
      v-if="loading"
      class="w-100 d-flex flex-column justify-center align-center"
    >
      <v-progress-circular
        color="primary"
        indeterminate
      />
    </div>
    <iframe
      v-else
      class="rounded-xl"
      :src="'https://www.youtube.com/embed/' + item.results[0].key"
      width="560"
      height="315"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
  import { useFetch } from '@/composables/useFetch'

  const props = defineProps<{ type: string; id: string }>()

  const { item, loading } = useFetch(
    `https://api.themoviedb.org/3/${props.type}/${props.id}/videos`,
  )
</script>
