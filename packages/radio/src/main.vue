<template lang="pug">
  .q-radio(:style="computedOuterStyle")
    //- 方形选择器
    .q-radio-rect(
      v-if="type==='rect'"
      @click="change(!active)"
      :style="computedStyle")
      span(v-show="active")
        i.q-icon.icon-check(:style="{color:active?activeColor:''}")
    //- 圆形选择器
    .q-radio-circle(
      v-if="type==='circle'"
      @click="change(!active)"
      :style="computedStyle")
      span.q-radio-circle-value(
        v-show="active")
        i.q-icon.icon-check(:style="{color:active?activeColor:''}")
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import Proto from '../../proto/tag/main.vue'
import createStyle from '../../proto/tag'
const config = require('../../../src/qymhui.config').default.qradio

@Component({})
export default class QRadio extends Proto {
  // 激活状态
  private active: boolean = false

  // 类型
  @Prop({ default: config.type })
  private type: radio.type

  // 是否有边框
  @Prop({ default: config.hasBorder })
  private hasBorder: boolean

  // 边框颜色
  @Prop({ default: config.borderColor })
  private borderColor: string

  // 激活下的颜色
  @Prop({ default: config.activeColor })
  private activeColor: string

  // 激活下的背景颜色
  @Prop({ default: config.activeBkColor })
  private activeBkColor: string

  // 激活下的border颜色
  @Prop({ default: config.activeBorderColor })
  private activeBorderColor: string

  private get computedStyle() {
    let style = Object.create(null)
    if (this.hasBorder) {
      style.borderStyle = 'solid'
      style.borderWidth = '1px'
      if (this.active) {
        style.borderColor = this.activeBorderColor
      } else {
        style.borderColor = this.borderColor
      }
    }
    if (this.active && this.activeBkColor && this.type === 'circle') {
      style.backgroundColor = this.activeBkColor
    }
    return style
  }

  private get computedOuterStyle() {
    let style = createStyle(this)
    return style
  }

  @Emit()
  private change(active: boolean) {
    this.active = !this.active
  }
}
</script>

<style lang="scss" scoped>
.q-radio {
  display: inline-block;
  height: 0.5rem;
  width: 0.5rem;
  position: relative;
}
.q-radio-rect {
  position: absolute;
  top: 0;
  left: 0;
  height: 0.5rem;
  width: 0.5rem;
  line-height: 0.5rem;
  border-radius: 0.05rem;
  display: inline-block;
  font-size: 10px;
  text-align: center;
  > span {
    display: inline-block;
    height: 100%;
    width: 100%;
    > i {
      font-size: 14px;
    }
  }
}
.q-radio-circle {
  position: absolute;
  top: 0;
  left: 0;
  height: 0.5rem;
  width: 0.5rem;
  line-height: 0.5rem;
  border-radius: 50%;
  display: inline-block;
  font-size: 10px;
  text-align: center;
  &-value {
    color: #fff;
  }
  > span {
    display: inline-block;
    height: 100%;
    width: 100%;
    > i {
      font-size: 14px;
    }
  }
}
</style>

