<script lang="tsx">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Proto extends Vue {
  // 高
  @Prop({ default: -1 })
  public h: string

  // 行高
  @Prop({ default: -1 })
  public lh: string

  // 宽
  @Prop({ default: -1 })
  public w: string

  // 高度百分比
  @Prop({ default: -1 })
  public row: string

  // 宽度百分比
  @Prop({ default: -1 })
  public col: string

  // margin-top
  @Prop({ default: 0 })
  public mt: string

  // margin-right
  @Prop({ default: 0 })
  public mr: string

  // margin-bottom
  @Prop({ default: 0 })
  public mb: string

  // margin-left
  @Prop({ default: 0 })
  public ml: string

  // padding-top
  @Prop({ default: 0 })
  public pt: string

  // padding-right
  @Prop({ default: 0 })
  public pr: string

  // padding-bottom
  @Prop({ default: 0 })
  public pb: string

  // padding-left
  @Prop({ default: 0 })
  public pl: string

  // 定位
  @Prop({ default: 'static' })
  public position: common.position

  // top
  @Prop({ default: -1 })
  public t: number | string

  // right
  @Prop({ default: -1 })
  public r: number | string

  // bottom
  @Prop({ default: -1 })
  public b: number | string

  // left
  @Prop({ default: -1 })
  public l: number | string

  // 字体大小
  @Prop({ default: -1 })
  public fontSize: string

  // 字体颜色
  @Prop({ default: '' })
  public color: string

  // 背景颜色
  @Prop({ default: '' })
  public bkColor: string

  // text-align
  @Prop({ default: '' })
  public textAlign: common.textAlign

  // z-index
  @Prop({ default: 'auto' })
  public zIndex: string

  // display
  @Prop({ default: '' })
  public display: common.display

  // vertical-align
  @Prop({ default: 'baseline' })
  public vertical: common.vertical

  // overflow
  @Prop({ default: 'visible' })
  public overflow: common.overflow

  // text-decoration
  @Prop({ default: 'none' })
  public decoration: common.decoration

  // border-radius
  @Prop({ default: -1 })
  public radius: number | string

  // word-break
  @Prop({ default: 'normal' })
  public wordBreak: common.wordBreak

  // text-indent
  @Prop({ default: -1 })
  public indent: string

  // border
  @Prop({ default: '' })
  public border: string
  // border-top
  @Prop({ default: '' })
  public borderTop: string
  // border-right
  @Prop({ default: '' })
  public borderRight: string
  // border-bottom
  @Prop({ default: '' })
  public borderBottom: string
  // border-left
  @Prop({ default: '' })
  public borderLeft: string
}
</script>