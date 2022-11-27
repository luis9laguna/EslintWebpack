/* eslint-disable linebreak-style */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const rulesForHtml = {
  test: /\.html$/i,
  loader: 'html-loader',
};

const rulesForImg = {
  test: /\.(jpg|png)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'img/',
      publicPath: 'img/',
    },
  },
};

const rulesForJavaType = {
  test: /\.ts$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
};

const rulesForStyles = {
  test: /\.scss$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'sass-loader',
    },
  ],
};

const rules = [rulesForJavaType, rulesForStyles, rulesForHtml];

module.exports = {
  entry: './src/js/main.ts',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/pages/index.html' }),
    new CleanWebpackPlugin(),
  ],
  module: { rules },
};
