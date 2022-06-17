const path = require('path')
module.exports = {
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
    }

}