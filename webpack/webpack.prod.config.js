const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpackConfig = require("./webpack.config");

process.env.NODE_ENV = "production";

module.exports = merge(webpackConfig, {
    entry: ["babel-polyfill", path.resolve(__dirname, "../entry/index.prod.js")],
    plugins: [
        new UglifyJSPlugin({
            uglifyOptions: {
                output: {
                    comments: false,
                    beautify: false
                },
                compress: {
                    warnings: false,
                    // 去掉debugger和console
                    drop_debugger: true,
                    drop_console: true
                }
            }
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(
                process.env.NODE_ENV || "production"
            )
        }),
        new HtmlWebpackPlugin({
            title: 'CNode', 
            template: path.resolve(__dirname, "../public/index.template.html"),
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                removeComments: true,
                removeTagWhitespace: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        })
    ]
});
