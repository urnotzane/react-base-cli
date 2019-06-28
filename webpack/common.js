"use strict"
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isPro = process.env.NODE_ENV === 'production' 

const commonConfig = {
  entry: './src/index',
  output: {
    filename: isPro ? 'js/[name].[contenthash:5].js' : 'js/[name].[hash:5].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isPro,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[contenthash:5].[ext]'
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
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
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
}

module.exports = commonConfig