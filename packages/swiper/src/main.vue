<template lang="pug">
  .q-swiper.swiper-container
    .swiper-wrapper
      slot
    .swiper-pagination
</template>

<script lang="ts">
  import {Vue,Component,Prop} from 'vue-property-decorator'
  import Swiper from 'swiper'
  @Component({})
  export default class QSwiper extends Vue{
    // swiper基本配置
    private swiperBaseOptions:any={
      // 自动播放
      autoplay:{
        delay:4000
      },
      // 分页器
      pagination:{
        el:'.swiper-pagination'
      },
      // 自动播放
      loop:true,
      lazy: {
        loadPrevNext:true,
        loadPrevNextAmount:1
      }
    }

    // swiper对象
    private swiperObj:any={}

    // swiper配置
    @Prop({default:{},required:false})
    private swiperOptions:any

    private mounted() {
      let options=Object.assign({},this.swiperBaseOptions,this.swiperOptions)
      let $slots=this.$slots.default
      for(let i:number=0,len:number=$slots.length;i<len;i++){
        let slot:any=$slots[i].elm
        slot.classList.add('swiper-slide')
      }
      this.swiperObj=new Swiper('.swiper-container',options) 
    }
  }

</script>

