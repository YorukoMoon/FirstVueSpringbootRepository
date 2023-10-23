import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomeView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/elementTest',
    name: 'ElementTest',
    component: () =>import('../views/HomeView.vue')

  },
  {
    path: '/login',
    name: 'login',
    component: () =>import('../views/LoginForm.vue')

  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
