<template lang="pug">
  div.titleBar(
    :style="computedStyle")
    .left(:style="{color:leftColor}")
      //- 左箭头
      .arrow(v-if="leftArrow")
        i.q-icon.icon-back
      //- 左侧占空
      .empty(v-if="!leftText&&!leftArrow")
      //- 左侧文字
      .text(v-if="leftText")
        span {{leftText}}
    .center(:style="{color:centerColor}")
      //- 中间文字
      .text(v-if="centerText")
        span {{centerText}}
      //- 中间占空
      .empty(v-if="!centerText")
    .right(:style="{color:rightColor}")
      //- 右键头
      .arrow(v-if="rightArrow")
        i.q-icon.icon-right
      //- 右侧占空
      empty(v-if="!rightText&&!rightArrow")
      //- 右侧文字
      .text(v-if="rightText")
        span {{rightText}}

</template>

<script lang="ts">
  import {Vue,Component,Prop} from 'vue-property-decorator'

  @Component
  export default class QTitleBar extends Vue{
    // 全局字体颜色
    @Prop({default:''})
    private color:string

    // 背景颜色 
    @Prop({default:''})
    private bkColor:string

    // 是否有border
    @Prop({default:false})
    private showBorder:boolean

    // border颜色
    @Prop({default:''})
    private borderColor:'string'

    // 是否展示左箭头
    @Prop({default:false})
    private leftArrow:boolean

    // 左侧文字
    @Prop({default:''})
    private leftText:string

    // 左侧文字颜色
    @Prop({default:''})
    private leftColor:string
    
    // 中间文字
    @Prop({default:''})
    private centerText:string

    // 中间文字颜色
    @Prop({default:''})
    private centerColor:string

    // 右侧箭头
    @Prop({default:false})
    private rightArrow:boolean

    // 右侧文字
    @Prop({default:''})
    private rightText:string

    // 右侧文字颜色
    @Prop({default:''})
    private rightColor:string

    // 计算样式
    private get computedStyle(){
      let style=Object.create(null)
      style.backgroundColor=this.bkColor
      style.color=this.color
      if(this.showBorder){
        style.borderBottomStyle='solid'
        style.borderBottomWidth='1px'
        if(this.borderColor){
          style.borderBottomColor=this.borderColor
        }else{
          style.borderBottomColor='#d6d7dc'
        }
      }
      return style
    }
  }
</script>

<style lang="scss" scoped>
  .titleBar{
    height:1.2rem;
    display: flex;
    flex-direction: row;
  }
  .left{
    width: 1rem;
    flex-grow: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .center{
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .right{
    width: 1rem;
    flex-grow: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

