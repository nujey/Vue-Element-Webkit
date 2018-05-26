export default [
  {
    path: '/home',
    component: () => import('../../views/index/index.vue'),
    children: [
      {
        path: 'timi-home',
        name: 'timi-home',
        meta: {
          layout: true,
          title: '闪电专属-首页'
        },
        component: () => import('../../views/index/home.vue')
      }, {
        path: '404',
        name: '404',
        meta: {
          layout: true,
          title: '闪电专属-404'
        },
        component: () => import('../../views/index/404.vue')
      }, {
        path: 'module',
        name: 'module',
        meta: {
          layout: true,
          title: 'module测试'
        },
        component: () => import('../../views/index/test.vue')
        // component: () => {
        //   const a = 1
        //   if (a === 1) {
        //     import("../../views/moduletest/test.vue")
        //   }
        // }
      }
    ]
  }
]
