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
    devtool: 'source-map',
    devServer: {
        contentBase: './public', // 额外为开发服务器指定查找资源目录
        proxy: {  // 添加代理服务配置的属性
            "/api": { //被代理的请求路径前缀 - 以 /api 请求地址开始，就会走代理请求
                // http://loaclhost:8080/api/users  相当于请求了  https://api.github.com/api/users
                target: 'https://api.github.com',

                // http://loaclhost:8080/api/users  相当于请求了  https://api.github.com/users
                pathRewrite: {
                    '^/api': '' // 将/api 替换为’‘（空字符串）
                },
                // 不能使用 localhost:8080 作为请求github 的主机名
                changeOrigin: true
            } 
        }
    },
    devtool: 'source-map',
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
