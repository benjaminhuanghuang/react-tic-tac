const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public');


var config = {
    entry: APP_DIR + '/index.js', // entry point
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js', // place where bundled app will be served
    },
    devServer: {
        contentBase: BUILD_DIR,
        inline: false, 
        port: 8080 // development port server
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, // search for js files 
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'] // use es2015 and react
            }
        }]
    }
}
module.exports = config;