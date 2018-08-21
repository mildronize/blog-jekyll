module.exports = {
  entry: __dirname + "/src/assets",
  output: {
    path: __dirname + "/src/public/js",
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
