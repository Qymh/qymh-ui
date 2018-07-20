import './fonts/iconfont.css'
import './style/highLight.scss'
import './style/widget.scss'
import './style/animate.scss'
import './style/mescroll.scss'
import 'swiper/dist/css/swiper.min.css'
import 'mobile-select/mobile-select.css'

import Vue from 'vue'
import lazyLoad from 'vue-lazyload'
import CONFIG from './qymhui.config'
Vue.use(lazyLoad, CONFIG.qimage)

import '../packages/widget'

import QRow from '../packages/row'
import QCol from '../packages/col'
import QText from '../packages/text'
import QCell from '../packages/cell'
import QHeadBar from '../packages/headBar'
import QSearchBar from '../packages/searchBar'
import QTabBar from '../packages/tabBar'
import QTag from '../packages/tag'
import QCode from '../packages/code'
import QForm from '../packages/form'
import QInput from '../packages/input'
import QRadio from '../packages/radio'
import QStepper from '../packages/stepper'
import QTable from '../packages/table'
import QOverlay from '../packages/overlay'
import QFiles from '../packages/files'
import QImage from '../packages/image'
import QSwiper from '../packages/swiper'
import QPhoto from '../packages/photo'
import QSelect from '../packages/select'
import QScroll from '../packages/scroll'

const components = [
  QRow,
  QCol,
  QText,
  QCell,
  QHeadBar,
  QSearchBar,
  QTabBar,
  QTag,
  QCode,
  QForm,
  QInput,
  QRadio,
  QStepper,
  QTable,
  QOverlay,
  QFiles,
  QImage,
  QSwiper,
  QPhoto,
  QSelect,
  QScroll
]

const componentsName: string[] = [
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
  'QSelect',
  'QScroll'
]

const install = function(Vue: any, opts: any) {
  components.map((component: any, i) => {
    Vue.component(componentsName[i], component)
  })
}

export default {
  install,
  QRow,
  QCol,
  QText,
  QCell,
  QHeadBar,
  QSearchBar,
  QTabBar,
  QTag,
  QCode,
  QForm,
  QInput,
  QRadio,
  QStepper,
  QTable,
  QOverlay,
  QFiles,
  QImage,
  QSwiper,
  QPhoto,
  QSelect,
  QScroll
}
