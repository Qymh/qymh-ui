import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Qymh from '../src/index'

import 'normalize.css'
import '@/lib/flexible'

Vue.use(Qymh)

export default new Vue({
  el:'#app',
  router,
  render:h=>h(App)
})