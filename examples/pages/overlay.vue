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
