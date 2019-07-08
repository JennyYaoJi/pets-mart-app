import { resolve as _resolve } from 'path'; 
import HtmlWebpackPlugin from 'html-webpack-plugin';   
import CleanWebpackPlugin from "clean-webpack-plugin";

const config = {
    entry: ["babel-polyfill", './src/index.js'],
    output: {
        path: _resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', ".ts", ".tsx"]
    },
    devServer: {
        port: 4000,
        open: true,
        proxy: {
          "/api": "http://localhost:8080"
        }
    },
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new HtmlWebpackPlugin({
          template: "./public/index.html",
          favicon: "./public/favicon.ico"
        })
    ]
}

export default config;