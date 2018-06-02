<template lang="pug">
  .code
    pre
      code(:class="type" v-html="computedCode")
</template>

<script lang="ts">
  import {Vue,Component,Prop} from 'vue-property-decorator'
  import HighLight from 'highlight.js'

  @Component({})
  export default class QCode extends Vue{
    @Prop({default:'javascript'})
    private type:string

    private computedCode:string=''

    private mounted(){
      this.$nextTick(()=>{
        let code=this.$slots.default[0].text
        let value=HighLight.highlightAuto(code,[this.type]).value
        this.computedCode=value
      })
    }
  }
</script>
