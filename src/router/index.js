import Vue from 'vue'
import Router from 'vue-router'
import test01 from '../components/test/test01'
import test02 from '../components/test/test02'
import test03 from '../components/test/test03'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test01',
      component: test01
    },
    {
      path: '/test02',
      name: 'test02',
      component: test02
    },
    {
      path: '/test03',
      name: 'test03',
      component: test03
    },
  ]
})
