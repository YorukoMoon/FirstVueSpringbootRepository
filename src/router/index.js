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

  },
  {
    path: '/register',
    name: 'register',
    component: () =>import('../views/RegisterPage.vue')

  },
  {
    path: '/manager',
    name: 'manager',
    component: () =>import('../views/RegisterPage.vue'),
    children: [
      { path: 'home', name: 'home',component: () =>import('../views/manager/HomeView.vue') }
    ]
  }




];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
