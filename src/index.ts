
import './fonts/iconfont.css'
import './style/highLight.scss'
import './style/widget.scss'
import './style/animate.scss'

import '../packages/widget'

import Row from '../packages/row'
import Text from '../packages/text'
import TitleBar from '../packages/titleBar'
import HeadBar from '../packages/headBar'
import SearchBar from '../packages/searchBar'
import TabBar from '../packages/tabBar'
import Tag from '../packages/tag'
import Code from '../packages/code'
import Input from '../packages/input'
import Radio from '../packages/radio'
import Stepper from '../packages/stepper'
import Table from '../packages/table'
import Overlay from '../packages/overlay'
import Files from '../packages/files'

const components=[
  Row,
  Text,
  TitleBar,
  HeadBar,
  SearchBar,
  TabBar,
  Tag,
  Code,
  Input,
  Radio,
  Stepper,
  Table,
  Overlay,
  Files
]

const install=function(Vue:any,opts={}){
  components.map(component=>{
    Vue.component(component.name,component)
  })
}

export default{
  install
}