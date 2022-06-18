const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { join } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    // 设置打包模式
    mode: 'development',
    // 入口路径
    entry: './src/main.js',
    // 出口配置
    output: {
        path: path.join(__dirname, 'lib'),
        // 打包文件名
        filename: 'webpack-demo.js',
        // 删除上次文件
        clean: true
    },
    plugins: [
        // 设置输出模板
        new HtmlWebpackPlugin({
            template: join(__dirname, 'public/index.html')
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        port: 30000,
        // 运行时打开页面
        open: true
    },
    module: {
        rules: [
            {//vue
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {//js高级
                test: /\.js$/,
                use: ["babel-loader"],
            },
            // {//css
            //     test: /\.css$/i,
            //     use: ["style-loader", "css-loader"]
            // },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                // use: ["style-loader", "css-loader"],
            },
            {//less
                test: /\.less$/i,
                // use: ["style-loader", "css-loader", "less-loader"]
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            },
            {//图片
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset',
                // 设置文件大小界限为2kb
                parser: {
                    dataUrlCondition: {
                        maxSize: 2 * 1024
                    }
                }
            },
            {//文件
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'fonts/[hash:6][ext]'
                }
            }
        ]
    }
}