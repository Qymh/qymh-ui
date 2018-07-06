<template lang="pug">
  .q-stepper
    .q-stepper-left(@click="leftClicked")
      i.q-icon.icon-move(:style="{color:value==min?'#d6d7dc':''}")
    form.q-stepper-form(action="" method="")
      input.q-stepper-form-input(
        :value="value"
        type="number"
        @keydown="keydown"
        @change="valueChange"
        @click="clickStrict"
        @input="input"
        :style="{color:color}")
    .q-stepper-right(@click="rightClicked")
      i.q-icon.icon-add(:style="{color:value==max&&max!==0?'#d6d7dc':''}")
</template>

<script lang="ts">
  import {Vue,Component,Prop,Emit} from 'vue-property-decorator'
  @Component({})
  export default class QStepper extends Vue{
    // 传入的值
    @Prop({default:''})
    private value:number

    // 传入的值的颜色
    @Prop({default:'#F65A44'})
    private color:string

    // 允许的最小值 
    @Prop({default:0})
    private min:number

    // 允许的最大值
    @Prop({default:''})
    private max:number

    // 输入框中保留的小数位数
    @Prop({default:4})
    private fix:number

    // 加强点击
    private clickStrict(e:any){
      e.target.focus()
    }

    private input(e:any){
      this.$emit('input',e.target.value)
    }

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
        if(later>this.max){
          later=this.max
        }
        if(later<this.min){
          later=this.min
        }
      }
      this.$emit('input',later)
      this.$emit('valueChange',later)
    }

    // 左侧减少点击
    private leftClicked(){
      let value=this.value
      if(value-1<this.min){
        value=0
      }else{
        value--
        value=Number.parseFloat(value.toFixed(this.fix))
      }
      this.$emit('input',value)
      this.$emit('leftClicked',value)
    }

    // 右侧增加点击
    private rightClicked(){
      let value=this.value
      if(value+1>this.max&&this.max){
        value=this.max
      }else{
        value++
        value=Number.parseFloat(value.toFixed(this.fix))
      }
      this.$emit('input',value)
      this.$emit('rightClicked',value)
    }
  }
</script>

<style lang="scss" scoped>
  .q-stepper{
    display: flex;
    border:1px solid #666;
    zoom: 1;
    &-left{
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      width: 0.6rem;
      display: inline-block;
      color: #333;
    }
    &-form{
      height: 0.6rem;
      line-height: normal;
      &-input{
        width: 1.4rem;
        height: 0.6rem;
        text-align: center;
        border-left: 1px solid #666;
        border-right: 1px solid #666;
        border-top: 0;
        border-bottom: 0;
        border-radius: 0;
        font-size: 12px;
        padding: 0;
      }
    }
    &-right{
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      width: 0.6rem;
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

