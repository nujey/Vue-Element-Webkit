import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/common/login'

Vue.use(Router)
// 这里的route需要用class的类 封装一次
export default new Router({
  routes: [
    {
      path: '/',
      name: 'global-login',
      // component: () => import('@/components/common/login')
      component: LoginPage
    }
  ]
})
