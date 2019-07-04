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
- happypack

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
    _: "lodash/index"
  })
  ```

- 使用ts-loader导致图片导入编译后的地址为undefined

  ts中导入图片需要使用require。

- :question:scss使用url()图片路径错误，还未找到能解决办法。

## :tada:意外收获

### git的使用

- 常用

```bash
# 创建分支
git branch branchName

# 切换分支
git checkout branchName

# 创建并切换分支
git checkout -b branchName

#查看所有分支
git branch -a

# 删除本地分支
git branch -d branchName

# 删除远程分支
git push origin --delete branchName

# 将分支dev合并到分支master
git checkout master
git merge dev

# 删除本地所有暂存的更改
git checkout -f

# 如果有修改以及加入暂存区
git reset --hard
git clean -xdf

# 查看已更改文件
git status

# 创建新分支后推送
git push --set-upstream origin branchName
```

- 问题

1. Please commit your changes or stash them before you switch branches.意思是请在切换分支之前提交您的更改或隐藏它们。关于提交更改就不必说了，下面是隐藏更改的相关命令：

  ```bash
  # 当前分支隐藏并存储更改
  git stash

  # 查看隐藏存储的列表
  git stash list

  # 恢复隐藏的更改（stash@{0}是隐藏存储的id）
  git stash apply stash@{0}

  # 删除隐藏的更改
  git stash pop
  ```
