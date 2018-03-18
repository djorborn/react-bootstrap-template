const path = require('path');
const webpack = require('webpack')
/*
* Note if using Express Server
* For now there is no way to have HMR and file extract on webpack 4
* So u have to wait till production build to extract css
*/

module.exports = {
  mode: 'development',
  entry: {
    /*style: './src/index.scss',*///For Build
    script: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      { // This extracts to a css file
        test: /\.scss$/,
        use: [
        /*  {// For dev-server or production build
            loader: 'file-loader',
            options: {
              name: 'style.css',
            },
          }, {
            loader: 'extract-loader',
            options: {
              publicPath: './',
            },
          }, */
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src'),
              ],
            },
          },
        ],
      }, {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  devServer: { // Base for webpack-dev-server
    contentBase: './dist',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
