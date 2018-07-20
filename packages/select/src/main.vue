<template lang="pug">
  .q-select(
    :id="id"
    :style="computedStyle")
    slot
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import Proto from '../../proto/select/main.vue'
import createStyle from '../../proto/select'

@Component({})
export default class QSelect extends Proto {
  // 选择器对象
  private selectObj: object = {}

  // 计算后的属性
  private computedStyle: object = {}

  // 选择器唯一id
  @Prop({ default: '' })
  private id: string

  // 选择器标题
  @Prop({ default: '' })
  private title: string

  // 滚轴数据数组
  @Prop({ default: '' })
  private wheels: any[]

  // 滚轴位置
  @Prop({ default: '' })
  private seat: any[]

  @Watch('wheels', { deep: true })
  onWheelsChange(val: any[]) {
    let vm = this
    vm.$nextTick(() => {
      let MobileSelect = this.$tree.MobileSelect
      let select = new MobileSelect({
        trigger: `#${vm.id}`,
        title: vm.title,
        wheels: vm.wheels,
        position: vm.seat,
        callback(indexArr: any, data: any) {
          vm.$emit('chooseData', data)
        }
      })
      vm.selectObj = select
    })
  }

  private mounted() {
    let style = createStyle(this)
    this.computedStyle = style
    let vm = this
    vm.$nextTick(() => {
      let MobileSelect = this.$tree.MobileSelect
      let select = new MobileSelect({
        trigger: `#${vm.id}`,
        title: vm.title,
        wheels: vm.wheels,
        position: vm.seat,
        callback(indexArr: any, data: any) {
          vm.$emit('chooseData', data)
        }
      })
      vm.selectObj = select
    })
  }
}
</script>

<style lang="scss" scoped>
.q-select {
  opacity: 0;
}
</style>

