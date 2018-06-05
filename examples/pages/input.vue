<template lang="pug">
  .input
    q-head-bar(
      bkColor="deepskyblue"
      color="#fff"
      :leftArrow="true"
      centerText="q-input"
      :rightEmpty="true")
    q-input(type="search")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'
  @Component({})
  export default class ExInput extends Vue{

  }
</script>
