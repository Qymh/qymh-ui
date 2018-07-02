<template lang="pug">
  .q-cell(
    @click="clicked"
    :style="computedStyle")
    .q-cell-left(:style="{width:leftWidth?leftWidth+'rem':'auto'}")
      //- 左侧icon
      .q-cell-left-icon(v-if="leftIcon")
        i(
          :class="leftIcon"
          :style="{color:leftIconColor}")
      //- 左侧文字
      .q-cell-left-text(v-if="leftText")
        span(:style="{color:leftColor}") {{leftText}}
    //- 标题
    .q-cell-title(v-if="title&&!$slots.title")
      //- 标题文字
      .q-cell-title-text(
        :style="{color:titleColor}") {{title}}
    //- 自定义标题
    slot(name="title" v-if="$slots.title")
    //- 右侧描述
    .q-cell-rightText(
      v-if="rightText"
      @click="rightClicked")
      span {{rightText}}
    //- 右侧icon
    .q-cell-rightIcon(
      v-if="rightArrow"
      @click="rightClicked")
      i.q-icon.icon-right(:style="{color:rightArrowColor}")
</template>

<script lang="ts">
  import {Vue,Component,Prop,Emit} from 'vue-property-decorator'

  @Component({})
  export default class QCell extends Vue{
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

    // 左侧文字
    @Prop({default:''})
    private leftText:string

    // 左侧文字颜色
    @Prop({default:'#333'})
    private leftColor:string

    // 左侧宽度
    @Prop({default:''})
    private leftWidth:string

    // title
    @Prop({default:''})
    private title:string

    // title颜色
    @Prop({default:''})
    private titleColor:string

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

    private mounted() {
      if(this.$slots.title){
        let title:any=this.$slots.title[0].elm
        title.classList.add('q-cell-title')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .q-cell{
    height:1.2rem;
    display: flex;
    align-items: center;
    &-left{
      &-icon{
        display: flex;
        flex-grow: 0;
        margin-right: 0.2rem;
      }
    }
    &-title{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
    }
    &-rightText{
      display: flex;
      flex-grow: 0;
      font-size: 14px;
    }
    &-rightIcon{
      display: flex;
      flex-grow: 0;
    }
  }
</style>