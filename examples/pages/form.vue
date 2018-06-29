<template lang="pug">
  .input
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100)
      q-head-bar(
        bkColor="deepskyblue"
        color="#fff"
        :leftArrow="true"
        centerText="q-form"
        :rightEmpty="true")
    q-row(pl=2 pr=2 mt=12)
      q-form(
        ref="myForm"
        :model="datas"
        :rules="rules")
        q-row(flex="dir:left" h=12 align="center" fontSize=14)
          q-col(w=15 textAlign="center") 姓名:
          q-input(
            prop="name"
            v-model="datas.name"
            min=3 max=5
            :required="true"
            placeholder="请输入姓名:")
        q-row(flex="dir:left" h=12 align="center" fontSize=14)
          q-col(w=15 textAlign="center") 年龄:
          q-input(
            prop="tel"
            type="tel"
            v-model="datas.tel"
            :required="true"
            placeholder="请输入电话:")
        q-row(justify="flex-end")
          q-tag(value="提交" bkColor="deepskyblue" @clicked="submit")
        q-row
          q-col {{datas}}
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExInput extends Vue{
    private datas:any={
      name:'',
      tel:''
    }

    private rules:any={
      name:[
        {required:true,message:'名字不能为空'},
        {min:3,max:5,message:'名字长度在3到5个字符'}
      ],
      tel:[
        {required:true,message:'电话不能为空'},
        {type:'tel',message:'请输入正确的电话号码'}
      ]
    }

    private submit():void{
      let myForm:any=this.$refs.myForm
      myForm.validate().then((bool:boolean)=>{
        if(bool){
          this.$notice.toast('通过验证!')
        }
      })
    }
  }
</script>
