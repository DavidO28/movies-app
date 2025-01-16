<template>
  <v-text-field
    class="mt-3"
    style="min-width: 200px"
    density="compact"
    placeholder="Search"
    variant="solo"
    rounded
    clearable
    v-model="searchStore.searchQuery"
    @keydown.enter="searchStore.performSearch"
  >
    <v-icon
      class="me-3"
    >
      mdi-magnify
    </v-icon>
  </v-text-field>
</template>

<script setup lang="ts">
  import { useSearchStore } from '@/store/search'

  const searchStore = useSearchStore()
</script>
