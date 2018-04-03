export default [
  {
    path: '/home',
    name: 'timi-home',
    meta: {
      layout: true,
      title: '闪电专属-首页'
    },
    component: () => import('../../views/index/home.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: {
      layout: true,
      title: '闪电专属-404'
    },
    component: () => import('../../views/index/404.vue')
  }
]
