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
      id: true
    },
    computed: {
      roleId() {
        return Number(this.id)
      },
      entity() {
        return this.$store.getters['roles/getById'](this.roleId)
      }
    },
    methods: {
      onSave(entity) {
        //        this.$store.commit('roles/update', entity)
        this.$store
          .dispatch('roles/update', entity)
          .then(() => this.$router.push({ name: 'Role List' }))
      },
      onBack() {
        this.$router.push({ name: 'Role List' })
      }
    },
    watch: {
      getById() {
        console.log(1)
      }
    },
    created() {
      this.$store.dispatch('roles/loadById', this.roleId)
    }
  }
</script>
