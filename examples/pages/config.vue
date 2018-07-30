<template lang="pug">
  .config
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=1)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="qymhui.config.js"
        :rightEmpty="true")
    q-row(h=12)
    q-row(pl=2 pr=2)
      //- demo演示
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tagfill"
          leftIconColor="deepskyblue"
          title="思路"
          fontSize=16
          :borderBottom="true")
        q-row(fontSize=14 lh=9 mb=2)
          |与其他UI框架不同,我们提供了config去改变默认的UI布局.
          |你的项目的组件大小可能和UI库提供的不一样,没关系,
          |我们内置了基础的UI布局,但你可以通过<main>qymhui.config.js</main>去修改我们的默认配置,
          |打造一个属于自己项目的UI库
        q-cell(
          leftIcon="q-icon icon-edit"
          leftIconColor="deepskyblue"
          title="注意")
        q-row(fontSize=14 lh=9 mb=2)
          |在我们提供的默认配置中使用了<main>es6</main>的模块语法,
          |而在你写入的<main>qymhui.config.js</main>中,只能使用<main>commonjs</main>引入模块.
          |原因是因为我们需要在<main>webpack</main>中获取,所以没办法,以下是<main>es6</main>模块的默认配置
        q-code.
          // q-cell
          export const qcell = {
            bkColor: '',
            hasPadding: true,
            borderTop: false,
            borderBottom: false,
            borderColor: '#d6d7dc',
            leftIcon: '',
            leftIconColor: '',
            leftText: '',
            leftTextColor: '#333',
            leftWidth: '',
            title: '',
            titleColor: '',
            rightText: '',
            rightTextColor: '',
            rightArrow: false,
            rightArrowColor: '#a1a1a1',
            baseHeight: 1.2
          }

          // q-head-bar
          export const qheadbar = {
            color: '',
            bkColor: '',
            bothWidth: true,
            hasPadding: true,
            padding: 0.2,
            borderTop: false,
            borderBottom: false,
            borderColor: '#d6d7dc',
            leftEmpty: false,
            leftArrow: false,
            centerEmpty: false,
            centerText: '',
            centerTextColor: '',
            rightEmpty: false,
            rightArrow: false,
            rightText: '',
            rightTextColor: '',
            baseHeight: 1.2
          }

          // q-search-bar
          export const qsearchbar = {
            color: '',
            bkColor: '',
            hasPadding: true,
            padding: 0.2,
            bothWidth: 1,
            borderTop: false,
            borderBottom: false,
            borderColor: '#d6d7dc',
            value: '',
            leftArrow: false,
            leftText: '',
            leftTextColor: '',
            searchBkColor: 'white',
            placeholder: '请输入...',
            clearable: false,
            rightText: '搜索',
            rightTextColor: '',
            baseHeight: 1.2
          }

          // q-tabbar
          export const qtabbar = {
            bkColor: '',
            borderTop: '',
            borderBottom: '',
            borderColor: '#d6d7dc',
            baseHeight: 1.2
          }

          // q-text
          export const qtext = {
            lines: 0
          }

          // q-tag
          export const qtag = {
            bkColor: '#d6d7dc',
            color: 'white',
            fontSize: 12,
            value: '',
            hasBorder: false,
            hasRadius: true,
            borderColor: '#d6d7dc',
            active: false,
            activeBkColor: '',
            activeColor: 'white'
          }

          // q-input
          export const qinput = {
            hasBorder: false,
            borderBottom: true,
            borderColor: '#d6d7dc',
            bkColor: '',
            color: '',
            type: 'text',
            fix: 4,
            placeholder: ''
          }

          // q-radio
          export const qradio = {
            type: 'rect',
            hasBorder: true,
            borderColor: '#a1a1a1',
            activeColor: '',
            activeBkColor: '',
            activeBorderColor: 'transparent'
          }

          // q-stepper
          export const qstepper = {
            color: '#F65A44',
            min: 0,
            max: '',
            fix: 4
          }

          // q-overlay
          export const qoverlay = {
            position: '',
            opacity: 0.3,
            bkColor: 'white',
            minHeight: 10,
            maxHeight: 13,
            show: false
          }

          // q-files
          export const qfiles = {
            multiple: true,
            maxCount: 3,
            maxSize: 4,
            value: '点击上传',
            hasBorder: true,
            borderColor: '#a1a1a1'
          }

          // q-image
          export const qimage = {
            preLoad: 1.3,
            loading: '',
            attemp: 1,
            bkSize: 'contain',
            bkRepeat: 'no-repeat',
            bkPosition: '50%'
          }

          // q-scroll
          export const qscroll = {
            // 下拉刷新
            down: (vm) => {
              return {
                // 是否启用
                use: true,
                // 是否初次调用
                auto: false,
                // 回调
                callback(mescroll) {
                  vm.$emit('refresh')
                }
              }
            },
            // 上拉加载
            up: (vm) => {
              return {
                // 是否启用
                use: true,
                // 是否初次调用
                auto: true,
                // 是否启用滚动条
                scrollbar: {
                  use: true
                },
                // 回调
                callback: (page, mescroll) => {
                  vm.$emit('load', page)
                },
                // 无数据时的提示
                htmlNodata: '&ltp class="upwarp-nodata"&gt-- 没有更多的数据 --&lt/p&gt'
              }
            }
          }

          // $notice
          export const $notice = {
            // 提醒
            toast: {
              position: 'bottom',
              timeout: 1500
            },
            // 弹窗
            confirm: {
              text: '请输入文字',
              btnLeft: '确定',
              btnRight: '取消'
            }
          }

          // $cookie
          export const $cookie = {
            // 过期时间
            enpireDays: 7
          }

          // $axios
          export const $axios = {
            // 是否输入日志
            log: true,
            // 超时
            timeout: 20000,
            // 请求拦截器
            requestFn: (config) => {
              return config
            },
            // 响应拦截器
            responseFn: (response) => {
              return response
            }
          }
        q-row(fontSize=14 lh=9 mb=2)
          |以下是<main>commonjs</main>语法下新增的配置
        q-code.
          const SERVERCONFIG = require('./lib/appconfig').SERVERCONFIG
          const isDev = process.env.NODE_ENV === 'development'

          module.exports={
            // q-image
            qimage: {
              preLoad: 1.3,
              loading: '',
              error: './images/default.png',
              attemp: 1
            },
            // $axios
            $axios: {
              domain: SERVERCONFIG.domain,
              timeout: SERVERCONFIG.timeout,
              requestFn: (config) => {
                let { data } = config
                console.log(`serverApi:${config.baseURL}${config.url}`)
                if (Object.keys(data).length > 0) {
                  console.log(`request data ${JSON.stringify(data)}`)
                }
                return config
              },
              responseFn: (response) => {
                let { status, data } = response
                if (status >= 200 && status <= 300) {
                  console.log('---response data ---')
                  console.log(data)
                } else {
                  console.log('--- error ---')
                  console.log(data)
                  let vm = new Vue()
                  vm.$notice.toast(status === 0 ? '网络链接异常' : `网络异常,错误代码:${status}`)
                }
                return response
              }
            }
          }
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component({})
  export default class ExConfig extends Vue {

  }
</script>