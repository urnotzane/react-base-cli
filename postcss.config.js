const config = {
  plugins: [
    require('precss'),            // 囊括了许多插件来支持类似 Sass 的特性，比如 CSS 变量，套嵌，mixins 等
    require('autoprefixer'),
    require('postcss-pxtorem'),
    require('cssnano')            // 压缩
  ]
}

module.exports = config