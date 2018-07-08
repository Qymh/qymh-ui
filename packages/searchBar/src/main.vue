<template lang="pug">
  .q-searchBar(:style="computedStyle")
    //- 左侧
    .q-searchBar-left(
      @click="leftClicked"
      :style="{width:bothWidth+'rem',color:leftTextColor}"
      v-if="!$slots.left&&(leftArrow||leftText)")
      .q-searchBar-left-arrow(v-if="leftArrow")
        i.q-icon.icon-back(:style="{color:color}")
      .q-searchBar-left-text(v-if="leftText")
        span {{leftText}}
    //- 自定义左侧
    slot(
      name="left"
      v-if="$slots.left")
    
    //- 中间
    .q-searchBar-center(v-if="!$slots.center")
      .q-searchBar-center-search(:style="{backgroundColor:searchBkColor}")
        //- 头部搜索icon
        .q-searchBar-center-search-front
          i.q-icon.icon-search
        //- 输入框
        .q-searchBar-center-search-input
          form.q-searchBar-center-search-input-form(action="#" method="#" @submit.prevent="submit")
            input(
              :value="value"
              @input="input"
              type="search"
              :placeholder="placeholder")
        //- 关闭按钮
        .q-searchBar-center-search-end(
          v-if="clearable"
          @click.stop="clearSearchText")
          i.q-icon.icon-close
    //- 自定义中间
    slot(
      name="center"
      v-if="$slots.center")
    
    //- 右侧
    .q-searchBar-right(
      @click="rightClicked"
      :style="{width:bothWidth+'rem'}"
      v-if="!$slots.right&&rightText")
      .q-searchBar-right-text(:style="{color:rightTextColor}")
        span {{rightText}}
    //- 自定义右侧
    slot(
      name="right"
      v-if="$slots.right")
</template>

<script lang="ts">
  import {Vue,Component,Prop,Emit} from 'vue-property-decorator'

  @Component({})
  export default class QSearchBar extends Vue{
    
    // 全局字体颜色
    @Prop({default:''})
    private color:string

    // 背景颜色
    @Prop({default:''})
    private bkColor:string

    // 是否有边距
    @Prop({default:true})
    private hasPadding:boolean

    // padding值
    @Prop({default:0.2})
    private padding:number

    // 两边的宽度
    @Prop({default:1})
    private bothWidth:number

   // 是否有上边线
    @Prop ({default:false})
    private borderTop:boolean

    // 是否有下边线
    @Prop ({default:false})
    private borderBottom:boolean

    // 边框颜色
    @Prop({default:'#d6d7dc'})
    private borderColor:string

    // 搜索值
    @Prop({default:''})
    private value:any

    // 是否显示左侧箭头
    @Prop({default:false})
    private leftArrow:boolean

    // 左侧文字
    @Prop({default:false})
    private leftText:string

    // 左侧文字颜色
    @Prop({default:''})
    private leftTextColor:string
    
    // 搜索的背景颜色
    @Prop({default:'white'})
    private searchBkColor:string
    
    // 搜索的提醒文字
    @Prop({default:'请输入...'})
    private placeholder:string

    // 搜索是否可清除
    @Prop({default:false})
    private clearable:boolean

    // 右侧搜索文字
    @Prop({default:'搜索'})
    private rightText:string

    // 右侧搜索文字颜色
    @Prop({default:''})
    private rightTextColor:string

    // 计算样式
    private get computedStyle(){
      let style=Object.create(null)
      style.backgroundColor=this.bkColor
      style.color=this.color
      if(this.borderTop){
        style.borderTopStyle='solid'
        style.borderTopWidth='1px'
        style.borderTopColor=this.borderColor
      }
      if(this.borderBottom){
        style.borderBottomStyle='solid'
        style.borderBottomWidth='1px'
        style.borderBottomColor=this.borderColor
      }
      if(this.hasPadding){
        style.padding=this.padding+'rem'
      }
      return style
    }

    // 挂载
    private mounted() {
      if(this.$slots.left){
        let left:any=this.$slots.left[0].elm
        left.classList.add('slot-left')
        left.addEventListener('click',this.leftClicked)
      }
      if(this.$slots.center){
        let center:any=this.$slots.center[0].elm
        center.classList.add('slot-center')
      }
      if(this.$slots.right){
        let right:any=this.$slots.right[0].elm
        right.classList.add('slot-right')
      }
    }

    // 输入
    private input(e:any){
      this.$emit('input',e.target.value)
    }

    // 清空搜索值
    private clearSearchText(){
      this.$emit('input','')
    }

    // 取消表单提交默认事件
    private submit(){this.rightClicked()}

    // 左侧点击事件
    @Emit('leftClicked')
    public leftClicked(){
      if(this.leftArrow){
        this.$router.go(-1)
      }
    }

    // 右侧点击事件
    @Emit('rightClicked')
    public rightClicked(){}
  }
</script>

<style lang="scss" scoped>
  .q-searchBar{
    height: 1.2rem;
    display: flex;
    flex-direction: row;
    &-left{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-grow: 0;
      &-arrow{
        color: #a1a1a1;
      }
      &-text{
        font-size: 14px;
      }
    }
    &-center{ 
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      &-search{
        height: 0.8rem;
        width: 100%;
        display: flex;
        align-items: center;
        &-front{
          flex-grow: 0;
          margin-left: 0.3rem;
          color: #a1a1a1;
        }
        &-input{
          height: 0.8rem;
          line-height: 0.8rem;
          flex-grow: 1;
          &-form{
            height:100%;
            width: 100%;
            >input{
              height: 100%;
              width: 100%;
              display: flex;
              align-items: center;
              border: 0;
              padding: 0;
              padding-left: 0.3rem;
              font-size: 14px;
              vertical-align: middle;
              color: #a1a1a1;
              &::placeholder{
                font-size: 16px;
                color: #a1a1a1;
              }
              &::-webkit-search-cancel-button{
                color: #a1a1a1;
                -webkit-appearance: none;
              }
              &:focus{
                outline: 0;
              }
            }
          }
        }
        &-end{
          height: 100%;
          padding-right: 0.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-grow: 0;
          color: #a1a1a1;
        }
      }
    }
    &-right{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-grow: 0;
      font-size: 14px;
    }
  }
  .slot-left{
    flex-grow: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding:0 0.1rem;
  }
  .slot-center{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding:0 0.1rem;
  }
  .slot-right{
    flex-grow: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    padding:0 0.1rem;
  }
</style>

