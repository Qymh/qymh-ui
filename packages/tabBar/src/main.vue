<template lang="pug">
  .q-tabBar(:style="computedStyle")
    div.q-tabBar-chunk(
      v-for="(tab,index) in tabArr"
      :key="index"
      @click="changeTab(tab,index)")
      //- 未激活状态
      i.q-tabBar-chunk-icon(
        v-if="!tab.active"
        :style="{color:tab.iconColor}"
        :class="tab.icon")
      //- 激活状态
      i.q-tabBar-chunk-icon(
        v-if="tab.active"
        :style="{color:tab.activeIconColor}"
        :class="tab.activeIcon")
      //- 侧边数据
      span.q-tabBar-chunk-detailsMsg(
        :style="{color:tab.detailsMsgColor,backgroundColor:tab.detailsMsgBkColor}"
        v-if="tab.detailsMsg") {{tab.detailsMsg}}
      //- 侧边点
      span.q-tabBar-chunk-detailsPoint(
        :style="{backgroundColor:tab.detailsPointColor}"
        v-if="tab.detailsPoint")
      //- 文字
      span.q-tabBar-chunk-text(
        :style="{color:tab.active?tab.activeTextColor:tab.textColor}")
        |{{tab.text}}
</template>

<script lang="ts">
  import {Vue,Component,Prop,Emit} from 'vue-property-decorator'
  @Component({})
  export default class QTabBar extends Vue{
    // 全局背景颜色
    @Prop ({default:''})
    private bkColor:string

    // 是否有上边线
    @Prop ({default:false})
    private borderTop:boolean

    // 是否有下边线
    @Prop ({default:false})
    private borderBottom:boolean

    // 边距颜色
    @Prop ({default:'#d6d7dc'})
    private borderColor:string

    // tab数组
    @Prop ({default:[]})
    private tabArr:any[]

    // 计算样式
    private get computedStyle(){
      let style=Object.create(null)
      style.backgroundColor=this.bkColor
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
      return style
    } 

    // 挂载Dom
    private mounted(){
      let checkArr:tabBar.checkArr[]=[
        {type:'iconColor',base:'#333333'},
        {type:'activeIconColor',base:''},
        {type:'textColor',base:'#333333'},
        {type:'activeTextColor',base:''},
        {type:'active',base:false},
        {type:'detailsMsgColor',base:'white'},
        {type:'detailsMsgBkColor',base:'red'},
        {type:'detailsPointColor',base:'red'}
      ]
      for(let tab of this.tabArr){
        for(let item of checkArr){
          if(!tab[item.type]){
            tab[item.type]=item.base
          }
        }
      }
    }

    // 点击标签栏
    private changeTab(tab:any,index:number){
      this.tabArr.forEach(p=>p.active=false)
      tab.active=true
      this.$emit('changeTab',index)
    }
  }
  
</script>

<style lang="scss" scoped>
  .q-tabBar{
    height: 1.2rem;
    display: flex;
    flex-direction: row;
    &-chunk{
      position: relative;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
      &-icon{
        font-size: 18px;
      }
      &-text{
        padding-top: 0.1rem;
        font-size: 12px;
      }
      &-detailsMsg{
        position: absolute;
        left: 55%;
        top: 0.1rem;
        height:0.4rem;
        line-height: 0.4rem;
        padding: 0 0.1rem;
        border-radius: 0.2rem;
        font-size: 10px;
      }
      &-detailsPoint{
        position: absolute;
        left: 55%;
        top: 0.1rem;
        height:0.2rem;
        width: 0.2rem;
        border-radius: 50%;
        font-size: 10px;
      }
    }
  }
</style>

