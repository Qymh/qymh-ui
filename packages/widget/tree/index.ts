import Vue from 'vue'
import HighLight from '../../../src/lib/highlight'
import Swiper from 'swiper'
import MobileSelect from 'mobile-select'
import MeScroll from 'mescroll.js'

const Tree = Object.create(null)

Tree.install = (Vue: any) => {
  Vue.prototype.$tree = {
    HighLight,
    Swiper,
    MobileSelect,
    MeScroll
  }
}

Vue.use(Tree)
