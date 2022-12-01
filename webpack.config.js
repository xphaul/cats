const path = require(`path`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const alias = require(`./webpack.alias`);

const clientPort = 8080;
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

const config = {
  mode: `development`,
  target: `web`,
  entry: `./src/main.tsx`,
  output: {
    path: path.join(__dirname, `./build`),
    filename: `scripts/bundle.js`,
  },
  devServer: {
    port: clientPort,
    liveReload: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: `css-loader`,
            options: {
              modules: {
                exportLocalsConvention: `camelCase`,
                localIdentName: `[local]_[hash:base64:5]`,
              },
            },
          },
          `less-loader`,
        ],
      },
      {
        test: /\.[t|j]?s[x]?$/,
        loader: `babel-loader`,
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss|css$/i,
        use: [`style-loader`, `css-loader`, `sass-loader`],
      },
    ],
  },
  resolve: {
    alias,
    extensions: [`.ts`, `.js`, `.tsx`, `.css`, `.less`],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `styles/bundle.css`,
    }),
    new HtmlWebpackPlugin({
      template: `index.html`,
    }),
  ],
};

module.exports = config;
