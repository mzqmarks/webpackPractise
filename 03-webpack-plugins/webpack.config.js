const path = require('path')
const {CleanWebpackPlugin} =  require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path:path.join(__dirname, 'dist'),
        // publicPath: 'dist/',
    },
    devServer: {
        contentBase: './public' // 额外为开发服务器指定查找资源目录
    },
    module: {
        rules: [
            { test: /\.css$/, use:['style-loader', 'css-loader'] },
            { test: /\.hbs$/, use: "handlebars-loader" },
            { 
                test: /\.png$/,
                use: {
                     loader: 'url-loader',
                     options: {
                         limit: 10 * 1024 //限制10M以下的图片用url-loader打包，10M以上的还用file-loader 打包，做了限制必须下载file-loader
                     }
                 }
            },
            { 
                test: /\.js$/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
           
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack Plugin Sample',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html'
        }),

        //开发阶段最好不要用这个插件，他会频繁赋值静态文件 
        // new CopyWebpackPlugin({
        //     patterns:[
        //         { from: 'public', to: '' }
        //     ]
        // })
    ]
}
