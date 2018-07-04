<template lang="pug">
  .q-headBar(
    :style="computedStyle"
    @click="clicked($event)")
    
    //- 左侧
    .q-headBar-left(
      v-if="!$slots.left&&(leftArrow||leftEmpty||leftText)"
      :style="{color:leftTextColor,width:bothWidth+'rem'}"
      @click="leftClicked($event,leftText)")
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
    .q-headBar-center(
      :style="{color:centerTextColor}"
      v-if="!$slots.center&&(centerText||centerEmpty)"
      @click="centerClicked($event,centerText)")
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
    .q-headBar-right(
      :style="{color:rightTextColor,width:bothWidth+'rem'}"
      v-if="!$slots.right&&(rightArrow||rightEmpty||rightText)"
      @click="rightClicked($event,rightText)")
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
  import Proto from '../../proto/bar/main.vue'
  import createStyle from '../../proto/bar'

  @Component({})
  export default class QHeadBar extends Proto{
    // 全局字体颜色
    @Prop({default:''})
    private color:string

    // 背景颜色 
    @Prop({default:''})
    private bkColor:string

    // 两边宽度
    @Prop({default:1})
    private bothWidth:string|number

    // 是否有padding
    @Prop({default:true})
    private hasPadding:boolean

    // padding值
    @Prop({default:0.2})
    private padding:number

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
    private leftTextColor:string

    // 是否有中间占空
    @Prop({default:false})
    private centerEmpty:boolean
    
    // 中间文字
    @Prop({default:''})
    private centerText:string

    // 中间文字颜色
    @Prop({default:''})
    private centerTextColor:string

    // 是否有右侧占空
    @Prop({default:false})
    private rightEmpty:boolean

    // 右侧箭头
    @Prop({default:false})
    private rightArrow:boolean

    // 右侧文字
    @Prop({default:''})
    private rightText:string

    // 右侧文字颜色
    @Prop({default:''})
    private rightTextColor:string

    // 计算样式
    private get computedStyle(){
      let style=createStyle(this)
      let selectableStyle=Object.create(null)
      selectableStyle.backgroundColor=this.bkColor
      selectableStyle.color=this.color
      if(this.borderTop){
        selectableStyle.borderTopStyle='solid'
        selectableStyle.borderTopWidth='1px'
        selectableStyle.borderTopColor=this.borderColor
      }
      if(this.borderBottom){
        selectableStyle.borderBottomStyle='solid'
        selectableStyle.borderBottomWidth='1px'
        selectableStyle.borderBottomColor=this.borderColor
      }
      if(this.hasPadding){
        selectableStyle.paddingLeft=this.padding+'rem'
        selectableStyle.paddingRight=this.padding+'rem'
      }
      return Object.assign({},style,selectableStyle)
    }

    // 挂载样式
    private mounted(){
      if(this.$slots.left){
        let left:any=this.$slots.left[0].elm
        left.classList.add('slot-left')
        left.addEventListener('click',this.leftClicked)
      }
      if(this.$slots.center){
        let center:any=this.$slots.center[0].elm
        center.classList.add('slot-center')
        center.addEventListener('click',this.centerClicked)
      }
      if(this.$slots.right){
        let right:any=this.$slots.right[0].elm
        right.classList.add('slot-right')
        right.addEventListener('click',this.rightClicked)
      }
    }

    // 全局点击事件
    @Emit('clicked')
    public clicked(){}

    // 左侧点击事件
    @Emit('leftClicked')
    public leftClicked(){
      if(this.leftArrow){
        this.$router.go(-1)
      }
    }

    // 中间点击事件
    @Emit('centerClicked')
    public centerClicked(){}

    // 右侧点击事件
    @Emit('rightClicked')
    public rightClicked(){}
  } 
</script>

<style lang="scss" scoped>
  .q-headBar{
    height:1.2rem;
    display: flex;
    flex-direction: row;
    &-left{
      flex-grow: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .text,.arrow>i{
        font-size: 13px;
      }
    }
    &-center{
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-right{
      flex-grow: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .text,.arrow>i{
        font-size: 13px;
      }
    }
  }
  .slot-left{
    flex-grow: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding:0 0.1rem;
  }
  .slot-center{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding:0 0.1rem;
  }
  .slot-right{
    flex-grow: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    padding:0 0.1rem;
  }
</style>
