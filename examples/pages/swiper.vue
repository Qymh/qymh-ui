<template lang="pug">
  .swiper
    q-row(position="fixed" t=0 l=0 col=100 zIndex=5)
      q-head-bar(
        bkColor="deepskyblue"
        color="#fff"
        :leftArrow="true"
        centerText="swiper"
        :rightEmpty="true")
    q-row(h=12)
    q-swiper(:swiperOptions="swiperOptions")
      q-row(
        h=50
        col=100
        bkColor="orange"
        align="center"
        justify="center"
        v-for="(item,index) in swiperArr"
        :key="index")
        q-col(color="white") {{item.value}}
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExSwiper extends Vue{
    private swiperArr=[
      {value:1},
      {value:2},
      {value:3}
    ]
    private swiperOptions:any={}
  }
</script>
