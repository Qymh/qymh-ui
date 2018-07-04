<template lang="pug">
  .tabBar
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=5)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="tabBar 底部导航"
        fontSize=16
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
        //- 简单的列子
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="简单的列子")
          q-row(tag="section")
            q-row(h=10 color="deepskyblue" align="center" justify="center") {{curIndex}}
            q-tab-bar(
              :tabArr="tabArr"
              bkColor="#fafafa"
              @changeTab="changeTab")
            q-code(type="html").
              &ltq-row
                h=10
                color="deepskyblue" 
                align="center"
                justify="center"&gt{ { curIndex } } &lt/q-row&gt
              &ltq-tab-bar
                :tabArr="tabArr"
                bkColor="#fafafa"
                @changeTab="changeTab"&gt&lt/q-tab-bar&gt

              data:{
                return{
                  curIndex:0,
                  tabArr=[
                    {
                      icon:'q-icon icon-newshot',
                      iconColor:'',
                      activeIcon:'q-icon icon-newshotfill',
                      activeIconColor:'#F65A44',
                      text:'订单',
                      textColor:'',
                      activeTextColor:'#F65A44',
                      active:true
                    },
                    {
                      icon:'q-icon icon-hot',
                      iconColor:'',
                      activeIcon:'q-icon icon-hotfill',
                      activeIconColor:'#F65A44',
                      text:'热门',
                      textColor:'',
                      activeTextColor:'#F65A44',
                      active:false,
                      detailsMsg:123,
                      detailsMsgColor:'',
                      detailsMsgBkColor:'',
                    },
                    {
                      icon:'q-icon icon-people',
                      iconColor:'',
                      activeIcon:'q-icon icon-peoplefill',
                      activeIconColor:'#F65A44',
                      text:'个人',
                      textColor:'',
                      activeTextColor:'#F65A44',
                      active:false,
                      detailsPoint:true,
                      detailsPointColor:''
                    }
                  ]
                }
              },
              methods:{
                changeTab(index){
                  this.curIndex=index
                }
              }
            q-row(lh=9 indent=2 mb=2)
              |参数比较多,我们一个一个来解释一下,以下就是tabArr属性的全部api<br>
              |<main>icon</main>指icon的class类名<br>
              |<main>iconColor</main>指icon未激活下的颜色<br>
              |<main>activeIcon</main>指激活状态下的icon的class类名<br>
              |<main>activeIconColor</main>指激活状态下的icon的颜色<br>
              |<main>text</main>指文字<br>
              |<main>textColor</main>指文字颜色<br>
              |<main>activeTextColor</main>指激活状态下的文字颜色<br>
              |<main>active</main>指当前列有没有被激活<br>
              |<main>detailsMsg</main>指当前列侧边的消息<br>
              |<main>detailsMsgColor</main>指当前列侧边消息的颜色<br>
              |<main>detailsMsgBkColor</main>指当前列侧边消息的背景颜色<br>
              |<main>detailsPoint</main>指当前列侧边小点存不存在<br>
              |<main>detailsPointColor</main>指当前列侧边小点的颜色
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
        //- 事件回调
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="事件回调")
          q-row(lh=9 indent=2 mb=2)
            |<main>@changeTab</main>当tab改变的时候触发,
            |第一个参数是当前位置的索引
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExTabBar extends Vue{
    
    private curIndex:number=0
    private tableOptions:any={
      titles:[
        {value:'Prop'},
        {value:'Type'},
        {value:'Required'},
        {value:'Default'},
        {value:'Description'}
      ],datas:[
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
            {value:'是否有border颜色'}
          ]
        },
        {
          prop:[
            {value:'tabArr'},
            {value:'Array'},
            {value:'Y'},
            {value:'无'},
            {value:'tab数组'},
          ]
        },
      ]
    }

    public tabArr:any[]=[
      {
        icon:'q-icon icon-newshot',
        iconColor:'',
        activeIcon:'q-icon icon-newshotfill',
        activeIconColor:'#F65A44',
        text:'订单',
        textColor:'',
        activeTextColor:'#F65A44',
        active:true
      },
      {
        icon:'q-icon icon-hot',
        iconColor:'',
        activeIcon:'q-icon icon-hotfill',
        activeIconColor:'#F65A44',
        text:'热门',
        textColor:'',
        activeTextColor:'#F65A44',
        active:false,
        detailsMsg:123,
        detailsMsgColor:'',
        detailsMsgBkColor:'',
      },
      {
        icon:'q-icon icon-people',
        iconColor:'',
        activeIcon:'q-icon icon-peoplefill',
        activeIconColor:'#F65A44',
        text:'个人',
        textColor:'',
        activeTextColor:'#F65A44',
        active:false,
        detailsPoint:true,
        detailsPointColor:''
      }
    ]

    public changeTab(index:number){
      this.curIndex=index
    }
  }
</script>
