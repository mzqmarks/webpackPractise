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
            { test: /\.png$/, use: 'file-loader' },
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
            // { 
            //     test: /\.html$/, 
            //     use: {
            //         loader: 'html-loader',
            //         options: {
            //             attrs: ['img:src','a:href']
            //         }
            //     }
                
            // }
        ]
    }
}

// loader: 'html-loader', 
// options: {
//     attributes: {
//         list: [
//             {
//                 tag: 'img',
//                 attribute: 'src',
//                 type: 'srcset'
//             },
//             {
//                 tag: 'a',
//                 attribute: 'data-href',
//                 type: 'href'
//             }
//         ]
//     }
// }