<template lang="pug">
  .q_table
    table.q_table_box
      thead
        tr
          th(
            v-for="(th,index) in tableOptions.titles"
            :key="index") {{th.value}}
      tbody
        tr(
          v-for="(tr,r) in tableOptions.datas"
          :key="r")
          td(
            v-for="(td,d) in tr.prop"
            :style="{color:d>0?color:''}"
            :key="d") {{td.value}}
</template>

<script lang="ts">
  import {Vue,Component,Prop} from 'vue-property-decorator'
  @Component({})
  export default class QTable extends Vue{
    // table设置
    @Prop({default:{}})
    private tableOptions:table.tableArr

    // 字体突出显示的颜色
    @Prop({default:'deepskyblue'})
    private color:string
  }
</script>

<style lang="scss" scoped>
  .q_table{
    display: flex;
    justify-content: center;
    padding: 0.4rem;
    overflow: auto;
    &_box{
      border-collapse: collapse;
      width: 100%;
      overflow: auto;
      border-spacing: 0;
      display: block;
      word-break: keep-all;
      th,td{
        min-width: 3rem;
        padding: 0.1rem 0.2rem;
        font-weight: normal;
        border: 1px solid #666;
        text-align: center;
      }
      th{
        height: 1rem;
      }
      td{
        height: 2rem;
      }
      tbody{
        tr:nth-child(even){
          background-color: #f8f8f8;
        }
      }
    }
  }
</style>

