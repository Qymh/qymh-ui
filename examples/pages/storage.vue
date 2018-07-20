<template lang="pug">
  .storage
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=1)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="storage 存储"
        :rightEmpty="true")
    q-row(h=12)
    q-row(pl=2 pr=2)
      //- demo演示
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tagfill"
          leftIconColor="deepskyblue"
          title="存储"
          fontSize=16
          :borderBottom="true")
        //- 列子
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="$cookie")
          q-row(tag="section")
            q-row(h=12 align="center") cookie:{{cookieNow}}
            q-row(h=10 align="center" @clicked="setCookie" decoration="underline" color="deepskyblue") 点击设置cookie
            q-row(h=10 align="center" @clicked="deleteCookie" decoration="underline" color="deepskyblue") 点击删除cookie
            main template
            q-code(type="html").
              &ltq-row h=12 align="center"&gtcookie:{ { cookieNow } }&lt/q-row&gt
              &ltq-row h=10 align="center" @clicked="setCookie" decoration="underline" color="deepskyblue"&gt点击设置cookie&lt/q-row&gt
              &ltq-row h=10 align="center" @clicked="deleteCookie" decoration="underline" color="deepskyblue"&gt点击删除cookie&lt/q-row&gt
            main javascript
            q-code.
              data() {
                return {
                  cookieNow = ''
                }
              },
              methods: {
                setCookie() {
                  this.$cookie.set('test', '1')
                  this.$notice.toast('设置成功')
                  this.cookieNow = document.cookie
                },
                deleteCookie() {
                  this.$cookie.delete('test')
                  this.$notice.toast('删除成功')
                  this.cookieNow = document.cookie
                }
              }
        //- 列子
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="$storage")
          q-row(fontSize=14 lh=9 indent=2 mb=2) 设置<main>sessionStorage</main>,你可以设置后刷新本页面此数据将不存在
          q-row(tag="section")
            q-row(h=12 align="center") cookie:{{sessionStorage}}
            q-row(h=10 align="center" @clicked="setSessionStorage" decoration="underline" color="deepskyblue") 点击设置sessionStorage
            q-row(h=10 align="center" @clicked="deleteSessionStorage" decoration="underline" color="deepskyblue") 点击删除sessionStorage
            main template
            q-code(type="html").
              &ltq-row h=12 align="center"&gtsessionStorage:{ { sessionStorage  } }&lt/q-row&gt
              &ltq-row h=10 align="center" @clicked="setSessionStorage" decoration="underline" color="deepskyblue"&gt点击设置sessionStorage&lt/q-row&gt
              &ltq-row h=10 align="center" @clicked="deleteSessionStorage" decoration="underline" color="deepskyblue"&gt点击删除sessionStorage&lt/q-row&gt
            main javascript
            q-code.
              data() {
                return {
                  sessionStorage = ''
                }
              },
              methods: {
                setSessionStorage() {
                  this.$storage.set('session', '1')
                  this.$notice.toast('设置成功')
                  this.sessionStorage = `session=${this.$storage.get('session')}`
                },
                deleteSessionStorage() {
                  this.$storage.delete('session', 1)
                  this.$notice.toast('删除成功')
                  this.sessionStorage = `session=${this.$storage.get('session')}`
                }
              }
          q-row(fontSize=14 lh=9 indent=2 mb=2) 设置<main>localStorage</main>,设置后刷新本页面数据仍会存在
          q-row(tag="section")
            q-row(h=12 align="center") localStorage:{{localStorage}}
            q-row(h=10 align="center" @clicked="setLocalStorage" decoration="underline" color="deepskyblue") 点击设置localStorage
            q-row(h=10 align="center" @clicked="deleteLocalStorage" decoration="underline" color="deepskyblue") 点击删除localStorage
            main template
            q-code(type="html").
              &ltq-row h=12 align="center"&gtlocalStorage:{ { localStorage } }&lt/q-row&gt
              &ltq-row h=10 align="center" @clicked="setLocalStorage" decoration="underline" color="deepskyblue"&gt点击设置localStorage&lt/q-row&gt
              &ltq-row h=10 align="center" @clicked="deleteLocalStorage" decoration="underline" color="deepskyblue"&gt点击删除localStorage&lt/q-row&gt
            main javascript
            q-code.
              data() {
                return {
                  localStorage: ''
                }
              },
              methods: {
                setLocalStorage() {
                  this.$storage.set('local', '1', true)
                  this.$notice.toast('设置成功')
                  this.localStorage = `local=${this.$storage.get('local',true)}`
                },
                deleteLocalStorage() {
                  this.$storage.delete('local', true)
                  this.$notice.toast('删除成功')
                  this.localStorage = `local=${this.$storage.get('local',true)}`
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
              title="$cookie.set(key,value)")
            q-row(fontSize=14 lh=9 indent=2 mb=2)
              |<main>key</main>键名<br>
              |<main>value</main>值<br>
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="$cookie.get(key,value)")
            q-row(fontSize=14 lh=9 indent=2 mb=2)
              |<main>value</main>值<br>
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="$cookie.delete(key)")
            q-row(fontSize=14 lh=9 indent=2 mb=2)
              |<main>key</main>键名<br>可以是键名数组同时删除多个cookie
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="$cookie.deleteAll")
            q-row(fontSize=14 lh=9 indent=2 mb=2)
              |没有参数,直接删除所有cookie
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="$storage.set(key,value,local)")
            q-row(fontSize=14 lh=9 indent=2 mb=2)
              |<main>key</main>键名<br>
              |<main>value</main>值<br>
              |<main>local</main>为true时启用<main>localStorage</main>,默认为false
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="$storage.get(key)")
            q-row(fontSize=14 lh=9 indent=2 mb=2)
              |<main>key</main>键名<br>
              |<main>local</main>为true时启用<main>localStorage</main>,默认为false
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="$storage.delete(key)")
            q-row(fontSize=14 lh=9 indent=2 mb=2)
              |<main>key</main>键名<br>可以是键名数组同时删除多个storage
              |<main>local</main>为true时启用<main>localStorage</main>,默认为false
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="$storage.deleteAll(key)")
            q-row(fontSize=14 lh=9 indent=2 mb=2)
              |没有参数,直接删除所有storage
              |<main>local</main>为true时启用<main>localStorage</main>,默认为false
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class ExStorage extends Vue {
  private cookieNow: string = ''
  private sessionStorage: string = ''
  private localStorage: string = ''

  private setCookie() {
    this.$cookie.set('test', '1')
    this.$notice.toast('设置成功')
    this.cookieNow = document.cookie
  }
  private deleteCookie() {
    this.$cookie.delete('test')
    this.$notice.toast('删除成功')
    this.cookieNow = document.cookie
  }

  private setSessionStorage() {
    this.$storage.set('session', '1')
    this.$notice.toast('设置成功')
    this.sessionStorage = `session=${this.$storage.get('session')}`
  }

  private deleteSessionStorage() {
    this.$storage.delete('session', 1)
    this.$notice.toast('删除成功')
    this.sessionStorage = `session=${this.$storage.get('session')}`
  }

  private setLocalStorage() {
    this.$storage.set('local', '1', true)
    this.$notice.toast('设置成功')
    this.localStorage = `local=${this.$storage.get('local', true)}`
  }

  private deleteLocalStorage() {
    this.$storage.delete('local', true)
    this.$notice.toast('删除成功')
    this.localStorage = `local=${this.$storage.get('local', true)}`
  }

  private beforeRouteEnter(to: any, from: any, next: any) {
    next((vm: any) => {
      vm.cookieNow = document.cookie
      vm.sessionStorage = `session=${vm.$storage.get('session')}`
      vm.localStorage = `local=${vm.$storage.get('local', true)}`
    })
  }
}
</script>
