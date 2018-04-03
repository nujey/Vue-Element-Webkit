import home from './home'

export default [
  {
    path: '/',
    meta: {
      layout: true
    },
    children: [
      {
        name: 'home',
        path: '',
        meta: {
          title: '闪电专属',
          layout: true
        },
        component: () => import('../../views/index/home.vue')
      }
    ]
  },
  ...home
]
