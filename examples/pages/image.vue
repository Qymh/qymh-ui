<template lang="pug">
  .image
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=5)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="image 图片懒加载"
        :rightEmpty="true")
    q-row(pl=2 pr=2 mt=12)
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
            tag="a" href="https://github.com/hilongjw/vue-lazyload" target="_blank"
            color="deepskyblue" decoration="underline") vue-lazyload
        //- 列子
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="请往下滚动")
        q-row
          q-image(
            v-for="(img,index) in imagesArr"
            :key="index"
            h=100
            mb=20
            bkSize="contain"
            :src="img")
          q-code(type="html").
            &ltq-image
              v-for="(img,index) in imagesArr"
              :key="index"
              h=100
              mb=20
              bkSize="contain"
              :src="img"&gt&lt/q-image&gt
            
            data:{
              return{
                imagesArr=[
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
        //- 事件回调
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="事件回调")
          q-row(fontSize=14 lh=9 indent=2 mb=2)
            |<main>@clicked</main>点击回调
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class ExImage extends Vue {
  private imagesArr: string[] = [
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
          { value: 'src' },
          { value: 'String' },
          { value: 'Y' },
          { value: '无' },
          { value: '图片地址' }
        ]
      },
      {
        prop: [
          { value: 'size' },
          { value: 'String' },
          { value: 'N' },
          { value: 'contain' },
          { value: '图片大小' }
        ]
      },
      {
        prop: [
          { value: 'repeat' },
          { value: 'String' },
          { value: 'N' },
          { value: 'no-repeat' },
          { value: '图片repeat' }
        ]
      },
      {
        prop: [
          { value: 'position' },
          { value: 'String' },
          { value: 'N' },
          { value: '50%' },
          { value: '图片定位' }
        ]
      }
    ]
  }
}
</script>
