const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'bundle.js',
        library: 'React-7css',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externals: {
        '7.css': '7.css',
        react: 'react',
        'react-dom': 'react-dom',
    }
};
