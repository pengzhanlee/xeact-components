const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        'xeact-components': [
            './src/index.js'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: production ? '[name].min.js' : '[name].js',
        library: 'xeact-components',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.(css|scss)$/,
                    /\.json$/
                ],
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'media/[name].[hash:8].[ext]'
                }
            },
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
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[local]--[hash:base64:5]'
                        }
                    },
                    'sass-loader'
                ]
            }
        ],
    },
    plugins: production ? [

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new UglifyJSPlugin({
            compress: {
                warnings: false
            }
        })
    ] : [],
    externals: [
        // {
        //     react: {
        //         root: 'React',
        //         commonjs2: 'react',
        //         commonjs: 'react',
        //         amd: 'react',
        //     },
        // },
        // {
        //     'react-dom': {
        //         root: 'ReactDOM',
        //         commonjs2: 'react-dom',
        //         commonjs: 'react-dom',
        //         amd: 'react-dom',
        //     },
        // },

        // {
        //     xeact: {
        //         root: 'xeact',
        //         commonjs2: 'xeact',
        //         commonjs: 'xeact',
        //         amd: 'xeact',
        //     },
        // }
    ],
    resolve: {
        modules: [
            './src',
            'node_modules'
        ],
        alias: {
        }
    }
};
