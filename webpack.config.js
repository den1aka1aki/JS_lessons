

const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'webpack', 'index.js'),
    output: {

        path: path.resolve(__dirname, 'webpack', 'dist'),
        filename: ' main.js',
        clean: true,
    },
};