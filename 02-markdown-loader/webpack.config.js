const path = require('path')
module.exports = {
    mode: 'none',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                // use: './markdown-loader'
                use: [
                    'html-loader',
                    './markdown-loader'
                ]
            }
        ]
    }
}