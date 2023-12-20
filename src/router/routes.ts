import Home from '@/pages/Home.vue'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  }
]

export default routes
