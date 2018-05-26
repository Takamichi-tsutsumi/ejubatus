<template>
  <section class="container">
    <div>
      <simple-form v-on:submit="onAddTodoFormSubmit" />
      <filter-switcher :filters="filters" :selected-filter="selectedFilter" v-on:change="onChangeFilter" />
      <todo-list :items="todos" />
    </div>
  </section>
</template>

<script>
import AppHeader from '~/components/organisms/shared/Header.vue'
import SimpleForm from '~/components/molecules/SimpleForm/SimpleForm.vue'
import FilterSwitcher from '~/components/molecules/FilterSwitcher/FilterSwitcher.vue'
import TodoList from '~/components/organisms/TodoList/TodoList.vue'

import { TODO_FILTER } from '~/constants/todo'

export default {
  components: {
    AppHeader,
    SimpleForm,
    TodoList,
    FilterSwitcher
  },
  data() {
    return {
      filters: TODO_FILTER
    }
  },
  computed: {
    todos() {
      return this.$store.getters['todos/visibleItems']
    },
    selectedFilter() {
      return this.$store.state.todos.filter
    }
  },
  methods: {
    onAddTodoFormSubmit(e) {
      this.$store.dispatch('todos/addTodo', e.target.todo.value)
      e.target.reset()
    },
    onChangeFilter(filter) {
      this.$store.dispatch('todos/changeFilter', filter)
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
