<template>
    <table class="entry-list">
      <thead>
        <slot name="header"></slot>
      </thead>
      <tbody>
        <template v-for="entry in entries">
          <slot name="item" :item="entry"></slot>
        </template>
      </tbody>
    </table>
</template>

<script>
  export default {
    props: {
      entries: {
        default: [],
        required: true,
        type: Array,
      },
    },
  };
</script>

<style>
.entry-list {
  width: 600px;
}
</style>
