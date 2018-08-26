module.exports = {
  entry: __dirname + "/src/_assets",
  output: {
    path: __dirname + "/src/static/js",
    filename: "main.js"
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
  }
}
