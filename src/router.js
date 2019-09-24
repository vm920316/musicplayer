import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { TOKEN_KEY } from '@/utils/contants'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/find',
      name: 'find',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Find.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
      meta: {
        auth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if ((to.meta.hasOwnProperty('auth') && !to.meta.auth) || Vue.ls.get(TOKEN_KEY)) {
    next()
  } else {
    next({
      name: 'login'
    })
  }
})

export default router
