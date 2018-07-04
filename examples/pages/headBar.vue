<template lang="pug">
  .headBar
    q-head-bar(
      bkColor="deepskyblue"
      color="#fff"
      :leftArrow="true"
      centerText="q-head-bar"
      :rightEmpty="true")
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
          //- 简单的列子
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="简单的列子")
            q-row(tag="section")
              q-head-bar(
                :leftArrow="true"
                centerText="订单列表"
                centerTextColor="#f65a44"
                rightText="筛选"
                :borderBottom="true")
              q-code(type="html").
                &ltq-head-bar
                  :leftArrow="true"
                  centerText="订单列表"
                  rightText="筛选"
                  :borderBottom="true"&gt&lt/q-head-bar&gt
            q-row(tag="section")
              q-head-bar(
                bkColor="#f65a44"
                color="white"
                :leftEmpty="true"
                centerText="购物车"
                rightText="清空")
              q-code(type="html").
                &ltq-head-bar
                  bkColor="#f65a44"
                  color="white"
                  :leftEmpty="true"
                  centerText="购物车"
                  rightText="清空"&gt
                &lt/q-head-bar&gt
          //- 插槽
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="插槽")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExHeadBar extends Vue{
    
  }
</script>
