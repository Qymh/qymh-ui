import Vue from 'vue'
import fastclick from 'fastclick'
import App from './App.vue'
import router from './router'
import Qymh from '../src/index'

import 'normalize.css'
import '@/lib/flexible'

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