const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
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
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'

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
                target: "http://47.100.29.47:8580/",
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