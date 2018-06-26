<template lang="pug">
  form.q-form(methods="#" action="#" @submit.prevent="validate")
    slot
</template>

<script lang="ts">
  import {Vue,Component,Prop} from 'vue-property-decorator'
  
  @Component({})
  export default class QForm extends Vue{
    // 表单数组
    private qInput:any[]=[]

    @Prop({default:''})
    private model:any
    
    @Prop({default:''})
    private rules:any

    private validate(){
      return new Promise(resolve=>{
        resolve
      })
    }

    private findQInput(vm:any){
      vm.$children.forEach((p:any)=>{
        if(p.$options.name==='QInput'){
          this.qInput.push(p)
        }else{
          this.findQInput(p)
        }
      })
    }

    private mounted() {
      this.findQInput(this)
      console.log(this.qInput)
    }
  }
</script>
