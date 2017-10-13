<template>
  <position-form :entity="{}" :roles="roles" @onSave="onSave" @onBack="onBack"></position-form>
</template>

<script>
  import { mapState } from 'vuex'
  import PositionForm from './PositionForm'
  import store from '../../store/store'

  export default {
    store,
    components: {
      'position-form': PositionForm
    },
    methods: {
      onSave(entity) {
        this.$store
          .dispatch('positions/create', entity)
          .then(() => this.$router.push({ name: 'Position List' }))
      },
      onBack() {
        this.$router.push({ name: 'Position List' })
      }
    },
    computed: {
      ...mapState({
        roles: state => {
          return state.roles.list || []
        }
      })
    },
    created() {
      this.$store.dispatch('roles/loadAll')
    }
  }
</script>
