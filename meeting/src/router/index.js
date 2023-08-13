import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShenQingBiao from '../views/ShenQingBiao.vue'
import YuYueTu from '../views/YuYueTu.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shenqingbiao',
    name: 'shenqingbiao',
    component: ShenQingBiao
  },
  {
    path: '/yuyuetu',
    name: 'yuyuetu',
    component: YuYueTu
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
