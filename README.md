## React技术栈
- react
- react-router4
- redux
- react-redux

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

- containers 页面组件,或者放在自己的subpage目录下
    - home 页面级组件
        - subpage目录 (容器组件或者智能组件)
        - index.js
- index.js 用来控制显示哪个页面



- 项目小结:
    - 首先写一个项目之前要搭建环境
    - 然后看是否能跑通
    - 成功跑通之后开始配置路由(配置首页看是否渲染)




>当组件要获取或者改变redux中的状态时,该组件首先要connect一下redux，如果是获取就使用第一个connect第一个参数,如果是更改则使用connect第二个参数

>获取数据之后，显示正在加载,将数据放在当前组件状态中
>加载更多:本身是一个傻瓜组件,是List下的一个显示组件,通过调用List下的loadmore方法来让List组件获取更多的数据然后更新状态,然后让List下的傻瓜组件ListConponent去显示

>一般智能组件和傻瓜组件配合工作,智能组件获取数据状态,傻瓜组件进行展示,智能组件放在container、傻瓜组件放在component

>写页面级组件(Home,Detail)之前要先配好路由(Router,Route,Switch,Redirect,Link),由路由渲染的组件(Home,Detail页面级组件),都会在组件内部的this.props上增加三个属性:history,location,match(路径参数,例如:id)

>一般智能组件获取完后台数据之后先保存在自己内部组件状态中,然后判断是否存在数据,如果不存在则不显示组件而只显示正在加载中...,获取了数据则显示傻瓜组件进行展示;

>点击跳转,要想到的是react-router-dom下的Link


>redux存储的状态基本都是共享状态,可能每个组件都会用到的才会存储到redux,像isLoading这样的状态,只是loadMore组件使用,所以只需存储在相应组件内部即可;


>切换页面，或者新增一个页面都要先想着增加路由