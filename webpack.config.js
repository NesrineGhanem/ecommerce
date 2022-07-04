const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  mode: 'development',
  
  devServer: {
    static:{
      directory:path.join(__dirname,'build'),
    }, 
     devMiddleware:{
      writeToDisk:true,
     },
    
    port:1222,
    
  },

  module: {
    rules: [
        { test: /\.html$/, 
          use: [
            {loader:'html-loader',
            options:{
                minimize:true,
            }
         },
               ]
        },

        { 
            test: /\.css$/,
            use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader"  
                 ],
        },

        {},
    
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        filename:"index.html" ,
        template:'./src/index.html'
    }),

    new MiniCssExtractPlugin({
        filename: "css/style.css",
      }),

      new OptimizeCssAssetsPlugin({}),  
 ],

};