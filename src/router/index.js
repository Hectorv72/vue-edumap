import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import SearchPage from '../views/SearchPage.vue'

const routes = [
  {
    path: '/',
    name: 'SearchPage',
    component: SearchPage
  }
  // {
  //   path: '/searcher',
  //   name: 'SearchPage',
  //   component: SearchPage
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
