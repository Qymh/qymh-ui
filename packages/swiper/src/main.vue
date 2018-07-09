<template lang="pug">
  .q-swiper.swiper-container
    .swiper-wrapper
      slot
    .swiper-pagination
</template>

<script lang="ts">
  import {Vue,Component,Prop} from 'vue-property-decorator'
  @Component({})
  export default class QSwiper extends Vue{
    // swiper对象
    private swiperObj:any={}

    // swiper配置
    @Prop({default:{},required:false})
    private swiperOptions:any

    private mounted() {
      let options=this.swiperOptions
      let $slots=this.$slots.default
      for(let i:number=0,len:number=$slots.length;i<len;i++){
        let slot:any=$slots[i].elm
        slot.classList.add('swiper-slide')
      }
      console.log(this.$tree)
      let Swiper=this.$tree.Swiper
      this.swiperObj=new Swiper('.swiper-container',options) 
    }
  }

</script>

