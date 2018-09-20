const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const wpMode = process.env.NODE_ENV || "development"; // Webpack Mode

module.exports = {
  mode: wpMode,
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dis"),
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: [
          {loader: "babel-loader",
            options: {
              presets: ["es2015", "react"],
            },
          },
        ],
      }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      minify: {collapseWhitespace: true},
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
    port: 8888,
    publicPath: "/",
    host: "0.0.0.0",
  },
};
