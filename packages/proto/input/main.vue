<script lang="tsx">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Proto extends Vue {
  // 高
  @Prop({ default: -1 })
  public h: number

  // 行高
  @Prop({ default: -1 })
  public lh: number

  // 宽
  @Prop({ default: -1 })
  public w: number

  // 高度百分比
  @Prop({ default: -1 })
  public row: number

  // 宽度百分比
  @Prop({ default: -1 })
  public col: number

  // margin-top
  @Prop({ default: 0 })
  public mt: number

  // margin-right
  @Prop({ default: 0 })
  public mr: number

  // margin-bottom
  @Prop({ default: 0 })
  public mb: number

  // margin-left
  @Prop({ default: 0 })
  public ml: number

  // padding-top
  @Prop({ default: 0 })
  public pt: number

  // padding-right
  @Prop({ default: 0 })
  public pr: number

  // padding-bottom
  @Prop({ default: 0 })
  public pb: number

  // padding-left
  @Prop({ default: 0 })
  public pl: number
}
</script>