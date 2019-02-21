const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: ['./src/index.tsx']
  },
  // 根据提供的选项将运行时代码拆分成单独的块，创建单个运行时 bundle(one runtime bundle)
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),   //指定dist所在目录，也就是根目录
      verbose: true,        　　　　　　　　　　//开启在控制台输出信息
    }),
    new HtmlWebpackPlugin({
      title: 'react - webpack4',
      favicon: './favicon.ico',
      template: path.resolve(__dirname, '../src', 'index.html'),
      filename: 'index.html'
    }),
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助 ServiceWorkers 快速启用
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true
    }),
    // 给每个文件开头添加注释，如版权信息
    new webpack.BannerPlugin({
      banner: 'Copyright © urnotzane'
    }),
    // 拆分 bundles，同时提升构建速度。
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '..'),
      manifest: require('./manifest.json')
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }, {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader?modules&localIdentName=[path][name]-[local]-[hash:base64:5]", {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              syntax: require('postcss-less'),
              plugins: [
                require('autoprefixer')(),
                require('postcss-import')(),
              ]
            }
          }, "less-loader",]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },]
  },

};