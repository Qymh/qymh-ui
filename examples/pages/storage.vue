<template lang="pug">
  .storage
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=5)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="storage 存储"
        :rightEmpty="true")
    q-row(h=12)
    q-row(pl=2 pr=2)
      //- demo演示
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tagfill"
          leftIconColor="deepskyblue"
          title="存储"
          fontSize=16
          :borderBottom="true")
        //- 列子
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="$cookie")
          q-row(tag="section")
            q-row(h=12 align="center") cookie:{{cookieNow}}
            q-row(h=10 align="center" @clicked="setCookie") 点击设置cookie
            q-row(h=10 align="center" @clicked="deleteCookie") 点击删除cookie
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExStorage extends Vue{
    private cookieNow:string=''

    private setCookie(){
      this.$cookie.set('test','1')
      this.$notice.toast('设置成功')
      this.cookieNow=document.cookie
    }
    private deleteCookie(){
      this.$cookie.delete('test')
      this.$notice.toast('删除成功')
      this.cookieNow=document.cookie
    }
  }
</script>
