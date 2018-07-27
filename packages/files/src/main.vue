<template lang="pug">
  .q_files(:style="computedClient")
    input.q_files_input(
      type="file"
      :multiple="multiple?'multiple':''"
      :style="computedStyle"
      @change="getFiles"
      @click="clear")
    span.q_files_upload(
      :style="computedStyle") {{value}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Proto from '../../proto/files/main.vue'
import createStyle from '../../proto/files'
@Component({})
export default class QFiles extends Proto {
  // 本地保存的上传图片
  private images: string[] = []

  // 本地保存的上传formData
  private files: any[] = []

  // 是否允许多文件上传
  @Prop({ default: true })
  private multiple: boolean

  // 最大上传数量
  @Prop({ default: 3 })
  private maxCount: number

  // 最大上传大小
  @Prop({ default: 4 })
  private maxSize: number

  // 按钮文字
  @Prop({ default: '点击上传' })
  private value: string

  // 是否有边框
  @Prop({ default: true })
  private hasBorder: boolean

  // 边框颜色
  @Prop({ default: '#a1a1a1' })
  private borderColor: string

  // 获取高宽
  private get computedClient() {
    let style = createStyle(this)
    let resultStyle = Object.create(null)
    resultStyle.height = style.height !== 'undefined%' ? style.height : '0.8rem'
    resultStyle.width = style.width !== 'undefined%' ? style.width : '2rem'
    return resultStyle
  }

  // 获取计算后的样式
  private get computedStyle() {
    let style = createStyle(this)
    let selectedStyle = Object.create(null)
    let baseStyle = {
      height: '0.8rem',
      width: '2rem'
    }
    if (this.hasBorder) {
      selectedStyle.borderStyle = 'solid'
      selectedStyle.borderWidth = '1px'
      selectedStyle.borderColor = this.borderColor
    }
    let resultStyle = Object.assign({}, style, selectedStyle, baseStyle)
    return resultStyle
  }

  // 点击清除
  private clear(e: any) {
    e.target.value = ''
  }

  // 获取改变后的文件
  private async getFiles(e: any) {
    let files = e.target.files
    if (this.files.length + files.length > this.maxSize) {
      this.$notice.toast(`图片最多上传${this.maxSize}张!`)
      return
    }
    for (let i = 0, len = files.length; i < len; i++) {
      let file = files[i]
      let bool = await this.checkFiles(file)
      bool && (await this.compilerFiles(file))
    }
    this.$emit('getFiles', { files: this.files, images: this.images })
  }

  // 检查files是否符合规格
  private checkFiles(file: any) {
    return new Promise((resolve, reject) => {
      let name = file.name
      let type = file.type
      let typeRegExp = /image\/(png|jpg|jpeg)/
      let size = file.size
      // 检查图片是否为空
      if (!size && !name) {
        this.$notice.toast('图片不能为空!')
        resolve(false)
      }
      // 检查图片类型
      if (!typeRegExp.test(type)) {
        this.$notice.toast('已过滤到非png jpg jpeg格式的图片!')
        resolve(false)
      }
      // 检查大小
      if (size >= this.maxSize * 1024 * 1024) {
        this.$notice.toast(`上传的图片不能大于${this.maxSize}M!`)
        resolve(false)
      }
      resolve(true)
    })
  }

  // 解析files
  private compilerFiles(file: any) {
    return new Promise(resolve => {
      let image = new Image()
      let reader = new FileReader()
      reader.readAsDataURL(file)

      for (let i = 0; i < this.files.length; i++) {
        let item = this.files[i]
        if (item.name === file.name && item.size === file.size) {
          this.$notice.toast('不能上传相同的图片!')
          resolve()
          return
        }
      }

      reader.onload = (e: any) => {
        let result = e.target.result
        this.images.push(result)
        this.files.push(file)
        resolve()
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.q_files {
  position: relative;
  display: inline-block;
  &_input,
  &_upload {
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &_input {
    opacity: 0;
    z-index: 1;
  }
}
</style>
