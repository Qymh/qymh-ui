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
          q-row(mt=2)
            q-tag(
              bkColor="deepskyblue"
              value="点击查询作者信息"
              @clicked="getAuthor")
          q-row(fontSize=14 lh=9 mb=2) 你可以调出浏览器控制台查看日志输出
          q-row(fontSize=14 lh=9 mb=2 dir="left" v-if="Object.keys(author).length")
            q-col 姓名:
            q-col(color="deepskyblue") {{author.name}}
            q-col 年龄:
            q-col(color="deepskyblue") {{author.age}}
            q-col 性别:
            q-col(color="deepskyblue") {{author.sex}}
          q-row(mt=4) <main>template</main>
          q-code(type="html").
            &ltq-row mt=2&gt
              &ltq-tag bkColor="deepskyblue" value="点击查询作者信息" @clicked="getAuthor"&gt&lt/q-tag&gt
            &lt/q-row&gt
            &ltq-row fontSize=14 lh=9 mb=2&gt 你可以调出浏览器控制台查看日志输出&lt/q-row&gt
            &ltq-row fontSize=14 lh=9 mb=2 dir="left" v-if="Object.keys(author).length"&gt
              &ltq-col&gt姓名:&lt/q-col&gt
              &ltq-col color="deepskyblue"&gt{{author.name}}&lt/q-col&gt
              &ltq-col&gt年龄:&lt/q-col&gt
              &ltq-col color="deepskyblue"&gt{{author.age}}&lt/q-col&gt
              &ltq-col&gt性别:&lt/q-col&gt
              &ltq-col color="deepskyblue"&gt{{author.sex}}&lt/q-col&gt
            &lt/q-row&gt
          main vue
          q-code.
            data() {
              author = {

              }
            },
            methods: {
              getAuthor() {
                this.$axios.get(this, api.getAuthor).then((data: any) => {
                  const { name, age, sex } = data[0]
                  this.author = {
                    name,
                    age,
                    sex
                  }
                })
              }
            }
          main qymhui.config.js
          q-code.
            $axios: {
              domain: 'https://api.qymh.org.cn',
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
  private author = {}

  private getAuthor() {
    this.$axios.get(this, api.getAuthor).then((data: any) => {
      const { name, age, sex } = data[0]
      this.author = {
        name,
        age,
        sex
      }
    })
  }
}
</script>
