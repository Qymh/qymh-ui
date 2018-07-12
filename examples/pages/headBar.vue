<template lang="pug">
  .headBar
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=5)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="headBar 头部导航"
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
            q-head-bar(
              :leftArrow="true"
              centerText="订单列表"
              centerTextColor="#f65a44"
              rightText="筛选"
              :borderBottom="true")
            q-code(type="html").
              &ltq-head-bar
                :leftArrow="true"
                centerText="订单列表"
                rightText="筛选"
                :borderBottom="true"&gt&lt/q-head-bar&gt
          q-row(tag="section")
            q-head-bar(
              bkColor="#f65a44"
              color="white"
              :leftEmpty="true"
              centerText="购物车"
              rightText="清空")
            q-code(type="html").
              &ltq-head-bar
                bkColor="#f65a44"
                color="white"
                :leftEmpty="true"
                centerText="购物车"
                rightText="清空"&gt
              &lt/q-head-bar&gt
        //- 插槽
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="插槽")
          q-row(fontSize=14 lh=9 indent=2 mb=2) 插槽有三个
            |<main>slot="left"</main>
            |<main>slot="center"</main>
            |<main>slot="right"</main>
            |分别代表了左中右三个位置
          q-row(tag="section")
            q-head-bar(bkColor="#f65a44" color="white")
              q-row(
                dir="top"
                justify="center"
                align="center"
                slot="left")
                q-col.icon-newshotfill.q-icon(
                  tag="i"
                  fontSize=16)
                q-col(fontSize=10 mt=0.5) 分类
              q-row(slot="center")
                q-col 首页
              q-row(
                dir="top"
                justify="center"
                align="center"
                slot="right")
                q-col.icon-peoplefill.q-icon(
                  tag="i"
                  fontSize=16)
                q-col(fontSize=10 mt=0.5) 个人
            q-code(type="html").
              &ltq-head-bar&gt
                &ltq-row dir="top" justify="center" align="center" slot="left"&gt
                  &ltq-col class="icon-newshotfill q-icon" tag="i" fontSize=16&gt&lt/q-col&gt
                  &ltq-col fontSize=10 mt=0.5&gt 分类 &lt/q-col&gt
                &lt/q-row&gt
                &ltq-row slot="center"&gt
                  &ltq-col&gt首页&lt/q-col&gt
                &lt/q-row&gt
                &ltq-row dir="top" justify="center" align="center" slot="right"&gt
                  &ltq-col class="icon-peoplefill q-icon" tag="i" fontSize=16&gt&lt/q-col&gt
                  &ltq-col fontSize=10 mt=0.5&gt 个人 &lt/q-col&gt
                &lt/q-row&gt
              &lt/q-head-bar&gt
        //- 事件回调
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="事件回调")
          q-row(fontSize=14 lh=9 indent=2 mb=2) 事件回调有4个
            |<main>@leftClicked</main>
            |<main>@centerClicked</main>
            |<main>@rightClicked</main>
            |<main>@clicked</main>
            |分别代表了左侧点击、中间点击、右侧点击、全局点击,
            |事件返回的参数有两个,第一个参数是事件的<main>event</main>,第二个参数是当前所在区域的文字,全局点击事件只有第一个参数,
            |需要注意的是当你设置了<main>:leftArrow="true"</main>即显示左侧箭头的时候,
            |默认事件是回退到上一个页面
            |另一个要注意的点是如果你在子元素上绑定了事件又同时绑定了全局点击,请在子元素的事件上<main>阻止冒泡</main>,
            |你可以点击下面的列子尝试
          q-row(tag="section")
            q-head-bar(
              bkColor="#f65a44"
              color="white"
              :leftArrow="true"
              centerText="中间"
              rightText="右侧"
              @clicked="clicked"
              @leftClicked="leftClicked"
              @centerClicked="centerClicked")
            q-code(type="html").
              &ltq-head-bar
                bkColor="#f65a44"
                color="white"
                :leftArrow="true"
                centerText="中间"
                rightText="右侧"
                @clicked="clicked"
                @leftClicked="leftClicked"
                @centerClicked="centerClicked"&gt
              &lt/q-head-bar&gt

              methods:{
                clicked(){
                  this.$notice.toast('你触发了全局点击事件')
                },
                leftClicked(e){
                  e.stopPropagation()
                  this.$notice.toast('你点击了左侧默认事件会回退到上一页')
                },
                centerClicked(e){
                  e.stopPropagation()
                  this.$notice.toast('你点击了中间')
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
        //- 插槽
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="插槽")
          q-row(fontSize=14 lh=9 indent=2 mb=2) 目前有三个插槽
            |<main>slot="left"</main>表左侧
            |<main>slot="center"</main>表中间
            |<main>slot="right"</main>表右侧
        //- 事件回调
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="事件回调")
          q-row(fontSize=14 lh=9 indent=2 mb=2) 目前有四个
            |<main>@clicked</main>表全局点击<br>
            |<main>@leftClicked</main>表左侧点击<br>
            |<main>@centerClicked</main>表中间点击<br>
            |<main>@rightClicked</main>表右侧点击<br>
            |回调有两个参数,第一个是事件的<main>Event</main>,第二个是点击位置的文字,
            |全局点击只有第一个参数
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExHeadBar extends Vue{

    private tableOptions:any={
      titles:[
        {value:'Prop'},
        {value:'Type'},
        {value:'Required'},
        {value:'Default'},
        {value:'Description'}
      ],
      datas:[
        {
          prop:[
            {value:'bkColor'},
            {value:'String'},
            {value:'N'},
            {value:'无'},
            {value:'背景颜色'}
          ]
        },
        {
          prop:[
            {value:'color'},
            {value:'String'},
            {value:'N'},
            {value:'无'},
            {value:'字体颜色'}
          ]
        },
        {
          prop:[
            {value:'bothWidth'},
            {value:'Number'},
            {value:'N'},
            {value:'1'},
            {value:'两边保留的宽度'}
          ]
        },
        {
          prop:[
            {value:'hasPadding'},
            {value:'Boolean'},
            {value:'N'},
            {value:'true'},
            {value:'是否有两边的边距'}
          ]
        },
        {
          prop:[
            {value:'padding'},
            {value:'Number'},
            {value:'N'},
            {value:'0.2'},
            {value:'两边的边距值'}
          ]
        },
        {
          prop:[
            {value:'borderTop'},
            {value:'Boolean'},
            {value:'N'},
            {value:'false'},
            {value:'是否有上border'}
          ]
        },
        {
          prop:[
            {value:'borderBottom'},
            {value:'Boolean'},
            {value:'N'},
            {value:'false'},
            {value:'是否有下border'}
          ]
        },
        {
          prop:[
            {value:'borderColor'},
            {value:'String'},
            {value:'N'},
            {value:'#d6d7dc'},
            {value:'border颜色'}
          ]
        },
        {
          prop:[
            {value:'leftEmpty'},
            {value:'Boolean'},
            {value:'N'},
            {value:'false'},
            {value:'是否有左侧占空'}
          ]
        },
        {
          prop:[
            {value:'leftArrow'},
            {value:'Boolean'},
            {value:'N'},
            {value:'false'},
            {value:'是否显示左侧箭头'}
          ]
        },
        {
          prop:[
            {value:'leftText'},
            {value:'String'},
            {value:'N'},
            {value:'无'},
            {value:'左侧文字'}
          ]
        },
        {
          prop:[
            {value:'leftTextColor'},
            {value:'String'},
            {value:'N'},
            {value:'无'},
            {value:'左侧文字颜色'}
          ]
        },
        {
          prop:[
            {value:'centerEmpty'},
            {value:'Boolean'},
            {value:'N'},
            {value:'false'},
            {value:'是否有中间占空'}
          ]
        },
        {
          prop:[
            {value:'centerText'},
            {value:'String'},
            {value:'N'},
            {value:'无'},
            {value:'中间文字'}
          ]
        },
        {
          prop:[
            {value:'centerTextColor'},
            {value:'String'},
            {value:'N'},
            {value:'无'},
            {value:'中间文字颜色'}
          ]
        },
         {
          prop:[
            {value:'rightEmpty'},
            {value:'Boolean'},
            {value:'N'},
            {value:'false'},
            {value:'是否有右侧占空'}
          ]
        },
        {
          prop:[
            {value:'rightArrow'},
            {value:'Boolean'},
            {value:'N'},
            {value:'false'},
            {value:'是否显示右侧箭头'}
          ]
        },
        {
          prop:[
            {value:'rightText'},
            {value:'String'},
            {value:'N'},
            {value:'无'},
            {value:'右侧文字'}
          ]
        },
        {
          prop:[
            {value:'rightTextColor'},
            {value:'String'},
            {value:'N'},
            {value:'无'},
            {value:'右侧文字颜色'}
          ]
        }
      ]
    }

    private clicked(){
      this.$notice.toast('你触发了全局点击事件')
    }

    private leftClicked(e:any){
      e.stopPropagation()
      this.$notice.toast('你点击了左侧,默认事件会回退到上一页')
    }

    private centerClicked(e:any){
      e.stopPropagation()
      this.$notice.toast('你点击了中间')
    }
  }
</script>
