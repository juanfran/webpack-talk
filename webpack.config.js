var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./js/app.js",
    vendor: ["jquery", "lodash"]
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
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
      }
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js")
  ]
};
