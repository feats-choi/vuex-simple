import Vue from 'vue'
import Vuex from 'vuex'
import hello from './modules/hello'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  actions: {},
  getters: {},
  mutations: {},
  modules: {
    hello
  },
  strict: true
})
