<template>
  <v-row justify="center">
    <v-col
      v-for="item in paginatedListData"
      :key="item.id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
      xl="2"
    >
      <Card :movie="item" />
    </v-col>

    <v-col
      cols="12"
      class="text-center"
    >
      <v-pagination
        v-model="currentPage"
        :length="pageCount"
        :total-items="props.listData.length"
        :items-per-page="itemsPerPage"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import Card from '@/components/Card.vue'
  import type { Movie } from '@/types'

  const props = defineProps<{
    listData: Movie[]
  }>()

  const itemsPerPage = 12

  const currentPage = ref(1)

  const pageCount = computed(() => {
    return Math.ceil(props.listData.length / itemsPerPage)
  })

  const paginatedListData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return props.listData.slice(start, end)
  })
</script>
