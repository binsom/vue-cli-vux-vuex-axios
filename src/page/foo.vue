<template>
  <div>
    <x-header :left-options="{showBack: true}">
      hhhhhh
    </x-header>
    <div>{{msg}}</div>

    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>

    <el-switch
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>


    <router-link to="/fooChild1">Go to FooChild1</router-link>
    <router-link to="/fooChild2">Go to FooChild2</router-link>
    <router-view/>
  </div>
</template>

<script>
  import { XHeader, Tabbar, TabbarItem} from 'vux';

  export default {
    components: {
      XHeader,
      Tabbar,
      TabbarItem
    },
    name: 'foo',
    data () {
      return {
        msg: 'foo',
        value2: true
      }
    }
  }
</script>
