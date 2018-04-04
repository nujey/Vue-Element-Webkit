// import home from './home'

export default [
  {
    path: '/',
    meta: {
      layout: true
    },
    component: () => import('../../views/index/index.vue'),
    children: [
      {
        name: 'timi-home',
        path: 'timi-home',
        meta: {
          title: '闪电专属-首页',
          layout: true
        },
        component: () => import('../../views/index/home.vue')
      }, {
        name: 'timi-404',
        path: 'timi-404',
        meta: {
          title: '闪电专属-404',
          layout: true
        },
        component: () => import('../../views/index/404.vue')
      }
    ]
  }
  // ...home
]
