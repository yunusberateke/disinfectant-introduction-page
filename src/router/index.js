import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from "@/views/NotFound";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      // ...
      {
        path: '404',
        name: 'Page not found',
        component: NotFound,
        alias: '*'
      }
    ]
  },
  {
    path: '404',
    name: 'Page not found',
    component: NotFound,
    alias: '*'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
