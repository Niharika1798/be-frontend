import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Form from './views/Form.vue'
import Result from './views/Result.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/result/:percent',
      name: 'result',
      component: Result
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
