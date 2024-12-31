<template>
  <v-text-field
    style="width: 2px"
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
