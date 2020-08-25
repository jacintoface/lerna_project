const path = require("path");
const opn = require("opn");
const webpack = require("webpack");
const yargs = require("yargs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { cssLoaders } = require('./utils.js')

let config = {
    entry: {
        app: path.join(__dirname, "../src/index.js"),
    },
    mode: "development",
    devServer: {
        port: 8081,
        host: "0.0.0.0",
        inline: true,
        disableHostCheck: true,
        hot: true,
        overlay: {
            errors: true,
            warnings: false,
        },
        after() {
            opn("http://localhost:8081");
        },
        open: false,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
                include: path.join(__dirname, "../src"),
            },
            {
                test: /\.(css)$/,
                use: 'css-loader'
            },
           
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
};

module.exports = config;
