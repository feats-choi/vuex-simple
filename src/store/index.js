import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    claps: 0
  },
  mutations: {
    increment: (state) => {
      console.info('state change from vuex');
      state.claps++
    }
  },
  strict: true
})
