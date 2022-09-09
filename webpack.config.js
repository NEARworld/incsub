const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  target: 'web',
  devServer: {
    static: ['./public'],
    open: true,
    hot: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: '/node_modules',
        use: 'babel-loader',
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
