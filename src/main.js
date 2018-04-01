// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入axios
import axios from 'axios'

import './assets/css/index.styl'
import './components'

Vue.config.productionTip = false
// 将axios挂载到Vue实例上面 这样就可以在项目中任何位置通过this访问
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
