<template lang="pug">
  form.q-form(
    methods="#" action="#" @submit.prevent="validate"
    :style="style")
    slot
</template>

<script lang="ts">
  import Proto from '../../proto/input/main.vue'
  import createStyle from '../../proto/input/index'
  import {Vue,Component,Prop} from 'vue-property-decorator'
  
  @Component({})
  export default class QForm extends Proto{
    // 表单数组
    private qInput:any[]=[]
    // 计算后的style
    private style:any={}

    // 数据
    @Prop({default:''})
    private model:any
    
    // 规则
    @Prop({default:''})
    private rules:any

    // 验证
    private validate(){
      return new Promise(resolve=>{
        let isToast=false
        let isTrue=true
        for(let item of this.qInput){
          let rules=item.rules
          if(rules.length){
            rules.forEach((p:any)=>{
              if(isToast){
                return
              }
              if(p.isError){
                isTrue=false
                isToast=true
                this.$notice.toast(p.message)
              }
            })
          }
        }
        resolve(isTrue)
      })
    }

    // 寻找q-input
    private findQInput(vm:any){
      vm.$children.forEach((p:any)=>{
        if(p.$options.name==='QInput'){
          this.qInput.push(p)
        }else{
          this.findQInput(p)
        }
      })
    }

    // 挂载 
    private mounted() {
      this.findQInput(this)
      this.style=createStyle(this)
    }
  }
</script>
