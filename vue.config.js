'use strict'
const path = require('path');
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vue-demo';
const port = process.env.port || process.env.npm_config_port || 9527

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  module:{
    rules : [{
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"]
    }]
  }
}
