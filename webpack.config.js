const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const theme =  require('./src/styles/theme');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const production = process.env.NODE_ENV === 'production';

const extractAntd = new ExtractTextPlugin({
    filename: path.resolve(__dirname, 'dist/css/base.[contenthash].css')
});

module.exports = {
    entry: {
        'ola-ui': [
            './src/index.js'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: production ? '[name].min.js' : '[name].js',
        library: 'ola-ui',
        libraryTarget: 'umd',
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
            },
            {
                test: /\.less$/,
                use: extractAntd.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true,
                            sourceMap: true,
                            importLoaders: 1,
                            modules: false,
                            localIdentName: '[local]--[hash:base64:5]'
                        }
                    }, {
                        loader: "less-loader",
                        options: {
                            sourceMap: true,
                            modifyVars: theme,
                            paths: [
                                path.resolve(__dirname, "node_modules")
                            ]
                        }
                    }]
                })
            }
        ],
    },
    plugins: production ? [

        extractAntd,

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
    ] : [
        extractAntd,
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

        {
            xeact: {
                root: 'xeact',
                commonjs2: 'xeact',
                commonjs: 'xeact',
                amd: 'xeact',
            },
        }
    ],
    resolve: {
        modules: [
            './src',
            'node_modules'
        ],
        alias: {}
    }
};
