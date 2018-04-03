import axios from 'axios'
import Vue from 'vue';

axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = ['XMLHttpRequest']
})

axios.interceptors.response.use((response) => {
  const data = response.data
  switch (data.code) {
    case 0:
    case '0':
      return data

    case 'SHIRO_E5001':
      // 如果需要重新登录的时候
      break
    default:
  }
  const err = new Error(data.description)
  err.data = data
  err.response = response
  throw err
}, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 401:
        err.message = '请登陆'
        break
      case 404:
        err.message = '该页面去了休斯顿'
        break
      case 500:
      case 503:
        err.message = '服务器错误'
        break
      case 505:
        err.message = '请求数据超时，请刷新页面重试'
        break
      default:
    }
  }
  return Promise.reject(err)
})

axios.install = (Vue) => {
  Vue.prototype.$axios = axios
}
export default axios
