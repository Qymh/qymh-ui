<template lang="pug">
  .code
    pre
      div.btn_code(
        @click="doShowCode"
        v-if="!showCode")
        i.q-icon.icon-triangledownfill.btn_code_icon
        span.btn_code_text 点击查看代码
      transition(
        name="code"
        enter-active-class="animated fadeIn")
        code(
          v-if="showCode"
          :class="type" v-html="computedCode")
</template>

<script lang="ts">
  import {Vue,Component,Prop} from 'vue-property-decorator'
  import HighLight from 'highlight.js'

  @Component({})
  export default class QCode extends Vue{
    @Prop({default:'javascript'})
    private type:string

    private showCode:boolean=false

    private computedCode:string=''

    private doShowCode(){
      this.showCode=true
    }

    private mounted(){
      this.$nextTick(()=>{
        let code=this.$slots.default[0].text
        let value=HighLight.highlightAuto(code,[this.type]).value
        this.computedCode=value
      })
    }
  }
</script>

<style lang="scss" scoped>
  .code{
    margin: 0.5rem 0;
  }
  .btn_code{
    height: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border:1px solid #d6d7dc;
    &_icon{
      line-height: normal;
      font-size: 14px;
      color: deepskyblue;
    }
    &_text{
      line-height: normal;
      margin-left: 0.2rem;
      font-size: 14px;
      color: #a1a1a1;
    }
  }
  .animated {
    animation-duration: 0.4s;
    animation-fill-mode: both;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .fadeIn {
    animation-name: fadeIn;
  }
</style>

