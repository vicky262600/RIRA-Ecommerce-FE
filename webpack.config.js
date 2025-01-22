const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // If you are using CSS files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // For handling images
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development",
      ),
    }),
  ],
  resolve: {
    fallback: {
      process: require.resolve("process/browser"),
    },
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  mode: process.env.NODE_ENV || "development",
};
