<template>
  <div>
    <form @submit="onSubmit">
      <form-group :value.sync="id" label="ID"></form-group>
      <form-group :value.sync="name" label="Name"></form-group>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  import FormGroup from '@/components/common/FormGroup';

  export default {
    components: {
      'form-group': FormGroup,
    },
    data: () => ({
      id: 0,
      name: '',
    }),
    methods: {
      onSubmit: function onSubmit() {
        alert(`${this.id} ${this.name}`);
      },
    },
  };
</script>
