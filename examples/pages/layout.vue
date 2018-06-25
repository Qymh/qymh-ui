<template lang="pug">
  .row
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="layout 布局"
        :rightEmpty="true")
    q-row(mt=12)
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'

  @Component({})
  export default class exRow extends Vue{
    
  }
</script>

<style lang="scss" scoped>
  .demo{
    background-color: deepskyblue;
    color: #fff;
  }
</style>
