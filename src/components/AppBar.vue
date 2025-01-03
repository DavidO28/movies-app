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
        router
      >
        <v-icon>{{ item.icon }}</v-icon>

        {{ item.title }}
      </v-list-item>
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
      >
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>

    <span class="hidden-md-and-up me-5">
      <v-icon @click="toggleSidebar">mdi-menu</v-icon>
    </span>
  </v-toolbar>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Search from './Search.vue'

  const sidebar = ref(false)

  interface MenuItem {
    title: string
    path: string
    icon: string
  }

  const menuItems: MenuItem[] = [
    { title: 'Home', path: '/', icon: 'mdi-home' },
    { title: 'Genre', path: '/genre', icon: 'mdi-film' },
    { title: 'Country', path: '/country', icon: 'mdi-flag' },
    { title: 'Movies', path: '/movies', icon: 'mdi-video' },
    { title: 'TV-series', path: '/series', icon: 'mdi-movie-roll' },
    { title: 'Top IMDB', path: '/top-imdb', icon: 'mdi-movie-star' },
  ]

  const toggleSidebar = () => {
    sidebar.value = !sidebar.value
  }
</script>
