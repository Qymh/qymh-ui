<script lang="tsx">
  import {Vue,Component,Prop} from 'vue-property-decorator'

  @Component
  export default class Proto extends Vue{
    // 高
    @Prop({default:-1})
    public h:number

    // 行高
    @Prop({default:-1})
    public lh:number
    
    // 宽
    @Prop({default:-1})
    public w:number

    // padding-top
    @Prop({default:0})
    public pt:number

    // padding-right
    @Prop({default:0})
    public pr:number

    // padding-bottom
    @Prop({default:0})
    public pb:number

    // padding-left
    @Prop({default:0})
    public pl:number

    // 字体大小
    @Prop({default:-1})
    public fontSize:number

    // 字体颜色
    @Prop({default:''})
    public color:string

    // 背景颜色
    @Prop({default:''})
    public bkColor:string

    // border-radius
    @Prop({default:0})
    public radius:number|string
    
  }
</script>