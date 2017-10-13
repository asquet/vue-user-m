<template>
  <div>
    <form @submit="onSubmit">
      <form-group :value.sync="obj.id" label="ID" readonly></form-group>
      <form-group :value.sync="obj.name" label="Name"></form-group>
      <select-many :selection.sync="obj.roles" :options="roles"></select-many>
      <button type="submit">Submit</button>
      <button @click.prevent="$emit('onBack')">Back</button>
    </form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { clone } from 'ramda'
  import FormGroup from '../common/FormGroup'
  import SelectMany from '../common/SelectMany'

  export default {
    components: {
      'form-group': FormGroup,
      'select-many': SelectMany
    },
    props: {
      entity: Object,
      roles: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        obj: {
          id: null,
          name: '',
          roles: [],
          ...clone(this.entity)
        }
      }
    },
    methods: {
      onSubmit() {
        this.$emit('onSave', this.obj)
      },
      changeRoles(roles) {
        Vue.set(this, 'roles', roles)
      }
    }
  }
</script>
