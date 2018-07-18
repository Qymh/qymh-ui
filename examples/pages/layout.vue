<template lang="pug">
  .row
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=1)
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
          q-row(fontSize=14 lh=9 indent=2 mb=2) 高度属性值我们缩写为<main>h</main>,比值为10比1,
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
          q-row(fontSize=14 lh=9 indent=2 mb=2) 宽度属性值我们缩写为<main>w</main>,比值为10比1,
            |即<main>w=1</main>解析后为<main>width:0.1rem</main>
          q-row(h=10 w=50 bkColor="#BEE7E9") 高度为1.0rem 宽度为5.0rem
          q-code(type="html").
            &ltq-row h=10 w=50 bkColor="#BEE7E9"&gt
              高度为1.0rem 宽度为5.0rem
            &lt/q-row&gt
        //- 行高
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="行高")
          q-row(fontSize=14 lh=9 indent=2 mb=2) 行高属性值我们缩写为<main>lh</main>,比值为10比1,
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
          q-row(fontSize=14 lh=9 indent=2 mb=2) 高度百分比我们缩写为<main>row</main>
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
          q-row(fontSize=14 lh=9 indent=2 mb=2) margin外边距我们缩写为4个值
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
          q-row(fontSize=14 lh=9 indent=2 mb=2) padding外边距我们缩写为4个值
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
          q-row(fontSize=14 lh=9 indent=2 mb=2) 关于定位有5个属性,<main>position</main>仍然是position,
            |其余4个属性我们将其缩写为
            |<main>t->top</main>
            |<main>r->right</main>
            |<main>b->bottom</main>
            |<main>l->left</main>
            |在这里有一个需要注意的地方,除了接受rem值,这4个值也可以接受百分比,
            |当你给的参数类型是数字时,传入的是rem,比值为10比1,即<main>:t=1</main>解析后为
            |<main>top:0.1rem</main>,但如果你传入的是字符,传入的便是百分比,比值为1比1,即
            |<main>t=1</main>解析后为<main>top:1%</main>,请仔细注意两者的类型区别,一个是有冒号一个没有
          q-row(h=10 position="relative" bkColor="#BEE7E9")
            q-row(
              h=8 col=80 position="absolute" l="10"
              :t=2 bkColor="#E6CEAC")
              |left值为10% top值为0.1rem
          q-code(type="html").
            &ltq-row h=10 position="relative" bkColor="#BEE7E9"&gt
              &ltq-row h=8 col=80 position="absolute" l=10 :t=2 bkColor="#E6CEAC"&gt
                left值为10% top值为0.1rem
              &lt/q-row&gt
            &lt/q-row&gt
        //- 颜色
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="颜色")
          q-row(fontSize=14 lh=9 indent=2 mb=2) 颜色有两个属性,<main>color</main>
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
        //- display
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="display")
          q-row(h=10 indent=2 mb=2) display属性没变,仍然是display,默认值为<main>block</main>
          q-row(h=10 bkColor="#BEE7E9")
            q-col(display="inline-block") inline-block1
            q-col(display="inline-block" ml=2) inline-block2
            q-col(display="block") block
          q-code(type="html").
            &ltq-row h=10 bkColor="#BEE7E9"&gt
              &ltq-col display="inline-block"&gtinline-block1&lt/q-col&gt
              &ltq-col display="inline-block"&gtinline-block2&lt/q-col&gt
              &ltq-col display="block"&gtblock&lt/q-col&gt
            &lt/q-row&gt
        //- text-align
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="水平对齐方式")
          q-row(lh=0 indent=2 mb=2) 水平对齐方式属性为<main>textAlign</main>
          q-row(h=10 lh=10 textAlign="center" color="white" bkColor="#BEE7E9") 居中对齐
          q-code(type="html").
            &ltq-row h=10 lh=10 textAlign="center" color="white" bkColor="#BEE7E9"&gt
              居中对齐
            &lt/q-row&gt
        //- vertical-align
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="垂直对齐方式")
          q-row(lh=0 indent=2 mb=2) 垂直对齐方式属性缩写为<main>vertical</main>
          q-row(h=10 bkColor="#BEE7E9")
            q-col(h=10 ml=2 vertical="text-bottom" display="inline-block") text-bottom
            q-col(h=10 ml=2 vertical="middle" display="inline-block") middle
            q-col(h=10 ml=2 vertical="text-top" display="inline-block") text-top
          q-code(type="html").
            &ltq-row&gt
              &ltq-col h=10 ml=2 vertical="text-bottom" display="inline-block"&gt
                text-bottom
              &lt/q-col&gt
              &ltq-col h=10 ml=2 vertical="middle" display="inline-block"&gt
                middle
              &lt/q-col&gt
              &ltq-col h=10 ml=2 vertical="text-top" display="inline-block"&gt
                text-top
              &lt/q-col&gt
            &lt/q-row&gt
        //- overflow
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="overflow")
          q-row(fontSize=14 lh=9 indent=2 mb=4) overflow属性没变还是<main>overflow</main>,
            |当设置为<main>auto</main>或者<main>scroll</main>属性时,<br>会自动添加一个
            |<main>-webkit-overflow-scrolling</main>兼容IOS
          q-row(h=20 bkColor="#BEE7E9" overflow="auto" mb=2)
            q-col(h=10 lh=10 textAlign="center" bkColor="#D6D5B7") 触摸此处向下滚动
            q-col(h=10 lh=10 textAlign="center" bkColor="#D1BA74") 触摸此处向下滚动  
            q-col(h=10 lh=10 textAlign="center" bkColor="#E6CEAC") 触摸此处向下滚动  
            q-col(h=10 lh=10 textAlign="center" bkColor="#ECAD9E") 触摸此处向下滚动  
            q-col(h=10 lh=10 textAlign="center" bkColor="#F4606C") 触摸此处向下滚动
          q-code(type="html").
            &ltq-row h=20 bkColor="#BEE7E9" overflow="auto" mb=2&gt
              &ltq-col h=10 lh=10 textAlign="center" bkColor="#D6D5B7"&gt触摸此处向下滚动&lt/q-col&gt
              &ltq-col h=10 lh=10 textAlign="center" bkColor="#D1BA74"&gt触摸此处向下滚动&lt/q-col&gt
              &ltq-col h=10 lh=10 textAlign="center" bkColor="#E6CEAC"&gt触摸此处向下滚动&lt/q-col&gt
              &ltq-col h=10 lh=10 textAlign="center" bkColor="#ECAD9E"&gt触摸此处向下滚动&lt/q-col&gt
              &ltq-col h=10 lh=10 textAlign="center" bkColor="#F4606C"&gt触摸此处向下滚动&lt/q-col&gt
            &lt/q-row&gt
        //- word-break
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="word-break")
          q-row(fontSize=14 lh=9 indent=2 mb=2) word-break属性写为<main>word-break</main>
          q-row(h=10 bkColor="#BEE7E9" wordBreak="break-all")
            |123123123123123123123123123123123123123123123123123123123123123
          q-code(type="html").
            &ltq-row h=10 w=20 bkColor="#BEE7E9" wordBreak="hyphenate"&gt
              12312312312312321312321
            &lt/q-row&gt
        //- word-break
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="首行缩进")
          q-row(fontSize=14 lh=9 indent=2 mb=2)
            |text-indent属性缩写为<main>indent</main>,
            |比值为10比1,即<main>indent=2</main>解析后为<main>text-indent:0.2rem</main>
          q-row(h=10 bkColor="#BEE7E9" indent=10 wordBreak="break-all")
            |123123123123123123123123123123123123123123123123123123123123123
          q-code(type="html").
            &ltq-row h=10 bkColor="#BEE7E9" indent=10 wordBreak="break-all"&gt
              123123123123123123123123123123123123123123123123123123123123123
            &lt/q-row&gt
        //- text-decoration 
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="字体划线")
          q-row(fontSize=14 lh=9 indent=2 mb=2)
            |text-decoration缩写为<main>decoration</main>
          q-row(h=10 bkColor="#BEE7E9" dir="left")
            q-col(ml=2 decoration="underline") 下划线
            q-col(ml=2 decoration="line-through") 删除线
            q-col(ml=2 decoration="overline") 上划线
          q-code(type="html").
            &ltq-row h=10 bkColor="#BEE7E9" dir="left"&gt
              &ltq-col ml=2 decoration="underline"&gt下划线&lt/q-col&gt
              &ltq-col ml=2 decoration="line-through"&gt删除线&lt/q-col&gt
              &ltq-col ml=2 decoration="overline"&gt上划线&lt/q-col&gt
            &lt/q-row&gt
        //- border-radius
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="圆角")
          q-row(fontSize=14 lh=9 indent=2 mb=2)
            |border-radius缩写为<main>radius</main>,
            |这里有一点需要注意,这个值可以表rem或者百分比,
            |当<main>radius</main>值为数字类型的时候,
            |比值为10比1,即<main>:radius=1</main>解析为
            |<main>border-radius:0.1rem</main>,
            |当其为值类型的时候,比值为1比1,即<main>radius=50</main>解析为
            |<main>border-radius:50%</main>,仔细观察他们的区别,一个有冒号,一个没有
          q-row(h=10 bkColor="#BEE7E9" dir="left" align="center")
            q-col(ml=2 h=8 w=8 bkColor="#ECAD9E" radius=50)
            q-col(
              ml=2 h=8 w=20 bkColor="#F4606C"
              :radius=10)
          q-code(type="html").
            &ltq-row h=10 bkColor="#BEE7E9" dir="left" align="center"&gt
              &ltq-col ml=2 h=8 w=8 bkColor="#ECAD9E" radius=50&gt&lt/q-col&gt
              &ltq-col ml=2 h=8 w=20 bkColor="#F4606C" :radius=10&gt&lt/q-col&gt
            &lt/q-row&gt
        //- z-index
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="层级")
          q-row(fontSize=14 lh=9 indent=2 mb=2)
            |z-index写为<main>zIndex</main>
          q-row(h=10 bkColor="#BEE7E9" position="relative")
            q-row(h=5 w=20 bkColor="#ECAD9E" position="absolute" t=0 l=0 zIndex=5)
            q-row(h=8 w=30 bkColor="#F4606C" position="absolute" t=0 l=0 zIndex=4)
          q-code(type="html").
            &ltq-row h=10 bkColor="#BEE7E9" position="relative"&gt
              &ltq-row h=5 w=20 bkColor="#ECAD9E" position="absolute" t=0 l=0 zIndex=5&gt&lt/q-row&gt
              &ltq-row h=8 w=30 bkColor="#F4606C" position="absolute" t=0 l=0 zIndex=4&gt&lt/q-row&gt
            &lt/q-row&gt
        //- tag
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="元素标签")
          q-row(fontSize=14 lh=9 indent=2 mb=2)
            |默认<main>tag</main>为div,可以输入任何Html元素标签
          q-row(tag="section" h=10 bkColor="#BEE7E9") 我是一个section元素
          q-code(type="html").
            &ltq-row tag="section" h=10 bkColor="#BEE7E9"&gt
              我是一个section元素
            &lt/q-row&gt
        //- border 
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="border")
          q-row(fontSize=14 lh=9 indent=2 mb=2) border的控制一共有5个属性<br>
            |<main>border</main> 全局border<br>
            |<main>borderTop</main> 顶部border<br>
            |<main>borderRight</main> 右侧border<br>
            |<main>borderBottom</main> 底部border<br>
            |<main>borderLeft</main> 左侧border<br>
          q-row(h=10 bkColor="#BEE7E9" borderTop="1px solid red" borderBottom="1px solid red")
          q-row(mt=2 h=10 bkColor="#ffffff" border="1px solid #a1a1a1")
          q-code(type="html").
            &ltq-row h=10 bkColor="#BEE7E9" borderTop="1px solid red" borderBottom="1px solid red"&gt&lt/q-row&gt
            &ltq-row mt=2 h=10 bkColor="#ffffff" border="1px solid #a1a1a1"&gt&lt/q-row&gt
        //- flex-direction
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="flex-direction")
          q-row(fontSize=14 lh=9 indent=2 mb=2) flex-direction 简写为dir 有4个属性值<br>
            |<main>dir:top</main>解析为flex-direction:column<br>
            |<main>dir:bottom</main>解析为flex-direction:column-reverse<br>
            |<main>dir:left</main>解析为 flex-direction:row<br>
            |<main>dir:right</main>解析为 flex-direction:row-reverse<br>
          q-row(dir="top" h=10 bkColor="#BEE7E9")
            q-col(h=5 col=50 bkColor="#ECAD9E")
            q-col(h=5 col=50 bkColor="#F4606C")
          q-code(type="html").
            &ltq-row dir="top" h=10 bkColor="#BEE7E9"&gt
              &ltq-col h=5 col=50 bkColor="#ECAD9E"&gt&lt/q-col&gt
              &ltq-col h=5 col=50 bkColor="#F4606C"&gt&lt/q-col&gt
            &lt/q-row&gt
          q-row(dir="left" h=10 )
            q-row(dir="top" h=10 col=50)
              q-col(h=5 bkColor="#ECAD9E")
              q-col(h=5 bkColor="#F4606C")
            q-row(h=10 col=50 bkColor="#E6CEAC")
          q-code(type="html").
            &ltq-row dir="left" h=10"&gt
              &ltq-row dir="top" h=10 col=50&gt
                &ltq-col h=5 bkColor="#ECAD9E"&gt&lt/q-col&gt
                &ltq-col h=5 bkColor="#F4606C"&gt&lt/q-col&gt
              &lt/q-row&gt
              &ltq-row h=10 col=50 bkColor="#E6CEAC"&gt&lt/q-row&gt
            &lt/q-row&gt
        //- justify-content and align-items
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="justify-content and align-items")
          q-row(fontSize=14 lh=9 indent=2 mb=2)
            |水平布局和垂直布局的属性值就是官方提供的值,
            |我们把这两个属性分别缩写为<main>justify</main><main>align</main>
          q-row(h=10 bkColor="#BEE7E9" justify="center" align="center") 水平垂直居中
          q-code(type="html").
            &ltq-row h=10 bkColor="#BEE7E9" justify="center" align="center"&gt
              水平垂直居中
            &lt/q-row&gt
        //- flex-wrap
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="flex-wrap")
          q-row(fontSize=14 lh=9 indent=2 mb=2)
            |<main>flex-wrap</main>属性值就是官方提供的值,
            |我们将这个属性缩写为<main>wrap</main>
          q-row(dir="left" wrap="wrap")
            q-col(h=10 col=40 bkColor="#ECAD9E")
            q-col(h=10 col=40 bkColor="#F4606C")
            q-col(h=10 col=40 bkColor="#E6CEAC")
          q-code(type="html").
            &ltq-row dir="left" wrap="wrap"&gt
              &ltq-col h=10 col=40 bkColor="#ECAD9E"&gt&lt/q-col&gt
              &ltq-col h=10 col=40 bkColor="#F4606C"&gt&lt/q-col&gt
              &ltq-col h=10 col=40 bkColor="#E6CEAC"&gt&lt/q-col&gt
            &lt/q-row&gt
        //- flex-grow
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="flex-grow")
          q-row(fontSize=14 lh=9 indent=2 mb=2)
            |<main>flex-grow</main>缩写为<main>flex</main>,属性值是数字表扩展比率
          q-row(dir="left")
            q-row(flex=1 bkColor="#ECAD9E") 1
            q-row(flex=2 bkColor="#F4606C") 2
            q-row(flex=3 bkColor="#E6CEAC") 3
          q-code(type="html").
            &ltq-row dir="left"&gt
              &ltq-row flex=1 bkColor="#ECAD9E"&gt1&lt/q-row&gt
              &ltq-row flex=2 bkColor="#F4606C"&gt2&lt/q-row&gt
              &ltq-row flex=3 bkColor="#E6CEAC"&gt3&lt/q-row&gt
            &lt/q-row&gt
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tagfill"
          leftIconColor="deepskyblue"
          title="API一览"
          fontSize=16
          :borderBottom="true")
        q-row(lh=9 index=2 mb=2 fontSize=14)
          |我们将api分成了几个部分
        //- Api
        q-row(tag="section")
          //- 高度
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="高宽")
            q-row(lh=9 index=2 mb=2 fontSize=14)
              |默认值-1为设置默认auto
            q-table(:tableOptions="size")
          //- 边距 
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="边距")
            q-table(:tableOptions="distance")
          //- 定位 
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="定位")
            q-table(:tableOptions="position")
          //- border 
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="border")
            q-table(:tableOptions="border")
          //- flex
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="flex")
            q-table(:tableOptions="flex")
          //- 杂项
          q-row(tag="section")
            q-cell(
              leftIcon="q-icon icon-edit"
              leftIconColor="deepskyblue"
              title="杂项")
            q-table(:tableOptions="sundry")
</template> 

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class exRow extends Vue {

  private isFinish :boolean =false

  private size: any = {
    titles: [
      { value: 'Prop' },
      { value: 'Type' },
      { value: 'Required' },
      { value: 'Default' },
      { value: 'Description' }
    ],
    datas: [
      {
        prop: [
          { value: 'h' },
          { value: 'String' },
          { value: 'N' },
          { value: '-1' },
          { value: '高度' }
        ]
      },
      {
        prop: [
          { value: 'lh' },
          { value: 'String' },
          { value: 'N' },
          { value: '-1' },
          { value: '行高' }
        ]
      },
      {
        prop: [
          { value: 'w' },
          { value: 'String' },
          { value: 'N' },
          { value: '-1' },
          { value: '宽度' }
        ]
      },
      {
        prop: [
          { value: 'row' },
          { value: 'String' },
          { value: 'N' },
          { value: '-1' },
          { value: '高度百分比' }
        ]
      },
      {
        prop: [
          { value: 'col' },
          { value: 'String' },
          { value: 'N' },
          { value: '-1' },
          { value: '宽度百分比' }
        ]
      }
    ]
  }

  private distance: any = {
    titles: [
      { value: 'Prop' },
      { value: 'Type' },
      { value: 'Required' },
      { value: 'Default' },
      { value: 'Description' }
    ],
    datas: [
      {
        prop: [
          { value: 'mt' },
          { value: 'String' },
          { value: 'N' },
          { value: '0' },
          { value: 'margin-top' }
        ]
      },
      {
        prop: [
          { value: 'mr' },
          { value: 'String' },
          { value: 'N' },
          { value: '0' },
          { value: 'margin-right' }
        ]
      },
      {
        prop: [
          { value: 'mb' },
          { value: 'String' },
          { value: 'N' },
          { value: '0' },
          { value: 'margin-bottom' }
        ]
      },
      {
        prop: [
          { value: 'ml' },
          { value: 'String' },
          { value: 'N' },
          { value: '0' },
          { value: 'margin-left' }
        ]
      },
      {
        prop: [
          { value: 'pt' },
          { value: 'String' },
          { value: 'N' },
          { value: '0' },
          { value: 'padding-top' }
        ]
      },
      {
        prop: [
          { value: 'pr' },
          { value: 'String' },
          { value: 'N' },
          { value: '0' },
          { value: 'padding-right' }
        ]
      },
      {
        prop: [
          { value: 'pb' },
          { value: 'String' },
          { value: 'N' },
          { value: '0' },
          { value: 'padding-bottom' }
        ]
      },
      {
        prop: [
          { value: 'pl' },
          { value: 'String' },
          { value: 'N' },
          { value: '0' },
          { value: 'padding-left' }
        ]
      },
    ]
  }

  private position :any = {
    titles: [
      { value: 'Prop' },
      { value: 'Type' },
      { value: 'Required' },
      { value: 'Default' },
      { value: 'Description' }
    ],
    datas: [
      {
        prop: [
          { value: 'position' },
          { value: 'String' },
          { value: 'N' },
          { value: '0' },
          { value: '定位值' }
        ]
      },
      {
        prop: [
          { value: 't' },
          { value: 'String' },
          { value: 'N' },
          { value: '-1' },
          { value: 'top' }
        ]
      },
      {
        prop: [
          { value: 'r' },
          { value: 'String' },
          { value: 'N' },
          { value: '-1' },
          { value: 'right' }
        ]
      },
      {
        prop: [
          { value: 'bottom' },
          { value: 'String' },
          { value: 'N' },
          { value: '-1' },
          { value: 'bottom' }
        ]
      },
      {
        prop: [
          { value: 'left' },
          { value: 'String' },
          { value: 'N' },
          { value: '-1' },
          { value: 'left' }
        ]
      }
    ]
  }

  private border :any = {
    titles: [
      { value: 'Prop' },
      { value: 'Type' },
      { value: 'Required' },
      { value: 'Default' },
      { value: 'Description' }
    ],
    datas: [
      {
        prop: [
          { value: 'border' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: 'border' }
        ]
      },
      {
        prop: [
          { value: 'border-top' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: 'border-top' }
        ]
      },
      {
        prop: [
          { value: 'border-right' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: 'border-right' }
        ]
      },
      {
        prop: [
          { value: 'border-bottom' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: 'border-bottom' }
        ]
      },
      {
        prop: [
          { value: 'border-left' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: 'border-left' }
        ]
      }
    ]
  }

  private flex :any = {
    titles: [
      { value: 'Prop' },
      { value: 'Type' },
      { value: 'Required' },
      { value: 'Default' },
      { value: 'Description' }
    ],
    datas: [
      {
        prop: [
          { value: 'dir' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: 'flex-direction top|right|bottom|left' }
        ]
      },
      {
        prop: [
          { value: 'align' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: 'align-items' }
        ]
      },
      {
        prop: [
          { value: 'justify' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: 'justify-content' }
        ]
      },
      {
        prop: [
          { value: 'flex' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: 'flex-grow' }
        ]
      }
    ]
  }

  private sundry :any={
    titles: [
      { value: 'Prop' },
      { value: 'Type' },
      { value: 'Required' },
      { value: 'Default' },
      { value: 'Description' }
    ],
    datas: [
      {
        prop: [
          { value: 'fontSize' },
          { value: 'String' },
          { value: 'N' },
          { value: '-1' },
          { value: '字体大小' }
        ]
      },
      {
        prop: [
          { value: 'color' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '字体颜色' }
        ]
      },
      {
        prop: [
          { value: 'bkColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '背景颜色' }
        ]
      },
      {
        prop: [
          { value: 'textAlign' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '居中样式' }
        ]
      },
      {
        prop: [
          { value: 'zIndex' },
          { value: 'String' },
          { value: 'N' },
          { value: 'auto' },
          { value: '层叠' }
        ]
      },
      {
        prop: [
          { value: 'display' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: 'display' }
        ]
      },
      {
        prop: [
          { value: 'vertical' },
          { value: 'String' },
          { value: 'N' },
          { value: 'baseline' },
          { value: '垂直样式' }
        ]
      },
      {
        prop: [
          { value: 'overflow' },
          { value: 'String' },
          { value: 'N' },
          { value: 'visible' },
          { value: 'overflow' }
        ]
      },
      {
        prop: [
          { value: 'decoration' },
          { value: 'String' },
          { value: 'N' },
          { value: 'none' },
          { value: '字体划线' }
        ]
      },
      {
        prop: [
          { value: 'radius' },
          { value: 'String' },
          { value: 'N' },
          { value: '-1' },
          { value: '圆角' }
        ]
      },
      {
        prop: [
          { value: 'wordBreak' },
          { value: 'String' },
          { value: 'N' },
          { value: 'normal' },
          { value: '文字打断' }
        ]
      },
      {
        prop: [
          { value: 'indent' },
          { value: 'String' },
          { value: 'N' },
          { value: '-1' },
          { value: '首行缩进' }
        ]
      }
    ]
  }

  private mounted () {
    this.$nextTick(()=>{
      this.isFinish=true
    })
  }
}
</script>

<style lang="scss" scoped>
.demo {
  background-color: deepskyblue;
  color: #fff;
}
</style>
