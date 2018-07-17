const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackConfig = require('./webpack.config')
const config = require('./config').prod
const resolve = require('./config').lib.resolve

const prodWebpackConfig = merge(webpackConfig, {
  mode: 'production',
  devtool: config.devtool,
  optimization: {
    // 压缩
    minimizer: [
      // 树摇动
      new UglifyjsWebpackPlugin({
        cache: config.cache,
        parallel: config.parallel
      }),
      // 压缩提取出来的css
      new OptimizeCSSAssetsPlugin({})
    ],
    // 代码分离
    splitChunks: {
      cacheGroups: {
        // 公用
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendors'
        },
        //
        'async-vendors': {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          chunks: 'async',
          name: 'async-vendors'
        }
      }
    },
    // 缓存
    runtimeChunk: { name: 'runtime' }
  },
  plugins: [
    // 定义环境
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: '"production"'
        }
      }
    }),
    // 每次打包清除掉dist的所有文件
    new CleanWebpackPlugin(resolve('dist'), {
      root: resolve('./'),
      allowExternal: true
    }),
    // 提取css
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css'
    }),
    /** 根据模块相对路径生成模块hashId 用于打包后模块缓存 **/
    new webpack.HashedModuleIdsPlugin()
  ]
})

module.exports = prodWebpackConfig
