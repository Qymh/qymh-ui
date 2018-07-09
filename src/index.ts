
import './fonts/iconfont.css'
import './style/highLight.scss'
import './style/widget.scss'
import './style/animate.scss'
import 'swiper/dist/css/swiper.min.css'

import Vue from 'vue'
import lazyLoad from 'vue-lazyload'
import {IMAGECONFIG} from './qymhui.config'
Vue.use(lazyLoad,IMAGECONFIG)

import '../packages/widget'

import Row from '../packages/row'
import Col from '../packages/col'
import Text from '../packages/text'
import Cell from '../packages/cell'
import HeadBar from '../packages/headBar'
import SearchBar from '../packages/searchBar'
import TabBar from '../packages/tabBar'
import Tag from '../packages/tag'
import Code from '../packages/code'
import Form from '../packages/form'
import Input from '../packages/input'
import Radio from '../packages/radio'
import Stepper from '../packages/stepper'
import Table from '../packages/table'
import Overlay from '../packages/overlay'
import Files from '../packages/files'
import Image from '../packages/image'
import Swiper from '../packages/swiper'
import Photo from '../packages/photo'
import Select from '../packages/select'

const components=[
  Row,
  Col,
  Text,
  Cell,
  HeadBar,
  SearchBar,
  TabBar,
  Tag,
  Code,
  Form,
  Input,
  Radio,
  Stepper,
  Table,
  Overlay,
  Files,
  Image,
  Swiper,
  Photo,
  Select
]

const componentsName:string[]=[
  'QRow',
  'QCol',
  'QText',
  'QCell',
  'QHeadBar',
  'QSearchBar',
  'QTabBar',
  'QTag',
  'QCode',
  'QForm',
  'QInput',
  'QRadio',
  'QStepper',
  'QTable',
  'QOverlay',
  'QFiles',
  'QImage',
  'QSwiper',
  'QPhoto',
  'QSelect'
]

const install=function(Vue:any,opts={}){
  components.map((component:any,i)=>{
    Vue.component(componentsName[i],component)
  })
}

export default{
  install,
  Row,
  Col,
  Text,
  Cell,
  HeadBar,
  SearchBar,
  TabBar,
  Tag,
  Code,
  Form,
  Input,
  Radio,
  Stepper,
  Table,
  Overlay,
  Files,
  Image,
  Swiper,
  Photo,
  Select
}