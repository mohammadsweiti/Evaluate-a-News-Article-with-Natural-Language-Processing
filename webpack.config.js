const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack= require("webpack"),
    path = require("path");

module.exports = {
    entry:"./src/client/index.js",
    mode:"development",
    module:{
        rules:[
            {
                test:"/\.js$/",
                exclude:/node_modeules/,
                loader:"babel-loader"
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template:"./src/client/view/index.html",
        filename:"./index.html"
    }
       
    )],
}