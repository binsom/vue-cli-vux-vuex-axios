<template>
  <div id="app">
    <x-header :left-options="{showBack: true}">
      hhhhhh
    </x-header>

    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import { XHeader, Tabbar, TabbarItem } from 'vux';
export default {
  components: {
    XHeader,
    Tabbar,
    TabbarItem
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
