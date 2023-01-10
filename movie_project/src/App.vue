<template>
  <div id="app">
    <header-menu></header-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import headerMenu from './components/TopMenu.vue';

/* eslint-disable */
export default{
  components : {
    headerMenu
  }
}

</script>

<style>

</style>
