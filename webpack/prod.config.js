const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../source/js'),
  dist: path.join(__dirname, '../public')
}

module.exports = {
  devtool: 'source-map',
  entry: [PATHS.src],
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      material: 'material-ui/lib'
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new CopyPlugin([
      { from: './source/index.html', to: 'index.html' }
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1!postcss-loader')
      }
    ]
  },
  postcss: [
    require('postcss-cssnext')
  ]
};
