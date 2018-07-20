<template lang="pug">
  .radio
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=1)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="radio 按钮"
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
            q-row(fontSize=14 lh=9 mb=2) 你可以点击下方的列子尝试
            q-radio(
              ml=2
              type="rect"
              activeColor="#a1a1a1"
              activeBorderColor="#a1a1a1")
            q-radio(
              ml=2
              type="circle"
              activeColor="white"
              activeBkColor="#f65a44")
            q-code(type="html").
              &ltq-radio
                ml=2
                type="rect"
                activeColor="#a1a1a1"
                activeBorderColor="#a1a1a1"&gt
              &lt/q-radio&gt
              &ltq-radio
                ml=2
                type="circle"
                activeColor="white"
                activeBkColor="#f65a44"&gt
              &lt/q-radio&gt
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="事件回调")
          q-row(tag="section")
            q-radio(
              ml=2
              type="circle"
              borderColor="deepskyblue"
              activeBkColor="deepskyblue"
              @change="change")
            q-row
              q-row(mt=4) <main>template</main>
            q-code(type="html").
              &ltq-radio
                ml=2
                type="circle"
                borderColor="deepskyblue"
                activeBkColor="deepskyblue"
                @change="change"&gt
              &lt/q-radio&gt
            main vue
            q-code.
              methods: {
                change(bool) {
                  bool ?
                    this.$notice.toast('激活') :
                    this.$notice.toast('未激活')
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
            |<main>@change</main> 激活状态改变的时候触发,第一个参数为当前的激活状态布尔值
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class ExRadio extends Vue {
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
          { value: 'radio' },
          { value: 'String' },
          { value: 'Y' },
          { value: 'rect' },
          { value: 'rect:正方形 circle:圆形' }
        ]
      },
      {
        prop: [
          { value: 'hasBorder' },
          { value: 'Boolean' },
          { value: 'N' },
          { value: 'true' },
          { value: '是否有边框' }
        ]
      },
      {
        prop: [
          { value: 'borderColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '#a1a1a1' },
          { value: 'border颜色' }
        ]
      },
      {
        prop: [
          { value: 'activeColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '激活时的颜色' }
        ]
      },
      {
        prop: [
          { value: 'activeBkColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '激活时的背景颜色' }
        ]
      },
      {
        prop: [
          { value: 'activeBorderColor' },
          { value: 'String' },
          { value: 'N' },
          { value: 'transparent' },
          { value: '激活时的border颜色' }
        ]
      }
    ]
  }

  private change(bool: boolean) {
    bool ? this.$notice.toast('激活') : this.$notice.toast('未激活')
  }
}
</script>
