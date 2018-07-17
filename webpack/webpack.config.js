const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:9090',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, "../src/index.js")], //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    //添加热更新入口
    output: {
        path: path.resolve(__dirname, "../dist"), // 输出的路径
        filename: 'app/[name]_[hash:8].js', // 打包后文件
    },
    module: {
        rules: [
            {
                //js/jsx文件处理
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            //css处理
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }],
            },
            //less文件处理
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true,
                    },
                }],
            }
        ]
    },
    plugins: [
        //默认html模板
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.template.html'),
            inject: true
        }),
        //热更新
        new webpack.HotModuleReplacementPlugin()
    ]
};
