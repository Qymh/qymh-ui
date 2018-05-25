<template lang="pug">
  .searchBar(:style="computedStyle")
    //- 左侧
    .left
      .left_arrow
        i.q-icon.icon-back
    
    //- 中间
    .center
      .center_search
        .center_search_front
          i.q-icon.icon-search
        .center_search_input
          form.center_search_input_form(action="#" method="#" @submit.prevent="submit")
            input(
              type="search"
              placeholder="请输入...")
        .center_search_end
          i.q-icon.icon-close
    
    //- 右侧
    .right
      .right_text
        span 搜索
</template>

<script lang="ts">
  import {Vue,Component,Prop} from 'vue-property-decorator'

  @Component({})
  export default class QSearchBar extends Vue{
    
    // 背景颜色
    @Prop({default:''})
    private bkColor:string

    // 是否有边距
    @Prop({default:true})
    private hasPadding:boolean

    // 是否有边框
    @Prop({default:false})
    private showBorder:string

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
    
    // 搜索的提醒文字
    @Prop({default:''})
    private centerText:string

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
      if(this.showBorder){
        style.borderBottomStyle='solid'
        style.borderBottomWidth='1px'
        if(this.borderColor){
          style.borderBottomColor=this.borderColor
        }else{
          style.borderBottomColor='#d6d7dc'
        }
      }
      if(this.hasPadding){
        style.padding='0rem 0.2rem'
      }
      return style
    }

    private submit(){}
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
            color: #a1a1a1;
            border: 0;
            padding: 0;
            padding-left: 0.3rem;
            font-size: 14px;
            background-color: #f8f8f8;
            vertical-align: middle;
            &::placeholder{
              font-size: 16px;
              color: #a1a1a1;
            }
            &:focus{
              outline: 0;
            }
          }
        }
      }
      &_end{
        margin-right: 0.3rem;
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

