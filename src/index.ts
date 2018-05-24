
import Row from '../packages/row'
import TitleBar from '../packages/titleBar'
import './fonts/iconfont.css'

const components=[
  Row,
  TitleBar
]

const install=function(Vue:any,opts={}){
  components.map(component=>{
    Vue.component(component.name,component)
  })
}

export default{
  install
}