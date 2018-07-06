<template lang="pug">
  .photo
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=5)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="photo 图片轮播"
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
        q-row(dir="left" lh=9 indent=2)
          q-col 二次封装
          q-col(
            tag="a" href="https://github.com/dimsemenov/PhotoSwipe" target="_blank"
            color="deepskyblue" decoration="underline") photoswipe
        //- 列子
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="列子")
          q-row(tag="section")
            q-row(lh=12 @clicked="showPhoto") 点击查看图片
            q-row
              q-photo(
                v-show="images.length"
                :images="images")
            q-code(type="html").
              &ltq-row lh=12 @clicked="showPhoto"&gt
                点击查看图片
              &lt/q-row&gt
              &ltq-row&gt
                &ltq-photo
                  v-show="images.length"
                  :images="images"&gt&lt/q-photo&gt
              &lt/q-row&gt
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
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExPhoto extends Vue{
    private images:string[]=[]
    private tableOptions:any={
      titles:[
        {value:'Prop'},
        {value:'Type'},
        {value:'Required'},
        {value:'Default'},
        {value:'Description'}
      ],
      datas:[
        {
          prop:[
            {value:'images'},
            {value:'Array'},
            {value:'Y'},
            {value:'无'},
            {value:'要展示的图片'}
          ]
        },
      ]
    }

    private showPhoto(){
      this.images=[
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
  }
</script>

