const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'dist')
    },
    //module gets obj and rule gets an array of obj
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test:/\.(png|svg|jpe?g|gif)$/,
                use: {
                    loader: 'file-loader',
                    //this option puts all the imgs in a created folder named img within the dist folder
                    options: {
                        outputPath: 'imgs/'
                    }
                }
            }
        ]
    }
};