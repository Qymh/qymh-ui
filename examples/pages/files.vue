<template lang="pug">
  .files
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=1)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="q-files"
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
        //- 列子
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="列子")
          q-row(tag="section")
            q-row
              q-files(ref="myFiles" @getFiles="getFiles" color="#a1a1a1")
            q-row(dir="left" wrap="wrap")
              q-row(
                position="relative"
                v-for="(img,index) in images"
                :key="index")
                q-row(tag="img" h=30 w=30
                  :src="img")
                q-row(
                  position="absolute" align="center" justify="center"
                  r=0 t=0 w=5 h=5 radius=5 bkColor="deepskyblue"
                  fontSize="12" color="white" @clicked="remove(index)")
                  q-col X
            main template
            q-code(type="html").
              &ltq-row&gt
                &ltq-files ref="myFiles" @getFiles="getFiles" color="#a1a1a1"&gt&lt/q-files&gt
                &ltq-row
                  position="relative"
                  v-for="(img,index) in images"
                  :key="index")&gt
                  &ltq-row tag="img" h=30 w=30:src="img"&gt&lt/q-row&gt
                  &ltq-row
                    position="absolute" align="center" justify="center"
                    r=0 t=0 w=5 h=5 radius=5 bkColor="deepskyblue"
                    fontSize="12" color="white" @clicked="remove(index)"&gt
                    &ltq-col&gtX&lt/q-col&gt
                  &lt/q-row&gt
                &lt/q-row&gt
              &lt/q-row&gt
            main javascript
            q-code.
              data() {
                return {
                  files: [],
                  images: []
                }
              },
              methods: {
                getFiles(data) {
                  this.files = data.files
                  this.images = data.images
                },
                remove(index) {
                  let myFiles = this.$refs.myFiles
                  myFiles.files.splice(index, 1)
                  myFiles.images.splice(index, 1)
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
            |<main>@getFiles</main>上传文件后返回<br>
            |有两个参数,第一个是<main>files</main>数组,第二个是图片的<main>src</main>数组
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class ExFiles extends Vue {
  private files: any = []
  private images: any = []
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
          { value: 'multiple' },
          { value: 'Boolean' },
          { value: 'N' },
          { value: 'true' },
          { value: '是否允许多文件上传' }
        ]
      },
      {
        prop: [
          { value: 'maxCount' },
          { value: 'Number' },
          { value: 'N' },
          { value: '3' },
          { value: '最大上传数量' }
        ]
      },
      {
        prop: [
          { value: 'maxSize' },
          { value: 'Number' },
          { value: 'N' },
          { value: '4' },
          { value: '最大上传大小,单位M' }
        ]
      },
      {
        prop: [
          { value: 'value' },
          { value: 'String' },
          { value: 'Y' },
          { value: '点击上传' },
          { value: '上传的文字提醒' }
        ]
      },
      {
        prop: [
          { value: 'hasBorder' },
          { value: 'Boolean' },
          { value: 'N' },
          { value: 'true' },
          { value: '是否有边框' }
        ]
      },
      {
        prop: [
          { value: 'borderColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '#a1a1a1' },
          { value: '边框颜色' }
        ]
      }
    ]
  }

  private getFiles(data: any) {
    this.files = data.files
    this.images = data.images
  }

  private remove(index: any) {
    let myFiles: any = this.$refs.myFiles
    myFiles.files.splice(index, 1)
    myFiles.images.splice(index, 1)
  }
}
</script>
