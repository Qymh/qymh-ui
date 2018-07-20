<template lang="pug">
  .stepper
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=1)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="stepper 计数器"
        :rightEmpty="true")
    q-row(h=12)
    q-row(pl=2 pr=2)
      //- demo演示
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tagfill"
          leftIconColor="deepskyblue"
          title="Demo演示"
          fontSize=16
          :borderBottom="true")
        //- 列子
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="列子")
          q-row(tag="section")
            q-row(fontSize=14 lh=9 mb=2) 一个双向绑定的计数器
            q-row(h=12 dir="left" align="center")
              q-stepper(
                v-model="value"
                max=4
                @valueChange="change"
                @rightClicked="substract"
                @leftClicked="increase")
              q-row(ml=4) value:{{value}}
            q-row(mt=4) <main>template</main>
            q-code(type="html").
              &ltq-stepper
                v-model="value"
                max=4
                @valueChange="change"
                @rightClicked="substract"
                @leftClicked="increase"&gt&lt/q-stepper&gt
            main vue
            q-code.
              methods: {
                substract(val) {
                  this.$notice.toast(`你增加了计数器的值,当前值为:${this.value}`)
                },
                change(val) {
                  this.$notice.toast(`你改变了计数器的值,当前值为:${this.value}`)
                },
                increase(val) {
                  this.$notice.toast(`你减少了计数器的值,当前值为:${this.value}`)
                }
              }
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tagfill"
          leftIconColor="deepskyblue"
          title="API一览"
          fontSize=16
          :borderBottom="true")
        //- Api
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="Api")
          q-table(:tableOptions="tableOptions")
        //- 事件回调
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="事件回调")
          q-row(fontSize=14 lh=9 mb=2)
            |<main>@leftClicked</main>减号点击<br>
            |<main>@valueChange</main>值改变触发<br>
            |<main>@rightClicked</main>加号点击<br>
            |返回一个参数,改变后的值
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class ExStepper extends Vue {
  private value: number = 0

  private tableOptions: any = {
    titles: [
      { value: 'Prop' },
      { value: 'Type' },
      { value: 'Required' },
      { value: 'Default' },
      { value: 'Description' }
    ],
    datas: [
      {
        prop: [
          { value: 'value' },
          { value: 'Number' },
          { value: 'Y' },
          { value: '无' },
          { value: '双向绑定的值' }
        ]
      },
      {
        prop: [
          { value: 'color' },
          { value: 'String' },
          { value: 'N' },
          { value: '#F65A44' },
          { value: '传入值的颜色' }
        ]
      },
      {
        prop: [
          { value: 'min' },
          { value: 'Number' },
          { value: 'N' },
          { value: '0' },
          { value: '允许的最小值' }
        ]
      },
      {
        prop: [
          { value: 'max' },
          { value: 'Number' },
          { value: 'N' },
          { value: '无' },
          { value: '允许的最大值' }
        ]
      },
      {
        prop: [
          { value: 'fix' },
          { value: 'Number' },
          { value: 'N' },
          { value: '4' },
          { value: '输入框中保留的小数' }
        ]
      }
    ]
  }

  private substract(val: number) {
    this.$notice.toast(`你增加了计数器的值,当前值为:${this.value}`)
  }

  private change(val: number) {
    this.$notice.toast(`你改变了计数器的值,当前值为:${this.value}`)
  }

  private increase(val: number) {
    this.$notice.toast(`你减少了计数器的值,当前值为:${this.value}`)
  }
}
</script>
