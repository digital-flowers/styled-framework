const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {HotModuleReplacementPlugin} = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'example', 'index.js'),
  output: {
    publicPath: "/",
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'example', 'index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    inline: true,
    hot: true,
    publicPath: "/",
    contentBase: path.join(__dirname, "dist"),
    port: 9090
  },
  devtool: "source-map"
};
