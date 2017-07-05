## React技术栈
- react
- react-router4
- redux
- react-redux
- less

## 安装前初始化
```
yarn init -y
```

## webpack
```
yarn add webpack webpack-dev-server --dev

```

## babel
```
yarn add babel-core babel-loader babel-preset-stage-0 babel-preset-es2015 babel-preset-react css-loader less less-loader style-loader html-webpack-plugin --dev

```

## react
```
yarn add react react-dom redux react-redux  react-router-dom
```

## fetch(获取数据-ajax) 基于promise,需要下载兼容promise的插件
```
yarn add es6-promise whatwg-fetch --dev
```

## express
```
yarn add express
```

## scripts   (-p压缩)
```
"dev":"webpack-dev-server --hot --open --port 8080 --progress --colors"

"build":"webpack -p"
```

## 目录结构(app源文件目录下)
- components 组件 (UI组件)

- containers 页面组件,subpage目录下的文件都是该页面级组件下的智能组件
        - subpage目录 (容器组件或者智能组件)
        - index.js


## 运行项目
```
yarn dev
```

## 打包上线
```
yarn build
```

### 打包上线安装两个插件
    - extract-text-webpack-plugin 抽离css文件
    - postcss-loader 自动补充兼容浏览器前缀