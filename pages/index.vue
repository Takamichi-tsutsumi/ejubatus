<template>
  <section class="container">
    <simple-form v-on:submit="onAddTodoFormSubmit" />
    <todo-list :items="todos" />
  </section>
</template>

<script>
import AppHeader from '~/components/organisms/shared/Header.vue'
import SimpleForm from '~/components/molecules/SimpleForm/SimpleForm.vue'
import TodoList from '~/components/organisms/TodoList/TodoList.vue'

export default {
  components: {
    AppHeader,
    SimpleForm,
    TodoList
  },
  computed: {
    todos() {
      return this.$store.state.todos.items
    }
  },
  methods: {
    onAddTodoFormSubmit(e) {
      this.$store.dispatch('todos/addTodo', e.target.todo.value)
      e.target.reset()
    }
  }
}
</script>

<style>
.container {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
