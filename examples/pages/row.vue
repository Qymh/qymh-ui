<template lang="pug">
  .row
    q-row(h=40 dir="left")
      q-row(flex="1" align="center" justify="center") 123
      q-row(flex="1" align="center" justify="center") 456
</template>

<script lang="ts">
  import {Vue,Component} from 'vue-property-decorator'

  @Component({})
  export default class exRow extends Vue{
    
  }
</script>