<template lang="pug">
  .row
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="q-row"
        :rightEmpty="true")
    q-row(mt=12)
    //- 基础css
    q-row(pl=2 pr=2)
      q-title-bar(
        :borderBottom="true"
        leftIcon="q-icon icon-tag"
        leftIconColor="deepskyblue"
        title="基础css"
        titleColor="deepskyblue")
      q-row(lh=9).
        平常我们在写css样式的时候,会先命名再写css,如果页面过于复杂,
        写css无论在样式还是一长串的命名上都会较为麻烦,
        而<main>q-row</main>直接避免了命名带的麻烦,也尽可能减轻了写css样式的工程量,
        我们来看一个列子
      //- 举例演示高宽
      q-row(tag="section")
        //- 高宽
        q-row
          q-title-bar(
            leftIcon="q-icon icon-newshot"
            leftIconColor="deepskyblue"
            :hasPadding="false"
            title="高宽")
          q-row(lh=9).
            原生高度为<main>height</main> 宽度为<main>width</main>,
            在<main>q-row</main>中,我们将它简化为属性值写法<br>
            <main>h</main>代表了高度,<main>w</main>代表了宽度,
            <main>row</main>代表了高度百分比,<main>col</main>代表了宽度百分比
            <main>h和w换算比值为1比10</main>即<main>h=10</main>换算出来的结果是<main>height:1rem</main>,
            <main>row和col</main>直接代表了百分比,即<main>col=50</main>换算出来的结果是<main>width:50%</main>
          q-title-bar(title="演示1")
          q-row.demo(h=12) h=12 换算结果 height:1.2rem
          q-code(type="html").
            &ltq-row h="12" class="demo" &gt
              h=12 换算结果 height:1.2rem
            &lt/q-row&gt
          q-title-bar(title="演示2")
          q-row.demo(h=12 col=50) h=12 col=50 换算结果 height:1.2rem width:50%
          q-code(type="html").
            &ltq-row h="12" col=50 class="demo" &gt
              h=12 换算结果 height:1.2rem width:50%
            &lt/q-row&gt
        //- line-height
        q-row
          q-title-bar(
            leftIcon="q-icon icon-newshot"
            leftIconColor="deepskyblue"
            :hasPadding="false"
            title="line-height")
          q-row.demo(lh=10 h=10) lh→line-height
          q-code(type="html").
            &ltq-row lh=10 h=10 class="demo" &gt
              lh→line-height
            &ltq-row&gt
        //- padding
        q-row
          q-title-bar(
            leftIcon="q-icon icon-newshot"
            leftIconColor="deepskyblue"
            :hasPadding="false"
            title="padding")
          q-row.demo(pt=2 pr=2 pb=2 pl=2)
            |pt→padding-top
            |pr→padding-right
            |pb→padding-bottom
            |pl→padding-left
          q-code(type="html").
            &ltq-row pt=2 pr=2 pb=2 pl=2 class="demo" &gt
              pt→padding-top
              pr→padding-right
              pb→padding-bottom
              pl→padding-left
            &ltq-row&gt
        //- margin
        q-row
          q-title-bar(
            leftIcon="q-icon icon-newshot"
            leftIconColor="deepskyblue"
            :hasPadding="false"
            title="margin")
          q-row.demo(mt=2 mr=2 mb=2 ml=2)
            |mt→margin-top
            |mr→margin-right
            |mb→margin-bottom
            |ml→margin-left
          q-code(type="html").
            &ltq-row mt=2 mr=2 mb=2 ml=2 class="demo" &gt
              mt→margin-top
              mr→margin-right
              mb→margin-bottom
              ml→margin-left
            &ltq-row&gt
    //- flex布局方向
    q-row(tag="section" pl=2 pr=2)
      q-title-bar(
        :borderBottom="true"
        leftIcon="q-icon icon-tag"
        leftIconColor="deepskyblue"
        title="flex布局方向"
        titleColor="deepskyblue")
      q-row(tag="section")
        q-row(lh=9).
          方向指flex布局的flex-direction,原生的有
          <main>row</main>
          <main>row-reverse</main>
          <main>column</main>
          <main>column-reverse</main>,
          四个方向在<main>q-row</main>中对应的属性<main>dir</main>有四个值
          <main>dir="left"</main>
          <main>dir="right"</main>
          <main>dir="top"</main>
          <main>dir="bottom"</main>,分别代表了从左至右,从右至左,从上至下,从下至上,四个方向
        //- 标题
        q-title-bar(
          leftIcon="q-icon icon-newshot"
          leftIconColor="deepskyblue"
          :hasPadding="false"
          title="左和上")
        //- 左和上
        q-row(dir="left")
          q-row(bkColor="orange" col=50) 123
          q-row(col=50 dir="top")
            q-row(bkColor="lightGreen") 456
            q-row(bkColor="pink") 789
        //- 代码
        q-code(type="html").
          &ltq-row dir="left"&gt
            &ltq-row bkColor="orange" col="50"&gt123&lt/q-row&gt
            &ltq-row dir="top" col="50"&gt
              &ltq-row bkColor="lightGreen"&gt456&lt/q-row&gt
              &ltq-row bkColor="pink"&gt789&lt/q-row&gt
            &lt/q-row&gt
          &lt/q-row&gt
      q-row(tag="section")
        //- 标题
        q-title-bar(
          leftIcon="q-icon icon-newshot"
          leftIconColor="deepskyblue"
          :hasPadding="false"
          title="右和下")
        //- 右和下
        q-row(dir="right" mt=2)
          q-row(bkColor="orange" col=50) 123
          q-row(col=50 dir="bottom")
            q-row(bkColor="lightGreen") 456
            q-row(bkColor="pink") 789
        //- 代码
        q-code(type="html").
          &ltq-row dir="right"&gt
            &ltq-row bkColor="orange" col="50"&gt123&lt/q-row&gt
            &ltq-row dir="bottom" col="50"&gt
              &ltq-row bkColor="lightGreen"&gt456&lt/q-row&gt
              &ltq-row bkColor="pink"&gt789&lt/q-row&gt
            &lt/q-row&gt
          &lt/q-row&gt
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'

  @Component({})
  export default class exRow extends Vue{
    
  }
</script>

<style lang="scss" scoped>
  .demo{
    background-color: deepskyblue;
    color: #fff;
  }
</style>
