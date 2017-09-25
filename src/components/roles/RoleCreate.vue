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
      onSave(entity) {
        this.$store
          .dispatch('roles/create', entity)
          .then(() => this.$router.push({ name: 'Roles List' }))
      }
    }
  }
</script>
