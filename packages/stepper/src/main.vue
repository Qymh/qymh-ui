<template lang="pug">
  .q_stepper
    .q_stepper_left(@click="leftClicked")
      i.q-icon.icon-move(:style="{color:computedValue==min?'#d6d7dc':''}")
    form.q_stepper_form(action="" method="")
      input.q_stepper_form_input(
        v-model="computedValue"
        type="number"
        @keydown="keydown($event)"
        @change="valueChange($event)"
        :style="{color:color}")
    .q_stepper_right(@click="rightClicked")
      i.q-icon.icon-add(:style="{color:computedValue==max&&max!==0?'#d6d7dc':''}")
</template>

<script lang="ts">
  import {Vue,Component,Prop,Emit} from 'vue-property-decorator'
  @Component({})
  export default class QStepper extends Vue{
    // 传入的值
    @Prop({default:0})
    private value:number

    // 传入的值的颜色
    @Prop({default:'orange'})
    private color:string

    // 允许的最小值 
    @Prop({default:0})
    private min:number

    // 允许的最大值
    @Prop({default:0})
    private max:number

    // 输入框中保留的小数位数
    @Prop({default:4})
    private fix:number

    // 避免双向绑定的value
    private computedValue:number=this.value

    // 值输入的检测
    private keydown(e:any){
      let keyCode=Number.parseInt(e.keyCode)
      let value=e.target.value.toString()
      // 小键盘0~9 数字键盘0~9 后退键 上下左右 小数点
      if(
        keyCode>=48&&keyCode<=57||
        keyCode>=96&&keyCode<=105||
        keyCode>=37&&keyCode<=40||
        keyCode===8||keyCode===190
      ){
        // 只能允许有一个小数点
        if(value.indexOf('.')>-1&&(keyCode===190||keyCode===110)){
          e.returnValue=false
        }else{
          e.returnValue=true
        }
      }else{
        e.returnValue=false
      }
    }

    // 值改变的检测
    private valueChange(e:any){
      let later:string|number=''
      let value=e.target.value
      if(isNaN(value)||!value){
        later=0
      }else{
        later=Number.parseFloat(Number.parseFloat(value).toFixed(this.fix))
      }
      this.computedValue=later
      this.$emit('valueChange',later)
    }

    // 左侧减少点击
    private leftClicked(){
      if(this.computedValue-1<this.min){
        this.computedValue=0
      }else{
        this.computedValue--
        this.computedValue=Number.parseFloat(this.computedValue.toFixed(this.fix))
      }
      this.$emit('leftClicked',this.computedValue)
    }

    // 右侧增加点击
    private rightClicked(){
      if(this.computedValue+1>this.max&&this.max!==0){
        this.computedValue=this.max
      }else{
        this.computedValue++
        this.computedValue=Number.parseFloat(this.computedValue.toFixed(this.fix))
      }
      this.$emit('rightClicked',this.computedValue)
    }
  }
</script>

<style lang="scss" scoped>
  .q_stepper{
    display: inline-block;
    border:1px solid #666;
    zoom: 1;
    &_left{
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      width: 0.7rem;
      display: inline-block;
      float: left;
      color: #333;
    }
    &_form{
      height: 0.6rem;
      float: left;
      line-height: normal;
      &_input{
        width: 1rem;
        height: 0.6rem;
        text-align: center;
        border-left: 1px solid #666;
        border-right: 1px solid #666;
        border-top: 0;
        border-bottom: 0;
        font-size: 12px;
      }
    }
    &_right{
      float: left;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      width: 0.7rem;
      display: inline-block;
      color: #333;
    }
    &:after{
      content:'';
      clear: both;
      display: block;
      visibility: hidden;
      height: 0;
    }
  }
</style>

