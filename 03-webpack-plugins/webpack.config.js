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
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    attributes: {
                        list: [
                            // All default supported tags and attributes
                            '...',
                            {
                              tag: 'img',
                              attribute: 'data-src',
                              type: 'src',
                            },
                            {
                              tag: 'img',
                              attribute: 'data-srcset',
                              type: 'srcset',
                            },
                            {
                              // Tag name
                              tag: 'a',
                              // Attribute name
                              attribute: 'href',
                              // Type of processing, can be `src` or `scrset`
                              type: 'src'
                              // Allow to filter some attributes
                             
                            },
                          ],
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin()
    ]
}
