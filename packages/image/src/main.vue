<template lang="pug">
  .q-image(
    v-lazy:background-image="src"
    :style="computedStyle")
</template>

<script lang="ts">
  import {Vue,Component,Prop} from 'vue-property-decorator'
  import lazyLoad from 'vue-lazyload'
  import Proto from '../../proto/image/main.vue'
  import createStyle from '../../proto/image'
  import {image} from '../../../src/qymhui.config'

  Vue.use(lazyLoad,image.lazyLoad)
  @Component({})
  export default class QImage extends Proto{
    // 图片地址
    @Prop({default:''})
    private src:string

    // 计算后的属性
    private computedStyle:object={}

    // 图片size
    @Prop({default:'contain'})
    bkSize:string

    // 图片repeat
    @Prop({default:'no-repeat'})
    bkRepeat:string

    // 图片position
    @Prop({default:'50%'})
    bkPosition:string

    // 挂载
    private mounted() {
      let style=createStyle(this)
      style.backgroundSize=this.bkSize
      style.backgroundRepeat=this.bkRepeat
      style.backgroundPosition=this.bkPosition
      this.computedStyle=style
    }
  }
</script>

<style lang="scss" scoped>
  [lazy=loaded]{
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }
  [lazy=loading]{
    opacity: 0;
  }
</style>


