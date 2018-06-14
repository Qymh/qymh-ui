<template lang="pug">
  .titleBar
    q-head-bar(
      bkColor="deepskyblue"
      color="#fff"
      :leftArrow="true"
      centerText="q-title-bar"
      :rightEmpty="true")
    q-title-bar(
      :borderBottom="true"
      leftIcon="q-icon icon-edit"
      leftIconColor="deepskyblue"
      title="title"
      rightText="查看更多"
      :rightArrow="true"
      @rightClicked="rightClicked")
</template>
 
<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'

  @Component
  export default class ExBarTitle extends Vue{
    private rightClicked(){
      console.log('1')
    }
  }
</script>
