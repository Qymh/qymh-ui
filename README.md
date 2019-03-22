# qymh-ui 一个快速开发的移动端Vue Ui 组件库

`另外一个叫做VueQ的UI组件库,一个更完整的快速开发模式和可配置模式...正在开发中...`
`another UI library which called VueQ is being developed, more rapidly, coming soon `

## 如何下载

`coming soon`

## 文档地址

[文档](https://qymh.github.io/qymh-ui/#/)

## 项目分析

### 技术栈

  `webpack4.x` `vue` `typescript` `pug` `scss`
  
### 快速开发

  1.引入UI框架会减少自己去构建模块的工作量,我们提供了很多高度适配移动端且常用的模块.
  
  2.与其他UI框架的不同在于,我们在组件的`布局`上进行了创新,平常我们在项目时,会写html,再写css,html中存在大量复杂的命名,如果采用`BEM`命名准则,比如         `.a_b_c` `.a-b_c` 通过下划线链接命名,刚才的列子还只是测试,在真实的开发环境下长度是可怕的,所以我们在布局`layout`组件中,直接省去了元素命名,并将
  css书写成本降到最低
  
  3.与其他UI框架不同,我们提供了`config`去改变默认的UI布局.你的项目的组件大小可能和UI库提供的不一样,没关系,我们内置了基础的UI布局,但你可以通过           `qymhui.config.js`去修改我们的默认配置,打造一个属于自己项目的UI库
  
### 我们将要做的  

  1.移动端适配,目前仅支持[flexible.js](https://github.com/amfe/lib-flexible),且需要设置`<meta name="viewport" content="width=device-           width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no" />`,之后会适配更多的rem响应式css或者js库
  
  2.UI模块需要增加,目前的UI框架是从我们的项目中抽离出来的常用的模块,但不代表是大家常用的,模块量过少
  
  3.文档现在只有移动端版,将来会支持到PC端版本
  
  4.需要更多的小伙伴进行支持,项目目前从开发到测试到文档暂时只有一个人,精力可能会忙不过来
