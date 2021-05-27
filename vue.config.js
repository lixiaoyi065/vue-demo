const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vue Element Admin' // page title

const port = process.env.port || process.env.npm_config_port || 9527 // dev port

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    port: port,
    open: true
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  }
}
