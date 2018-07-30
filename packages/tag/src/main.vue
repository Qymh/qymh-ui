<script lang="tsx">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import Proto from '../../proto/tag/main.vue'
import createStyle from '../../proto/tag/index'
const config = require('../../../src/qymhui.config').default.qtag

@Component
export default class QTag extends Proto {
  // 背景颜色
  @Prop({ default: config.bkColor })
  private bkColor: string

  // 字体颜色
  @Prop({ default: config.color })
  private color: string

  // 字体大小
  @Prop({ default: config.fontSize })
  private fontSize: number

  // 内容
  @Prop({ default: config.value })
  private value: string

  // 是否有边框
  @Prop({ default: config.hasBorder })
  private hasBorder: boolean

  // 是否有圆角值
  @Prop({ default: config.hasRadius })
  private hasRadius: boolean

  // 边框颜色
  @Prop({ default: config.borderColor })
  private borderColor: string

  // 是否激活
  @Prop({ default: config.active })
  private active: boolean

  // 激活背景颜色
  @Prop({ default: config.activeBkColor })
  private activeBkColor: string

  // 激活字体颜色
  @Prop({ default: config.activeColor })
  private activeColor: string

  // 点击
  @Emit('clicked')
  private clicked() {}

  // 观察是否激活
  @Watch('active')
  activeChange(val: boolean) {
    if (val) {
      this.$el.style.backgroundColor = this.activeBkColor
      this.$el.style.color = this.activeColor
      if (this.hasBorder) {
        this.$el.style.borderColor = 'transparent'
      }
    } else {
      this.$el.style.backgroundColor = this.bkColor
      this.$el.style.color = this.color
      if (this.hasBorder) {
        this.$el.style.borderColor = this.borderColor
      }
    }
  }

  // dom渲染
  private render(h: CreateElement) {
    let style = createStyle(this)
    let selectableStyle = Object.create(null)
    if (this.hasBorder) {
      selectableStyle.borderStyle = 'solid'
      selectableStyle.borderWidth = '1px'
      selectableStyle.borderColor = this.borderColor
    }
    if (this.hasRadius) {
      selectableStyle.borderRadius = '0.3rem'
    }
    return h('div', {
      style: Object.assign(
        {
          display: 'inline-block',
          padding: '0.2rem 0.3rem',
          backgroundColor: this.bkColor,
          color: this.color,
          fontSize: `${this.fontSize}px`
        },
        selectableStyle,
        style
      ),
      domProps: {
        innerHTML: this.value
      },
      on: {
        click: this.clicked
      }
    })
  }
}
</script>
