<template>
  <div>
    <h2> Roles List </h2>
    <button @click="addNew">Add new</button>
    <div v-if="isLoading">...isLoading</div>
    <entry-list entries="roles" :entries="roles" v-else>
      <tr slot="header">
        <td>ID</td>
        <td>Name</td>
      </tr>
      <template slot="item" scope="props">
        <tr @click="$router.push({name: 'Role Edit', params: {role_id: props.item.id} })">
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
      roles: state => state.roles.list,
      isLoading: state => state.roles.isLoading
    }),
    components: {
      'entry-list': EntryList
    },
    methods: {
      addNew() {
        this.$router.push({ name: 'Role Create' })
      },
      deleteItem(item) {
        this.$store.dispatch('roles/remove', item)
      }
    },
    created() {
      this.$store.dispatch('roles/loadAll')
    }
  }
</script>
