<template lang="pug">
  .axios
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=1)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="$axios 请求"
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
        q-row(@clicked="getProduct") 123
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import * as api from '@/lib/api'

@Component({})
export default class ExAxios extends Vue {
  private getProduct() {
    this.$axios.get(this, api.getProduct,{}).then((data: any) => {
      console.log(data)
    })
  }
}
</script>
