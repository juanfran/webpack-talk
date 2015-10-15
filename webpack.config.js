module.exports = {
  entry: {
    app: "./js/app.js"
  },
  output: {
    path: "dist",
    filename: "bundle.js",
    publicPath: "/statics/"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
