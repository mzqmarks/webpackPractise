const { merge } = require('webpack-merge')
const common = require('./webpack.common')
module.exports = merge(common, {
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
        contentBase: './public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                enforce: 'pre'
            },
        ]
    }
})