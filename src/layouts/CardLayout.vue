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
      <Card :movie="item" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  import Card from '@/components/Card.vue'
  import type { Movie } from '@/types'

  defineProps<{
    listData: Movie[]
  }>()
</script>
