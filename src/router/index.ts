import { createRouter, createWebHistory } from 'vue-router'
import PageHomepage from '@/components/page-homepage/PageHomepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: PageHomepage,
    },
    {
      path: '/library',
      name: 'library',
      component: () => import('@/components/page-library/PageLibrary.vue'),
    },
    {
      path: '/port',
      name: 'port',
      component: () => import('@/components/page-port/PagePort.vue'),
    },
    {
      path: '/archives/_doc-id',
      name: 'document',
      component: () => import('@/components/page-document/PageDocument.vue'),
    },
  ],
})

export default router
