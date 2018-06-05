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
      title="title")
</template>
 
<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'

  @Component
  export default class ExBarTitle extends Vue{
    private centerClicked(e:any){
      console.log(e.target)
    }
    private rightClicked(e:any){
      console.log(e)
    }
  }
</script>
