const webpack=require('webpack')
const path=require('path')
const {VueLoaderPlugin}=require('vue-loader')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const CleanWebpackPlugin=require('clean-webpack-plugin')
const config=require('./config')
const resolve=config.lib.resolve

module.exports={
  mode:'production',
  entry:{
    app:resolve('src/index.ts')
  },
  output:{
    path:resolve('component'),
    publicPath:'/',
    filename:'[name].js',
    libraryTarget: 'commonjs2'
  },
  module:{
    rules:[
      // vue
      {
        test:/\.vue$/,
        loader:'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: true
          }
        }
      },
      // pug
      {
        test:/\.pug$/,
        loader:'pug-plain-loader'
      },
      // ts
      {
        test:/\.tsx?$/,
        use:[
          {
            loader:'ts-loader',
            options:{
              appendTsSuffixTo:[/\.vue$/],
              transpileOnly:false
            }
          }
        ],
        exclude:/node_modules/
      },
      // css
      {
        test:/\.css$/,
        use:[
          'css-loader',
          'postcss-loader'
        ]
      },
      // scss
      {
        test:/\.scss$/,
        use:[
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      // 图片
      {
        test:/\.(ico|png|jpe?g|gif|svg)$/,
        loader:'url-loader',
        options:{
          limit:8192,
          name:'images/[name]_[hash:7].[ext]'
        }
      },
      // 字体
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader:'url-loader',
        options:{
          limit:8192,
          name:'fonts/[name]_[hash:7].[ext]'
        }
      }
    ]
  },
  resolve:{
    // 自动补全扩展
    extensions:['.js','.vue','.ts','.tsx'],
    // 别名
    alias:{
      // vue
      vue$:'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // 每次打包清除掉dist的所有文件
    new CleanWebpackPlugin(['component'],{
      root:resolve('./'),
      allowExternal:true,
    }),
  ],
  stats:{
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
}