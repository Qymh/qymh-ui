import Vue from 'vue'
import fastclick from '@/lib/fastclick'
import App from './App.vue'
import router from './router'
import Qymh from '../src/index'
import {Component} from 'vue-property-decorator'

import 'normalize.css'
import '@/lib/flexible'
import '@/lib/special'

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])

if('addEventListener' in document){
  document.addEventListener('DOMContentLoaded',()=>{
    (fastclick as any).attach(document.body)
  },false)
}

Vue.use(Qymh)

export default new Vue({
  el:'#app',
  router,
  render:h=>h(App)
})