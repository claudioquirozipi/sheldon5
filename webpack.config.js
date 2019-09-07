const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');
require('dotenv').config({path: __dirname + '/.env'});

const FILE_ENV        = path.resolve(__dirname + '/.env');
const FOLDER_TEMPLATE = path.resolve(__dirname + '/template');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    target: 'web',
    node: {
        fs: 'empty'
    },
    devtool: 'source-map',
    devServer: {
        open: true,
        hot: true,
        host: 'localhost',
        proxy: {
            '/login_user': {
                target: 'http://167.71.248.71/login_user',
                pathRewrite: { '^/login_user': '' }
            },
            '/register_user': {
                target: 'http://167.71.248.71/register_user',
                pathRewrite: { '^/register_user': '' }
            }    
        }
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@app': path.resolve(__dirname, './src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'awesome-typescript-loader'
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'image'
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Api - development',
            template: FOLDER_TEMPLATE + '/index.html',
            hash: true
        }),
        new CleanWebpackPlugin(),
        new DotenvPlugin({
            sample: FILE_ENV,
            path: FILE_ENV
        })
    ]
};