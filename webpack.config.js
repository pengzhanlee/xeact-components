const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        'xeact-components': [
            // './node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js',
            // './node_modules/@webcomponents/webcomponentsjs/webcomponents-sd-ce.js',
            './src/index.js'
        ],

        // ceAdapter: [
        //     './node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js',
        //     './node_modules/@webcomponents/webcomponentsjs/webcomponents-sd-ce.js',
        // ]
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
        ],
    },
    plugins: production ? [

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new UglifyJSPlugin({
            // xeact: {
            //     exclude: [
            //         path.resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'),
            //         path.resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/custom-elements-sd-ce.js'),
            //     ],
            //     compress: { warnings: false }
            // }

            // compress: {
            //     warnings: false
            // }

            // exclude: /webcomponentsjs/
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
    ],
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react'),
        }
    }
};
