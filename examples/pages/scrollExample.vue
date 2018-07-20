<template lang="pug">
  q-row(tag="section" dir="top" row="100")
    q-row(tag="header" flex="0")
      q-head-bar(
        :leftArrow="true"
        centerText="header"
        :rightEmpty="true"
        bkColor="deepskyblue"
        color="white")
    q-scroll(@refresh="refresh" @load="load" ref="myScroll")
      q-row(
        h=15
        mb=4
        bkColor="#BEE7E9"
        align="center"
        justify="center"
        v-for="(item,index) in computedScrollArr"
        :key="index")
        q-col {{index+1}}
    q-row(flex=0 h=12 bkColor="deepskyblue" tag="footer" align="center" justify="center")
      q-col(color="white") footer
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class ExScroll extends Vue {
  private scrollArr: number[] = []
  private index: number = 0
  private size: number = 10

  private created() {
    let arr = new Array(50)
    arr.fill(1)
    this.scrollArr = arr
  }

  private get computedScrollArr() {
    return this.scrollArr.slice(0, this.index * this.size)
  }

  private get totalPage() {
    return this.scrollArr.length / this.size
  }

  private mounted() {
    let $app: any = document.querySelector('.app')
    $app.style.height = '100%'
    $app.style.width = '100%'
  }

  private refresh() {
    let myScroll: any = this.$refs.myScroll
    myScroll.scrollObj.resetUpScroll()
  }

  private load(page: any) {
    let myScroll: any = this.$refs.myScroll
    setTimeout(() => {
      this.index = page.num
      myScroll.success(10, this.totalPage)
    }, 1000)
  }

  private beforeRouteLeave(to: any, from: any, next: any) {
    let $app: any = document.querySelector('.app')
    $app.style.height = 'auto'
    $app.style.width = 'auto'
    next()
  }
}
</script>
