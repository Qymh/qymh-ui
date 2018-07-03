<template lang="pug">
  .image
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="image 图片懒加载"
        :rightEmpty="true")
    q-row(h=12)
    q-row
      q-image(
        v-for="(img,index) in imagesArr"
        :key="index"
        h=100
        mb=20
        bkSize="contain"
        :src="img")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExImage extends Vue{
    private imagesArr:string[]=[
      'http://pic.pptbz.com/201506/2015070581208537.JPG',
      'http://img.zcool.cn/community/012cb757939a8e0000018c1b7482be.jpg@1280w_1l_2o_100sh.png',
      'http://img2.imgtn.bdimg.com/it/u=177128117,3397391403&fm=27&gp=0.jpg',
      'http://img0.imgtn.bdimg.com/it/u=2977025261,3666758675&fm=27&gp=0.jpg',
      'http://img2.imgtn.bdimg.com/it/u=3471791242,1905743456&fm=27&gp=0.jpg',
      'http://img2.imgtn.bdimg.com/it/u=3471791242,190574345612312312312312313&fm=27&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=3646270870,1167427402&fm=27&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=1678765743,2922147722&fm=27&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=2190711565,745728111&fm=27&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=273140288,3209511839&fm=27&gp=0.jpg'
    ]
  }
</script>
