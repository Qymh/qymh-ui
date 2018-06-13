<template lang="pug">
  .stepper
    q-head-bar(
      bkColor="deepskyblue"
      color="#fff"
      :leftArrow="true"
      centerText="q-stepper"
      :rightEmpty="true")
    q-stepper(
      :value="value1"
      max=4
      @valueChange="change"
      @rightClicked="substract"
      @leftClicked="increase")
    div value1:{{value1}}
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExStepper extends Vue{

    private value1:number=0

    private substract(val:number){
      this.value1=val
    }

    private change(val:number){
      this.value1=val
    }

    private increase(val:number){
      this.value1=val
    }
  }
</script>
