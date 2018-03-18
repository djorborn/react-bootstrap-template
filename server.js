const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')
const compiler = webpack(config)
const path = require('path')
const express = require('express')
const app = express()

app.use(
  [webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })],
  [webpackHotMiddleware(compiler, {})]
)

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

app.listen(3000, () => {
  console.log('Server running @ http://localhost:3000');
})
