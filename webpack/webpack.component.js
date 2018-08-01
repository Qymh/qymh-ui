const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const config = require('./config')
const resolve = config.lib.resolve

module.exports = {
  mode: 'production',
  entry: {
    app: resolve('src/index.ts')
  },
  output: {
    path: resolve('component'),
    publicPath: '/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      // vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: true
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      // scss
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
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
      }
    ]
  },
  resolve: {
    // 自动补全扩展
    extensions: ['.js', '.vue', '.ts', '.tsx'],
    // 别名
    alias: {
      // vue
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // 每次打包清除掉dist的所有文件
    new CleanWebpackPlugin(['component'], {
      root: resolve('./'),
      allowExternal: true
    }),
    new ForkTsCheckerWebpackPlugin({
      vue: true,
      workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE
    }),
    // 提取css
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],
  optimization: {
    // 压缩
    minimizer: [
      // 树摇动
      new UglifyjsWebpackPlugin({
        cache: true,
        parallel: true
      }),
      // 压缩提取出来的css
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
}
