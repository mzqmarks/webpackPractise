const path = require('path')
module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path:path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.css$/, use:['style-loader', 'css-loader'] }
        ]
    }
}