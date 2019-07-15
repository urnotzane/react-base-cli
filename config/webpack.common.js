"use strict"
const path = require('path')
const merge = require('webpack-merge')
const happypackConfig = require('./webpack.happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

const isPro = process.env.NODE_ENV === 'production'

const commonConfig = merge(happypackConfig, {
  entry: {
    bundle: './src/index.tsx',
  },
  output: {
    filename: isPro ? 'js/[name].[contenthash:5].js' : 'js/[name].[hash:5].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: isPro ? 'js/[name].chunk.[contenthash:5].js' : 'js/[name].chunk.[hash:5].js',
    library: 'library',
    // libraryTarget: 'umd',
  },
  module: {
    rules: [{
        test: /\.(js|ts|tsx)?$/,
        use: [
          'happypack/loader?id=babel',
          'happypack/loader?id=ts'
        ],
        exclude: /(node_modules)/,
        resolve: { // 导入tsx和ts时有用
          extensions: ['.ts', '.tsx'],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isPro ? MiniCssExtractPlugin.loader : 'style-loader',
          'happypack/loader?id=css',
          'resolve-url-loader',
          'postcss-loader',
          'happypack/loader?id=sass',
        ],
      },
      {
        test: /\.(jpg|gif|ico|png|svg)$/,
        loader: 'url-loader',
        exclude: /(node_modules)/,
        options: {
          limit: 1000, // 1kb
          name: 'images/[name].[contenthash:5].[ext]',
          publicPath: '..'
        },
      },
      {
        test: /\.(woff|eot|ttf|mp4)\??.*$/i,
        loader: 'url-loader',
        exclude: /(node_modules)/,
        options: {
          limit: 1000,
          name: 'fonts/[name].[contenthash:5].[ext]',
          publicPath: '..'
        },
      },
      {
        test: /\.(csv|tsv)$/,
        use: [{
          loader: 'happypack/loader?id=csv',
          options: {
            name: 'assets/[name].[contenthash:5].[ext]',
            publicPath: '..'
          }
        }]
      },
      {
        test: /\.xml$/,
        use: [{
          loader: 'happypack/loader?id=xml',
          options: {
            name: 'assets/[name].[contenthash:5].[ext]',
            publicPath: '..'
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isPro ? 'css/style.[contenthash:5].css' : 'css/style.[hash:5].css',
      chunkFilename: isPro ? 'css/[id].[contenthash:5].css' : 'css/[id].[hash:5].css',
    }),
    new HtmlWebpackPlugin({
      title: 'react-base-cli',
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: false,
        removeEmptyAttributes: true,
      }
    }),
  ]
})

module.exports = commonConfig