<template>
  <position-form :entity="{}" @onSave="onSave" @onBack="onBack"></position-form>
</template>

<script>
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
    }
  }
</script>
