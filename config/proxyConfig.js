// 配置项目开发过程中可能遇到的跨域问题域名

// 代理配置表，在这里可以配置特定的请求代理到对应的API接口
// 例如将'localhost:8080/api/xxx'代理到'www.example.com/api/xxx'
// 使用方法：https://vuejs-templates.github.io/webpack/proxy.html
module.exports = {
  proxyList: {
    '/api': {
      target: "https://api.douban.com",
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    },
    '/apis': {
      target: 'https://zhihu-daily.leanapp.cn',
      changeOrigin: true,
      pathRewrite: {  //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
        '^/apis': ''
      }
    },
    '/cc': {
      target: 'https://adzuki.studio',
      changeOrigin: true,
      pathRewrite: {
        '^/cc': ''
      }
    }
  }
}