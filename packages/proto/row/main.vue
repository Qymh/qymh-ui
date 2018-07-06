<script lang="tsx">
  import {Vue,Component,Prop} from 'vue-property-decorator'

  @Component
  export default class Proto extends Vue{
    // 高
    @Prop({default:-1})
    public h:number|string

    // 行高
    @Prop({default:-1})
    public lh:number|string
    
    // 宽
    @Prop({default:-1})
    public w:number|string

    // 高度百分比
    @Prop({default:-1})
    public row:number|string

    // 宽度百分比 
    @Prop({default:-1})
    public col:number|string

    // margin-top
    @Prop({default:0})
    public mt:number|string

    // margin-right
    @Prop({default:0})
    public mr:number|string

    // margin-bottom
    @Prop({default:0})
    public mb:number|string

    // margin-left
    @Prop({default:0})
    public ml:number|string

    // padding-top
    @Prop({default:0})
    public pt:number|string

    // padding-right
    @Prop({default:0})
    public pr:number|string

    // padding-bottom
    @Prop({default:0})
    public pb:number|string

    // padding-left
    @Prop({default:0})
    public pl:number|string

    // 定位
    @Prop({default:'static'})
    public position:common.position

    // top
    @Prop({default:-1})
    public t:number|string

    // right
    @Prop({default:-1})
    public r:number|string

    // bottom
    @Prop({default:-1})
    public b:number|string

    // left
    @Prop({default:-1})
    public l:number|string

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

    // z-index
    @Prop({default:'auto'})
    public zIndex:number|string

    // display
    @Prop({default:''})
    public display:common.display

    // vertical-align
    @Prop({default:'baseline'})
    public vertical:common.vertical

    // overflow
    @Prop({default:'visible'})
    public overflow:common.overflow

    // text-decoration
    @Prop({default:'none'})
    public decoration:common.decoration

    // border-radius
    @Prop({default:-1})
    public radius:number|string

    // word-break
    @Prop({default:'normal'})
    public wordBreak:common.wordBreak
    
    @Prop({default:-1})
    public indent:number|string
  }
</script>