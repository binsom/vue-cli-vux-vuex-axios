<template>
  <div>
    <x-header :left-options="{showBack: true}">
      hhhhhh
    </x-header>
    <div>{{msg}}</div>

    <router-link to="/fooChild1">Go to FooChild1</router-link>
    <router-link to="/fooChild2">Go to FooChild2</router-link>
    <router-view/>
  </div>
</template>

<script>
  import { XHeader, Tabbar, TabbarItem } from 'vux'

  export default {
    components: {
      XHeader,
      Tabbar,
      TabbarItem
    },
    name: 'foo',
    data () {
      return {
        msg: 'foo'
      }
    }
  }
</script>
