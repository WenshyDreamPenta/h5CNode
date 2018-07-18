const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
    mode: "production",
    devtool: "cheap-module-eval-source-map",
    //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    entry: {
        app: ["babel-polyfill", path.resolve(__dirname, "../entry/index.js")],
        vendor: ["react", "react-dom", "babel-polyfill"]
    },
    resolve: {
        // 指定第三方库目录，减少webpack寻找时间
        modules: [path.resolve(__dirname, "../node_modules")]
    },
    
    //添加热更新入口
    output: {
        path: path.resolve(__dirname, "../dist"), // 输出的路径
        filename: "app/[name]_[hash:8].js" // 打包后文件
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
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            //less文件处理
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                // exclude: [nodeModulesPath]用来排除不处理的目录
                exclude: /node_modules/,
                loader: 'style!css?modules!postcss!sass'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url?limit=50000&name=[path][name].[ext]'
            }


        ]
    },
    plugins: [
        //默认html模板
        new HtmlWebpackPlugin({
            title: 'CNode', 
            template: path.resolve(__dirname, "../public/index.template.html"),
            inject: true
        }),
        //热更新
        new webpack.HotModuleReplacementPlugin()
    ],
    performance: { hints: false }
};
