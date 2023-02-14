const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  devServer : {
    '/openapiNaver' : {
      target : 'https://openapi.naver.com'
      ,changeOrigin : true
    }

    
  }
})
