import Vue from 'vue'

let ID = 0

export default ({ api, ...cfg }) => {
  if (!api) throw new Error('api is required')

  const defaultConfig = {
    namespaced: true,
    state: {
      list: [],
      isLoading: false
    },
    mutations: {
      setIsLoading(state, payload) {
        Vue.set(state, 'isLoading', payload)
      },
      populate(state, payload) {
        Vue.set(state, 'list', payload)
      },
      add(state, payload) {
        state.list.push({
          ...payload,
          id: ID
        })
        ID += 1
      },
      remove(state, payload) {
        const index = state.list.findIndex(v => v.id === payload)
        if (index >= 0) state.list.splice(index, 1)
      },
      update(state, payload) {
        Vue.set(
          state,
          'list',
          state.list.map(v => (v.id === payload.id ? payload : v))
        )
      },
      addOrUpdate(state, payload) {
        for (let i = 0; i < state.list.length; i += 1) {
          if (state.list[i].id === payload.id) {
            state.list.splice(i, 1, payload)
            return
          }
        }
        state.list.push(payload)
      }
    },
    actions: {
      create(context, payload) {
        return api.create(payload).then(data => context.commit('add', data))
      },
      loadById(context, id) {
        return api.getOne(id).then(data => context.commit('addOrUpdate', data))
      },
      loadAll(context) {
        context.commit('setIsLoading', true)
        return api.getAll().then(data => {
          context.commit('populate', data)
          context.commit('setIsLoading', false)
        })
      },
      update(context, payload) {
        return api.update(payload).then(data => context.commit('update', data))
      },
      remove(context, { id }) {
        return api.remove(id).then(() => context.commit('remove', id))
      }
    },
    getters: {
      getById: state => id => state.list.find(v => v.id === id)
    }
  }

  return {
    ...defaultConfig,
    ...cfg
  }
}
