<template lang="pug">
  q-title-bar(
    :showBorder="true"
    centerText="推荐"
    centerDir="flex-start"
    rightText="更多"
    rightDir="flex-end"
    rightColor="#666"
    @rightClicked="rightClicked"
    @centerClicked="centerClicked")
      q-row(@clicked="centerClicked" slot="center" justify="start") 中间文字
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
