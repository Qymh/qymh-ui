<template lang="pug">
  .titleBar(
    :style="computedStyle"
    @click="clicked")
    
    //- 左侧
    .left(
      v-if="!$slots.left&&(leftArrow||leftEmpty||leftText)"
      :style="{color:leftColor}"
      @click="leftClicked")
      //- 左箭头
      .arrow(v-if="leftArrow")
        i.q-icon.icon-back
      //- 左侧占空
      .empty(v-if="leftEmpty")
      //- 左侧文字
      .text(v-if="leftText")
        span {{leftText}}
    //- 自定义左侧
    slot(
      name="left"
      v-if="$slots.left")

    //- 中间
    .center(
      :style="{color:centerColor,justifyContent:centerDir}"
      v-if="!$slots.center&&(centerText||centerEmpty)"
      @click="centerClicked(centerText)")
      //- 中间文字
      .text(v-if="centerText")
        span {{centerText}}
      //- 中间占空
      .empty(v-if="centerEmpty")
    //- 自定义中间
    slot(
      name="center"
      v-if="$slots.center")

    //- 右侧
    .right(
      :style="{color:rightColor,justifyContent:rightDir}"
      v-if="!$slots.right&&(rightArrow||rightEmpty||rightText)"
      @click="rightClicked(rightText||$event)")
      //- 右键头
      .arrow(v-if="rightArrow")
        i.q-icon.icon-right
      //- 右侧占空
      .empty(v-if="rightEmpty")
      //- 右侧文字
      .text(v-if="rightText")
        span {{rightText}}
    //- 自定义右侧
    slot(
      name="right"
      v-if="$slots.right")

</template>

<script lang="ts">
  import {Vue,Component,Prop,Emit} from 'vue-property-decorator'

  @Component
  export default class QTitleBar extends Vue{
    // 全局字体颜色
    @Prop({default:''})
    private color:string

    // 背景颜色 
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

    // 是否有左侧占空
    @Prop({default:false})
    private leftEmpty:boolean

    // 是否展示左箭头
    @Prop({default:false})
    private leftArrow:boolean

    // 左侧文字
    @Prop({default:''})
    private leftText:string

    // 左侧文字颜色
    @Prop({default:''})
    private leftColor:string

    // 是否有中间占空
    @Prop({default:false})
    private centerEmpty:boolean
    
    // 中间文字
    @Prop({default:''})
    private centerText:string

    // 中间文字颜色
    @Prop({default:''})
    private centerColor:string

    // 中间文字方向
    @Prop({default:'center'})
    private centerDir:titleBar.dir

    // 是否有右侧占空
    @Prop({default:false})
    private rightEmpty:boolean

    // 右侧箭头
    @Prop({default:false})
    private rightArrow:boolean

    // 右侧文字
    @Prop({default:''})
    private rightText:string
    
    // 右侧文字方向
    @Prop({default:'center'})
    private rightDir:titleBar.dir

    // 右侧文字颜色
    @Prop({default:''})
    private rightColor:string

    // 计算样式
    private get computedStyle(){
      let style=Object.create(null)
      style.backgroundColor=this.bkColor
      style.color=this.color
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

    // 挂载样式
    private mounted(){
      if(this.$slots.left){
        let left:any=this.$slots.left[0].elm
        left.classList.add('slot_left')
      }
      if(this.$slots.center){
        let center:any=this.$slots.center[0].elm
        center.classList.add('slot_center')
      }
      if(this.$slots.right){
        let right:any=this.$slots.right[0].elm
        right.classList.add('slot_right')
      }
    }

    // 全局点击事件
    @Emit('clicked')
    public clicked(){}

    // 左侧点击事件
    @Emit('leftClicked')
    public leftClicked(text:number){}

    // 中间点击事件
    @Emit('centerClicked')
    public centerClicked(text:any){}

    // 右侧点击事件
    @Emit('rightClicked')
    public rightClicked(text:number){}
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
    justify-content: center;
    align-items: center;
    .text{
      font-size: 12px;
    }
  }
  .slot_left{
    flex-grow: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding:0 0.1rem;
  }
  .center{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slot_center{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding:0 0.1rem;
  }
  .right{
    width: 1rem;
    flex-grow: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .text{
      font-size: 12px;
    }
  }
  .slot_right{
    flex-grow: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding:0 0.1rem;
  }
</style>

