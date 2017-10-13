<template>
  <position-form :entity="entity" :roles="roles" @onSave="onSave" @onBack="onBack" v-if="entity"></position-form>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import PositionForm from './PositionForm'
  import store from '../../store/store'

  export default {
    store,
    components: {
      'position-form': PositionForm
    },
    props: {
      id: true
    },
    computed: {
      positionId() {
        return Number(this.id)
      },
      entity() {
        return this.$store.getters['positions/getById'](this.positionId)
      },
      ...mapState({
        roles: state => {
          return state.roles.list || []
        }
      })
    },
    methods: {
      onSave(entity) {
        this.$store
          .dispatch('positions/update', entity)
          .then(() => this.$router.push({ name: 'Position List' }))
      },
      onBack() {
        this.$router.push({ name: 'Position List' })
      }
    },
    created() {
      this.$store.dispatch('positions/loadById', this.positionId)
      this.$store.dispatch('roles/loadAll')
    }
  }
</script>
