<template>
  <div>
    <label>{{ label }}</label>
    <slot>
      <input :value="value" v-on:input="ev => $emit('update:value', ev.target.value)"/>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'form-group',
    props: {
      value: '',
      label: '',
    },
  };
</script>
