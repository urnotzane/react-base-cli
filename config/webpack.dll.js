const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports =  {
  mode: "production",
  entry: {
    dll: [
      'es6-promise',
      'lodash',
      'react',
      'react-dom',
      'react-router-dom',
      'history'
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'manifest'),
    library: '[name]_[chunkhash]', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  },
  plugins: [
    new CleanWebpackPlugin(['manifest'], {
      root: path.resolve(__dirname, './'),   //指定dist所在目录，也就是根目录
      verbose: true,        　　　　　　　　　　//开启在控制台输出信息
    }),
    // 拆分 bundles，同时提升构建速度。
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]_[chunkhash]',
      path: path.join(__dirname, 'manifest/manifest.json'),
    }),
  ]
}
