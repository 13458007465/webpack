const webpack = require('webpack');
const path    = require('path');
const Entry   = require('./webpack.entry');
const Loader  = require('./webpack.loader');
const HTML    = require('./webpack.html');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context:path.resolve(__dirname, '../'),
    entry:Entry.config,
    output:{
        path:path.resolve(__dirname, '../dist/'),
        filename:'static/js/[name]-bundle.js',
        publicPath:'http://localhost:8080/'
    },
    module:{
        rules:Loader.config
    },
    plugins:[
        new ClearWebpackPlugin(['../dist/static/']),
        ...HTML.config,        
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('static/css/[name].min.css'),
        new CopyWebpackPlugin([
            {
                from:'./src/json',
                to:'./static/json'
            },
        ]),
        new webpack.ProvidePlugin({
            $:'jquery'
        })
    ],
    resolve:{
        alias:{
            'Router':path.resolve(__dirname, '../src/js/router.js'),
            'Common-LESS':path.resolve(__dirname, '../src/less/normalized.less')        
        }
    },
    devServer:{
        contentBase:path.resolve(__dirname,'./dist'),
        host:'localhost',
        port:8080,
        open:true,
        inline: true,
        hot: true
    }
}