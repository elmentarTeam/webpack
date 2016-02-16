var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
           {
				loader: 'babel-loader',
                test: path.join(__dirname, 'app'),
                query: {
                  presets: 'es2015'
                }
			}
        ]
    },
    plugins: [
        // copy the index.html to the dist folder
        new CopyWebpackPlugin ([
            { from: './index.html', to: './dist/index.html' }
        ])
    ],
    // make a source mapping
   devtool: 'source-map', 
}