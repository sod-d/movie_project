const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  devServer : {
    proxy : 'https://openapi.naver.com'
  }
})
