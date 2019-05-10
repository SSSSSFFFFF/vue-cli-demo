import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import p1 from '@/components/p1'
import p2 from '@/components/p2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'p1',
      component: p1
    },
    {
      path: '/p2',
      name: 'p2',
      component: p2
    }
  ],
  mode: 'history',
})
