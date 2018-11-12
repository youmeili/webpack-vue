const path = require("path");
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
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders:{
                        'docs':docsLoader
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader', options: {
                            plugins: [
                                pxtorem({
                                    rootValue: 50,
                                    propList: ['*']
                                }),
                            ],
                        },
                    }
                ],
                include: [ path.resolve(__dirname, "node_modules/vant")]
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, "src")],
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]

            },
            {
                test: /\.(png|gif|jpg|svg|jpeg)$/i,
                use:{
                    loader: "file-loader", //url-loader
                    options:{
                        name: 'images/[hash].[ext]' //hash可以改成name,则打包出来的图片就是本地的图片名称
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
            'vue': 'vue/dist/vue.js'
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
    ]
}