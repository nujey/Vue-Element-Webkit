// 引入axios
import axios from 'axios'

export function fetch(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      // instance创建一个axios实例 可以自定义配置 可在axios文档中查看详情
      // 所有的请求都会带上这些配置 比如全局都要用的身份信息等
      headers: {
        'Content-Type': 'application/json'
        // 'token_in_header':global_.token
        // token从全局变量那里传过来
      },
      timeout: 30 * 1000 // 30秒超时
    })
    instance(options)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}
