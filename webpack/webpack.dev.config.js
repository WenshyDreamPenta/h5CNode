const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");
process.env.NODE_ENV = "development";

module.exports = merge(webpackConfig, {
    mode: "production",
    devtool: "cheap-module-eval-source-map",
    entry: [//React热更新
        "babel-polyfill",
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://localhost:9090",
        "webpack/hot/only-dev-server",
        path.resolve(__dirname, "../entry/index.js")
    ], //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    plugins: [
        //默认html模板
        new HtmlWebpackPlugin({
            title: 'CNode dev', 
            template: path.resolve(__dirname, "../public/index.template.html"),
            inject: true
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(
                process.env.NODE_ENV || "development"
            )
        })
    ]
});
