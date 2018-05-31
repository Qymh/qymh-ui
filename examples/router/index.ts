import Vue,{AsyncComponent} from 'vue'
import Router,{RouteConfig} from 'vue-router'

Vue.use(Router)

const Home:AsyncComponent=()=>import('@/pages/home.vue')
const Row:AsyncComponent=()=>import('@/pages/row.vue')
const TitleBar:AsyncComponent=()=>import('@/pages/titleBar.vue')
const SearchBar:AsyncComponent=()=>import('@/pages/searchBar.vue')
const TabBar:AsyncComponent=()=>import('@/pages/tabBar.vue')
const Tag:AsyncComponent=()=>import('@/pages/tag.vue')

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
    path:'/titlebar',
    component:TitleBar
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
  }
]

const router:Router=new Router({
  mode:'history',
  routes:routes
})

export default router