//入口文件只支持绝对路径
let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let extract = new ExtractTextWebpackPlugin('build.css');   //使用一下这个插件,将css单独抽离一个文件
module.exports = {
    entry: {
        index:'./src/index.js',
        vendor:['react','react-dom','redux','react-redux','react-router-dom']
    },
    output: {
        filename: "[name].js",
        path: path.resolve('dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less/,
                use: extract.extract(['css-loader', {
                    loader: 'postcss-loader',
                    options:{
                        plugins: [
                            require('autoprefixer')  //添加css前缀
                        ]
                    }
                }, 'less-loader'])
            },
            {
                test: /\.(jpe?g|png|gif|eot|woff|woff2|ttf)/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [//注册插件
        extract,
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devtool: 'source-map', /*实现错误提示映射到源码*/
    devServer: {
        proxy: {
            '/api': 'http://localhost:4000'
        }
    }

};