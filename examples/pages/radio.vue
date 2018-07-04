<template lang="pug">
  .radio
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100)
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
        //- 简单的列子
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="简单的列子")
          q-radio(type="rect")
          q-radio(type="circle")
          q-radio(
            type="circle"
            borderColor="deepskyblue"
            activeBkColor="deepskyblue"
            @change="change")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExRadio extends Vue{
    private change(bool:boolean){
      console.log(bool)
    }
  }
</script>
