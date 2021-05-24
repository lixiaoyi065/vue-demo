'use strict'
const path = require('path');

module.exports = {
  module:{
    rules : [{
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"]
    }]
  }
}
