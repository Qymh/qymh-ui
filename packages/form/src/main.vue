<template lang="pug">
  form.q-form(methods="#" action="#" @submit.prevent="validate")
    slot
</template>

<script lang="ts">
  import {Vue,Component,Prop} from 'vue-property-decorator'
  
  @Component({})
  export default class QForm extends Vue{

    @Prop({default:''})
    private model:any

    private validate(){
      return new Promise(resolve=>{
        let baned:string[]=[]
        for(let i of Object.keys(this.model)){
          let item=this.model[i]
          if(typeof item==='object'){
            item.validator===false&&baned.push(item.name)
          }
        }
        console.log(baned)
        resolve
      })
    }
  }
</script>
