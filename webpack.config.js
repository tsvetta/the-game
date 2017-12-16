const webpack = require('webpack');
const path = require('path');

const ENV_DEVELOPMENT = true;

module.exports = {
  entry: [
    './src/index.js', 
    './src/index.css',
  ],
  devServer: {
    publicPath: '/assets/',
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
    host: '0.0.0.0',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
  }
};
