import Vue from 'vue'
const Tools=Object.create(null)

Tools.install=(Vue:any)=>{
  Vue.prototype.$tools={
    isInWx():boolean{
      let dev = navigator.userAgent.toLowerCase()
      return dev.includes("micromessenger")
    }
  }
}

Vue.use(Tools)