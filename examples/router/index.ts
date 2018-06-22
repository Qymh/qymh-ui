import Vue,{AsyncComponent} from 'vue'
import Router,{RouteConfig} from 'vue-router'

Vue.use(Router)

const Home:AsyncComponent=()=>import('@/pages/home.vue')
const Text:AsyncComponent=()=>import('@/pages/text.vue')
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
const Files:AsyncComponent=()=>import('@/pages/files.vue')


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
    path:'/text',
    component:Text
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
  },
  {
    path:'/files',
    component:Files
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