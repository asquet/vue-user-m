<template>
  <div>
    <form @submit="onSubmit">
      <form-group :value.sync="obj.id" label="ID" readonly></form-group>
      <form-group :value.sync="obj.name" label="Name"></form-group>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  import FormGroup from '../common/FormGroup'

  export default {
    components: {
      'form-group': FormGroup
    },
    props: {
      entity: Object
    },
    computed: {
      obj: function() {
        return {
          id: null,
          name: '',
          ...this.entity
        }
      }
    },
    methods: {
      onSubmit: function onSubmit() {
        this.$emit('onSave', this.obj)
      }
    }
  }
</script>
