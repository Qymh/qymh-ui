import Vue,{AsyncComponent} from 'vue'
import Router,{RouteConfig} from 'vue-router'

Vue.use(Router)

const Home:AsyncComponent=()=>import('@/pages/home.vue')
const Row:AsyncComponent=()=>import('@/pages/row.vue')
const TitleBar:AsyncComponent=()=>import('@/pages/titleBar.vue')
const HeadBar:AsyncComponent=()=>import('@/pages/headBar.vue')
const SearchBar:AsyncComponent=()=>import('@/pages/searchBar.vue')
const TabBar:AsyncComponent=()=>import('@/pages/tabBar.vue')
const Tag:AsyncComponent=()=>import('@/pages/tag.vue')
const Input:AsyncComponent=()=>import('@/pages/input.vue')
const Radio:AsyncComponent=()=>import('@/pages/radio.vue')
const Stepper:AsyncComponent=()=>import('@/pages/Stepper.vue')
const Table:AsyncComponent=()=>import('@/pages/Table.vue')
const Overlay:AsyncComponent=()=>import('@/pages/Overlay.vue')

const routes:RouteConfig[]=[
  {
    path:'/',
    component:Home
  },
  {
    path:'/row',
    component:Row
  },
  {
    path:'/titleBar',
    component:TitleBar
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
    path:'/input',
    component:Input
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
  }
]

const router:Router=new Router({
  mode:'history',
  routes:routes
})

export default router