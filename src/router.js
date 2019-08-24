import Vue from 'vue'
import Router from 'vue-router'
import Inspiration from './views/Inspiration'
import Gallery from './views/Gallery'
import Episodes from './views/Episodes'

Vue.use(Router)
export default new Router({
  routes: [
    {
        path: '/',
        name: 'inspiration',
        component: Inspiration
      },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery
    },
    {
        path: '/episodes',
        name: 'episodes',
        component: Episodes
    }
  ]
})