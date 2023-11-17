const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractplugin = require('mini-css-extract-plugin');


let mode = 'development'; 
if (process.env.NODE_ENV === 'production') { 
  mode = 'production';
};

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    new MiniCssExtractplugin({
        filename: '[name].[contenthash].css',
    }),
];

module.exports = {
    mode,
    plugins,
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    devServer: {
        hot: true,
    },

    resolve: {
        extentions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {test: /\.(html)$/, use:['html-loader']},
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'postcss-loader',
                  'sass-loader',
                ],
              },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_moduls/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env", "@babel/preset-react"],
                        cacheDirectory: true,
                    }
                }
            },
        ],
    }
}