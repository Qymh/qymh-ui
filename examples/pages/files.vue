<template lang="pug">
  .files
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="q-files"
        :rightEmpty="true")
    q-row(h=12)
    q-row
      q-files(ref="myFiles" @getFiles="getFiles" color="#a1a1a1")
    q-row(dir="left" wrap="wrap")
      q-row(
        position="relative"
        v-for="(img,index) in images"
        :key="index")
        q-col(
          tag="img" h=30 w=30
          :src="img")
        q-row(
          position="absolute" align="center" justify="center"
          r=0 t=0 w=5 h=5 radius=5 bkColor="deepskyblue"
          fontSize="12" color="white" @clicked="remove(index)")
          q-col X
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExFiles extends Vue{
    private files:any=[]
    private images:any=[]

    private getFiles(data:any){
      this.files=data.files
      this.images=data.images
    }

    private remove(index:any){
      let myFiles:any=this.$refs.myFiles
      myFiles.files.splice(index,1)
      myFiles.images.splice(index,1)
    }
  }
</script>
