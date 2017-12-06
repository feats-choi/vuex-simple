import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Clap from '../components/Clap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/links',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Clap',
      component: Clap
    }
  ]
})
