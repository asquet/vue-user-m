import Vue from 'vue'

let ID = 0

const defaultConfig = {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    add(state, payload) {
      state.list.push({
        ...payload,
        id: ID
      })
      ID += 1
    },
    remove(state, payload) {
      Vue.set(state, 'list', state.list.filter(v => v !== payload))
    },
    update(state, payload) {
      Vue.set(
        state,
        'list',
        state.list.map(v => (v.id === payload.id ? payload : v))
      )
    }
  }
}

export default cfg => ({
  ...defaultConfig,
  ...cfg
})
