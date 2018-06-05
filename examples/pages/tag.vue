<template lang="pug">
  .tag
    q-head-bar(
      bkColor="deepskyblue"
      color="#fff"
      :leftArrow="true"
      centerText="q-tag"
      :rightEmpty="true")
    q-row(h=5)
    q-tag(value="测试")
    q-tag(ml=2 value="测试2" bkColor="orange")
    q-tag(
      ml=2 pt=3 pb=3 pl=5 pr=5 fontSize=16
      value="大" bkColor="deepskyblue")
    q-tag(
      :active="active"
      ml=2 value="点击交互"
      :hasBorder="!active"
      bkColor="white"
      color="#333"
      activeBkColor="orange"
      @clicked="change")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExTag extends Vue{
    private active:boolean=false

    public change(){
      this.active=!this.active
    }
  } 
</script>
