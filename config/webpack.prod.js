const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: "production",
  devtool: 'source-map',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    // 指定当前环境
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // 解决hash频繁变动
    new webpack.HashedModuleIdsPlugin(),
    // 全局变量
    new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ]
})