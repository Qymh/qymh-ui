<template lang="pug">
  #mescroll.mescroll
    .mescroll-bounce
      slot
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
const config = require('../../../src/qymhui.config').default.qscroll
console.log(config)
@Component({})
export default class QScroll extends Vue {
  private scrollObj: any = {}

  private mounted() {
    this.$nextTick(() => {
      let MeScroll = this.$tree.MeScroll
      let options = {
        down: config.down(this),
        up: config.up(this)
      }
      this.scrollObj = new MeScroll('mescroll', options)
    })
  }

  private success(dataSize: number, totalPage: number) {
    this.scrollObj.endByPage(dataSize, totalPage)
  }

  private error() {
    this.scrollObj.endErr()
  }
}
</script>
