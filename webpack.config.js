const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, "."),
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/react",
            {
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          ],
        },
      },
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.join(__dirname, "src", "index.html"),
  //   }),
  // ],
};
