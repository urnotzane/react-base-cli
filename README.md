# react-base-cli

react脚手架，包括各种常用模块

## :memo:包含的模块

- clean-webpack-plugin

  用来清理文件，比如在项目构建之前删除dist文件夹内的文件。
- cross-env

  主要用来设置node环境变量`NODE_ENV=production`，因为Windows和Mac系统设置方法不一样，使用此模块进行兼容。
- csv-loader和xml-loader

  用来加载CSV、TSV 和 XML文件。
- file-loader或url-loader

  加载任何类型的文件，包括字体。
- html-webpack-plugin

  配置输出的html文件的内容，如修改title、script、css等。
- mini-css-extract-plugin

  将css文件从js中分离出来，减小单个文件大小。webpack4已经不支持extract-text-webpack-plugin，因此使用此模块代替，建议仅在生产环境使用。
- sass-loader、node-sass

  本项目使用sass预编译处理器。
- uglifyjs-webpack-plugin

  代码压缩。
- webpack-merge

  webpack的构建我们分为开发环境和生产环境等，每个环境需要不同的配置，而各种配置会有很多重复部分，抽取公共部分配置，使用此模块合并公共配置和不同配置。
- happyhack

  js是单线程语言，使用此模块将webpack配置为多线程，提高项目构建速度。由于HappyPack 对file-loader、url-loader 支持的不友好，所以不建议对该loader使用。

## :question:遇到的问题

- 在Windows系统中yarn run start时显示网页被永久移动，在Mac中则没有此问题。

- webpack全局变量lodash官方使用方法无效

  ```javascript
  new webpack.ProvidePlugin({
    // _: "lodash"
    _join: 'lodash/join'
  })
  ```

  需要修改为如下：

  ```javascript
  new webpack.ProvidePlugin({
    _join: "lodash/join"
  })
  ```

- 使用ts-loader导致图片导入编译后的地址为undefined

  ts中导入图片需要使用require。
