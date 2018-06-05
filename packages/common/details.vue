<script lang="tsx">
  import {Vue,Component,Prop} from 'vue-property-decorator'

  @Component
  export default class Common extends Vue{
    // 字体大小
    @Prop({default:-1})
    public fontSize:number

    // 字体颜色
    @Prop({default:''})
    public color:string

    // 背景颜色
    @Prop({default:''})
    public bkColor:string

    // text-align
    @Prop({default:''})
    public textAlign:common.textAlign
  }
</script>