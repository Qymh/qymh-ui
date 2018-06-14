<template lang="pug">
  .table
    q-head-bar(
      bkColor="deepskyblue"
      color="#fff"
      :leftArrow="true"
      centerText="q-table"
      :rightEmpty="true")
    q-table(
      :tableOptions="tableOptions")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExTable extends Vue{
    private tableOptions:any={
      titles:[
        {value:'名字'},
        {value:'性别'},
        {value:'年龄'},
        {value:'班级'},
      ],
      datas:[
        {
          prop:[
            {value:'test1'},
            {value:'男'},
            {value:'18'},
            {value:'6.1'}
          ]
        },
        {
          prop:[
            {value:'test2'},
            {value:'女'},
            {value:'19'},
            {value:'6.2'}
          ]
        }
      ]
    }
  }
</script>
