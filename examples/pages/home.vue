<template lang="pug">
  .home
    //- 头部
    q-row(tag="header" position="fixed" t=0 l=0 col=100 zIndex=5 bkColor="white" fontSize=16)
      q-row(h=12 borderBottom="1px solid #d6d7dc" dir="left" pl=2 pr=2)
        q-row(flex=1 row=100 align="center" )
          q-col(color="deepskyblue") QymhUI
        q-row(flex=1 justify="flex-end" row=100 align="center" )
          q-row(row=100 w=10 align="center" justify="center" tag="a" href="https://github.com/Qymh/qymh-ui" target="_blank")
            q-col.q-icon.icon-github(tag="i" color="#a1a1a1")
    q-row(h=12)
    q-row(pl=2 pr=2)
      //- 介绍
      q-row(tag="section")
        q-row(h=12 align="center" justify="center" fontSize=18) 基于
        q-row(h=20 align="center" justify="center" fontSize=20 dir="left")
          q-col(color="#4FC08D") Vue
          q-col +
          q-col(color="#294E80") TypeScript
        q-row(h=12 align="center" justify="center" fontSize=18) 一个快速开发的UI组件库
      //- 安装
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tag"
          leftIconColor="deepskyblue"
          title="安装")
        q-head-bar(
          :showBorder="true"
          bkColor="deepskyblue"
          color="white"
          :leftEmpty="true"
          centerText="coming soon"
          :rightArrow="true")
      //- 组件
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tag"
          leftIconColor="deepskyblue"
          title="组件")
        q-row(
          v-for="(item,index) in homeInfor.components"
          :key="index"
          mb=2
          fontSize=14)
          q-head-bar(
            :showBorder="true"
            bkColor="deepskyblue"
            color="white"
            :leftEmpty="true"
            :centerText="item.name"
            :rightArrow="true"
            @clicked="go(item.href)")
      //- 二次封装插件 
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tag"
          leftIconColor="deepskyblue"
          title="二次封装的组件")
        q-row(
          v-for="(item,index) in homeInfor.plugins"
          :key="index"
          mb=2
          fontSize=14)
          q-head-bar(
            :showBorder="true"
            bkColor="deepskyblue"
            color="white"
            :leftEmpty="true"
            :centerText="item.name"
            :rightArrow="true"
            @clicked="go(item.href)")
      //- widget
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tag"
          leftIconColor="deepskyblue"
          title="Widget")
        q-row(
          v-for="(item,index) in homeInfor.widget"
          :key="index"
          mb=2
          fontSize=14)
          q-head-bar(
            :showBorder="true"
            bkColor="deepskyblue"
            color="white"
            :leftEmpty="true"
            :centerText="item.name"
            :rightArrow="true"
            @clicked="go(item.href)")
      //- diy
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tag"
          leftIconColor="deepskyblue"
          title="Diy")
        q-row(
          v-for="(item,index) in homeInfor.diy"
          :key="index"
          mb=2
          fontSize=14)
          q-head-bar(
            :showBorder="true"
            bkColor="deepskyblue"
            color="white"
            :leftEmpty="true"
            :centerText="item.name"
            :rightArrow="true"
            @clicked="go(item.href)")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import home from '@/manifest/home.json'

@Component({})
export default class ExHome extends Vue {
  // 首页信息
  private homeInfor: any[] = []

  // 路由跳转
  private go(path: string): void {
    this.$router.push(path)
  }

  private created() {
    this.homeInfor = home.homeInfor
  }
}
</script>
