const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const pxtorem = require('postcss-pxtorem');
const docsLoader = require('./src/blocks/docs-loader');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].[hash:8].js",
        chunkFilename: "[name].chunk.[hash:8].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'cache-loader',
                    'vue-loader',
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'cache-loader',
                        options: {}
                    },
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader', options: {
                            plugins: [
                                // pxtorem({
                                //     rootValue: 16,
                                //     propList: ['*']
                                // }),
                            ],
                        },
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|gif|jpg|svg|jpeg)$/i,
                use:{
                    loader: "url-loader", //url-loader
                    options:{
                        limit: 102400,
                        name: 'images/[hash].[ext]',
                    }
                }
            },
            {
                test: /\.(svg)$/i,
                use:{
                    loader: "file-loader", //url-loader
                    options:{
                        name: 'images/[hash].[ext]',
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff)$/i,
                use:{
                    loader: "file-loader", //url-loader
                    options:{
                        name: 'fonts/[hash].[ext]',
                    }
                }
            },
            {
                resourceQuery: /blockType=docs/,
                loader: require.resolve('./src/blocks/docs-loader.js')
            }
        ]
    },
    resolve: {
        alias:{
            'vue': 'vue/dist/vue.js' //这个是默认构建打包时不支持template选项，只支持render选项
        },
        extensions: ['*', '.js', '.vue']
    },
    devServer: {
        inline: true,
        port: 8081,
        proxy:{
            '/api': {
                target: " https://www.easy-mock.com/mock/5bdff2bde4de0a208bdfa7d5/example",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }

            }
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            // hash: true,
            inject: true
        }) //这个是打包生成index.html
    ]
}