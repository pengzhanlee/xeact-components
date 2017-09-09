const path = require('path');
const webpack = require('webpack');

var production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        xeact: './src/index.js',
        vendor: [
            'react', 'react-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist' ),
        filename: production ? '[name].min.js' : '[name].js',
        library: 'xeact',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            cacheDirectory: true
                        }
                    }
                ]
            }
        ],
    },
    plugins: [

    ],
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react',
            },
        },
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom',
            },
        },
    ],
    resolve: {

    }
};
