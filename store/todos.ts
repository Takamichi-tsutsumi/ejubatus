import uuid from 'uuid/v4'
import Todo from '~/models/todo'

type TodoState = {
  items: Array<Todo>;
}

export const state = (): TodoState => ({
  items: []
})

export const getters = {
  allItems(state: TodoState) {
    return state.items
  }
}

export const mutations = {
  add(state: TodoState, todo: Todo) {
    state.items.push(todo)
  }
}

export const actions = {
  addTodo(
    { commit, state }: { commit: any; state: TodoState },
    todoContent: string
  ) {
    commit('add', new Todo({ content: todoContent }))
  }
}
