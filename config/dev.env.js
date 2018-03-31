'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// 这里是开发环境的
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
