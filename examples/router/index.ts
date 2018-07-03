import Vue,{AsyncComponent} from 'vue'
import Router,{RouteConfig} from 'vue-router'
import RoutesArr from './routes'

Vue.use(Router)

const routes:RouteConfig[]=[]

for(let item of RoutesArr){
  let path=item.path?item.path:`/${item.name}`
  let component:AsyncComponent=()=>import(`@/pages/${item.name}.vue`)
  routes.push({
    path:path,
    component
  })
}

const router:Router=new Router({
  mode:'history',
  routes:routes,
  scrollBehavior(to, from, savedPosition){
    return { x: 0, y: 0 }
  }
})

export default router