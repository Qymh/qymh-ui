<template lang="pug">
  .select
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="select 滑动选择"
        :rightEmpty="true")
    q-row(h=12)
    q-row(pl=2 pr=2 position="relative")
      q-row
        q-cell(
          :title="dateNow"
          :borderBottom="true")
        q-select(
          position="absolute"
          t=0
          r=0
          col=100
          row=100
          id="date"
          title="请选择日期"
          :wheels="datesArr"
          :seat="seat"
          @chooseData="chooseData")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  import {Route} from 'vue-router'
  @Component({})
  export default class ExSelect extends Vue{
    // 日期数组
    private datesArr:any[]=[
      {
        data:[]
      }
    ]

    // 默认位置
    private seat:number[]=[]

    // 当前选择的日期
    private dateNow:string='请选择日期'

    // 挂载
    private mounted () {
      this.$nextTick(()=>{
        let datesArr=this.datesArr[0].data
        let now=new Date()
        let currentYear=now.getFullYear()
        let currentMonth=now.getMonth()+1
        let currentDay=now.getDate()
        let currentYearIndex=currentYear%(currentYear-1)

        this.seat=[currentYearIndex,currentMonth-1,currentDay-1]
        
        // 加入年
        for(let year=currentYear-1;year<currentYear+2;year++){  
          datesArr.push({
            id:year,
            value:year+'年'
          })
        }

        // 加入月
        for(let i in datesArr){
          datesArr[i].childs=[]
          for(let month=1;month<=12;month++){
            datesArr[i].childs.push({
              id:month,
              value:month+'月'
            })
          }
        }

        // 加入日
        for(let i in datesArr){
          let year=datesArr[i].id
          for(let month=1;month<=12;month++){
            datesArr[i].childs[month-1].childs=[]
            let day=new Date(year,month,0).getDate()
            for(let j=1;j<=day;j++){
              datesArr[i].childs[month-1].childs.push({
                id:j,
                value:j+'日'
              })
            }
          }
        }
      })
    }

    // 接收选择的日期
    private chooseData(date:any){
      let year=date[0].value
      let month=date[1].value
      let day=date[2].value
      this.dateNow=`${year}${month}${day}`
    }
  }
</script>
