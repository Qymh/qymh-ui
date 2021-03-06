const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config')
const resolve = config.lib.resolve
const isDev = process.env.NODE_ENV === 'development'
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const findConfig = config.lib.findConfig
const entry = {
  app: resolve('examples/app.ts')
}
const configPath = findConfig(entry.app)
let userConfig = require(configPath)
config.lib.toJSON(userConfig)

const baseConfig ={
  entry,
  output: {
    path: resolve(config.packPath),
    publicPath: isDev ? config.dev.publicPath : config.prod.publicPath,
    filename: isDev ? '[name].js' : 'js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      // vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: isDev
          }
        }
      },
      // pug
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      // ts
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            }
          }
        ],
        exclude: /node_modules/
      },
      // css
      {
        test: /\.css$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      // scss
      {
        test: /\.scss$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      // 图片
      {
        test: /\.(ico|png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'images/[name]_[hash:7].[ext]'
        }
      },
      // 字体
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'fonts/[name]_[hash:7].[ext]'
        }
      },
      // 视频
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'media/[name]_[hash:7].[ext]'
        }
      }
    ]
  },
  resolve: {
    // 自动补全扩展
    extensions: ['.js', '.vue', '.ts', '.tsx'],
    // 别名
    alias: {
      // vue
      vue$: 'vue/dist/vue.esm.js',
      // examples
      '@': resolve('examples')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('examples/index.html')
    }),
    new VueLoaderPlugin(),
    new ForkTsCheckerWebpackPlugin({
      vue: true,
      workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE
    }),
    // 定义环境
    new webpack.DefinePlugin({
      process: {
        env: {
          UI_ENV: JSON.stringify(userConfig)
        }
      }
    })
  ],
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
}

module.exports = baseConfig