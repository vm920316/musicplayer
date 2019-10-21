import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import { TOKEN_KEY } from '@/utils/contants'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        auth: false
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/find',
      name: 'find',
      component: () => import('./views/Find.vue')
    },
    {
      path: '/music-list',
      name: 'musicList',
      component: () => import('@/components/music-list/index.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if ((to.meta.hasOwnProperty('auth') && !to.meta.auth) || Vue.ls.get(TOKEN_KEY)) {
    next()
  } else {
    next({
      name: 'login',
      query: {
        redirect: encodeURIComponent(to.fullPath)
      }
    })
  }
})

export default router
