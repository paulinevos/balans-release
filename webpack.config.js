const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js)$/, use: 'babel-loader'},
      {test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, use: 'file-loader?name=fonts/[name].[ext]!static'},
      {test: /\.(css)$/, use: ['style-loader', 'css-loader']}
    ]
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}
