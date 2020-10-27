const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.join(__dirname, './client');
const DIST_DIR = path.join(__dirname, './public');

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  mode: 'development',
  output: {
    filename: 'app.bundle.js',
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
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/env'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
}

