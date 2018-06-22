<template lang="pug">
  .q_text
    .q_text_value(:style="computedStyle")
      slot
</template>

<script lang="ts">
  import {Vue,Component,Prop} from 'vue-property-decorator'
  @Component({})
  export default class QText extends Vue{
    @Prop({default:0})
    private lines:number

    private get computedStyle(){
      let style=Object.create(null)
      if(this.lines){
        style.overflow='hidden'
        style.wordBreak='break-all'
        style.display='-webkit-box'
        style['-webkit-line-clamp']=this.lines
        style['-webkit-box-orient']='vertical'
      }
      return style
    }
  }
</script>

<style lang="scss" scoped>
  .q_text{
    &_value{
      height: 100%;
    }
  }
</style>

