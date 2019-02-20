const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: "development",
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8888,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 全局变量
    new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ],
})