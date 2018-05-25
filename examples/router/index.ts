import Vue,{AsyncComponent} from 'vue'
import Router,{RouteConfig} from 'vue-router'

Vue.use(Router)

const Home:AsyncComponent=()=>import('@/pages/home.vue')
const Row:AsyncComponent=()=>import('@/pages/row.vue')
const TitleBar:AsyncComponent=()=>import('@/pages/TitleBar.vue')
const SearchBar:AsyncComponent=()=>import('@/pages/SearchBar.vue')

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
  }
]

const router:Router=new Router({
  mode:'history',
  routes:routes
})

export default router