<template lang="pug">
  .home
    q-row(tag="header")
      q-title-bar(
        :showBorder="true"
        centerColor="deepskyblue"
        centerText="Qymh-Ui"
        centerDir="flex-start")
    //- q-row
    q-row(mt=2)
      q-title-bar(
        :showBorder="true"
        bkColor="deepskyblue"
        color="white"
        :leftEmpty="true"
        centerText="q-row"
        :rightArrow="true"
        rightDir="flex-end"
        @clicked="go('/row')")
    //- q-title-bar
    q-row(mt=2)
      q-title-bar(
        :showBorder="true"
        bkColor="deepskyblue"
        color="white"
        :leftEmpty="true"
        centerText="q-title-bar"
        :rightArrow="true"
        rightDir="flex-end"
        @clicked="go('/titlebar')")
    //- q-search-bar
    q-row(mt=2)
      q-title-bar(
        :showBorder="true"
        bkColor="deepskyblue"
        color="white"
        :leftEmpty="true"
        centerText="q-search-bar"
        :rightArrow="true"
        rightDir="flex-end"
        @clicked="go('/searchbar')")
    //- q-tab-bar
    q-row(mt=2)
      q-title-bar(
        :showBorder="true"
        bkColor="deepskyblue"
        color="white"
        :leftEmpty="true"
        centerText="q-tab-bar"
        :rightArrow="true"
        rightDir="flex-end"
        @clicked="go('/tabbar')")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'

  @Component({})
  export default class ExHome extends Vue{
    private go(path:string):void{
      this.$router.push(path)
    }
  }
</script>
