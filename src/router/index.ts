import { createRouter, createWebHistory } from '@ionic/vue-router'
import type { RouteRecordRaw } from 'vue-router'
import TabsPage from '../components/TabsPage.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tasks'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tasks'
      },
      {
        path: 'tasks',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tasks/:id',
        component: () => import('@/views/TaskDetailPage.vue')
      },
      {
        path: 'completed',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'settings',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router