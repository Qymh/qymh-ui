<template lang="pug">
  .select
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=1)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="select 滑动选择"
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
          q-row(dir="left" lh=9 indent=2)
            q-col 二次封装
            q-col(
              tag="a" href="https://github.com/onlyhom/mobileSelect.js" target="_blank"
              color="deepskyblue" decoration="underline") mobileSelect.js
          //- 星期列子
          q-row(tag="section")
            q-row(position="relative")
              q-row(
                h=10
                align="center"
                decoration="underline"
                color="deepskyblue"
                fontSize=14) {{weekNow}}
              q-select(
                position="absolute"
                t=0
                r=0
                col=100
                row=100
                id="num"
                title="请选择星期"
                :wheels="weekArr"
                :seat="weekSeat"
                @chooseData="chooseNum")
            main template
            q-code(type="html").
              &ltq-row position="relative"&gt
                &ltq-row
                  h=10
                  align="center"
                  decoration="underline"
                  color="deepskyblue"
                  fontSize=14&gt&lt/q-row&gt
                &ltq-select
                  position="absolute"
                  t=0
                  r=0
                  col=100
                  row=100
                  id="num"
                  title="请选择星期"
                  :wheels="weekArr"
                  :seat="weekSeat"
                  @chooseData="chooseNum"&gt
                &lt/q-select&gt
              &lt/q-row&gt
            main javascript
            q-code.
              data() {
                return {
                  weekArr: [
                    {
                      data: ['周日','周一','周二','周三','周四','周五','周六']
                    }
                  ],
                  weekSeat: [0],
                  weekNow: '点击选择星期'
                }
              },
              methods: {
                chooseNum(date){
                  this.weekNow = date[0]
                }
              }
          //- 日期列子 
          q-row(tag="section")
            q-row(position="relative")
              q-row(
                h=10
                align="center"
                decoration="underline"
                color="deepskyblue"
                fontSize=14) {{dateNow}}
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
            main template
            q-code(type="html").
              &ltq-row position="relative"&gt
                &ltq-cell
                  :title="dateNow"
                  :borderBottom="true"&gt&lt/q-cell&gt
                &ltq-select
                  position="absolute"
                  t=0
                  r=0
                  col=100
                  row=100
                  id="date"
                  title="请选择日期"
                  :wheels="datesArr"
                  :seat="seat"
                  @chooseData="chooseData"&gt
                &lt/q-select&gt
              &lt/q-row&gt
            main javascript
            q-code.
              data() {
                return {
                  datesArr: any[] = [{
                    data: []
                  }],
                  seat = []
                }
              },
              mounted() {
                this.$nextTick(() => {
                  let datesArr = this.datesArr[0].data
                  let now = new Date()
                  let currentYear = now.getFullYear()
                  let currentMonth = now.getMonth() + 1
                  let currentDay = now.getDate()
                  let currentYearIndex = currentYear % (currentYear - 1)

                  this.seat = [currentYearIndex, currentMonth - 1, currentDay - 1]

                  // 加入年
                  for (let year = currentYear - 1; year & ltcurrentYear + 2; year++) {
                    datesArr.push({
                      id: year,
                      value: year + '年'
                    })
                  }

                  // 加入月
                  for (let i in datesArr) {
                    datesArr[i].childs = []
                    for (let month = 1; month <= 12; month++) {
                      datesArr[i].childs.push({
                        id: month,
                        value: month + '月'
                      })
                    }
                  }

                  // 加入日
                  for (let i in datesArr) {
                    let year = datesArr[i].id
                    for (let month = 1; month <= 12; month++) {
                      datesArr[i].childs[month - 1].childs = []
                      let day = new Date(year, month, 0).getDate()
                      for (let j = 1; j <= day; j++) {
                        datesArr[i].childs[month - 1].childs.push({
                          id: j,
                          value: j + '日'
                        })
                      }
                    }
                  }
                })
              },
              methods: {
                chooseData(date) {
                  let year = date[0].value
                  let month = date[1].value
                  let day = date[2].value
                  this.dateNow = `${year}${month}${day}`
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
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Route } from 'vue-router'
@Component({})
export default class ExSelect extends Vue {
  // 日期数组
  private datesArr: any[] = [
    {
      data: []
    }
  ]

  // 星期
  private weekArr: any[] = [
    {
      data: ['周日','周一','周二','周三','周四','周五','周六']
    }
  ]

  // 默认位置
  private seat: number[] = []

  // 数字默认位置
  private weekSeat: number[] = [0]

  // 当前选择的日期
  private dateNow: string = '点击选择日期'

  // 当前选择的星期
  private weekNow: string|number = '点击选择星期'

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
          { value: 'id' },
          { value: 'String' },
          { value: 'Y' },
          { value: '无' },
          { value: '选择器的唯一id' }
        ]
      },
      {
        prop: [
          { value: 'title' },
          { value: 'String' },
          { value: 'Y' },
          { value: '无' },
          { value: '选择器标题' }
        ]
      },
      {
        prop: [
          { value: 'wheels' },
          { value: 'Array' },
          { value: 'Y' },
          { value: '无' },
          { value: '滚轴数据数组' }
        ]
      },
      {
        prop: [
          { value: 'seat' },
          { value: 'Array' },
          { value: 'N' },
          { value: '无' },
          { value: '滚轴位置' }
        ]
      }
    ]
  }

  // 挂载
  private mounted() {
    this.$nextTick(() => {
      let datesArr = this.datesArr[0].data
      let now = new Date()
      let currentYear = now.getFullYear()
      let currentMonth = now.getMonth() + 1
      let currentDay = now.getDate()
      let currentYearIndex = currentYear % (currentYear - 1)

      this.seat = [currentYearIndex, currentMonth - 1, currentDay - 1]

      // 加入年
      for (let year = currentYear - 1; year < currentYear + 2; year++) {
        datesArr.push({
          id: year,
          value: year + '年'
        })
      }

      // 加入月
      for (let i in datesArr) {
        datesArr[i].childs = []
        for (let month = 1; month <= 12; month++) {
          datesArr[i].childs.push({
            id: month,
            value: month + '月'
          })
        }
      }

      // 加入日
      for (let i in datesArr) {
        let year = datesArr[i].id
        for (let month = 1; month <= 12; month++) {
          datesArr[i].childs[month - 1].childs = []
          let day = new Date(year, month, 0).getDate()
          for (let j = 1; j <= day; j++) {
            datesArr[i].childs[month - 1].childs.push({
              id: j,
              value: j + '日'
            })
          }
        }
      }
    })
  }

  // 接收选择的日期
  private chooseData(date: any) {
    let year = date[0].value
    let month = date[1].value
    let day = date[2].value
    this.dateNow = `${year}${month}${day}`
  }

  private chooseNum(date: any){
    this.weekNow = date[0]
  }
}
</script>
