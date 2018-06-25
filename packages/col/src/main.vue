<script lang="tsx">
  import {CreateElement} from 'vue'
  import {Vue,Component,Prop,Emit} from 'vue-property-decorator'
  import Proto from '../../proto/row/main.vue'
  import createStyle from '../../proto/row/index'

  @Component({})
  export default class QCol extends Proto{
    // 标签
    @Prop({default:'div'})
    private tag:string

    // 点击事件
    @Emit('clicked')
    private clicked(){}

    // 虚拟Dom渲染
    private render(h:CreateElement){
      let style=createStyle(this)
      return h(this.tag,{
        style:style,
        on:{
          click:this.clicked
        },
        class:{
          'q-col':true
        }
      },this.$slots.default)
    }
  }
</script>


