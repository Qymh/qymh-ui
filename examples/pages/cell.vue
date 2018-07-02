<template lang="pug">
  .titleBar
    q-head-bar(
      bkColor="deepskyblue"
      color="#fff"
      :leftArrow="true"
      centerText="q-cell"
      :rightEmpty="true")
    q-row(fontSize="14")
      q-cell(
        leftText="发票类型:"
        leftWidth=1.6
        :borderBottom="true"
        :rightArrow="true")
        q-col(slot="title") 不开发票
</template>
 
<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'

  @Component
  export default class ExBarTitle extends Vue{
    
  }
</script>
