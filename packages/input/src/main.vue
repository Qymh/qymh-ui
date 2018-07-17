<script lang="tsx">
import { CreateElement } from 'vue'
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator'
import Proto from '../../proto/input/main.vue'
import createStyle from '../../proto/input/index'

@Component({})
export default class QInput extends Proto {
  // 是否可以向父组件传递
  private canEmit: boolean = true
  // 当前的父元素QForm
  private qForm: any = ''
  // 当前存在的规则约束
  private rules: any = ''

  // 传入的值
  @Prop({ default: '' })
  private value: any

  // 当前的约束对应属性名
  @Prop({ default: '' })
  private prop: any

  // 是否有全局border
  @Prop({ default: false })
  private hasBorder: boolean

  // 是否仅有底部border
  @Prop({ default: true })
  private borderBottom: boolean

  // border颜色
  @Prop({ default: '#d6d7dc' })
  private borderColor: string

  // 背景颜色
  @Prop({ default: '' })
  private bkColor: string

  // 字体颜色
  @Prop({ default: '' })
  private color: string

  // 输入框类型
  @Prop({ default: 'text' })
  private type: input.type

  // 默认保留多少位
  @Prop({ default: 4 })
  private fix: number

  // placeholder
  @Prop({ default: '' })
  private placeholder: string

  // 最小长度
  @Prop({ default: 0 })
  private min: number

  // 最大长度
  @Prop({ default: 0 })
  private max: number

  // 按下
  private keydown(e: any) {
    this.canEmit = true
    if (!this.rules.length) {
      return
    }
    this.rules.forEach((rule: any) => {
      // 默认不允许输入emoji
      if (!rule.allowedEmoji) {
        let value = e.key
        let emojiRexExp = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g
        let bool = emojiRexExp.test(value)
        if (bool) {
          this.canEmit = false
          e.returnValue = false
        } else {
          e.returnValue = true
        }
      }

      // 数字
      if (rule.type === 'number') {
        let keyCode = Number.parseInt(e.keyCode)
        let value = e.target.value.toString()
        // 小键盘0~9 数字键盘0~9 后退键 上下左右 小数点
        if (
          (keyCode >= 48 && keyCode <= 57) ||
          (keyCode >= 96 && keyCode <= 105) ||
          (keyCode >= 37 && keyCode <= 40) ||
          keyCode === 8 ||
          keyCode === 190
        ) {
          // 只能允许有一个小数点
          if (value.indexOf('.') > -1 && (keyCode === 190 || keyCode === 110)) {
            e.returnValue = false
          } else {
            if (
              (keyCode >= 48 && keyCode <= 57) ||
              (keyCode >= 96 && keyCode <= 105)
            ) {
              if (isNaN(e.key)) {
                this.canEmit = false
                e.returnValue = false
              } else {
                e.returnValue = true
              }
            } else {
              e.returnValue = true
            }
          }
        } else {
          this.canEmit = false
          e.returnValue = false
        }
      } else if (rule.type === 'integer') {
        // 整数
        let keyCode = Number.parseInt(e.keyCode)
        // 小键盘0~9 数字键盘0~9 后退键 上下左右
        if (
          (keyCode >= 48 && keyCode <= 57) ||
          (keyCode >= 96 && keyCode <= 105) ||
          (keyCode >= 37 && keyCode <= 40) ||
          keyCode === 8
        ) {
          if (
            (keyCode >= 48 && keyCode <= 57) ||
            (keyCode >= 96 && keyCode <= 105)
          ) {
            if (isNaN(e.target.value)) {
              this.canEmit = false
              e.returnValue = false
            } else {
              e.returnValue = true
            }
          } else {
            e.returnValue = true
          }
        } else {
          this.canEmit = false
          e.returnValue = false
        }
      }
    })
  }

  // 值改变
  private valueBlur() {
    let later: string | number = ''
    let vm: any = new Vue()
    let $el: any = this.$el
    if (!this.rules.length) {
      return
    }
    this.rules.forEach((rule: any) => {
      rule.isError = false
      // 检查必填
      if (rule.required) {
        let value = $el.value
        if (value.trim() === '') {
          rule.isError = true
        }
      }
      // 数字
      if (rule.type === 'number') {
        let value = $el.value
        if (isNaN(value) || !value) {
          rule.isError = true
        } else {
          later = Number.parseFloat(Number.parseFloat(value).toFixed(this.fix))
        }
        $el.value = later
      } else if (rule.type === 'tel') {
        // 电话
        let value = $el.value
        let mobileRexExp = /^[1][3,4,5,7,8][0-9]{9}$/
        let bool = mobileRexExp.test(value)
        if (bool) {
        } else {
          rule.isError = true
        }
      } else if (rule.type === 'email') {
        // 邮箱
        let value = $el.value
        let emailRegExp = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        let bool = emailRegExp.test(value)
        if (bool) {
        } else {
          rule.isError = true
        }
      }

      // 长度检查
      if (rule.max || rule.min) {
        let len = $el.value.length
        if (rule.max) {
          if (len > rule.max) {
            rule.isError = true
          }
        }
        if (rule.min) {
          if (len < rule.min) {
            rule.isError = true
          }
        }
      }
    })

    this.$emit('input', $el.value)
  }

  // 输入
  private input(e: any) {
    if (this.canEmit) {
      this.$emit('input', e.target.value)
    }
  }

  // 加强点击
  private strictClick(e: any) {
    e.target.focus()
  }

  // 寻找q-form
  private findQForm(vm: any): any {
    if (vm.$parent.$options.name !== 'QForm') {
      this.findQForm(vm.$parent)
    } else {
      this.qForm = vm.$parent
    }
  }

  // dom渲染
  private render(h: CreateElement) {
    let style = createStyle(this)
    let $inputStyle = Object.create(null)
    $inputStyle = {
      padding: '0.1rem 0.4rem 0.1rem 0.2rem',
      border: 0,
      width: '100%',
      display: 'inline-block',
      color: this.color,
      backgroundColor: this.bkColor
    }
    if (this.hasBorder) {
      $inputStyle.borderStyle = 'solid'
      $inputStyle.borderWidth = '1px'
      $inputStyle.borderColor = this.borderColor
    }
    if (this.borderBottom) {
      $inputStyle.borderBottomStyle = 'solid'
      $inputStyle.borderBottomWidth = '1px'
      $inputStyle.borderBottomColor = this.borderColor
    }
    return h('input', {
      attrs: {
        placeholder: this.placeholder,
        type: this.type === 'integer' ? 'number' : this.type,
        value: typeof this.value === 'object' ? this.value.value : this.value
      },
      on: {
        keydown: this.keydown,
        blur: this.valueBlur,
        input: this.input,
        click: this.strictClick
      },
      class: {
        'q-input': true
      },
      style: Object.assign($inputStyle, style)
    })
  }

  // 挂载完成
  private mounted() {
    this.findQForm(this)
    for (let i of Object.keys(this.qForm.rules)) {
      if (i === this.prop) {
        this.rules = this.qForm.rules[i]
        this.valueBlur()
      }
    }
  }
}
</script>

