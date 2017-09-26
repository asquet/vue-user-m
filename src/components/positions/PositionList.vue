<template>
  <div>
    <h2> Position List </h2>
    <button @click="addNew">Add new</button>
    <div v-if="isLoading">...isLoading</div>
    <entry-list :entries="positions" v-else>
      <tr slot="header">
        <td>ID</td>
        <td>Name</td>
      </tr>
      <template slot="item" scope="props">
        <tr @click="$router.push({name: 'Position Edit', params: {id: props.item.id} })">
          <td>
            {{ props.item.id }}
          </td>
          <td>
            {{ props.item.name }}
          </td>
          <td>
            <button @click.stop="deleteItem(props.item)"> X </button>
          </td>
        </tr>
      </template>
    </entry-list>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import EntryList from '../common/EntryList'
  import store from '../../store/store'

  export default {
    store,
    state: true,
    computed: mapState({
      positions: state => state.positions.list,
      isLoading: state => state.positions.isLoading
    }),
    components: {
      'entry-list': EntryList
    },
    methods: {
      addNew() {
        this.$router.push({ name: 'Position Create' })
      },
      deleteItem(item) {
        this.$store.dispatch('positions/remove', item)
      }
    },
    created() {
      this.$store.dispatch('positions/loadAll')
    }
  }
</script>
