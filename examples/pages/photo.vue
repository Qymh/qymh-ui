<template lang="pug">
  .photo
    q-row(@clicked="showPhoto" zIndex=999) 点击查看
    q-row
      q-photo(
        v-show="images.length"
        :images="images")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  import banner1 from '@/images/banner1.jpg'
  import banner2 from '@/images/banner2.jpg'
  @Component({})
  export default class ExPhoto extends Vue{
    private images:string[]=[]

    private showPhoto(){
      this.images=[banner1,banner2]
    }
  }
</script>

