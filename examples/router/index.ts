import Vue,{AsyncComponent} from 'vue'
import Router,{RouteConfig} from 'vue-router'

Vue.use(Router)

const Home:AsyncComponent=()=>import('@/pages/home.vue')
const Text:AsyncComponent=()=>import('@/pages/text.vue')
const Layout:AsyncComponent=()=>import('@/pages/layout.vue')
const Cell:AsyncComponent=()=>import('@/pages/cell.vue')
const HeadBar:AsyncComponent=()=>import('@/pages/headBar.vue')
const SearchBar:AsyncComponent=()=>import('@/pages/searchBar.vue')
const TabBar:AsyncComponent=()=>import('@/pages/tabBar.vue')
const Tag:AsyncComponent=()=>import('@/pages/tag.vue')
const Form:AsyncComponent=()=>import('@/pages/form.vue')
const Radio:AsyncComponent=()=>import('@/pages/radio.vue')
const Stepper:AsyncComponent=()=>import('@/pages/Stepper.vue')
const Table:AsyncComponent=()=>import('@/pages/Table.vue')
const Overlay:AsyncComponent=()=>import('@/pages/Overlay.vue')
const Files:AsyncComponent=()=>import('@/pages/files.vue')
const Swiper:AsyncComponent=()=>import('@/pages/swiper.vue')


const routes:RouteConfig[]=[
  {
    path:'/',
    component:Home
  },
  {
    path:'/layout',
    component:Layout
  },
  {
    path:'/text',
    component:Text
  },
  {
    path:'/cell',
    component:Cell
  },
  {
    path:'/headBar',
    component:HeadBar,
  },
  {
    path:'/searchBar',
    component:SearchBar
  },
  {
    path:'/tabBar',
    component:TabBar
  },
  {
    path:'/tag',
    component:Tag
  },
  {
    path:'/form',
    component:Form
  },
  {
    path:'/radio',
    component:Radio
  },
  {
    path:'/stepper',
    component:Stepper
  },
  {
    path:'/table',
    component:Table
  },
  {
    path:'/overlay',
    component:Overlay
  },
  {
    path:'/files',
    component:Files
  },
  {
    path:'/swiper',
    component:Swiper
  }
]

const router:Router=new Router({
  mode:'history',
  routes:routes,
  scrollBehavior(to, from, savedPosition){
    return { x: 0, y: 0 }
  }
})

export default router