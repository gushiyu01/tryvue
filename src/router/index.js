import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import secondfather from '@/components/head/secondfather'
import fadeDemo from '@/components/head/fade-demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/secondfather',
      name: 'secondfather',
      component: secondfather
    },
    {
      path: '/fade-demo',
      name: 'fade-demo',
      component: fadeDemo
    }

  ]
})
