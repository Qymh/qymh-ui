<template lang="pug">
  .input
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100)
      q-head-bar(
        bkColor="deepskyblue"
        color="#fff"
        :leftArrow="true"
        centerText="q-input"
        :rightEmpty="true")
    q-row(pl=2 pr=2 mt=12)
      q-row(lh=9 fontSize=14).
        <main>q-input</main>为表单组件,type属性用于控制表单的类型,不仅在原生input元素上进行了type赋值,
        同样对输入的值用js进行严格过滤,并且在对应的输入法上返回不同的按钮类型
      q-title-bar(
          :borderBottom="true"
          leftIcon="q-icon icon-tag"
          leftIconColor="deepskyblue"
          title="实例"
          titleColor="deepskyblue")
      //- text
      q-row(mb=10)
        q-title-bar(
          leftIcon="q-icon icon-newshot"
          leftIconColor="deepskyblue"
          :hasPadding="false"
          title="默认输入提醒")
        q-input(
          placeholder="等同于原生的placeholder")
        q-code(type="html").
          &ltq-input
            type="text"
            placeholder="等同于原生的placeholder"&gt
      //- emoji
      q-row(mb=10)
        q-title-bar(
          leftIcon="q-icon icon-newshot"
          leftIconColor="deepskyblue"
          :hasPadding="false"
          title="emoji控制")
        q-row(lh=9 fontSize=14 mb=2) 所有<main>q-input</main>默认此属性为false及不允许输入emoji
        q-input(
          :allowedEmoji="true"
          type="text"
          placeholder="允许输入emoji")
        q-code(type="html").
          &ltq-input
            :allowedEmoji="true"
            type="text"
            placeholder="允许输入emoji"&gt
      //- text
      q-row(mb=10)
        q-title-bar(
          leftIcon="q-icon icon-newshot"
          leftIconColor="deepskyblue"
          :hasPadding="false"
          title="基础表单")
        q-input(
          type="text"
          placeholder="type=text")
        q-code(type="html").
          &ltq-input
            type="text"
            placeholder="type=text"&gt
      //- number
      q-row(mb=10)
        q-title-bar(
          leftIcon="q-icon icon-newshot"
          leftIconColor="deepskyblue"
          :hasPadding="false"
          title="数字表单")
        q-input(
          type="number"
          placeholder="只能输入数字及小数且输入法默认为数字输入")
        q-code(type="html").
          &ltq-input
          type="number"
          placeholder="只能输入数字及小数且输入法默认为数字输入"&gt
        q-input(
          type="number"
          fix="2"
          placeholder="默认保留4两位小数,改变fix值可以自定义保留")
        q-code(type="html").
          &ltq-input
          type="number"
          fix="2"
          placeholder="默认保留4两位小数,改变fix值可以自定义保留"&gt
      //- integer
      q-row(mb=10)
        q-title-bar(
          leftIcon="q-icon icon-newshot"
          leftIconColor="deepskyblue"
          :hasPadding="false"
          title="整数表单")
        q-input(
          type="integer"
          placeholder="只能输入整数且输入法默认为数字输入")
        q-code(type="html").
          &ltq-input
          type="integer"
          placeholder="只能输入整数且输入法默认为数字输入"&gt
      //- tel
      q-row(mb=10)
        q-title-bar(
          leftIcon="q-icon icon-newshot"
          leftIconColor="deepskyblue"
          :hasPadding="false"
          title="电话表单")
        q-row(lh=9 fontSize=14).
          电话表单有一个返回事件<main>@errors</main>,
          其第一个参数为错误类型,在<main>type=tel</main>条件下错误类型为'tel'
        q-input(
          type="tel"
          placeholder="只能输入正确的电话"
          @errors="errors")
        q-code(type="html").
          &ltq-input
          type="tel"
          placeholder="只能输入整数且输入法默认为数字输入"
          @errors="errors"&gt
      //- search
      q-row(mb=10)
        q-title-bar(
          leftIcon="q-icon icon-newshot"
          leftIconColor="deepskyblue"
          :hasPadding="false"
          title="搜索表单")
        q-row(lh=9 fontSize=14) 搜索表单有一个返回事件<main>@submit</main>,其第一个参数为搜索的值
        q-input(
          mt=2
          type="search"
          placeholder="搜索表单,输入法回退按钮为搜索字段"
          @submit="submit")
        q-code(type="html").
          &ltq-input
          type="search"
          placeholder="搜索表单,输入法回退按钮为搜索字段"
          @submit="submit"&gt
      //- max&min
      q-row(mb=10)
        q-title-bar(
          leftIcon="q-icon icon-newshot"
          leftIconColor="deepskyblue"
          :hasPadding="false"
          title="长度控制")
        q-row(lh=9 fontSize=14).
          长度控制有一个返回事件<main>@errors</main>,
          其第一个参数为错误类型,
          在<main>max存在</main>条件下错误类型为'max'
          在<main>min存在</main>条件下错误类型为'min'
        q-input(
          mt=2
          type="text"
          min=3
          max=8
          placeholder="最小长度为3最大长度为8"
          @errors="errors")
        q-code(type="html").
          &ltq-input
            type="text"
            min=3
            max=8
            placeholder="最小长度为3最大长度为8"
            @errors="errors"&gt
      // 双向绑定
      q-row(mb=10)
        q-title-bar(
          leftIcon="q-icon icon-newshot"
          leftIconColor="deepskyblue"
          :hasPadding="false"
          title="双向绑定")
        q-input(
          type="email" v-model="name"
          placeholder="输入双向绑定")
        q-row(wordBreak="break-all") {{name}}
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExInput extends Vue{

    private name:any=''

    private errors(type:string){
      if(type==='tel'){
        this.$notice.toast('电话输入不符合规范!')
      }
      if(type==='min'||type==='max'){
        this.$notice.toast('长度不符合规范!')
      }
    }
    private submit(value:string){
      this.$notice.toast(`搜索的值为:${value}`)
    }
  }
</script>
