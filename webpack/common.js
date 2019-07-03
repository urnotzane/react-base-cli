"use strict"
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const happypackConfig = require('./happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isPro = process.env.NODE_ENV === 'production' 

const commonConfig = merge(happypackConfig, {
  entry: './src/index.ts',
  output: {
    filename: isPro ? 'js/[name].[contenthash:5].js' : 'js/[name].[hash:5].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)?$/,
        use: [
          'happypack/loader?id=babel',
          'happypack/loader?id=ts'
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isPro ? MiniCssExtractPlugin.loader : 'style-loader',
          'happypack/loader?id=css',
          'happypack/loader?id=sass',
        ],
      },
      {
        test: /\.(jpg|gif|ico|png|svg)$/,
        loader: 'url-loader',
        exclude: /(node_modules)/,
        options: {
          limit: 1000,                 // 1kb
          name: 'images/[name].[contenthash:5].[ext]'
        },
      },
      {
        test: /\.(woff|eot|ttf|mp4)\??.*$/i,
        loader: 'url-loader',
        exclude: /(node_modules)/,
        options: {
          limit: 1000,
          name: 'fonts/[name].[contenthash:5].[ext]'
        },
      },
      {
        test: /\.(csv|tsv)$/,
        use: [{
          loader: 'happypack/loader?id=csv',
          options: {
            name: 'assets/[name].[contenthash:5].[ext]'
          }
        }]
      },
      {
        test: /\.xml$/,
        use: [{
          loader: 'happypack/loader?id=xml',
          options: {
            name: 'assets/[name].[contenthash:5].[ext]'
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
    new webpack.ProvidePlugin({
      _join: "lodash/join"
    }),
    new HtmlWebpackPlugin({
      title: 'react-base-cli',
      filename: 'index.html',
      template: './index.html',
      inject:true,
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