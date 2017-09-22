import Vue from 'vue'
import Vuex from 'vuex'
import roles from './roles'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: { roles }
})

export default store
