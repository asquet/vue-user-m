<template>
  <div>
    <label>{{ label }}</label>
    <slot>
      <input
        :value="value"
        @input="ev => $emit('update:value', ev.target.value)"
        :readonly="readonly"
      />
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'form-group',
    props: {
      value: '',
      label: '',
      readonly: false
    }
  }
</script>
