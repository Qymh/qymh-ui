<template lang="pug">
  .scroll
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=1)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="scroll 滑动加载"
        :rightEmpty="true")
    q-row(h=12)
    q-row(pl=2 pr=2)
      //- demo演示
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tagfill"
          leftIconColor="deepskyblue"
          title="Demo演示"
          fontSize=16
          :borderBottom="true")
        q-row(fontSize=14 lh=9 indent=2 mb=2 dir="left" wrap="wrap")
          q-col 二次封装
          q-col(
            tag="a" href="https://github.com/mescroll/mescroll"
            target="_blank" color="deepskyblue" decoration="underline") mescroll.js
        q-row(fontSize=14 lh=9 indent=2 mb=2)
          |配置项和官方的配置项相同,请在<main>qymhui.config.js</main>里面输入自己的配置项,以下是默认的配置项
          |<main>down</main>和<main>up</main>分别代表了下拉刷新和上拉加载,第一个参数表当前vue的this值
        q-code(type="javascript").
          qscroll: {
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
        //- 列子
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="列子")
          q-row(tag="section")
            q-row(fontSize=14 lh=9 indent=2 mb=2 dir="left")
              q-col 这个列子需要到新的一个页面查看
              q-col(tag="a" color="deepskyblue" href="/scroll/example") 点击跳转
            q-row(fontSize=14 lh=9 indent=2 mb=2)
              |<main>template</main>
            q-code(type="html").
              &ltq-row tag="section" dir="top" row="100"&gt
                &ltq-row tag="header"&gt
                  &ltq-head-bar
                  :leftArrow="true"
                  centerText="header"
                  :rightEmpty="true"
                  bkColor="deepskyblue"
                  color="white"&gt&lt/q-head-bar&gt
                &lt/q-row&gt
                &ltq-scroll @refresh="refresh" @load="load" ref="myScroll"&gt
                  &ltq-row 
                    h=15
                    mb=4
                    bkColor="#BEE7E9"
                    align="center"
                    justify="center"
                    v-for="(item,index) in computedScrollArr"
                    :key="index"&gt
                    &ltq-row&gt{ { index+1 } } &lt/q-row&gt
                  &lt/q-row&gt
                &lt/q-scroll&gt
                &ltq-row flex=0 h=12 bkColor="deepskyblue" tag="footer" align="center" justify="center"&gt
                  &ltq-col color="white"&gtfooter&lt/q-col&gt
                &lt/q-row&gt
              &lt/q-row&gt
            q-row(fontSize=14 lh=9 indent=2 mb=2)
              |<main>javascript</main>
            q-code.
              data: {
                return {
                  scrollArr: [],
                  index: 0,
                  size: 10
                }
              },
              computed() {
                computedScrollArr() {
                  return this.scrollArr.slice(0, this.index * this.size)
                },
                totalPage() {
                  return this.scrollArr.length / this.size
                }
              },
              created() {
                let arr = new Array(50)
                arr.fill(1)
                this.scrollArr = arr
              },
              mounted() {
                let $app = document.querySelector('.app')
                $app.style.height = '100%'
                $app.style.width = '100%'
              }
              methods: {
                refresh() {
                  let myScroll = this.$refs.myScroll
                  myScroll.scrollObj.resetUpScroll()
                },
                load(page) {
                  let myScroll = this.$refs.myScroll
                  setTimeout(() => {
                    this.index = page.num
                    myScroll.success(10, this.totalPage)
                  }, 1000)
                }
              },
              beforeRouteLeave(to, from, next) {
                let $app = document.querySelector('.app')
                $app.style.height = 'auto'
                $app.style.width = 'auto'
                next()
              }
</template>
