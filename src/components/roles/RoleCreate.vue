<template>
  <role-form :entity="{}" @onSave="onSave"></role-form>
</template>

<script>
  import RoleForm from './RoleForm'
  import store from '../../store/store'

  export default {
    store,
    components: {
      'role-form': RoleForm
    },
    methods: {
      onSave(data) {
        this.$store.commit('roles/add', data)
        this.$router.push({ name: 'Roles List' })
      }
    }
  }
</script>
