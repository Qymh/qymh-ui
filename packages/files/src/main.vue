<template lang="pug">
  .q_files(:style="computedClient")
    input.q_files_input(
      type="file"
      :multiple="multiple?'multiple':''"
      :style="computedStyle")
    span.q_files_upload(
      :style="computedStyle") {{value}}
</template>

<script lang="ts">
  import {Vue,Component,Prop} from 'vue-property-decorator'
  import Proto from '../../proto/files/main.vue'
  import createStyle from '../../proto/files'
  @Component({})
  export default class QFiles extends Proto{
    // 是否允许多文件上传
    @Prop({default:true})
    private multiple:boolean

    // 按钮文字
    @Prop({default:'点击上传'})
    private value:string

    // 是否有边框
    @Prop({default:true})
    private hasBorder:boolean

    // 边框颜色
    @Prop({default:'#a1a1a1'})
    private borderColor:string

    // 获取高宽
    private get computedClient(){
      let style=createStyle(this)
      let resultStyle=Object.create(null)
      resultStyle.height=style.height!=='undefined%'?style.height:'0.8rem'
      resultStyle.width=style.width!=='undefined%'?style.width:'2rem'
      return resultStyle
    }

    // 获取计算后的样式
    private get computedStyle(){
      let style=createStyle(this)
      let selectedStyle=Object.create(null)
      let baseStyle={
        height:'0.8rem',
        width:'2rem'
      }
      if(this.hasBorder){
        selectedStyle.borderStyle='solid'
        selectedStyle.borderWidth='1px'
        selectedStyle.borderColor=this.borderColor
      }
      let resultStyle=Object.assign({},style,selectedStyle,baseStyle)
      return resultStyle
    }
  }
</script>

<style lang="scss" scoped>
  .q_files{
    position: relative;
    display: inline-block;
    &_input,&_upload{
      position: absolute;
      left:0;
      top:0;
      display: inline-block;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &_input{
      opacity: 0;
      z-index: 1;
    }
  }
</style>
