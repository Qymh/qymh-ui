<template lang="pug">
  .text
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100)
      q-head-bar(
        bkColor="deepskyblue"
        color="#fff"
        :leftArrow="true"
        centerText="q-text"
        :rightEmpty="true")
    q-row(h=12)
    q-text(lines=2)
      q-row(pl=1 pr=1)
        q-tag(pt=1 pb=1 pl=2.5 pr=2.5 fontSize=14 bkColor="orange" value="促销")
        q-row(tag="span" display="inline" lh=5 ml=1) 123123123123131231233123132313123123123123123123123123123123131231233123132313123123123123123123123123123123131231233123132313123123123123123123123123123123131231233123132313123123123123123123
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExText extends Vue{

  }
</script>
