import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home page" */ '@/views/Home.vue'),
      meta: {
        title: 'Movies Home',
      },
    },
    {
      path: '/genre',
      name: 'genre',
      component: () =>
        import(/* webpackChunkName: "genre page" */ '@/views/Genre.vue'),
      meta: {
        title: 'Genre',
      },
    },
    {
      path: '/country',
      name: 'country',
      component: () =>
        import(/* webpackChunkName: "country page" */ '@/views/Country.vue'),
      meta: {
        title: 'Country',
      },
    },
    {
      path: '/movies',
      name: 'movies',
      component: () =>
        import(/* webpackChunkName: "movies page" */ '@/views/Movies.vue'),
      meta: {
        title: 'Movies',
      },
    },
    {
      path: '/series',
      name: 'series',
      component: () =>
        import(/* webpackChunkName: "series page" */ '@/views/Series.vue'),
      meta: {
        title: 'TV-Series',
      },
    },
    {
      path: '/top-imdb',
      name: 'top-imdb',
      component: () =>
        import(/* webpackChunkName: "top-imdb page" */ '@/views/TopIMDB.vue'),
      meta: {
        title: 'Top IMDB',
      },
    },
    {
      path: '/:type/:id',
      name: 'content',
      component: () =>
        import(
          /* webpackChunkName: "card content" */ '@/components/CardContent.vue'
        ),
      meta: {
        title: 'Watching...🎬🍿🥤🎞️',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
