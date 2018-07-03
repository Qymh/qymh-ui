<template lang="pug">
  .row
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=5)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="layout 布局"
        fontSize=16
        :rightEmpty="true")
    q-row(mt=12)
    q-row(pl=2 pr=2)
      //- 介绍
      q-row
        q-cell(
          leftIcon="q-icon icon-tagfill"
          leftIconColor="deepskyblue"
          title="介绍"
          fontSize=16
          :borderBottom="true")
        q-col(lh=9 indent=2 mb=2) 在平常的布局中,我们会对元素进行命名然后再写层叠样式,
          |这个过程中带来了一些麻烦,最大的麻烦就是命名过长过复杂,在<main>BEM</main>命名准则条件下,我们采用下划线连接父元素与无数子元素比如
          |<main>.a_b_c</main><main>.w_q_d</main>,举例子的这些名称符号还是仅仅一个字母,如果在正常的开发环境下,命名的长度是很可怕的,
          |当然这也是可以减少开发量的,比如采用预处理器诸如<main>scss</main><main>less</main>,通过<main>&</main>连接元素,
          |但仍然具有相当大的时间开销,在这个UI组件库中,我们直接省略掉了样式命名,并极力将书写css的成本降到最低,下面介绍负责布局的两个组件
          |<main>q-row</main><main>q-col</main>
      //- Demo
      q-row
        q-cell(
          leftIcon="q-icon icon-tagfill"
          leftIconColor="deepskyblue"
          title="Demo演示"
          fontSize=16
          :borderBottom="true")
        //- 高度
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="高度")
          q-row(lh=9 indent=2 mb=2) 高度属性值我们缩写为<main>h</main>,比值为10比1,
            |即<main>h=1</main>解析后为<main>height:0.1rem</main>,属性<main>bkColor</main>代表背景颜色,
            |这里为了区分,在属性上加了背景颜色,之后会介绍到这个属性
          q-row(h=10 bkColor="#BEE7E9") 高度为1.0rem
          q-code(type="html").
            &ltq-row h=10 bkColor="#BEE7E9"&gt
              高度为1.0rem
            &lt/q-row&gt
        //- 宽度
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="宽度")
          q-row(lh=9 indent=2 mb=2) 宽度属性值我们缩写为<main>w</main>,比值为10比1,
            |即<main>w=1</main>解析后为<main>width:0.1rem</main>
          q-row(h=10 w=50 bkColor="#BEE7E9") 高度为1.0rem 宽度为5.0rem
          q-code(type="html").
            &ltq-row h=10 w=10 bkColor="#BEE7E9"&gt
              高度为1.0rem 宽度为5.0rem
            &lt/q-row&gt
        //- 行高
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="行高")
          q-row(lh=9 indent=2 mb=2) 行高属性值我们缩写为<main>lh</main>,比值为10比1,
            |即<main>lh=1</main>解析后为<main>line-height:0.1rem</main>
          q-row(h=10 lh=10 bkColor="#BEE7E9") 高度为1.0rem 行高为1.0rem
          q-code(type="html").
            &ltq-row h=10 lh=10 bkColor="#BEE7E9"&gt
              高度为1.0rem 行高为1.0rem
            &lt/q-row&gt
        //- 高宽百分比
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="高宽百分比")
          q-row(lh=9 indent=2 mb=2) 高度百分比我们缩写为<main>row</main>
            |宽度百分比我们缩写为<main>col</main>,两个的比值为1比1,
            |即<main>row=10</main>解析后为<main>height:10%</main>,
            <main>col=50</main>解析后为<main>width:50%</main>
          q-row(h=10 bkColor="#BEE7E9")
            q-row(row=80 col=50 bkColor="#E6CEAC") 高度为80%,宽度为50%
          q-code(type="html").
            &ltq-row h=10 bkColor="#BEE7E9"&gt
              &ltq-row row=80 col=50 bkColor="#E6CEAC"&gt
                高度为80%,宽度为50%
              &lt/q-row&gt
            &lt/q-row&gt
        //- margin
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="margin")
          q-row(lh=9 indent=2 mb=2) margin外边距我们缩写为4个值
            |<main>mt->margin-top</main>
            |<main>mr->margin-right</main>
            |<main>mb->margin-bottom</main>
            |<main>ml->margin-left</main>
            |换算比值为10比1,即<main>mt=1</main>解析后为<main>margin-top:0.1rem</main>
          q-row(h=10 bkColor="#BEE7E9") h=10
          q-row(h=10 mt=1 mr=1 mb=1 ml=1 bkColor="#E6CEAC") h=10 mt=1 mr=1 mb=1 ml=1
          q-code(type="html").
            &ltq-row h=10 bkColor="#BEE7E9"&gt10&lt/q-row&gt
            &ltq-row h=10 mt=1 mr=1 mb=1 ml=1 bkColor="#E6CEAC"&gt
              h=10 mt=1 mr=1 mb=1 ml=1
            &lt/q-row&gt
        //- padding
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="padding")
          q-row(lh=9 indent=2 mb=2) padding外边距我们缩写为4个值
            |<main>pt->padding-top</main>
            |<main>pr->padding-right</main>
            |<main>pb->padding-bottom</main>
            |<main>pl->padding-left</main>
            |换算比值为10比1,即<main>pt=1</main>解析后为<main>padding-top:0.1rem</main>
          q-row(h=10 pt=1 pr=1 pb=1 pl=1 bkColor="#E6CEAC") h=12 pt=1 pr=1 pb=1 pl=1
          q-code(type="html").
            &ltq-row h=10 pt=1 pr=1 pb=1 pl=1 bkColor="#E6CEAC"&gt
              h=10 pt=1 pr=1 pb=1 pl=1
            &lt/q-row&gt
        //- 定位
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="定位")
          q-row(lh=9 indent=2 mb=2) 关于定位有5个属性,<main>position</main>仍然是position,
            |其余4个属性我们将其缩写为
            |<main>t->top</main>
            |<main>r->right</main>
            |<main>b->bottom</main>
            |<main>l->left</main>
            |在这里有一个需要注意的地方,除了接受rem值,这4个值也可以接受百分比,
            |当你给的参数类型是数字时,传入的是rem,比值为10比1,即<main>t=1</main>解析后为
            |<main>top:0.1rem</main>,但如果你传入的是字符,传入的便是百分比,比值为1比1,即
            |<main>t="1"</main>解析后为<main>top:1%</main>,请仔细注意两者的类型区别,一个是有引号一个没有
          q-row(h=10 position="relative" bkColor="#BEE7E9")
            q-row(h=8 col=80 position="absolute" l="10" t=2 bkColor="#E6CEAC")
              |left值为10% top值为0.1rem
          q-code(type="html").
            &ltq-row h=10 position="relative" bkColor="#BEE7E9"&gt
              &ltq-row h=8 col=80 position="absolute" l="10" t=2 bkColor="#E6CEAC"&gt
                left值为10% top值为0.1rem
              &lt/q-row&gt
            &lt/q-row&gt
        //- 颜色
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="颜色")
          q-row(lh=9 indent=2 mb=2) 颜色有两个属性,<main>color</main>
            |表字体颜色,<main>bkColor</main>表背景颜色,颜色接收的值可以是
            |颜色缩写名字比如白色<main>white</main>,也可以接收颜色的16进制比如白色
            |<main>#ffffff</main>,目前暂时不能接收rgb的写法
          q-row(h=10 lh=10 color="white" bkColor="#BEE7E9") 字体:白色 背景:#BEE7E9
          q-code(type="html").
            &ltq-row h=10 lh=10 color="white" bkColor="#BEE7E9"&gt
              字体:白色 背景:#BEE7E9
            &lt/q-row&gt
        //- 字体大小
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="字体大小")
          q-row(lh=0 indent=2 mb=2) 字体大小属性为<main>fontSize</main>,比值为1比1,单位为px,
            |即<main>fontSize=14</main>解析为<main>font-size:14px</main>
          q-row(h=10 lh=10 color="white" bkColor="#BEE7E9" fontSize=20) 字体:白色 背景:#BEE7E9
          q-code(type="html").
            &ltq-row h=10 lh=10 color="white" bkColor="#BEE7E9" fontSize=20&gt
              字体:白色 背景:#BEE7E9
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
