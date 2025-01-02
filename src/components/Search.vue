<template>
  <v-text-field class="mt-3"
    style="width: 225px"
    density="compact"
    placeholder="Search"
    variant="solo"
    rounded
    clearable
    type="text"
  >
    <v-icon
      class="me-3"
      @click="type"
    >
      mdi-magnify
    </v-icon>
  </v-text-field>
</template>

<script setup lang="ts">
  const type = () => {
    console.log('test')
  }
</script>
