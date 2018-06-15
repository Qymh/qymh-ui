<template lang="pug">
  .overlay
    q-head-bar(
      bkColor="deepskyblue"
      color="#fff"
      :leftArrow="true"
      centerText="overlay"
      :rightEmpty="true")
    q-row(pl=2 pr=2)
      q-title-bar(
        :borderBottom="true"
        leftIcon="q-icon icon-tag"
        leftIconColor="deepskyblue"
        title="右侧蒙层"
        titleColor="deepskyblue")
      q-row(lh=9 @clicked="rightClicked") 点击显示右侧蒙层
      q-overlay(
        position="right"
        :show="rightShow")
        q-head-bar(
          bkColor="orange"
          color="#fff"
          :leftEmpty="true"
          centerText="蒙层右"
          @rightClicked="rightClickedHide")
          q-row(w=10 slot="right")
            i.q-icon.icon-close
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExOverlay extends Vue{

    // 右侧蒙层
    private rightShow:boolean=false
    
    private rightClicked(){
      this.rightShow=!this.rightShow
    }

    private rightClickedHide(){
      this.rightShow=false
    }
  }

</script>
