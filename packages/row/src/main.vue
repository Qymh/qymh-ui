<script lang="tsx">
import { CreateElement } from 'vue'
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import Proto from '../../proto/row/main.vue'
import createStyle from '../../proto/row/index'

@Component
export default class QRow extends Proto {
  // 标签
  @Prop({ default: 'div' })
  private tag: string

  // 方向
  @Prop({ default: '' })
  private dir: row.dir

  // 水平对齐方式
  @Prop({ default: '' })
  private justify: row.justify

  // 垂直对齐方式
  @Prop({ default: '' })
  private align: row.align

  // 段落堆叠
  @Prop({ default: '' })
  private wrap: row.wrap

  // flex值
  @Prop({ default: 0 })
  private flex: number

  // 计算后的display
  private get computedDisplay(): string {
    return this.justify || this.align || this.flex || this.dir ? 'flex' : ''
  }

  // 计算后的方向
  private get computedDir(): string {
    let dir: string = ''
    switch (this.dir) {
      case 'left':
        dir = 'row'
        break
      case 'right':
        dir = 'row-reverse'
        break
      case 'top':
        dir = 'column'
        break
      case 'bottom':
        dir = 'column-reverse'
        break
    }
    return dir
  }

  @Emit('clicked')
  private clicked() {}

  // 虚拟Dom渲染
  private render(h: CreateElement) {
    let style = createStyle(this)
    let selectableStyle = Object.create(null)
    if (this.flex) {
      selectableStyle.flexGrow = this.flex
      selectableStyle.flexShrink = this.flex
    }
    if (this.dir) {
      selectableStyle.flexDirection = this.computedDir
    }
    return h(
      this.tag,
      {
        style: Object.assign(style, selectableStyle, {
          display: this.computedDisplay,
          justifyContent: this.justify,
          alignItems: this.align,
          flexWrap: this.wrap
        }),
        on: {
          click: this.clicked
        }
      },
      this.$slots.default
    )
  }
}
</script>


