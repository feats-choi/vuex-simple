import * as types from '../mutation-types'
const state = {
  world: 'Hello from Vuex'
}

const actions = {
  dispatchAction({ commit }, text) {
    commit(types.CHANGE_THE_WORLD, text)
  }
}

const getters = {}

const mutations = {
  [types.CHANGE_THE_WORLD](state, payload) {
    state.world = payload
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
