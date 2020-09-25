const path = require('path')
module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path:path.join(__dirname, 'dist'),
        publicPath: 'dist/',
    },
    module: {
        rules: [
            { test: /\.css$/, use:['style-loader', 'css-loader'] },
            { 
                test: /\.png$/,
                use: {
                     loader: 'url-loader',
                     options: {
                         limit: 10 * 1024 //限制10M以下的图片用url-loader打包，10M以上的还用file-loader 打包，做了限制必须下载file-loader
                     }
                 }
            }
        ]
    }
}