<template lang="pug">
  .axios
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=1)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="$axios 请求"
        :rightEmpty="true")
    q-row(h=12)
    q-row(pl=2 pr=2)
      //- demo演示
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tagfill"
          leftIconColor="deepskyblue"
          title="Demo演示"
          fontSize=16
          :borderBottom="true")
        q-row(tag="section")
          q-row(fontSize=14 lh=9 mb=2)
            |输入你的电话号码,可以查询生源地
          q-row(dir="left")
            q-row(flex="1")
              q-form(
                style="width:100%"
                ref="myForm"
                :model="formData"
                :rules="rules")
                q-input(
                  v-model="formData.tel" prop="tel"
                  type="tel" placeholder="请输入你的电话号码")
            q-row(flex="0")
              q-tag(
                ml=4
                bkColor="deepskyblue"
                value="查询"
                @clicked="getWeather")
          q-row(fontSize=14 lh=9 mb=2 dir="left")
            q-col 运营商:
            q-col(color="deepskyblue") {{address.company}}
            q-col 省份:
            q-col(color="deepskyblue") {{address.province}}
          q-row(mt=4) <main>template</main>
          q-code(type="html").
            &ltq-row fontSize=14 lh=9 mb=2&gt输入你的电话号码,可以查询生源地&lt/q-row&gt
            &ltq-row dir="left"&gt
              &ltq-row flex="1"&gt
                &ltq-form
                  style="width:100%"
                  ref="myForm"
                  :model="formData"
                  :rules="rules"&gt
                  &ltq-input
                    v-model="formData.tel" prop="tel"
                    type="tel" placeholder="请输入你的电话号码"&gt&lt/q-input&gt
                &lt/q-form&gt
              &lt/q-row&gt
              &ltq-row flex="0"&gt
                &ltq-tag
                  ml=4
                  bkColor="deepskyblue"
                  value="查询"
                  @clicked="getWeather"&gt&lt/q-tag&gt
              &lt/q-row&gt
            &lt/q-row&gt
            &ltq-row fontSize=14 lh=9 mb=2 dir="left"&gt
              &ltq-col&gt运营商:&lt/q-col&gt
              &ltq-col color="deepskyblue"&gt{ { address.company } }&lt/q-col&gt
              &ltq-col&gt省份:&lt/q-col&gt
              &ltq-col color="deepskyblue"&gt{ { address.province } }&lt/q-col&gt
            &lt/q-row&gt
          main vue
          q-code.
            data() {
              formData = {
                tel: ''
              },
              rules = {
                tel: [
                  { type: 'tel', message: '请输入正确的电话'}
                ]
              },
              address = {
                company: '',
                province: ''
              }
            },
            methods: {
              getWeather() {
                let myForm = this.$refs.myForm
                myForm.validate().then((bool) => {
                  if(bool){
                    this.$axios.jsonp(this, api.getWeather,{ tel: this.formData.tel }).then((data: any) => {
                      const { province, catName } = data
                      this.address = {
                        province,
                        company: catName
                      }
                    })
                  }
                })
              }
            }
          main qymhui.config.js
          q-code.
            $axios: {
              domain: 'https://tcc.taobao.com',
              timeout: '10000',
              requestFn: (config) => {
                let { data } = config
                console.log(`serverApi:${config.baseURL}${config.url}`)
                if (Object.keys(data).length > 0) {
                  console.log(`request data ${JSON.stringify(data)}`)
                }
                return config
              },
              responseFn: (response) => {
                let { status, data } = response
                if (status >= 200 && status <= 300) {
                  console.log('---response data ---')
                  console.log(data)
                } else {
                  console.log('--- error ---')
                  console.log(data)
                  let vm = new Vue()
                  vm.$notice.toast(status === 0 ? '网络链接异常' : `网络异常,错误代码:${status}`)
                }
                return response
              }
            }
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tagfill"
          leftIconColor="deepskyblue"
          title="API一览"
          fontSize=16
          :borderBottom="true")
        //- Api
        q-row(tag="section")
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="$axios.get(vm,api,params)")
            q-row(fontSize=14 lh=9 mb=2)
              |<main>vm</main>当前的js环境<br>
              |<main>api</main>api接口<br>
              |<main>params</main>参数<br>
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="$axios.post(vm,api,params)")
            q-row(fontSize=14 lh=9 mb=2)
              |<main>vm</main>当前的js环境<br>
              |<main>api</main>api接口<br>
              |<main>params</main>参数<br>
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="$axios.jsonp(vm,api,params)")
            q-row(fontSize=14 lh=9 mb=2)
              |<main>vm</main>当前的js环境<br>
              |<main>api</main>api接口<br>
              |<main>params</main>参数<br>
          
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import * as api from '@/lib/api'

@Component({})
export default class ExAxios extends Vue {

  private formData = {
    tel: ''
  }

  private rules = {
    tel: [
      { type: 'tel', message: '请输入正确的电话'}
    ]
  }

  private address = {
    company: '',
    province: ''
  }
  private getWeather() {
    let myForm: any = this.$refs.myForm
    myForm.validate().then((bool: boolean) => {
      if(bool){
        this.$axios.jsonp(this, api.getWeather,{ tel: this.formData.tel }).then((data: any) => {
          const { province, catName } = data
          this.address = {
            province,
            company: catName
          }
        })
      }
    })
  }
}
</script>
