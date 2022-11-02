import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),

  // 映射关系 path -> component
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('@/views/home/home.vue'),
      meta: { ishome: false },
    },
    {
      path: '/favor',
      component: () => import('@/views/favor/favor.vue'),
    },
    {
      path: '/order',
      component: () => import('@/views/order/order.vue'),
    },
    {
      path: '/message',
      component: () => import('@/views/message/message.vue'),
    },
    {
      path: '/city',
      component: () => import('@/views/city/city.vue'),
      meta: { hiddenTabbar: true },
    },
  ],
})

export default router
