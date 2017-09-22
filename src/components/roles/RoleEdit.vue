<template>
  <role-form :entity="entity" @onSave="onSave"></role-form>
</template>

<script>
  import { mapState } from 'vuex'
  import RoleForm from './RoleForm'
  import store from '../../store/store'

  export default {
    store,
    components: {
      'role-form': RoleForm
    },
    computed: mapState({
      entity(state) {
        return state.roles.list.find(v => v.id == this.$route.params.role_id)
      }
    }),
    methods: {
      onSave(entity) {
        this.$store.commit('roles/update', entity)
        this.$router.push({ name: 'Roles List' })
      }
    }
  }
</script>
