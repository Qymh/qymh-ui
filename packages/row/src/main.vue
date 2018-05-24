<script lang="tsx">
  import {CreateElement} from 'vue'
  import {Vue,Component,Prop} from 'vue-property-decorator'
  import Common from '../../common/main.vue'
  import {createStyle} from '../../common/index'

  @Component
  export default class QRow extends Common{
    // 标签
    @Prop({default:'div'})
    private tag:string

    // 方向
    @Prop({default:''})
    private dir:row.dir

    // 水平对齐方式
    @Prop({default:''})
    private justify:row.justify

    // 垂直对齐方式
    @Prop({default:''})
    private align:row.align

    // flex值
    @Prop({default:0})
    private flex:number

    // 计算后的display
    private get computedDisplay():string{
      return this.justify||this.align||this.flex||this.dir?'flex':''
    }

    // 计算后的方向
    private get computedDir():string{
      let dir:string=''
      switch(this.dir){
        case 'left':
          dir='row'
          break
        case 'right':
          dir='row-reverse'
          break
        case 'top':
          dir='column'
          break
        case 'bottom':
          dir='column-reverse'
          break
      }
      return dir
    }

    // 计算后的水平对齐方式
    private get computedJustify(){
      let style:string=''
      switch (this.justify) {
        case 'start':
          style='flex-start'
          break
        case 'center':
          style='center'
          break
        case 'end':
          style='end'
          break
      }
      return style
    }

    // 计算后的垂直对齐
    private get computedAlign(){
      let style:string=''
      switch (this.justify) {
        case 'start':
          style='flex-start'
          break
        case 'center':
          style='center'
          break
        case 'end':
          style='end'
          break
      }
      return style
    }

    // 虚拟Dom渲染
    private render(h:CreateElement){
      let style=createStyle(this)
      let selectableStyle=Object.create(null)
      if(this.flex){
        selectableStyle.flexGrow=this.flex
        selectableStyle.flexShrink=this.flex
      }
      if(this.dir){
        selectableStyle.flexDirection=this.computedDir
      }
      return h(this.tag,{
        style:Object.assign({
          display:this.computedDisplay,
          justifyContent:this.computedJustify,
          alignItems:this.computedAlign
        },selectableStyle,style)
      },this.$slots.default)
    }
  }
</script>


