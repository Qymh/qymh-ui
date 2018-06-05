
import './fonts/iconfont.css'
import './style/highLight.scss'

import Row from '../packages/row'
import TitleBar from '../packages/titleBar'
import HeadBar from '../packages/headBar'
import SearchBar from '../packages/searchBar'
import TabBar from '../packages/tabBar'
import Tag from '../packages/tag'
import Code from '../packages/code'
import Input from '../packages/input'

const components=[
  Row,
  TitleBar,
  HeadBar,
  SearchBar,
  TabBar,
  Tag,
  Code,
  Input
]

const install=function(Vue:any,opts={}){
  components.map(component=>{
    Vue.component(component.name,component)
  })
}

export default{
  install
}