var webpack = require('webpack');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: ['@babel/polyfill', __dirname + '/src/app'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {}
        }],
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              'plugins': ['lodash']
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {    
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }

    ]
  },
  plugins: [
    // new CleanWebpackPlugin({   }),
    new LodashModuleReplacementPlugin({
      'caching': true
    }),
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html', })

  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};