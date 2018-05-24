import Vue,{AsyncComponent} from 'vue'
import Router,{RouteConfig} from 'vue-router'

Vue.use(Router)

const Row:AsyncComponent=()=>import('@/pages/row.vue')

const routes:RouteConfig[]=[
  {
    path:'/row',
    component:Row
  }
]

const router:Router=new Router({
  mode:'history',
  routes:routes
})

export default router