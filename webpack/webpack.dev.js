const webpack=require('webpack')
const merge=require('webpack-merge')
const FriendlyErrorsWebpackPlugin=require('friendly-errors-webpack-plugin')
const webpackConfig=require('./webpack.config')
const config=require('./config').dev
const getIp=require('./config').lib.getLocalIp
const generateMessages=require('./config').lib.generateMessages
const env=process.env.NODE_ENV
const messages=generateMessages()

const devWebpackConfig=merge(webpackConfig,{
  mode:env,
  devtool:config.devtool,

  devServer:{
    publicPath:config.publicPath,
    contentBase:config.contentBase,
    progress:config.progress,
    quiet:config.quiet,
    host:config.host,
    port:config.port,
    clientLogLevel:config.clientLogLevel,
    historyApiFallback:config.historyApiFallback,
    open:config.open,
    inline:config.inline,
    overlay:config.overlay,
    hot:config.hot,
    compress:config.compress
  },

  plugins:[
    // 定义环境
    new webpack.DefinePlugin({
      process:{
        env:{
          NODE_ENV:'"development"'
        }
      }
    }),
    // 启用热更新
    new webpack.HotModuleReplacementPlugin(),
    // 编译出错则跳过
    new webpack.NoEmitOnErrorsPlugin(),
    // 友好的错误提醒
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo:{
        notes:[messages]
      }
    })
  ]
})

module.exports=devWebpackConfig