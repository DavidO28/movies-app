import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home page" */ '@/views/Home.vue'),
    },
    {
      path: '/genre',
      name: 'genre',
      component: () =>
        import(/* webpackChunkName: "genre page" */ '@/views/Genre.vue'),
    },
    {
      path: '/country',
      name: 'country',
      component: () =>
        import(/* webpackChunkName: "country page" */ '@/views/Country.vue'),
    },
    {
      path: '/movies',
      name: 'movies',
      component: () =>
        import(/* webpackChunkName: "movies page" */ '@/views/Movies.vue'),
    },
    {
      path: '/series',
      name: 'series',
      component: () =>
        import(/* webpackChunkName: "series page" */ '@/views/Series.vue'),
    },
    {
      path: '/top-imdb',
      name: 'top-imdb',
      component: () =>
        import(/* webpackChunkName: "top-imdb page" */ '@/views/TopIMDB.vue'),
    },
    {
      path: '/content/:id',
      name: 'content',
      component: () =>
        import(
          /* webpackChunkName: "card content" */ '@/components/CardContent.vue'
        ),
    },
  ],
})

export default router
