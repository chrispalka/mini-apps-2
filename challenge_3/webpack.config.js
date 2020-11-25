const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


const SRC_DIR = path.join(__dirname, 'client');
const DIST_DIR = path.join(__dirname, 'public');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
}