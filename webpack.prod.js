const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "production",
    entry: "./src/client/index.js",
    output: {
        path: path.resolve(__dirname, './dist/prod'),
        filename: 'index_bundle.js',
        libraryTarget: "var",
        library: 'Client'
    },
    plugins: [new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: './index.html',
        }
    )],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ]
            }
        ]
    }
};