<template lang="pug">
  .overlay
    q-row(position="fixed" t=0 l=0 col=100 zIndex=5)
      q-head-bar(
        bkColor="deepskyblue"
        color="#fff"
        :leftArrow="true"
        centerText="overlay"
        :rightEmpty="true")
    q-row(h=12)
    q-row(pl=2 pr=2)
      q-title-bar(
        :borderBottom="true"
        leftIcon="q-icon icon-tag"
        leftIconColor="deepskyblue"
        title="演示"
        titleColor="deepskyblue")
      //- 左侧
      q-row(tag="section")
        q-row(lh=9 @clicked="leftClicked") 点击我显示左侧蒙层
        q-overlay(
          position="left"
          :show="leftShow"
          @hide="leftClickedHide")
          q-row 没有提供任何点击的元素控件,只能点击右侧的黑色背景隐藏蒙层
        q-code(type="html").
          &ltq-overlay position="left" :show="leftShow" @hide="leftClickedHide"&gt
            &ltq-row&gt没有提供任何点击的元素控件,只能点击右侧的黑色背景隐藏蒙层&lt/q-row&gt
          &lt/q-overlay&gt
      //- 右侧
      q-row(tag="section")
        q-row(lh=9 @clicked="rightClicked") 点击我显示右侧蒙层(有内部结构)
        q-overlay(
          position="right"
          :show="rightShow"
          @hide="rightClickedHide")
          q-head-bar(
            bkColor="orange"
            color="#fff"
            :leftEmpty="true"
            centerText="蒙层右"
            @rightClicked="rightClickedHide")
            q-row(w=10 slot="right")
              i.q-icon.icon-close
        q-code(type="html").
          &ltq-overlay position="right" :show="rightShow"
            @hide="rightClickedHide"&gt
            &ltq-head-bar bkColor="orange" color="#fff" :leftEmpty="true" centerText="蒙层右" @rightClicked="rightClickedHide"&gt
                &ltq-row w="10" slot="right"&gt
                  &lti class="q-icon icon-close"&gt&lt/i&gt
                &lt/q-row&gt
              &lt/q-head-bar&gt
          &lt/q-overlay&gt
      //- 顶层
      q-row(tag="section")
        q-row(lh=9 @clicked="topClicked") 点击我显示顶部蒙层
        q-overlay(
          position="top"
          :show="topShow"
          :minHeight="11"
          :maxHeight="14"
          bkColor="#eee"
          @hide="topClickedHide")
          q-row(lh=9 pl=2 pr=2)
            q-row 1.没有提供任何点击的元素控件,只能点击下方的黑色背景隐藏蒙层
            q-row 2.设置了蒙层背景颜色为#eee(默认为#fff)
            q-row 3.设置了最小高度为11rem(默认为10) 最大高度为14rem(默认为13)
        q-code(type="html").
          &ltq-overlay
            position="top"
            :show="topShow"
            :minHeight="11"
            :maxHeight="14"
            bkColor="#eee"
            @hide="topClickedHide"&gt
            &ltq-row lh=9 pl=2 pr=2&gt
              &ltq-row&gt1.没有提供任何点击的元素控件,只能点击下方的黑色背景隐藏蒙层&lt/q-row&gt
              &ltq-row&gt2.设置了蒙层背景颜色为#eee(默认为#fff)&lt/q-row&gt
              &ltq-row&gt3.设置了最小高度为11rem(默认为10) 最大高度为14rem(默认为13)&lt/q-row&gt
            &lt/q-row&gt
          &lt/q-overlay&gt
      //- 底部
      q-row(tag="section")
        q-row(lh=9 @clicked="bottomClicked") 点击我显示底部蒙层
        q-overlay(
          position="bottom"
          :show="bottomShow"
          @hide="bottomClickedHide")
          q-head-bar(
            bkColor="deepskyblue" color="#fff"
            :leftEmpty="true"
            centerText="表单验证"
            :rightEmpty="true"
            @rightClicked="bottomClickedHide")
            q-row(w=10 slot="right")
              i.q-icon.icon-close
          q-row(tag="section" pl=2 pr=2)
            q-row(lh=9 fontSize="14" color="#a1a1a1") 姓名:(3~7个字符)
            q-input(
              v-model="name"
              lh=9 type="text" min="3" max="7"
              placeholder="请输入你的名字" @errors="errors('name')")
            q-row(lh=9 fontSize="14" color="#a1a1a1") 电话:
            q-input(
              v-model="tel" lh=9 type="tel"
              placeholder="请输入你的电话" @errors="errors('tel')")
            q-row(mt=4 justify="end" align="center")
              q-tag(
                pl=10 pr=10 pt=3 pb=3
                bkColor="deepskyblue" color="#fff" value="提交"
                @clicked="submit")
        q-code(type="html").
          &ltq-overlay position="bottom" :show="bottomShow" @hide="bottomClickedHide"&gt
            &lt!-- 头部 --&gt
            &ltq-head-bar
              bkColor="deepskyblue" color="#fff"
              :leftEmpty="true" centerText="表单验证"
              :rightEmpty="true" @rightClicked="bottomClickedHide"&gt&lt/q-head-bar&gt
              &ltq-row w=10 slot="right" &gt
                &lti class="q-icon icon-close" &gt
              &lt/q-row&gt
            &lt!-- 姓名 --&gt
            &ltq-row
              lh=9 fontSize="14"
              color="#a1a1a1"&gt姓名:(3~7个字符)&lt/q-row&gt
            &ltq-input
              v-model="name" lh=9 type="text"
              min="3" max="7" placeholder="请输入你的名字"
              @errors="errors('name')"&gt&lt/q-input&gt
            &lt!-- 电话 --&gt
            &ltq-row
              lh=9 fontSize="14" color="#a1a1a1"&gt电话:&lt/q-row&gt
            &ltq-input
              v-model="tel" lh=9 type="tel"
              placeholder="请输入你的电话" @errors="errors('tel')"&gt&lt/q-input&gt
            &lt!-- 提交按钮 --&gt
            &ltq-row mt=4 justify="end" align="center"&gt
              &ltq-tag
                pl=10 pr=10 pt=3 pb=3 
                bkColor="deepskyblue" color="#fff" 
                value="提交" @clicked="submit"&gt&lt/q-tag&gt
            &lt/q-row&gt
          &lt/q-overlay&gt
      //- api
      q-row
        q-title-bar(
          :borderBottom="true"
          leftIcon="q-icon icon-tag"
          leftIconColor="deepskyblue"
          title="API"
          titleColor="deepskyblue")
        q-table(:tableOptions="tableOptions")
      //- 事件回调
      q-row(pb=10)
        q-title-bar(
        :borderBottom="true"
        leftIcon="q-icon icon-tag"
        leftIconColor="deepskyblue"
        title="事件回调"
        titleColor="deepskyblue")
        q-row(lh=9)
          <main>@hide</main> 蒙层消失的时候触发

</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExOverlay extends Vue{
    // 左侧蒙层
    private leftShow:boolean=false
    // 右侧蒙层
    private rightShow:boolean=false
    // 顶部蒙层
    private topShow:boolean=false
    // 底部蒙层
    private bottomShow:boolean=false

    private name:string=''
    private tel:number|string=''
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
            {value:'show'},
            {value:'boolean'},
            {value:'Y'},
            {value:'false'},
            {value:'蒙层是否展现'}
          ]
        },
        {
          prop:[
            {value:'position'},
            {value:'String'},
            {value:'Y'},
            {value:'无'},
            {value:'蒙层出现的方向'}
          ]
        },
        {
          prop:[
            {value:'opacity'},
            {value:'Number'},
            {value:'N'},
            {value:'0.3'},
            {value:'蒙层的透明度'}
          ]
        },
        {
          prop:[
            {value:'bkColor'},
            {value:'String'},
            {value:'N'},
            {value:'#ffffff'},
            {value:'蒙层的背景颜色'}
          ]
        },
        {
          prop:[
            {value:'minHeight'},
            {value:'Number'},
            {value:'N'},
            {value:'10'},
            {value:'蒙层的最小高度,单位rem'}
          ]
        },
        {
          prop:[
            {value:'maxHeight'},
            {value:'Number'},
            {value:'N'},
            {value:'13'},
            {value:'蒙层的最大高度,单位rem'}
          ]
        }
      ]
    }

    // 左侧显示
    private leftClicked(){
      this.leftShow=!this.leftShow
    }
    // 左侧隐藏
    private leftClickedHide(){
      this.leftShow=false
    }
    // 右侧显示
    private rightClicked(){
      this.rightShow=!this.rightShow
    }
    // 右侧隐藏
    private rightClickedHide(){
      this.rightShow=false
    }
    // 顶部显示
    private topClicked(){
      this.topShow=!this.topShow
    }
    // 顶部隐藏
    private topClickedHide(){
      this.topShow=false
    }
    // 底部显示
    private bottomClicked(){
      this.bottomShow=!this.bottomShow
    }
    // 底部隐藏
    private bottomClickedHide(){
      this.bottomShow=false
    }

    // 表单错误抓取
    private errors(type:string){
      switch (type) {
        case 'name':
          this.$notice.toast('姓名的长度不符合规范!',1000,'bottom')          
          break
        case 'tel':
          this.$notice.toast('请输入正确的电话类型!',1000,'bottom')
          break
      }
    }

    // 提交
    private submit(){
      if(this.name&&this.tel){
        this.$notice.toast(`姓名:${this.name}\n电话:${this.tel}`,1000,'bottom')
      }else{
        this.$notice.toast('姓名和电话不能为空!',1000,'bottom')
      }
    }
  }

</script>
