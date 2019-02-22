const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  mode: "development",
  devtool: 'inline-source-map',
  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  devServer: {
    contentBase: '../dist',
    hot: true,
    port: 8888,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 拆分 bundles，同时提升构建速度。
    // new webpack.DllReferencePlugin({
    //   context: path.resolve(__dirname, '..'),
    //   manifest: require('./manifest.json')
    // }),
  ],
})