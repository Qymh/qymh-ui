<template lang="pug">
  .home
    //- 头部
    q-row(tag="header")
      q-title-bar(
        :borderBottom="true"
        title="QymhUI"
        titleColor="deepskyblue")
    //- 组件导航
    q-row(
      v-for="(infor,index) in homeInfor"
      :key="index"
      mt=2)
      q-head-bar(
        :showBorder="true"
        bkColor="deepskyblue"
        color="white"
        :leftEmpty="true"
        :centerText="infor.name"
        :rightArrow="true"
        @clicked="go(infor.href)")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  import home from '@/manifest/home.json'

  interface homeInfor{
    name:string
    href:string
  }

  @Component({})
  export default class ExHome extends Vue{
    // 首页信息
    private homeInfor:homeInfor[]=[]

    // 路由跳转
    private go(path:string):void{
      this.$router.push(path)
    }

    private created(){
      this.homeInfor=home.homeInfor
    }
  }
</script>
