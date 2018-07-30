<template lang="pug">
  .q-image(
    v-lazy:background-image="src"
    :style="computedStyle"
    @click="clicked")
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import Proto from '../../proto/image/main.vue'
import createStyle from '../../proto/image'
const config = require('../../../src/qymhui.config').default.qimage
@Component({})
export default class QImage extends Proto {
  // 计算后的属性
  private computedStyle: object = {}

  // 图片地址
  @Prop({ default: '' })
  private src: string

  // 图片size
  @Prop({ default: config.bkSize })
  bkSize: string

  // 图片repeat
  @Prop({ default: config.bkRepeat })
  bkRepeat: string

  // 图片position
  @Prop({ default: config.bkPosition })
  bkPosition: string

  // 挂载
  private mounted() {
    let style = createStyle(this)
    style.backgroundSize = this.bkSize
    style.backgroundRepeat = this.bkRepeat
    style.backgroundPosition = this.bkPosition
    this.computedStyle = style
  }

  @Emit('clicked')
  private clicked() {}
}
</script>

<style lang="scss" scoped>
[lazy='loaded'] {
  transition: all 0.3s ease-in-out;
  opacity: 1;
}
[lazy='loading'] {
  opacity: 0;
}
</style>


