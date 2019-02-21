const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  mode: "production",
  devtool: 'source-map',
  entry: {
    vendor: [
      'es6-promise',
      'lodash'
    ]
  },
  output: {
    filename: 'dll/[name].dll.js',
    path: path.resolve(__dirname, '../dist/js/'),
    library: '[name]_[chunkhash]', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
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
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('css/style.[chunkhash].css').replace('css/js', 'css');
      },
      allChunks: true
    }),
    // 拆分 bundles，同时提升构建速度。
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]_[chunkhash]',
      path: path.join(__dirname, 'manifest.json'),
    }),
    // 设置chunk大小和数量
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 5, // 必须大于或等于 1
      minChunkSize: 1000
    })
  ]
})
