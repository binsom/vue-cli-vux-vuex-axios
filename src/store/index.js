/**
 * Created by Administrator on 2019/1/11.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    url:'http://192.168.0.214:33333',
    token: '3',
    userInfo: {},
    isLogin: false,
    openId: '',// 微信openId
    todoTabType: ''// 待办详情页回退时，待办页tab切换到之前状态
  },
  mutations: {
    // 登录
    login (state, payload) {
        console.log(state, payload);

        Vue.$vux.alert.show({
          title: "去登陆吧"
        });
    },
    // 退出
    logout (state) {

    }
  }
})

export default store;

