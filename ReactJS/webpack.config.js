const path = require('path');

module.exports = {
    // entry: './src/index.js',
    entry: './teste.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'production-bundle.js'
    }
};