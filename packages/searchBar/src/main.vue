<template lang="pug">
  .searchBar(:style="computedStyle")
    //- 左侧
    .left(@click="leftClicked")
      .left_arrow(v-if="leftArrow")
        i.q-icon.icon-back
      .left_text(v-if="leftText")
        span {{leftText}}
    
    //- 中间
    .center
      .center_search(:style="{backgroundColor:searchBkColor}")
        //- 头部搜索icon
        .center_search_front
          i.q-icon.icon-search
        //- 输入框
        .center_search_input
          form.center_search_input_form(action="#" method="#" @submit.prevent="submit")
            input(
              v-model="searchText"
              type="search"
              placeholder="请输入...")
        //- 关闭按钮
        .center_search_end(
          v-if="clearable"
          @click.stop="clearSearchText")
          i.q-icon.icon-close
    
    //- 右侧
    .right(@click="rightClicked(searchText)")
      .right_text(:style="{color:rightColor}")
        span {{rightText}}
</template>

<script lang="ts">
  import {Vue,Component,Prop,Emit} from 'vue-property-decorator'

  @Component({})
  export default class QSearchBar extends Vue{
    
    // 搜索文字
    private searchText:any=''
    
    // 全局字体颜色
    @Prop({default:''})
    private color:string

    // 背景颜色
    @Prop({default:''})
    private bkColor:string

    // 是否有边距
    @Prop({default:false})
    private hasPadding:boolean

   // 是否有上边线
    @Prop ({default:false})
    private borderTop:boolean

    // 是否有下边线
    @Prop ({default:false})
    private borderBottom:boolean

    // 边框颜色
    @Prop({default:''})
    private borderColor:string

    // 是否显示左侧箭头
    @Prop({default:false})
    private leftArrow:boolean

    // 左侧文字
    @Prop({default:false})
    private leftText:string

    // 左侧文字颜色
    @Prop({default:''})
    private leftColor:string
    
    // 搜索的背景颜色
    @Prop({default:'#f8f8f8'})
    private searchBkColor:string
    
    // 搜索的提醒文字
    @Prop({default:'请输入...'})
    private searchPlaceholder:string

    // 搜索是否可清除
    @Prop({default:true})
    private clearable:boolean

    // 右侧搜索文字
    @Prop({default:'搜索'})
    private rightText:string

    // 右侧搜索文字颜色
    @Prop({default:''})
    private rightColor:string

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
        style.padding='0rem 0.2rem'
      }
      return style
    }

    // 清空搜索值
    private clearSearchText(){
      this.searchText=''
    }

    // 取消表单提交默认事件
    private submit(){this.rightClicked(this.searchText)}

    // 左侧点击事件
    @Emit('leftClicked')
    public leftClicked(){}

    // 右侧点击事件
    @Emit('rightClicked')
    public rightClicked(searchText:string){}
  }
</script>

<style lang="scss" scoped>
  .searchBar{
    height: 1.2rem;
    display: flex;
    flex-direction: row;
  }
  .left{
    width: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    &_arrow{
      color: #a1a1a1;
    }
    &_text{
      font-size: 14px;
    }
  }
  .center{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    &_search{
      height: 0.8rem;
      width: 100%;
      display: flex;
      align-items: center;
      background-color: #f8f8f8;
      border-radius: 0.5rem;
      &_front{
        flex-grow: 0;
        margin-left: 0.3rem;
        color: #a1a1a1;
      }
      &_input{
        height: 0.8rem;
        line-height: 0.8rem;
        flex-grow: 1;
        &_form{
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
      &_end{
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
  .right{
    width: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    font-size: 14px;
  }
</style>

