const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const wpMode = process.env.NODE_ENV || "development"; // Webpack Mode
const BUILD = wpMode == "development" ? true : false;

module.exports = {
  mode: wpMode,
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: BUILD ? "[name].js?v=[chunkhash]" : "[name].bundle.js",
  },
  module: {
    rules: [
      {test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {loader: "babel-loader"},
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      minify: {collapseWhitespace: false},
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
      }),
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8081,
    publicPath: "/",
    host: "0.0.0.0",
  },
};
