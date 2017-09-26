import Vue from 'vue'
import Vuex from 'vuex'
import roles from './roles'
import positions from './positions'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: { roles, positions }
})

export default store
