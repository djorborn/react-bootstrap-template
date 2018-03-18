const path = require('path');

/*
* Note if using Express Server
* For now there is no way to have HMR and file extract on webpack 4
* So u have to wait till production build to extract css
*/

module.exports = {
  entry: {
    style: './src/index.scss',
    script: './src/index.js',
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      { // This extracts to a css file
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'style.css',
            },
          }, {
            loader: 'extract-loader',
            options: {
              publicPath: './',
            },
          }, {
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
};
