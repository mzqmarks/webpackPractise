const path = require('path')
const {CleanWebpackPlugin} =  require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path:path.join(__dirname, 'dist'),
        // publicPath: 'dist/',
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
        })
    ]
}
