<template lang="pug">
  .text
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=5)
      q-head-bar(
        bkColor="deepskyblue"
        color="#fff"
        :leftArrow="true"
        centerText="q-text"
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
            q-text(lines=1)
              q-row(tag="span" display="inline" lh=5 ml=1) 123123123123131231233123132313123123123123123123123123123123131231233123132313123123123123123123123123123123131231233123132313123123123123123123123123123123131231233123132313123123123123123123
            q-code(type="html").
              &ltq-text lines=1&gt
                &ltq-row tag="span" display="inline" lh=5 ml=1&gt
                  无数个123123
                &lt/q-row&gt
              &lt/q-text&gt
          q-row(tag="section")
            q-text(lines=2)
              q-tag(pt=1 pb=1 pl=2.5 pr=2.5 fontSize=14 bkColor="#f65a44" value="促销")
              q-row(tag="span" display="inline" lh=5 ml=1) 123123123123131231233123132313123123123123123123123123123123131231233123132313123123123123123123123123123123131231233123132313123123123123123123123123123123131231233123132313123123123123123123
            q-code(type="html").
              &ltq-text lines=2&gt
                &ltq-tag pt=1 pb=1 pl=2.5 pr=2.5 fontSize=14 bkColor="#f65a44" value="促销"&gt&lt/q-tag&gt
                &ltq-row tag="span" display="inline" lh=5 ml=1&gt
                  无数个123123
                &lt/q-row&gt
              &lt/q-text&gt
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
            |<main>@clicked</main>点击回调
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class ExText extends Vue {
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
          { value: 'lines' },
          { value: 'Number' },
          { value: 'N' },
          { value: '无' },
          { value: '限制显示的行数' }
        ]
      }
    ]
  }
}
</script>
