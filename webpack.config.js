const webpack = require('webpack');

module.exports = {
  entry: {
    index: __dirname + "/src/_assets/index.js",
    toc: __dirname + "/src/_assets/toc.js"
  },
  output: {
    path: __dirname + "/src/public/js",
    libraryTarget: 'var',
    library: 'EntryPoint'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
