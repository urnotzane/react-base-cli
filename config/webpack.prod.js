const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devtool: 'source-map',
  output: {
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      cache: true,
      parallel: true,
    }),
    // 压缩css
    new OptimizeCSSAssetsPlugin({}),
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
    // 给每个文件开头添加注释，如版权信息
    new webpack.BannerPlugin({
      banner: 'Copyright © urnotzane'
    }),
    // 拆分 bundles，同时提升构建速度。
    // new webpack.DllReferencePlugin({
    //   context: path.resolve(__dirname, '..'),
    //   manifest: require('./manifest.json')
    // }),
  ]
})