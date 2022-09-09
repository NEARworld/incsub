const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      Mocks: path.resolve(__dirname, 'src/mocks'),
      Styles: path.resolve(__dirname, 'src/styles'),
      Pages: path.resolve(__dirname, 'src/pages'),
      Components: path.resolve(__dirname, 'src/components'),
      Buttons: path.resolve(__dirname, 'src/components/buttons'),
      Icons: path.resolve(__dirname, 'src/components/icons'),
    },
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
