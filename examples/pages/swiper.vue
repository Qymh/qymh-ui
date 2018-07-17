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
    q-row(pl=2 pr=2)
      //- demo演示
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tagfill"
          leftIconColor="deepskyblue"
          title="Demo演示"
          fontSize=16
          :borderBottom="true")
        q-row(fontSize=14 lh=9 indent=2 mb=2 dir="left" wrap="wrap")
          q-col 二次封装
          q-col(
            tag="a" href="https://github.com/nolimits4web/swiper"
            target="_blank" color="deepskyblue" decoration="underline") swiper
        //- 列子
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="列子")
          q-row(tag="section")
            q-swiper(:swiperOptions="swiperOptions")
              q-row(
                h=50
                col=100
                bkColor="#BEE7E9"
                align="center"
                justify="center"
                v-for="(item,index) in swiperArr"
                :key="index")
                q-col(color="red") {{item.value}}
            q-code(type="html").
              &ltq-swiper :swiperOptions="swiperOptions"&gt
                &ltq-row
                  h=50
                  col=100
                  bkColor="#BEE7E9"
                  align="center"
                  justify="center"
                  v-for="(item,index) in swiperArr"
                  :key="index"&gt
                  &ltq-col color="red"&gt{ { item.value } }&lt/q-col&gt
                &lt/q-row&gt
              &lt/q-swiper&gt

              data:{
                return{
                  swiperOptions:{
                    // 自动播放
                    autoplay:{
                      delay:4000
                    },
                    // 自动播放
                    loop:true,
                    // 分页器
                    pagination:{
                      el:'.swiper-pagination',
                      bulletActiveClass: 'my-bullet-active',
                    }
                  }
                }
              }
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tagfill"
          leftIconColor="deepskyblue"
          title="API一览"
          fontSize=16
          :borderBottom="true")
        //- Api
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="Api")
          q-table(:tableOptions="tableOptions")
          q-row(h=12 align="center") swiperOptions的配置和官方给的配置是一样的
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class ExSwiper extends Vue {
  private swiperArr = [{ value: 1 }, { value: 2 }, { value: 3 }]
  private swiperOptions: any = {
    // 自动播放
    autoplay: {
      delay: 4000
    },
    // 自动播放
    loop: true,
    // 分页器
    pagination: {
      el: '.swiper-pagination',
      bulletActiveClass: 'my-bullet-active'
    }
  }
  private tableOptions: any = {
    titles: [
      { value: 'Prop' },
      { value: 'Type' },
      { value: 'Required' },
      { value: 'Default' },
      { value: 'Description' }
    ],
    datas: [
      {
        prop: [
          { value: 'swiperOptions' },
          { value: 'Object' },
          { value: 'Y' },
          { value: '无' },
          { value: 'swiper配置' }
        ]
      }
    ]
  }
}
</script>

<style lang="scss">
.my-bullet-active {
  background-color: deeppink;
}
</style>
