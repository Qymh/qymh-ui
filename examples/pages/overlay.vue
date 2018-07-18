<template lang="pug">
  .overlay
    q-row(position="fixed" t=0 l=0 col=100 zIndex=1)
      q-head-bar(
        bkColor="deepskyblue"
        color="#fff"
        :leftArrow="true"
        centerText="overlay"
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
          //- 左侧
          q-row(tag="section")
            q-row(fontSize=14 lh=9 @clicked="leftClicked") 点击我显示左侧蒙层
            q-overlay(
              position="left"
              :show="leftShow"
              @hide="leftClickedHide")
              q-row 没有提供任何点击的元素控件,只能点击右侧的黑色背景隐藏蒙层
            q-code(type="html").
              &ltq-overlay position="left" :show="leftShow" @hide="leftClickedHide"&gt
                &ltq-row&gt没有提供任何点击的元素控件,只能点击右侧的黑色背景隐藏蒙层&lt/q-row&gt
              &lt/q-overlay&gt

              data:{
                return{
                  leftShow=false
                }
              },
              methods:{
                leftClicked(){
                  this.leftShow=!this.leftShow
                },
                leftClickedHide(){
                  this.leftShow=false
                }
              }
          //- 右侧
          q-row(tag="section")
            q-row(fontSize=14 lh=9 @clicked="rightClicked") 点击我显示右侧蒙层(有内部结构)
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

              data:{
                return{
                  rightShow=false
                }
              },
              methods:{
                rightClicked(){
                  this.rightShow=!this.rightShow
                },
                rightClickedHide(){
                  this.rightShow=false
                }
              }
          //- 顶层
          q-row(tag="section")
            q-row(fontSize=14 lh=9 @clicked="topClicked") 点击我显示顶部蒙层
            q-overlay(
              position="top"
              :show="topShow"
              :minHeight="11"
              :maxHeight="14"
              bkColor="#eee"
              @hide="topClickedHide")
              q-row(fontSize=14 lh=9 pl=2 pr=2)
                q-col 1.没有提供任何点击的元素控件,只能点击下方的黑色背景隐藏蒙层
                q-col 2.设置了蒙层背景颜色为#eee(默认为#fff)
                q-col 3.设置了最小高度为11rem(默认为10) 最大高度为14rem(默认为13)
            q-code(type="html").
              &ltq-overlay
                position="top"
                :show="topShow"
                :minHeight="11"
                :maxHeight="14"
                bkColor="#eee"
                @hide="topClickedHide"&gt
                &ltq-row lh=9 pl=2 pr=2&gt
                  &ltq-col&gt1.没有提供任何点击的元素控件,只能点击下方的黑色背景隐藏蒙层&lt/q-col&gt
                  &ltq-col&gt2.设置了蒙层背景颜色为#eee(默认为#fff)&lt/q-col&gt
                  &ltq-col&gt3.设置了最小高度为11rem(默认为10) 最大高度为14rem(默认为13)&lt/q-col&gt
                &lt/q-row&gt
              &lt/q-overlay&gt

              data:{
                return{
                  topShow=false
                }
              },
              methods:{
                topClicked(){
                  this.topShow=!this.topShow
                },
                topClickedHide(){
                  this.topShow=false
                }
              }
          //- 底部
          q-row(tag="section")
            q-row(fontSize=14 lh=9 @clicked="bottomClicked") 点击我显示底部蒙层(较复杂的列子)
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
                q-form(
                  ref="myForm"
                  :model="datas"
                  :rules="rules")
                  q-row(fontSize=14 lh=9 color="#a1a1a1") 姓名:(3~7个字符)
                  q-input(
                    prop="name"
                    v-model="datas.name"
                    lh=9 type="text"
                    placeholder="请输入你的名字")
                  q-row(fontSize=14 lh=9 color="#a1a1a1") 电话:
                  q-input(
                    prop="tel" v-model="datas.tel" lh=9 type="tel"
                    placeholder="请输入你的电话")
                  q-row(mt=4 justify="end" align="center")
                    q-tag(
                      pl=10 pr=10 pt=3 pb=3
                      bkColor="deepskyblue" color="#fff" value="提交"
                      @clicked="submit")
            q-code(type="html").
              &ltq-overlay
                position="bottom"
                :show="bottomShow"
                @hide="bottomClickedHide"&gt
                &ltq-head-bar
                  bkColor="deepskyblue" color="#fff"
                  :leftEmpty="true"
                  centerText="表单验证"
                  :rightEmpty="true"
                  @rightClicked="bottomClickedHide"&gt
                  &ltq-row w=10 slot="right"&gt
                    &lti class="q-icon.icon-close"&gt&lt/i&gt
                  &lt/q-row&gt
                &lt/q-head-bar&gt
                &ltq-row tag="section"&gt
                  &ltq-form
                    ref="myForm"
                    :model="datas"
                    :rules="rules"&gt
                    &ltq-row lh=9 fontSize="14" color="#a1a1a1"&gt姓名:(3~7个字符)&lt/q-row&gt
                    &ltq-input prop="tel" v-model="datas.tel" lh=9 type="tel"
                      placeholder="请输入你的电话"&gt&lt/q-input&gt
                    &ltq-row mt=4 justify="end" align="center"&gt
                      &ltq-tag
                        pl=10 pr=10 pt=3 pb=3
                        bkColor="deepskyblue" color="#fff" value="提交"
                        @clicked="submit"&gt&lt/q-tag&gt
                    &lt/q-row&gt
                  &lt/q-form&gt
                &lt/q-row&gt
              &lt/q-overlay&gt

              data:{
                return{
                  datas={
                    name:'',
                    tel:''
                  },
                  bottomShow=false,
                  rules:{
                    name:[
                      {required:true,message:'名字不能为空'},
                      {min:3,max:7,message:'名字长度在3到7个字符'}
                    ],
                    tel:[
                      {required:true,message:'电话不能为空'},
                      {type:'tel',message:'请输入正确的电话号码'}
                    ]
                  }
                }
              },
              methods:{
                bottomClicked(){
                  this.bottomShow=!this.bottomShow
                },
                bottomClickedHide(){
                  this.bottomShow=false
                },
                submit(){
                  let myForm=this.$refs.myForm
                  myForm.validate().then((bool)=>{
                    if(bool){
                      this.$notice.toast('通过验证!')
                    }
                  })
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
        //- 事件回调
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="事件回调")
          q-row(fontSize=14 lh=9 indent=2 mb=2)
            <main>@hide</main>蒙层隐藏的时候触发
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class ExOverlay extends Vue {
  // 左侧蒙层
  private leftShow: boolean = false
  // 右侧蒙层
  private rightShow: boolean = false
  // 顶部蒙层
  private topShow: boolean = false
  // 底部蒙层
  private bottomShow: boolean = false

  private datas: any = {
    name: '',
    tel: ''
  }
  private rules: any = {
    name: [
      { required: true, message: '名字不能为空' },
      { min: 3, max: 7, message: '名字长度在3到7个字符' }
    ],
    tel: [
      { required: true, message: '电话不能为空' },
      { type: 'tel', message: '请输入正确的电话号码' }
    ]
  }
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
          { value: 'show' },
          { value: 'boolean' },
          { value: 'Y' },
          { value: 'false' },
          { value: '蒙层是否展现' }
        ]
      },
      {
        prop: [
          { value: 'position' },
          { value: 'top|right|bottom|left' },
          { value: 'Y' },
          { value: '无' },
          { value: '蒙层出现的方向' }
        ]
      },
      {
        prop: [
          { value: 'opacity' },
          { value: 'Number' },
          { value: 'N' },
          { value: '0.3' },
          { value: '蒙层的透明度' }
        ]
      },
      {
        prop: [
          { value: 'bkColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '#ffffff' },
          { value: '蒙层的背景颜色' }
        ]
      },
      {
        prop: [
          { value: 'minHeight' },
          { value: 'Number' },
          { value: 'N' },
          { value: '10' },
          { value: '蒙层的最小高度,单位rem' }
        ]
      },
      {
        prop: [
          { value: 'maxHeight' },
          { value: 'Number' },
          { value: 'N' },
          { value: '13' },
          { value: '蒙层的最大高度,单位rem' }
        ]
      }
    ]
  }

  // 提交
  private submit(): void {
    let myForm: any = this.$refs.myForm
    myForm.validate().then((bool: boolean) => {
      if (bool) {
        this.$notice.toast('通过验证!')
      }
    })
  }

  // 左侧显示
  private leftClicked() {
    this.leftShow = !this.leftShow
  }
  // 左侧隐藏
  private leftClickedHide() {
    this.leftShow = false
  }
  // 右侧显示
  private rightClicked() {
    this.rightShow = !this.rightShow
  }
  // 右侧隐藏
  private rightClickedHide() {
    this.rightShow = false
  }
  // 顶部显示
  private topClicked() {
    this.topShow = !this.topShow
  }
  // 顶部隐藏
  private topClickedHide() {
    this.topShow = false
  }
  // 底部显示
  private bottomClicked() {
    this.bottomShow = !this.bottomShow
  }
  // 底部隐藏
  private bottomClickedHide() {
    this.bottomShow = false
  }
}
</script>
