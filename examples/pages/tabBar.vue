<template lang="pug">
  .tabBar
    q-title-bar(
      bkColor="orange"
      color="white"
      :leftArrow="true"
      centerText="tabBar"
      :rightEmpty="true"
      @leftClicked="goBack")
    q-row(align="center" justify="center" mt="20") {{curIndex}}
    q-row(
      position="fixed"
      b=0 l=0 col=100)
      q-tab-bar(
        :tabArr="tabArr"
        @changeTab="changeTab")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExTabBar extends Vue{
    
    private curIndex:number=0

    public tabArr:any[]=[
      {
        icon:'q-icon icon-newshot',
        iconColor:'',
        activeIcon:'q-icon icon-newshotfill',
        activeIconColor:'orange',
        text:'订单',
        textColor:'',
        activeTextColor:'orange',
        active:true
      },
      {
        icon:'q-icon icon-hot',
        iconColor:'',
        activeIcon:'q-icon icon-hotfill',
        activeIconColor:'orange',
        text:'热门',
        textColor:'',
        activeTextColor:'orange',
        active:false
      },
      {
        icon:'q-icon icon-people',
        iconColor:'',
        activeIcon:'q-icon icon-peoplefill',
        activeIconColor:'orange',
        text:'个人',
        textColor:'',
        activeTextColor:'orange',
        active:false
      }
    ]

    public changeTab(index:number){
      this.curIndex=index
    }

    private goBack():void{
      this.$router.go(-1)
    }
  }
</script>
