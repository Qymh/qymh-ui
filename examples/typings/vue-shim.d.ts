import VueRouter, {Route} from "vue-router"
import Vue from 'vue'


declare module "*.vue" {
  export default Vue
}

declare module "vue/types/vue" {
  interface Vue {
    $notice:any
  }
}
