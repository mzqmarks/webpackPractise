const path = require('path')

module.exports = {
    entry: './src/main.js',
    outout: {
        path: path.resolve(__dirname, './dist')
    }
}