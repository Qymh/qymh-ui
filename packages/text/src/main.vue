<template lang="pug">
  .q-text(@click="clicked")
    .q-text-value(:style="computedStyle")
      slot
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
const config = require('../../../src/qymhui.config').default.qtext

@Component({})
export default class QText extends Vue {
  @Prop({ default: config.lines })
  private lines: number

  private get computedStyle() {
    let style = Object.create(null)
    if (this.lines) {
      style.overflow = 'hidden'
      style.wordBreak = 'break-all'
      style.display = '-webkit-box'
      style['-webkit-line-clamp'] = this.lines
      style['-webkit-box-orient'] = 'vertical'
    }
    return style
  }

  @Emit('clicked')
  private clicked() {}
}
</script>

<style lang="scss" scoped>
.q-text {
  &-value {
    height: 100%;
  }
}
</style>

