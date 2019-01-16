// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
// import axios from 'axios'
import { LoadingPlugin } from 'vux'
import { AlertPlugin } from 'vux'
// import { XImg } from 'vux'
import store from './store/index'

Vue.config.productionTip = false;
Vue.use(LoadingPlugin);
Vue.use(AlertPlugin);
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    console.log('登录，绑定',store.state);
    if (store.state.token.length > 0) {  // 通过store获取当前的token是否存在
      next();
    }else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});
