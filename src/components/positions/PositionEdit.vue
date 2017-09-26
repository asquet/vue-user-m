<template>
  <position-form :entity="entity" @onSave="onSave" @onBack="onBack" v-if="entity"></position-form>
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
      }
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
    watch: {
      getById() {
        console.log(1)
      }
    },
    created() {
      this.$store.dispatch('positions/loadById', this.positionId)
    }
  }
</script>
