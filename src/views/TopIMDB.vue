<template>
  <LoadingStatus v-if="loading" />
  <div v-else>
    <h2 class="mt-10 mb-3 text-center">Top rated</h2>
    <v-tabs
      v-model="tab"
      align-tabs="center"
      color="deep-purple-accent-4"
    >
      <v-tab :value="0">Movies</v-tab>
      <v-tab :value="1">Series</v-tab>
    </v-tabs>

    <v-tabs-window
      v-model="tab"
      class="px-5 py-7"
    >
      <v-tabs-window-item :value="0">
        <CardLayout :list-data="listData" />
      </v-tabs-window-item>
      <v-tabs-window-item :value="1">
        <CardLayout :list-data="listData" />
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import CardLayout from '@/layouts/CardLayout.vue'
  import { useFetch } from '@/composables/useFetch'
  import LoadingStatus from '@/components/LoadingStatus.vue'

  const tab = ref<number>(0)
  const url = ref<string>('https://api.themoviedb.org/3/movie/top_rated')

  const { listData, loading } = useFetch(url)

  watch(
    tab,
    (newTab) => {
      if (newTab === 0) {
        url.value = 'https://api.themoviedb.org/3/movie/top_rated'
      } else if (newTab === 1) {
        url.value = 'https://api.themoviedb.org/3/tv/top_rated'
      }
    },
    { immediate: true },
  )
</script>
