<script lang="tsx">
  import {CreateElement} from 'vue'
  import {Vue,Component,Prop,Emit, Watch} from 'vue-property-decorator'
  import Proto from '../../proto/input/main.vue'
  import createStyle from '../../proto/input/index'

  @Component({})
  export default class qInput extends Proto{

    // 是否可以向父组件传递
    private canEmit:boolean=true
    // 是否通过验证
    private validator:boolean=true
    // 验证出错的类型
    private validatorArr:string[]=[]

    // 传入的值
    @Prop({default:''})
    private value:any

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
    @Prop({default:4})
    private fix:number

    // 是否必填
    @Prop({default:false})
    private required:boolean

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
      this.canEmit=true
      this.validator=true
      // 默认不允许输入emoji
      if(!this.allowedEmoji){
        let value=e.key
        let emojiRexExp=/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g
        let bool=emojiRexExp.test(value)
        if(bool){
          this.canEmit=false
          this.validator=false
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
            if(keyCode>=48&&keyCode<=57||
              keyCode>=96&&keyCode<=105){
              if(isNaN(e.key)){
                this.canEmit=false
                this.validator=false
                e.returnValue=false
              }else{
                e.returnValue=true
              }
            }else{
              e.returnValue=true
            }
          }
        }else{
          this.canEmit=false
          this.validator=false
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
          if(keyCode>=48&&keyCode<=57||
            keyCode>=96&&keyCode<=105){
            if(isNaN(e.target.value)){
              this.canEmit=false
              this.validator=false
              e.returnValue=false
            }else{
              e.returnValue=true
            }
          }else{
            e.returnValue=true
          }
        }else{
          this.canEmit=false
          this.validator=false
          e.returnValue=false
        }
      }
    }

    // 值改变
    private valueChange(e:any){
      let later:string|number=''
      // 数字
      if(this.type==='number'){
        let value=e.target.value
        let vm:any=new Vue()
        if(isNaN(value)||!value){
          this.validator=false
          this.$emit('errors',this.type)
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
          this.validator=false
          this.$emit('errors',this.type)
        }
      }
      // 邮箱
      else if(this.type==='email'){
        let value=e.target.value
        let emailRegExp=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        let bool=emailRegExp.test(value)
        if(bool){
        }else{
          this.validator=false
          this.$emit('errors',this.type)
        }
      }

      // 长度检查
      if(this.max||this.min){
        let len=e.target.value.length
        if(this.max){
          if(len>this.max){
            this.validator=false
            this.$emit('errors','max')
          }
        }
        if(this.min){
          if(len<this.min){
            this.validator=false
            this.$emit('errors','min')
          }
        }
      }
      if(typeof this.value==='object'){
        this.$emit('input',{
          value:e.target.value,
          validator:this.validator?this.validator:false
        })
      }else{
        this.$emit('input',e.target.value)
      }
    }

    // 输入
    private input(e:any){
      if(this.canEmit){
        if(typeof this.value==='object'){
          this.$emit('input',{
            value:e.target.value,
            validator:this.validator?this.validator:false
          })
        }else{
          this.$emit('input',e.target.value)
        }
      }
    }

    // dom渲染
    private render(h:CreateElement){
      let style=createStyle(this)
      let $inputStyle=Object.create(null)
      $inputStyle={
        padding:'0.1rem 0.4rem 0.1rem 0.2rem',
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
      return(
        h('input',{
          attrs:{
            placeholder:this.placeholder,
            type:this.type==='integer'?'number':this.type,
            value:typeof this.value==='object'?this.value.value:this.value
          },
          on:{
            keydown:this.keydown,
            change:this.valueChange,
            input:this.input
          },
          class:{
            'q-input':true
          },
          style:Object.assign($inputStyle,style)
        })
      ) 
    }
  }  
</script>

