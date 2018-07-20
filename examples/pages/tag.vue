<template lang="pug">
  .tag
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=1)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="tag 标签"
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
          q-tag(value="测试")
          q-tag(ml=2 value="测试2" bkColor="#F65A44")
          q-tag(
            ml=2 pt=3 pb=3 pl=5 pr=5 fontSize=16
            value="大" bkColor="deepskyblue")
          q-tag(
            ml=2
            value="无圆角值"
            :hasRadius="false"
            :hasBorder="true"
            borderColor="#F65A44"
            bkColor="white"
            color="#333") 
          q-code(type="html").
            &ltq-tag value="测试"&gt&lt/q-tag&gt
            &ltq-tag ml=2 value="测试2" bkColor="#F65A44"&gt&lt/q-tag&gt
            &ltq-tag ml=2 pt=3 pb=3 pl=5 pr=5 fontSize=16
            value="大" bkColor="deepskyblue"&gt&lt/q-tag&gt
            &ltq-tag
              ml=2
              value="无圆角值"
              :hasRadius="false"
              :hasBorder="true"
              borderColor="#F65A44"
              bkColor="white"
              color="#333"&gt
            &lt/q-tag&gt
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="事件回调")
          q-row(tag="section")
            q-tag(
              :active="active"
              ml=2 value="点击交互"
              :hasBorder="true"
              bkColor="white"
              color="#333"
              activeBkColor="#F65A44"
              @clicked="change")
            q-row
              main template
            q-code(type="html").
              &ltq-tag
                :active="active"
                ml=2 value="点击交互"
                :hasBorder="true"
                bkColor="white"
                color="#333"
                activeBkColor="#F65A44"
                @clicked="change"&gt&lt/q-tag&gt
            main javascript
            q-code.
              data() {
                return {
                  active = false
                }
              },
              methods: {
                change() {
                  this.active = !this.active
                  this.active ?
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
          q-row(fontSize=14 lh=9 indent=2 mb=2)
            |<main>@clicked</main>点击后的回调
          
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class ExTag extends Vue {
  private active: boolean = false
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
          { value: 'bkColor' },
          { value: 'String' },
          { value: '#d6d7dc' },
          { value: '无' },
          { value: '背景颜色' }
        ]
      },
      {
        prop: [
          { value: 'color' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '字体颜色' }
        ]
      },
      {
        prop: [
          { value: 'fontSize' },
          { value: 'Number' },
          { value: 'N' },
          { value: '12' },
          { value: '字体大小' }
        ]
      },
      {
        prop: [
          { value: 'value' },
          { value: 'String' },
          { value: 'Y' },
          { value: '无' },
          { value: '标签内容' }
        ]
      },
      {
        prop: [
          { value: 'hasBorder' },
          { value: 'Boolean' },
          { value: 'N' },
          { value: 'false' },
          { value: '有无边框' }
        ]
      },
      {
        prop: [
          { value: 'hasRadius' },
          { value: 'Boolean' },
          { value: 'N' },
          { value: 'true' },
          { value: '是否有圆角' }
        ]
      },
      {
        prop: [
          { value: 'borderColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '#d6d7dc' },
          { value: '是否有border颜色' }
        ]
      },
      {
        prop: [
          { value: 'active' },
          { value: 'Boolean' },
          { value: 'Y' },
          { value: 'false' },
          { value: '是否激活按钮' }
        ]
      },
      {
        prop: [
          { value: 'activeBkColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '激活后的背景颜色' }
        ]
      },
      {
        prop: [
          { value: 'activeColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '激活后的字体颜色' }
        ]
      }
    ]
  }

  public change() {
    this.active = !this.active
    this.active ? this.$notice.toast('激活') : this.$notice.toast('未激活')
  }
}
</script>
