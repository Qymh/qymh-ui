<template lang="pug">
  .searchBar
    q-search-bar(
      bkColor="orange"
      color="white"
      searchBkColor="white"
      leftText="返回"
      @leftClicked="goback"
      @rightClicked="search")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'

  @Component({})
  export default class ExSearchBar extends Vue{
    private goback():void{
      console.log(1)
      this.$router.go(-1)
    }
    private search(searchText:string):void{
      alert(searchText)
    }
  } 
</script>
