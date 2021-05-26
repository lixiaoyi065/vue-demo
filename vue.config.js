const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = 'vue-demo'

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    open: true
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve("src")
      }
    }
  }
}
