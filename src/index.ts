import {Component} from 'vue-property-decorator'
import Row from '../packages/row'
const components=[
  Row
]


const install=function(Vue:any,opts={}){
  components.map(component=>{
    Vue.component(Row.name,component)
  })
}

export default{
  Row,
  install
}