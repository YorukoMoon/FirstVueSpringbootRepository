import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/manager/home'
    // component: memberHomeView
  },
    // member的首页路由，暂时先重定向到管理员的主页
  {
    path: '/elementTest',
    name: 'ElementTest',
    component: () =>import('../views/TestCode.vue')

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
    path: '/manager/',
    name: 'manager',
    //也重定向到主页
    component: () =>import('../views/ManagerView.vue'),
    redirect: '/manager/home',
    children: [
      { path: 'home', name: 'managerHome',component: () =>import('../views/manager/HomeView.vue') }
    ]
  }




];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
