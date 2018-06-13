<template lang="pug">
  .radio
    q-head-bar(
      bkColor="deepskyblue"
      color="#fff"
      :leftArrow="true"
      centerText="q-radio"
      :rightEmpty="true")
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
