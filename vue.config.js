const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const target = process.env.TARGET.ADDRESS;

module.exports = {
  devServer: {
    port:8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true
      },
      '^/upload': {
        target,
        changeOrigin: true
      },
      '^/download': {
        target,
        changeOrigin: true
      }
    }
  }
}