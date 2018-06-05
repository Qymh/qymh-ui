<script lang="tsx">
  import {CreateElement} from 'vue'
  import {Vue,Component,Prop,Emit} from 'vue-property-decorator'
  import Distance from '../../common/distance.vue'
  import Size from '../../common/size.vue'
  import Position from '../../common/position.vue'

  let a=new Size()
  let b=new Distance()
  let c=new Position()

  let d=Object.assign({a:1,b:1},{b:2},{c:3})

  class D extends Size{
    
  }

  @Component({})
  export default class qInput extends Vue{

    // 是否有全局border
    @Prop({default:false})
    private hasBorder:boolean

    // 是否仅有底部border
    @Prop({default:true})
    private borderBottom:boolean
    
    // border颜色
    @Prop({default:'#d6d7dc'})
    private borderColor:string

    // 背景颜色
    @Prop({default:''})
    private bkColor:string

    // 字体颜色
    @Prop({default:''})
    private color:string

    // 输入框类型
    @Prop({default:'text'})
    private type:string

    // placeholder
    @Prop({default:''})
    private placeholder:string

    @Emit('submit')
    private submit(e:any){
      let $input=e.target.children[0]
      $input.blur()
      e.preventDefault()
    }

    // dom渲染
    private render(h:CreateElement){
      let $inputStyle=Object.create(null)
      $inputStyle={
        padding:0,
        border:0,
        width:'100%',
        display:'inline-block',
        color:this.color,
        backgroundColor:this.bkColor
      }
      if(this.hasBorder){
        $inputStyle.borderStyle='solid'
        $inputStyle.borderWidth='1px'
        $inputStyle.borderColor=this.borderColor
      }
      if(this.borderBottom){
        $inputStyle.borderBottomStyle='solid'
        $inputStyle.borderBottomWidth='1px'
        $inputStyle.borderBottomColor=this.borderColor
      }

      return h('form',{
        attrs:{
          action:'#',
          methods:'#'
        },
        on:{
          submit:this.submit
        }
      },[
        h('input',{
          attrs:{
            placeholder:this.placeholder,
            type:this.type
          },
          style:$inputStyle
        })
      ])
    }
  }  
</script>
