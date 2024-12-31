import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Genres from '@/views/pages/Genre.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/genre',
      name: 'genre',
      component: () =>
        import(/* webpackChunkName: "genre page" */ '@/views/pages/Genre.vue'),
    },
    {
      path: '/country',
      name: 'country',
      component: () =>
        import(
          /* webpackChunkName: "country page" */ '@/views/pages/Country.vue'
        ),
    },
    {
      path: '/movies',
      name: 'movies',
      component: () =>
        import(
          /* webpackChunkName: "movies page" */ '@/views/pages/Movies.vue'
        ),
    },
    {
      path: '/series',
      name: 'series',
      component: () =>
        import(
          /* webpackChunkName: "series page" */ '@/views/pages/Series.vue'
        ),
    },
    {
      path: '/top-imdb',
      name: 'top-imdb',
      component: () =>
        import(
          /* webpackChunkName: "top-imdb page" */ '@/views/pages/TopIMDB.vue'
        ),
    },
  ],
})

export default router
