<script lang="tsx">
  import {CreateElement} from 'vue'
  import {Vue,Component,Prop,Emit} from 'vue-property-decorator'
  import Proto from '../../proto/input/main.vue'
  import createStyle from '../../proto/input/index'

  @Component({})
  export default class qInput extends Proto{
    
    // 输入的值
    private inputValue:string=''

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
    private type:input.type

    // 默认保留多少位
    @Prop({default:2})
    private fix:number

    // 是否允许输入emoji
    @Prop({default:false})
    private allowedEmoji:boolean

    // placeholder
    @Prop({default:''})
    private placeholder:string

    // 最小长度
    @Prop({default:0})
    private min:number

    // 最大长度
    @Prop({default:0})
    private max:number

    // 按下
    private keydown(e:any){
      // 默认不允许输入emoji
      if(!this.allowedEmoji){
        let value=e.target.value
        let emojiRexExp=/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g
        let bool=emojiRexExp.test(value)
        if(bool){
          e.returnValue=false
        }else{
          e.returnValue=true
        }
      }

      // 数字
      if(this.type==='number'){
        let keyCode=Number.parseInt(e.keyCode)
        let value=e.target.value.toString()
        // 小键盘0~9 数字键盘0~9 后退键 上下左右 小数点
        if(
          keyCode>=48&&keyCode<=57||
          keyCode>=96&&keyCode<=105||
          keyCode>=37&&keyCode<=40||
          keyCode===8||keyCode===190
        ){
          // 只能允许有一个小数点
          if(value.indexOf('.')>-1&&(keyCode===190||keyCode===110)){
            e.returnValue=false
          }else{
            e.returnValue=true
          }
        }else{
          e.returnValue=false
        }
      }
      // 整数
      else if(this.type==='integer'){
        let keyCode=Number.parseInt(e.keyCode)
        // 小键盘0~9 数字键盘0~9 后退键 上下左右
        if(
          keyCode>=48&&keyCode<=57||
          keyCode>=96&&keyCode<=105||
          keyCode>=37&&keyCode<=40||
          keyCode===8
        ){
          e.returnValue=true
        }else{
          e.returnValue=false
        }
      }
      // 邮箱
      else if(this.type==='email'){
        let value=e.target.value
        let emailRegExp=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
        let bool=emailRegExp.test(value)
        if(bool){
          e.returnValue=false
        }else{
          e.returnValue=true
        }
      }
    }

    // 值改变
    private valueChange(e:any){
      let later:string|number=''
      // 数字
      if(this.type==='number'){
        let value=e.target.value
        let vm=new Vue()
        if(isNaN(value)||!value){
          vm.$notice.toast('请输入正确的数字!')
          later=''
        }else{
          later=Number.parseFloat(Number.parseFloat(value).toFixed(this.fix))
        }
        e.target.value=later
      }
      // 电话
      else if(this.type==='tel'){
        let value=e.target.value
        let mobileRexExp=/^[1][3,4,5,7,8][0-9]{9}$/
        let bool=mobileRexExp.test(value)
        if(bool){
        }else{
          this.$emit('errors',this.type)
          e.target.value=''
        }
      }

      // 长度检查
      if(this.max||this.min){
        let len=e.target.value.length
        if(this.max){
          if(len>this.max){
            this.$emit('errors','max')
            e.target.value=''
          }
        }
        if(this.min){
          if(len<this.min){
            this.$emit('errors','min')
            e.target.value=''
          }
        }
      }
    }

    // 提交
    private submit(e:any){
      let $input=e.target.children[0]
      $input.blur()
      e.preventDefault()
      this.$emit('submit',$input.value)
    }

    // dom渲染
    private render(h:CreateElement){
      let style=createStyle(this)
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
          submit:this.submit,
        }
      },[
        h('input',{
          attrs:{
            placeholder:this.placeholder,
            type:this.type==='integer'?'number':this.type
          },
          on:{
            keydown:this.keydown,
            change:this.valueChange
          },
          style:Object.assign($inputStyle,style)
        })
      ])
    }
  }  
</script>
