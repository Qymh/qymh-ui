
import './fonts/iconfont.css'

import Row from '../packages/row'
import TitleBar from '../packages/titleBar'
import SearchBar from '../packages/searchBar'
import TabBar from '../packages/tabBar'
import Tag from '../packages/tag'

const components=[
  Row,
  TitleBar,
  SearchBar,
  TabBar,
  Tag
]

const install=function(Vue:any,opts={}){
  components.map(component=>{
    Vue.component(component.name,component)
  })
}

export default{
  install
}