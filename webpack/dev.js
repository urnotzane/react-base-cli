"use strict"
const merge = require("webpack-merge")
const webpack = require('webpack')
const commonConfig = require('./common')
const path = require('path')

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',         // 帮助开发，仅用于开发环境
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    port: 8889,
    compress: true,                     // 降低了网络传输的字节数，可以加快网页加载的速度
    host: "0.0.0.0",
    hot: true,
    // historyApiFallback: true,           // 任意的 404 响应都可能需要被替代为 index.html
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
})

module.exports = devConfig