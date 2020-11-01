const path = require('path')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
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
            test: /\.png$/,
            use: {
              loader: 'url-loader',
              options: {
                esModule: false,
                limit: 10240
              }
            }
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.less$/,
            use: [{
              loader: 'style-loader' // creates style nodes from JS strings
            }, {
              loader: 'css-loader' // translates CSS into CommonJS
            }, {
              loader: 'less-loader' // compiles Less to CSS
            }]
          }
        ]
      },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(
            {
                template: './public/index.html',
                title: 'part2 exam app'
            }
        )
    ]
  
}