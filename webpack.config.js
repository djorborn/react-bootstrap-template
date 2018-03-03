const path = require('path');

module.exports = {
  entry: {
    style: './src/index.scss',
    script: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'style.css'
            }
          }, {
            loader: 'extract-loader',
            options: {
              publicPath: './'
            }
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader',
            options: {
              "includePaths": [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src')
              ]
            }
          }
        ]
      }, {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  }
};
