<template lang="pug">
  .q_overlay
    // 背景
    .q_overlay_bk(
      v-if="computedShow"
      @click.stop="hide"
      :style="{height:clientHeight+'px',width:clientWidth+'px',opacity:opacity}")
    // 盒子
    transition(
      name="details"
      :enter-active-class="ComputedEnterClass"
      :leave-active-class="ComputedLeaveClass")
      .q_overlay_box(
        v-if="computedShow"
        :style="computedBoxStyle")
        slot
</template>

<script lang="ts">
  import {Vue,Component,Prop, Watch} from 'vue-property-decorator'
  @Component({})
  export default class QOverlay extends Vue{
    // 视口高度
    private clientHeight:number=0
    // 视口宽度
    private clientWidth:number=0
    // 避免双向绑定的show
    private computedShow:boolean=false

    // 蒙层出现方向 
    @Prop({default:''})
    private position:overlay.position

    // 蒙层透明度
    @Prop({default:0.3})
    private opacity:number|string

    // 蒙层背景颜色
    @Prop({default:'#ffffff'})
    private bkColor:string

    // 蒙层的最小高度
    @Prop({default:10})
    private minHeight:number

    // 蒙层的最大高度
    @Prop({default:13})
    private maxHeight:number

    // 蒙层是否展现
    @Prop({default:false})
    private show:boolean

    // 监听蒙层的显示
    @Watch('show')
    onShowChanged(val:boolean){
      this.computedShow=this.show
    }

    // 计算后的盒子样式
    private get computedBoxStyle(){
      let style=Object.create(null)
      if(this.position==='left'||this.position==='right'){
        if(this.position==='left'){
          style.left=0
        }else{
          style.right=0
        }
        style.width='90%'
        style.top=0
        style.height=this.clientHeight+'px'
      }
      if(this.position==='top'||this.position==='bottom'){
        style.minHeight='10rem'
        if(this.position==='top'){
          style.top=0
        }else{
          style.bottom=0
        }
        style.width='100%'
        style.left=0
        style.minHeight=this.minHeight+'rem'
        style.maxHeight=this.maxHeight+'rem'
      }
      style.backgroundColor=this.bkColor
      return style
    }

    // 计算后的盒子进入样式
    private get ComputedEnterClass(){
      let style:string=''
      switch (this.position) {
        case 'right':
          style='animated fadeInRight'
          break
        case 'left':
          style='animated fadeInLeft'
          break
        case 'top':
          style='animated fadeInDown'
          break
        case 'bottom':
          style='animated fadeInUp'
          break
      }
      return style
    }

    // 计算后的盒子离开样式
    private get ComputedLeaveClass(){
      let style:string=''
      switch (this.position) {
        case 'right':
          style='animated fadeOutRight'
          break
        case 'left':
          style="animated fadeOutLeft"
          break
        case 'top':
          style='animated fadeOutUp'
          break
        case 'bottom':
          style='animated fadeOutDown'
          break
      }
      return style
    }

    // 获取视口高度宽度
    private mounted(){
      let clientHeight=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight
      let clientWidth=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth
      this.clientHeight=clientHeight
      this.clientWidth=clientWidth
    }

    // 隐藏蒙层
    private hide(){
      this.computedShow=false
      this.$emit('hide')
    }
  }
</script>

<style lang="scss" scoped>
  .q_overlay{
    &_bk{
      background-color: #333;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 6;
    }
    &_box{
      position: fixed;
      z-index: 7;
    }
  }
</style>

