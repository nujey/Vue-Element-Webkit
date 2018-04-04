import Router from 'vue-router'
import routes from './routes'

// 这里的route需要用class的类 封装一次
const router = new Router({
  routes,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  document.title = to.query.title || to.meta.title || '闪电专属'
  next()
})
export default router
