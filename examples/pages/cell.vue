<template lang="pug">
  .titleBar
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=1)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="cell 块"
        fontSize=16
        :rightEmpty="true")
    q-row(h=12)
    q-row(pl=2 pr=2)
      //- Demo
      q-row
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
            //- 标题指向
            q-row(tag="section")
              q-cell(
                title="标题指向"
                :rightArrow="true")
              q-code(type="html").
                &ltq-cell title="标题指向" :rightArrow="true"&gt&lt/q-cell&gt 
            //- 带有icon和border
            q-row(tag="section")
              q-cell(
                leftIcon="q-icon icon-hotfill"
                leftIconColor="red"
                title="带有icon和border的标题指向"
                :rightArrow="true"
                :borderBottom="true")
              q-code(type="html").
                &ltq-cell
                  leftIcon="q-icon icon-hotfill"
                  leftIconColor="red"
                  title="带有icon和border的标题指向"
                  :rightArrow="true"
                  :borderBottom="true"&gt&lt/q-cell&gt
            //- 改变右侧显示文字
            q-row(tag="section")
              q-cell(
                leftIcon="q-icon icon-hotfill"
                leftIconColor="red"
                title="红色的文字"
                titleColor="red"
                rightText="查看更多"
                rightTextColor="#a1a1a1"
                :borderBottom="true")
              q-code(type="html").
                &ltq-cell
                  leftIcon="q-icon icon-hotfill"
                  leftIconColor="red"
                  title="当前最热"
                  titleColor="red"
                  rightText="查看更多"
                  rightTextColor="#a1a1a1"
                  :borderBottom="true"&gt&lt/q-cell&gt
          //- slots
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="slots")
            q-row(fontSize=14 lh=9 mb=2)
              |目前有3个自定义slot<br>
              |<main>slot="left"</main>表左侧<br>
              |<main>slot="title"</main>表title<br>
              |<main>slot="right"</main>表右侧
            //- 自定义title
            q-row(tag="section")
              q-cell(:borderBottom="true")
                q-row(slot="left")
                  q-col(fontSize=12) 左侧
                q-row(slot="title")
                  q-col(fontSize=14) 标题
                q-row(slot="right")
                  q-col(fontSize=12) 右侧
              q-code(type="html").
                &ltq-cell :borderBottom="true"&gt
                  &ltq-row slot="left"&gt
                    &ltq-col fontSize=12&gt左侧&lt/q-col&gt
                  &lt/q-row&gt
                  &ltq-row slot="title"&gt
                    &ltq-col fontSize=14&gt标题&lt/q-col&gt
                  &lt/q-row&gt
                  &ltq-row slot="right"&gt
                    &ltq-col fontSize=12&gt右侧&lt/q-col&gt
                  &lt/q-row&gt
                &lt/q-cell&gt
          //- 点击事件
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="点击事件")
            q-row(fontSize=14 lh=9 mb=2)
              |点击事件目前有三个<br>
              |全局点击事件<main>@clicked</main><br>
              |左侧点击事件<main>@leftClicked</main><br>
              |右侧点击事件<main>@rightClicked</main>
            q-cell(
                leftIcon="q-icon icon-hotfill"
                leftIconColor="red"
                title="最热"
                titleColor="red"
                rightText="查看更多"
                rightTextColor="#a1a1a1"
                :rightArrow="true"
                :borderBottom="true"
                @clicked="hotClicked"
                @rightClicked="hotRightClicked")
            q-row(mt=4) <main>template</main>
            q-code(type="html").
              &ltq-cell
                leftIcon="q-icon icon-hotfill"
                leftIconColor="red"
                title="最热"
                titleColor="red"
                rightText="查看更多"
                rightTextColor="#a1a1a1"
                :rightArrow="true"
                :borderBottom="true"
                @clicked="hotClicked"
                @rightClicked="hotRightClicked"&gt
              &lt/q-cell&gt
            main vue
            q-code.
              methods: {
                hotClicked() {
                  this.$notice.toast('你点击了整个块!')
                },
                hotRightClicked() {
                  this.$notice.toast('你点击了查看更多!')
                }
              }
        //- API
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-tagfill"
            leftIconColor="deepskyblue"
            title="API一览"
            fontSize=16
            :borderBottom="true")
          //- api
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="Api")
            q-table(:tableOptions="tableOptions")
          //- 插槽 
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="插槽")
            q-row(fontSize=14 lh=9 mb=2)
              |<main>slot="left"</main>表左侧<br>
              |<main>slot="title"</main>表title<br>
              |<main>slot="right"</main>表右侧
          //-事件
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="事件回调")
            q-row(fontSize=14 lh=9 mb=2)
              |全局点击事件<main>@clicked</main><br>
              |左侧点击事件<main>@leftClicked</main><br>
              |右侧点击事件<main>@rightClicked</main>
</template>
 
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ExBarTitle extends Vue {
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
          { value: 'N' },
          { value: '无' },
          { value: '全局背景颜色' }
        ]
      },
      {
        prop: [
          { value: 'hasPadding' },
          { value: 'Boolean' },
          { value: 'N' },
          { value: 'true' },
          { value: '是否有两边的边距' }
        ]
      },
      {
        prop: [
          { value: 'borderTop' },
          { value: 'Boolean' },
          { value: 'N' },
          { value: 'false' },
          { value: '是否有顶部border' }
        ]
      },
      {
        prop: [
          { value: 'borderBottom' },
          { value: 'Boolean' },
          { value: 'N' },
          { value: 'false' },
          { value: '是否有底部border' }
        ]
      },
      {
        prop: [
          { value: 'borderColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '#d6d7dc' },
          { value: 'border的颜色' }
        ]
      },
      {
        prop: [
          { value: 'leftIcon' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '左侧Icon的class名' }
        ]
      },
      {
        prop: [
          { value: 'leftIconColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '左侧Icon的颜色' }
        ]
      },
      {
        prop: [
          { value: 'leftText' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '左侧文字' }
        ]
      },
      {
        prop: [
          { value: 'leftTextColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '左侧文字颜色' }
        ]
      },
      {
        prop: [
          { value: 'leftWidth' },
          { value: 'Number' },
          { value: 'N' },
          { value: '无' },
          { value: '左侧文字的宽度' }
        ]
      },
      {
        prop: [
          { value: 'title' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '中间title' }
        ]
      },
      {
        prop: [
          { value: 'titleColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '中间title颜色' }
        ]
      },
      {
        prop: [
          { value: 'rightText' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '右侧文字' }
        ]
      },
      {
        prop: [
          { value: 'rightTextColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '右侧文字颜色' }
        ]
      },
      {
        prop: [
          { value: 'rightArrow' },
          { value: 'Boolean' },
          { value: 'N' },
          { value: 'false' },
          { value: '右侧箭头' }
        ]
      },
      {
        prop: [
          { value: 'rightArrowColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '#a1a1a1' },
          { value: '右侧箭头颜色' }
        ]
      }
    ]
  }

  private hotClicked() {
    this.$notice.toast('你点击了整个块!')
  }

  private hotRightClicked() {
    this.$notice.toast('你点击了查看更多!')
  }
}
</script>
