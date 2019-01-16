import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'
import foo from '@/page/foo'
import bar from '@/page/bar'
import fooChild1 from '@/page/fooChild1'
import fooChild2 from '@/page/fooChild2'
import login from '@/page/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/foo',
      name: 'foo',
      meta: {
        requireAuth: true
      },
      component: foo,
      children: [  //这里就是二级路由的配置
        {
          path: '/fooChild1',
          name: 'fooChild1',
          component: fooChild1
        },
        {
          path: '/fooChild2',
          name: 'fooChild2',
          component: fooChild2
        }
      ]
    },
    {
      path: '/bar',
      name: 'bar',
      component: bar
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
