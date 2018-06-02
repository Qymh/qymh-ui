<template lang="pug">
  .app
    router-view(keep-alive)
</template>

<script lang="ts">
import Vue from 'vue'
export default {
  name:'App'
}
</script>

<style lang="scss">
  @import '@/styles/reset.scss';
</style>


