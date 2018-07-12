<template lang="pug">
  .scroll
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=5)
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
        q-code(type="javascript").
          export const QSCROLLCONFIG={
            down(vm){
              return{
                use:true,
                auto:false,
                callback(mescroll){
                  vm.$emit('refresh')
                }
              }
            },
            up(vm){
              return{
                use:true,
                auto:true,
                scrollbar:{
                  use:true
                },
                callback(page,mescroll){
                  vm.$emit('load',page)
                },
                htmlNodata:'&ltp class="upwarp-nodata"&gt-- 没有更多的数据 --&lt/p&gt'
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
</template>
