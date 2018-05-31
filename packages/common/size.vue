<script lang="tsx">
  import {Vue,Component,Prop} from 'vue-property-decorator'

  export class Size extends Vue{
    // 高
    @Prop({default:-1})
    h:number
    
    // 宽
    @Prop({default:-1})
    w:number

    // 高度百分比
    @Prop({default:-1})
    row:number

    // 宽度百分比 
    @Prop({default:-1})
    col:number
  }
</script>