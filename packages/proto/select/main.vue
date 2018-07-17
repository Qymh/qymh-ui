<script lang="tsx">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Proto extends Vue {
  // 高
  @Prop({ default: -1 })
  public h: number

  // 宽
  @Prop({ default: -1 })
  public w: number

  // 高度百分比
  @Prop({ default: -1 })
  public row: number

  // 宽度百分比
  @Prop({ default: -1 })
  public col: number

  // 定位
  @Prop({ default: 'static' })
  public position: common.position

  // top
  @Prop({ default: -1 })
  public t: number

  // right
  @Prop({ default: -1 })
  public r: number

  // bottom
  @Prop({ default: -1 })
  public b: number

  // left
  @Prop({ default: -1 })
  public l: number
}
</script>