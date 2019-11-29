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
        historyApiFallback: true,
        proxy: {
            '/api/find_user': {
                target: 'http://167.71.248.71/find_user',
                pathRewrite: { '^/api/find_user': '' }
            },
            '/api/login_user': {
                target: 'http://167.71.248.71/login_user',
                pathRewrite: { '^/api/login_user': '' }
            },
            '/api/register_user': {
                target: 'http://167.71.248.71/register_user',
                pathRewrite: { '^/api/register_user': '' }
            },
            '/api/logout': {
                target: 'http://167.71.248.71/logout',
                pathRewrite: { '^/api/logout': '' }
            },
            '/api/recover_password': {
                target: 'http://167.71.248.71/recover_password',
                pathRewrite: { '^/api/recover_password': '' }
            },
            '/api/update_password': {
                target: 'http://167.71.248.71/update_password',
                pathRewrite: { '^/api/update_password': '' }
            },
            '/api/upload_csv': {
                target: 'http://167.71.248.71/upload_csv',
                pathRewrite: { '^/api/upload_csv': '' }
            },
            '/api/find_contacts': {
                target: 'http://167.71.248.71/find_contacts',
                pathRewrite: { '^/api/find_contacts': '' }
            },
            '/api/campaign_create': {
                target: 'http://167.71.248.71/campaign_create',
                pathRewrite: { '^/api/campaign_create': '' }
            },
            '/api/suggest_contacts': {
                target: 'http://167.71.248.71/suggest_contacts',
                pathRewrite: { '^/api/suggest_contacts': '' }
            },
            '/api/update_contact': {
                target: 'http://167.71.248.71/update_contact',
                pathRewrite: { '^/api/update_contact': '' }
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