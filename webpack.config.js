const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
            template: './public/index.html'
        })
    ],
    devServer: {
        port: 8080,
        // 运行时打开页面
        open: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"]
            },
        ]
    }
}