const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ASSET_PATH = process.env.ASSET_PATH || "/public/";

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: ASSET_PATH,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    port: 3000
  },
  module: {
    rules: [
      {
        oneOf: [
          // {
          //   test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
          //   loader: require.resolve("url-loader"),
          //   options: {
          //     limit: 10000,
          //     name: "static/media/[name].[hash:8].[ext]"
          //   }
          // },
          {
            test: /\.jsx?$/,
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  { targets: { browsers: [">= 5% in KR"] } }
                ]
              ]
            },
            exclude: ["/node_modules"]
          },
          {
            test: /\.css$/,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 1
                }
              },
              {
                loader: require.resolve("postcss-loader"),
                options: {
                  ident: "postcss",
                  plugins: () => [
                    require("postcss-flexbugs-fixes"),
                    autoprefixer({
                      browsers: [">1%", "last 4 versions", "Firefox ESR"],
                      flexbox: "no-2009"
                    })
                  ]
                }
              }
            ]
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
            use: [
              "file-loader",
              {
                loader: "image-webpack-loader",
                options: {
                  name: "static/media/[name].[hash:8].[ext]",
                  mozjpeg: {
                    progressive: true,
                    quality: 65
                  },
                  // optipng.enabled: false will disable optipng
                  optipng: {
                    enabled: false
                  },
                  pngquant: {
                    quality: "65-90",
                    speed: 4
                  },
                  gifsicle: {
                    interlaced: false
                  },
                  // the webp option will enable WEBP
                  webp: {
                    quality: 75
                  }
                }
              }
            ]
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: require.resolve("file-loader"),
            options: {
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./index.html"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
