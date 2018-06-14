<template lang="pug">
  .titleBar(
    @click="clicked"
    :style="computedStyle")
    //- 左侧icon
    .titleBar_leftIcon(v-if="leftIcon")
      i(
        :class="leftIcon"
        :style="{color:leftIconColor}")
    //- 标题
    .titleBar_title(v-if="title")
      //- 标题文字
      .titleBar_title_text(
        :style="{color:titleColor}") {{title}}
      //- 二级标题
      .titleBar_title_details(
        :style="{color:detailsColor}") {{details}}
    //- 右侧描述
    .titleBar_rightText(
      v-if="rightText"
      @click="rightClicked")
      span {{rightText}}
    //- 右侧icon
    .titleBar_rightIcon(
      v-if="rightArrow"
      @click="rightClicked")
      i.q-icon.icon-right(:style="{color:rightArrowColor}")
</template>

<script lang="ts">
  import {Vue,Component,Prop,Emit} from 'vue-property-decorator'

  @Component({})
  export default class QTitleBar extends Vue{
    // 全局颜色
    @Prop({default:''})
    private bkColor:string

    // 是否有边距
    @Prop({default:true})
    private hasPadding:boolean

    // 是否有上边线
    @Prop ({default:false})
    private borderTop:boolean

    // 是否有下边线
    @Prop ({default:false})
    private borderBottom:boolean

    // border颜色
    @Prop({default:'#d6d7dc'})
    private borderColor:'string'

    // 左侧icon
    @Prop({default:''})
    private leftIcon:string

    // 左侧icon颜色
    @Prop({default:''})
    private leftIconColor:string

    // title
    @Prop({default:''})
    private title:string

    // title颜色
    @Prop({default:''})
    private titleColor:string

    // 二级title
    @Prop({default:''})
    private details:string

    // 二级title颜色
    @Prop({default:'#a1a1a1'})
    private detailsColor:string

    // 右侧描述
    @Prop({default:''})
    private rightText:string

    // 右侧箭头
    @Prop({default:false})
    private rightArrow:boolean

    // 右侧箭头颜色
    @Prop({default:'#a1a1a1'})
    private rightArrowColor:string

    // 计算样式
    private get computedStyle(){
      let style=Object.create(null)
      style.backgroundColor=this.bkColor
      if(this.borderTop){
        style.borderTopStyle='solid'
        style.borderTopWidth='1px'
        style.borderTopColor=this.borderColor
      }
      if(this.borderBottom){
        style.borderBottomStyle='solid'
        style.borderBottomWidth='1px'
        style.borderBottomColor=this.borderColor
      }
      if(this.hasPadding){
        style.padding='0rem 0.2rem'
      }
      return style
    }

    @Emit('clicked')
    private clicked(){}

    @Emit('rightClicked')
    private rightClicked(){}
  }
</script>

<style lang="scss" scoped>
  .titleBar{
    height:1.2rem;
    display: flex;
    align-items: center;
    &_leftIcon{
      display: flex;
      flex-grow: 0;
      margin-right: 0.2rem;
    }
    &_title{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
      &_details{
        font-size: 14px;
      }
    }
    &_rightText{
      display: flex;
      flex-grow: 0;
      font-size: 14px;
    }
    &_rightIcon{
      display: flex;
      flex-grow: 0;
    }
  }
</style>
