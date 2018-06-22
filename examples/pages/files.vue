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
    q-files(color="#a1a1a1")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExFiles extends Vue{

  }
</script>
