const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  mode: 'production',
  target: 'web',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    library: 'avatio-avatar',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'index.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      })
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
