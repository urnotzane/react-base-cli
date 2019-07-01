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
  entry: './src/index',
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
          'happypack/loader?id=ts',
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isPro,
            },
          },
          'happypack/loader?id=css',
          'happypack/loader?id=sass',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/[name].[contenthash:5].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['happypack/loader?id=csv']
      },
      {
        test: /\.xml$/,
        use: ['happypack/loader?id=xml']
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