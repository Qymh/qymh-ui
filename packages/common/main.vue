<script lang="tsx">
  import {Vue,Component,Prop} from 'vue-property-decorator'

  @Component
  export default class Common extends Vue{
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

    // margin-top
    @Prop({default:0})
    mt:number

    // margin-right
    @Prop({default:0})
    mr:number

    // margin-bottom
    @Prop({default:0})
    mb:number

    // margin-left
    @Prop({default:0})
    ml:number

    // padding-top
    @Prop({default:0})
    pt:number

    // padding-right
    @Prop({default:0})
    pr:number

    // padding-bottom
    @Prop({default:0})
    pb:number

    // padding-left
    @Prop({default:0})
    pl:number

    // 定位
    @Prop({default:'static'})
    position:string

    // top
    @Prop({default:-1})
    t:number

    // right
    @Prop({default:-1})
    r:number

    // bottom
    @Prop({default:-1})
    b:number

    // left
    @Prop({default:-1})
    l:number

    // 字体大小
    @Prop({default:-1})
    fontSize:number
    
  }
</script>