<template lang="pug">
  .headBar
    q-head-bar(
      bkColor="deepskyblue"
      color="#fff"
      :leftArrow="true"
      centerText="q-head-bar"
      :rightEmpty="true")
    q-row(mt=2)
      q-head-bar(
        bkColor="orange"
        color="white"
        leftText="返回"
        centerText="商品"
        rightText="购物车")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExHeadBar extends Vue{
    
  }
</script>
