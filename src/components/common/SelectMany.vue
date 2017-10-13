<template>
  <div>
    <ul>
      <li v-for="item in displaySelection">
        <slot name="item" :item="item">
          {{item.name}}
        </slot>
        <button @click.prevent="onRemove(item)"> X </button>
      </li>
    </ul>
    <select v-model="addValue">
      <template v-for="item in filteredOptions">
        <option :value="item">{{item.name}}</option>
      </template>
    </select>
    <button @click.prevent="onAdd"> Add </button>
  </div>
</template>

<script>
  export default {
    props: {
      selection: true,
      options: true
    },
    data() {
      return {
        addValue: null
      }
    },
    computed: {
      filteredOptions() {
        return (this.options || []).filter(
          opt => !this.selection.includes(opt.id)
        )
      },
      displaySelection() {
        return this.selection.map(id => this.options.find(v => v.id === id))
      }
    },
    methods: {
      onRemove(item) {
        this.$emit('update:selection', this.selection.filter(v => v !== item.id))
      },
      onAdd() {
        if (this.selection) {
          this.$emit('update:selection', [...this.selection, this.addValue.id])
        }
      }
    }
  }
</script>
