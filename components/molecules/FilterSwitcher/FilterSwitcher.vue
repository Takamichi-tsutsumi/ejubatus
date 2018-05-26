<template>
  <div>
    <button v-for="filter in filters" :key="filter" :class="{selected: filter === selectedFilter}" v-on:click="() => changeFilter(filter)">{{ filter }}</button>
  </div>
</template>

<script>
export default {
  props: ['selectedFilter', 'filters'],
  methods: {
    changeFilter(filter) {
      this.$emit('change', filter)
    }
  }
}
</script>

<style scoped>
.selected {
  background-color: aqua;
}
</style>
