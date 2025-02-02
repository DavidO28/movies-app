<template>
  <v-navigation-drawer
    class="hidden-md-and-up"
    v-model="sidebar"
    location="right"
  >
    <v-list>
      <v-list-item>
        <Search />
      </v-list-item>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
        @click="resetSearchQuery"
      >
        <v-icon>{{ item.icon }}</v-icon>

        {{ item.title }}
      </v-list-item>
        <v-btn class="ma-4" @click="toggleTheme">
          <v-icon>
            {{
              currentTheme === 'light'
                ? 'mdi-weather-night'
                : 'mdi-weather-sunny'
            }}
          </v-icon>
        </v-btn>
    </v-list>
  </v-navigation-drawer>

  <v-toolbar>
    <v-toolbar-title class="mt-2">
      <router-link to="/">
        <img
          src="../assets/movies.png"
          alt="movies logo"
          width="90px"
          height="30px"
        />
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items class="hidden-sm-and-down">
      <Search class="me-3" />
      <v-btn
        class="pa-2"
        flat
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
        @click="resetSearchQuery"
      >
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>

      <v-btn
        class="pa-2"
        :icon="
          currentTheme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'
        "
        @click="toggleTheme"
      />
    </v-toolbar-items>

    <span class="hidden-md-and-up me-5">
      <v-icon @click="toggleSidebar">mdi-menu</v-icon>
    </span>
  </v-toolbar>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Search from './Search.vue'
  import type { MenuItem } from '@/types'
  import { useSearchStore } from '@/store/search'

  const props = defineProps({
    currentTheme: {
      type: String,
      required: true,
    },
  })

  const emit = defineEmits(['update:theme'])

  const searchStore = useSearchStore()

  const sidebar = ref<boolean>(false)

  const menuItems: MenuItem[] = [
    { title: 'Movies', path: '/', icon: 'mdi-video' },
    { title: 'TV-series', path: '/series', icon: 'mdi-movie-roll' },
    { title: 'Top IMDB', path: '/top-imdb', icon: 'mdi-movie-star' },
  ]

  const toggleSidebar = () => {
    sidebar.value = !sidebar.value
  }

  const toggleTheme = () => {
    const newTheme = props.currentTheme === 'light' ? 'dark' : 'light'
    emit('update:theme', newTheme)
  }

  const resetSearchQuery = () => {
    searchStore.searchQuery = ''
  }
</script>
