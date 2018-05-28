<template lang="pug">
  .tabBar(:style="computedStyle")
    div.tabBar_chunk(
      v-for="(tab,index) in tabArr"
      :key="index"
      @click="changeTab(tab,index)")
      i.tabBar_chunk_icon(
        v-if="!tab.active"
        :style="{color:tab.iconColor}"
        :class="tab.icon")
      i.tabBar_chunk_icon(
        v-if="tab.active"
        :style="{color:tab.activeIconColor}"
        :class="tab.activeIcon")
      span.tabBar_chunk_text(
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
        {type:'activeIconColor',base:'deepskyblue'},
        {type:'textColor',base:'#333333'},
        {type:'activeTextColor',base:'deepskyblue'},
        {type:'active',base:false}
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
  .tabBar{
    height: 1.2rem;
    display: flex;
    flex-direction: row;
    &_chunk{
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
      &_icon{
        font-size: 18px;
      }
      &_text{
        padding-top: 0.1rem;
        font-size: 12px;
      }
    }
  }
</style>

