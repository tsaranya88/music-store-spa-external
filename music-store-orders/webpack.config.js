const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const entryPoints = {
  "ms-order-list": "./src/app-entry-points/order-list.ts"
};

module.exports = (env) => {
  return {
    entry: entryPoints,
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./static/index.html",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            context: "node_modules/@webcomponents/webcomponentsjs",
            from: "**/*.js",
            to: "webcomponents",
          },
          {
            from: "./src/assets",
            to: "assets",
          },
        ],
      }),
    ],
    output: {
      filename: "[name]__[contenthash].js",
      path: path.resolve(__dirname, "dist"),
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //   },
    //   runtimeChunk: 'single',
    // },
    module: {
      rules: [
        {
          test: /\.js$|\.ts$|\.s(c|a)ss$/,
          loader: "babel-loader",
          exclude: /node_modules\/(?!(lit-element|lit-html)\/).*/,
        },
        {
          test: /\.tsx?$/,
          loader: ["babel-loader", "ts-loader"],
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, "src"),
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.css|\.s(c|a)ss$/,
          use: [
            {
              loader: "lit-scss-loader",
              options: {
                minify: true, // defaults to false
              },
            },
            "extract-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|gif|jpg|cur)$/i,
          loader: "url-loader",
          options: { limit: 8192 },
        },
        {
          test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
          loader: "url-loader",
          options: { limit: 10000, mimetype: "application/font-woff2" },
        },
        {
          test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
          loader: "url-loader",
          options: { limit: 10000, mimetype: "application/font-woff" },
        },
        {
          test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
          loader: "file-loader",
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@app": path.resolve(__dirname, "src/app"),
        "@services": path.resolve(__dirname, "src/services"),
        "@entry": path.resolve(__dirname, "src/app-entry-points")
      },
    },
  };
};
