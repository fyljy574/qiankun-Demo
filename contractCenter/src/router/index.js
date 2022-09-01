import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'
import Test2 from '@/components/test2'
Vue.use(Router)


  const routes = [
    {
      path: '/contractCenter/one',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/contractCenter/two',
      name: 'Test',
      component: Test
    },
    {
      path: '/contractCenter/three',
      name: 'Test2',
      component: Test2
    }
  ]

export default routes
