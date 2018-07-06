<template lang="pug">
  .notice
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=5)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="$notice 通知"
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
        //- 列子
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="提醒")
          q-row(lh=9 indent=2 mb=2) 提醒有三个参数<br>
            |第一个指提醒的文字<br>
            |第二个指提醒的位置<main>center|bottom</main>,默认为<main>bottom</main><br>
            |第三个指提醒的时长,单位ms,默认1500
          q-row(tag="section")
            q-row(@clicked="toast") 点击我触发提醒
            q-code(type="html").
              &ltq-row @clicked="toast"&gt点击我触发提醒&lt/q-row&gt

              methods:{
                toast(){
                  this.$notice.toast('触发提醒')
                }
              }
        //- 列子
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="加载")
          q-row(tag="section")
            q-row(@clicked="loading") 点击我触发加载,1秒后加载消失
            q-code(type="html").
              &ltq-row @clicked="loading"&gt点击我触发加载,1秒后加载消失&lt/q-row&gt

              methods:{
                loading(){
                  this.$notice.loading()
                  setTimeout(() => {
                    this.$notice.removeLoading()
                  }, 1000);
                }
              }
        //- 弹窗
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="弹窗")
          q-row(lh=9 indent=2 mb=2) 弹窗有三个参数<br>
            |第一个指弹窗的文字<br>
            |第二个指弹窗左侧的文字,默认为取消<br>
            |第三个指弹窗右侧的文字,默认为确认
          q-row(tag="section")
            q-row(@clicked="confirm") 点击我触发弹窗
            q-code(type="html").
              &ltq-row @clicked="confirm"&gt点击我触发弹窗&lt/q-row&gt
              methods:{
                confirm(){
                  this.$notice.confirm('我是一个弹窗').then(()=>{
                    this.$notice.toast('你点击了确定')
                  })
                }
              }
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExNotice extends Vue{
    private toast(){
      this.$notice.toast('触发提醒')
    }
    private loading(){  
      this.$notice.loading()
      setTimeout(() => {
        this.$notice.removeLoading()
      }, 1000);
    }
    private confirm(){
      this.$notice.confirm('我是一个弹窗').then(()=>{
        this.$notice.toast('你点击了确定')
      })
    }
  }
</script>