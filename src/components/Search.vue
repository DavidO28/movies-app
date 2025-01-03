<template>
  <v-text-field
    class="mt-3"
    style="width: 210px"
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

<style scoped>
  i:hover {
    color: green;
    transform: scale(1.3);
  }
</style>
