<template>
  <v-app>
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
      <v-toolbar-title>
        <router-link to="/">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>

      <v-toolbar-items class="hidden-sm-and-down">
        <Search />
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <span class="hidden-md-and-up">
        <v-icon @click="toggleSidebar">mdi-menu</v-icon>
      </span>
    </v-toolbar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import Search from './Search.vue'

  const appTitle = 'Movies App'
  const sidebar = ref(false)

  interface MenuItem {
    title: string
    path: string
    icon: string
  }

  const menuItems: MenuItem[] = [
    { title: 'Home', path: '/', icon: 'mdi-home' },
    { title: 'Genres', path: '/genres', icon: 'mdi-film' },
    { title: 'Country', path: '/country', icon: 'mdi-flag' },
    { title: 'Movies', path: '/movies', icon: 'mdi-flag' },
    { title: 'TV-series', path: '/series', icon: 'mdi-flag' },
    { title: 'Top IMDB', path: '/top-imdb', icon: 'mdi-flag' },
  ]

  const isMobile = ref(false)

  const checkMobile = () => {
    isMobile.value = window.innerWidth < 1024
  }

  onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
  })

  const toggleSidebar = () => {
    sidebar.value = !sidebar.value
  }
</script>
