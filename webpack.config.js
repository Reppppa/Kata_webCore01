const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.jsx'],
    },
    output: {
        filename: '[name].js',
    },
    devtool: "source-map",
    devServer: {
        port: 4200,
        hot: isDev,
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader']
            },
            {
                test: /\.(s[ac]ss)$/,
                use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'file-loader?name=./fonts/[name].[ext]'
                    },
                ]
            },
            {
                test: /\.(svg|png|jpg|jpeg|webp)$/,
                use: [
                    {
                        loader: 'file-loader?name=./img/[name].[ext]'
                    },
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
        ]
    },
    plugins: [
        // Подключаем файл html, стили и скрипты встроятся автоматически
        new HtmlWebpackPlugin({
            title: 'Webpack 4 Starter',
            template: './index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false,
            }
        }),

        // Кладем стили в отдельный файлик
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),

        // Копируем картинки
        new CopyWebpackPlugin({
            patterns: [{
                from: './assets/img',
                to: 'img',
            }]
        }),
    ],
}