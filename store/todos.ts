import uuid from 'uuid/v4'
import Todo from '~/models/todo'
import { TODO_FILTER } from '~/constants/todo'

type TodoState = {
  items: Array<Todo>;
  filter: TODO_FILTER;
}

export const state = (): TodoState => ({
  items: [],
  filter: TODO_FILTER.ALL
})

export const getters = {
  allItems(state: TodoState) {
    return state.items
  },
  visibleItems(state: TodoState) {
    if (state.filter === TODO_FILTER.ALL) return state.items

    return state.items.filter(item => item.isStatusOf(state.filter))
  }
}

export const mutations = {
  add(state: TodoState, todo: Todo) {
    state.items.push(todo)
  },
  changeFilter(state: TodoState, filter: TODO_FILTER) {
    state.filter = filter
  }
}

export const actions = {
  addTodo(
    { commit, state }: { commit: any; state: TodoState },
    todoContent: string
  ) {
    commit('add', new Todo({ content: todoContent }))
  },
  changeFilter(
    { commit, state }: { commit: any; state: TodoState },
    filter: TODO_FILTER
  ) {
    commit('changeFilter', filter)
  }
}
