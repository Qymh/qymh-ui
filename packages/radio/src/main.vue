<template lang="pug">
  .q_radio
    //- 方形选择器
    .q_radio_rect(
      v-if="type==='rect'"
      @click="change(!active)"
      :style="computedStyle")
      span(
        v-show="active"
        :style="{color:active?activeColor:''}") ✔
    //- 圆形选择器
    .q_radio_circle(
      v-if="type==='circle'"
      @click="change(!active)"
      :style="computedStyle")
      span.q_radio_circle_value(
        v-show="active") ✔
</template>

<script lang="ts">
  import {Vue,Component,Prop,Emit} from 'vue-property-decorator'
  @Component({})
  export default class QRadio extends Vue{
    
    // 激活状态
    private active:boolean=false

    // 类型
    @Prop({default:'rect'})
    private type:radio.type

    // 是否有边框
    @Prop({default:true})
    private hasBorder:boolean

    // 边框颜色
    @Prop({default:'orange'})
    private borderColor:string

    // 激活下的颜色
    @Prop({default:'orange'})
    private activeColor:string

    // 激活下的背景颜色
    @Prop({default:'orange'})
    private activeBkColor:string

    private get computedStyle(){
      let style=Object.create(null)
      if(this.hasBorder){
        style.borderStyle='solid'
        style.borderWidth='1px'
        style.borderColor=this.borderColor
      }
      if(this.active&&this.activeBkColor&&this.type==='circle'){
        style.backgroundColor=this.activeBkColor
      }
      return style
    }

    @Emit()
    private change(active:boolean){
      this.active=!this.active
    }
  }
</script>

<style lang="scss" scoped>
  .q_radio{
    display: inline-block;
    vertical-align: text-top;
  }
  .q_radio_rect{
    height: 0.5rem;
    width: 0.5rem;
    line-height: 0.5rem;
    border-radius: 0.05rem;
    display: inline-block;
    font-size: 10px;
    text-align: center;
  }
  .q_radio_circle{
    height: 0.5rem;
    width: 0.5rem;
    line-height: 0.5rem;
    border-radius: 50%;
    display: inline-block;
    font-size: 10px;
    text-align: center;
    &_value{
      color: #fff;
    }
  }
</style>

