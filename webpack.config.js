

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'index.js'),
    output: {

        path: path.resolve(__dirname, 'dist'),
        filename: ' main.js',
        clean: true,
    },

    devServer: {

        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        open: true,

    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ],
    module: {

        rules: [



            {

                test: /\.css$/i,

                use: ['style-loader', 'css-loader'],

            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,

                type: 'asset/resource',

            },

        ],

    },
};