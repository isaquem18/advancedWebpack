const { resolve } = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: ['file-loader'],
            }
        ]
    }
};
