const path = require('path');

const webpack = require('webpack');

module.exports = {

  production: {
    context: path.resolve(__dirname),
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/public/'
    },
    module:{
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          include: path.resolve(__dirname, 'src'),
          query: {
            presets: ['es2015', 'stage-2', 'react']
          }
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      })
    ],
  },

  development: {
    context: path.resolve(__dirname),
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/public/'
    },
    module:{
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          include: path.resolve(__dirname, 'src'),
          query: {
            presets: ['es2015', 'stage-2', 'react']
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
      })
    ],
  }

};