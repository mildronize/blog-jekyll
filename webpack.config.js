const webpack = require('webpack');

module.exports = {
  entry: {
    polyfill: 'babel-polyfill',
    index: __dirname + "/src/_assets/index.js",
    toc: __dirname + "/src/_assets/toc.js",
    search: __dirname + "/src/_assets/search.jsx",
  },
  output: {
    path: __dirname + "/src/public/js",
    libraryTarget: 'var',
    library: 'EntryPoint'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  optimization: {
    occurrenceOrder: true,
    minimize: true
  },
  plugins: [
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  
}
