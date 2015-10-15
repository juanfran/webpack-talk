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
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  }
};
