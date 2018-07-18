<template lang="pug">
  .searchBar
    //- 标题
    q-row(position="fixed" t=0 l=0 col=100 zIndex=1)
      q-head-bar(
        color="white"
        bkColor="deepskyblue"
        :leftArrow="true"
        centerText="searchBar 搜索导航"
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
        //- 列子
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="列子")
          q-row(tag="section")
            q-search-bar(
              leftText="返回"
              placeholder="请输入关键词..."
              v-model="searchValue1"
              :borderBottom="true")
            q-code(type="html").
              &ltq-search-bar
                leftText="返回"
                placeholder="请输入关键词..."
                v-model="searchValue1"
                :borderBottom="true"&gt&lt/q-search-bar&gt
          q-row(tag="section")
            q-search-bar(
              bkColor="#f65a44"
              color="white"
              :leftArrow="true"
              rightText="查找"
              v-model="searchValue2"
              :clearable="true")
            q-row(h=12 lh=12)
              q-col 双向绑定搜索的值:{{searchValue2}}
            q-code(type="html").
              &ltq-search-bar
                bkColor="#f65a44"
                color="white"
                :leftArrow="true"
                rightText="查找"
                v-model="searchValue2"
                :clearable="true"&gt&lt/q-search-bar&gt
              &ltq-row&gt
                &ltq-col&gt双向绑定搜索的值:{ { searchValue2 } }&lt/q-col&gt
              &lt/q-row&gt
        //- 插槽
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="插槽")
          q-row(fontSize=14 lh=9 indent=2 mb=2) 插槽的值有三个<br>
            |<main>slot="left"</main>表左侧<br>
            |<main>slot="center"</main>表中间<br>
            |<main>slot="right"</main>表右侧<br>
            |当你写入插槽的时候只有左侧的点击事件是保留的,
            |其他地方需要自己绑定事件,你可以点击下面的列子尝试
          q-row(tag="section")
            q-search-bar(@leftClicked="slotBack")
              q-row(
                fontSize=12
                slot="left") 返回
              q-row(slot="center")
                q-form(col=100)
                  q-input(
                    v-model="searchValueSlot"
                    borderColor="#f65a44"
                    placeholder="请输入...")
              q-row(
                slot="right" @clicked="slotSearch")
                q-col.q-icon.icon-search(tag="i" fontSize=12)
            q-row(h=12 align="center") 双向绑定的值:{{searchValueSlot}}
            q-code(type="html").
              &ltq-search-bar @leftClicked="slotBack"&gt
                &ltq-row fontSize=12 slot="left"&gt返回&lt/q-row&gt
                &ltq-row slot="center"&gt
                  &ltq-form col=100&gt
                    &ltq-input v-model="searchValueSlot"borderColor="#f65a44"placeholder="请输入..."&gt&lt/q-input&gt
                  &lt/q-form&gt
                &lt/q-row&gt
                &ltq-row fontSize=12 slot="right" @clicked="slotSearch"&gt
                  &ltq-col tag="i" fontSize=12 class="q-icon icon-search"&gt&lt/q-col&gt
                &lt/q-row&gt
              &lt/q-search-bar&gt
              &ltq-row h=12 align="center"&gt双向绑定的值:{ { searchValueSlot } }&lt/q-row&gt
        //- 事件回调
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="事件回调")
          q-row(tag="section")
            q-row(fontSize=14 lh=9 indent=2 mb=2) 事件回调有两个
              |<main>@leftClicked</main>左侧点击事件和
              |<main>@rightClicked</main>右侧点击事件
              |当你设置了显示左侧箭头<main>:leftArrow="true"</main>,左侧点击事件默认是回退页面到上一页
              |右侧点击事件在表单提交的时候也会触发,你可以尝试点击下面的列子
            q-search-bar(
              bkColor="#f65a44"
              color="white"
              :leftArrow="true"
              rightText="查找"
              v-model="searchValue3"
              :clearable="true"
              @leftClicked="leftClicked"
              @rightClicked="search")
      q-row(tag="section")
        q-cell(
          leftIcon="q-icon icon-tagfill"
          leftIconColor="deepskyblue"
          title="API一览"
          fontSize=16
          :borderBottom="true")
        //- Api
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="Api")
          q-table(:tableOptions="tableOptions")
        //- 插槽
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="插槽")
          q-row(fontSize=14 lh=9 indent=2 mb=2) 有三个插槽
            |<main>slot="left"</main>表左侧<br>
            |<main>slot="center"</main>表中间<br>
            |<main>slot="right"</main>表右侧<br>
        //- 事件回调
        q-row(tag="section")
          q-cell(
            leftIcon="q-icon icon-edit"
            leftIconColor="deepskyblue"
            title="事件回调")
          q-row(fontSize=14 lh=9 indent=2 mb=2) 事件回调有两个<br>
            |<main>@leftClicked</main>左侧点击事件<br>
            |<main>@rightClicked</main>右侧点击事件<br>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class ExSearchBar extends Vue {
  private searchValue1: any = ''
  private searchValue2: any = ''
  private searchValue3: any = ''
  private searchValueSlot: any = ''
  private tableOptions: any = {
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
          { value: 'bkColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '背景颜色' }
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
          { value: 'bothWidth' },
          { value: 'Number' },
          { value: 'N' },
          { value: '1' },
          { value: '两边保留的宽度' }
        ]
      },
      {
        prop: [
          { value: 'hasPadding' },
          { value: 'Boolean' },
          { value: 'N' },
          { value: 'true' },
          { value: '是否有两边的边距' }
        ]
      },
      {
        prop: [
          { value: 'padding' },
          { value: 'Number' },
          { value: 'N' },
          { value: '0.2' },
          { value: '两边的边距值' }
        ]
      },
      {
        prop: [
          { value: 'borderTop' },
          { value: 'Boolean' },
          { value: 'N' },
          { value: 'false' },
          { value: '是否有上border' }
        ]
      },
      {
        prop: [
          { value: 'borderBottom' },
          { value: 'Boolean' },
          { value: 'N' },
          { value: 'false' },
          { value: '是否有下border' }
        ]
      },
      {
        prop: [
          { value: 'borderColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '#d6d7dc' },
          { value: '是否有border颜色' }
        ]
      },
      {
        prop: [
          { value: 'value' },
          { value: 'Any' },
          { value: 'Y' },
          { value: '无' },
          { value: '搜索的双向绑定值' }
        ]
      },
      {
        prop: [
          { value: 'leftArrow' },
          { value: 'Boolean' },
          { value: 'N' },
          { value: 'false' },
          { value: '是否显示左侧箭头' }
        ]
      },
      {
        prop: [
          { value: 'leftText' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '左侧文字' }
        ]
      },
      {
        prop: [
          { value: 'leftTextColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '左侧文字颜色' }
        ]
      },
      {
        prop: [
          { value: 'searchBkColor' },
          { value: 'String' },
          { value: 'N' },
          { value: 'white' },
          { value: '搜索栏的背景颜色' }
        ]
      },
      {
        prop: [
          { value: 'placeholder' },
          { value: 'String' },
          { value: 'N' },
          { value: '请输入...' },
          { value: '搜索框的提示文字' }
        ]
      },
      {
        prop: [
          { value: 'clearable' },
          { value: 'Boolean' },
          { value: 'N' },
          { value: 'false' },
          { value: '是否可清除搜索的文字' }
        ]
      },
      {
        prop: [
          { value: 'rightText' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '右侧文字' }
        ]
      },
      {
        prop: [
          { value: 'rightTextColor' },
          { value: 'String' },
          { value: 'N' },
          { value: '无' },
          { value: '右侧文字颜色' }
        ]
      }
    ]
  }

  private leftClicked() {
    this.$notice.toast('你点击了左侧,默认事件会回退到上一页')
  }

  private search() {
    this.searchValue3
      ? this.$notice.toast(`你当前搜索的值为${this.searchValue3}`)
      : this.$notice.toast('你当前搜索的值为空')
  }

  private slotBack() {
    this.$notice.toast('你点击了左侧')
  }

  private slotSearch() {
    this.$notice.toast(
      `你搜索的值为:${(this.searchValueSlot && this.searchValueSlot) || '空'}`
    )
  }
}
</script>
