const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'source-map' // 或者 'cheap-module-eval-source-map'，具体选择根据需求和性能进行调整
  }
})
