<template>
  <role-form :entity="entity" @onSave="onSave" @onBack="onBack" v-if="entity"></role-form>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import RoleForm from './RoleForm'
  import store from '../../store/store'

  export default {
    store,
    components: {
      'role-form': RoleForm
    },
    props: {
      role_id: true
    },
    computed: {
      entity() {
        return this.$store.getters['roles/getById'](Number(this.role_id))
      }
    },
    methods: {
      onSave(entity) {
        //        this.$store.commit('roles/update', entity)
        this.$store
          .dispatch('roles/update', entity)
          .then(() => this.$router.push({ name: 'Roles List' }))
      },
      onBack() {
        this.$router.push({ name: 'Roles List' })
      }
    },
    watch: {
      getById() {
        console.log(1)
      }
    },
    created() {
      this.$store.dispatch('roles/loadById', this.role_id)
    }
  }
</script>
