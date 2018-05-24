<template lang="pug">
  q-title-bar(
    bkColor="orange"
    color="#fff"
    :showBorder="true"
    centerText="123"
    :rightArrow="true")
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'

  @Component
  export default class ExBarTitle extends Vue{

  }
</script>
