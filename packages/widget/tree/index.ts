import Vue from 'vue'
import HighLight from 'highlight.js'
import Swiper from 'swiper'
import 'mobile-select/mobile-select.css'
import MobileSelect from 'mobile-select'

const Tree=Object.create(null)

Tree.install=(Vue:any)=>{
  Vue.prototype.$tree={
    HighLight:HighLight,
    Swiper:Swiper,
    MobileSelect:MobileSelect
  }
}

Vue.use(Tree)