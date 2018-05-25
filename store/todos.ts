import uuid from 'uuid/v4'

type Todo = {
  content: string;
  id: string;
}

type TodoState = {
  items: Array<Todo>;
}

export const state = (): TodoState => ({
  items: []
})

export const getters = {
  allItems(state) {
    return state.items
  }
}

export const mutations = {
  add(state, todo) {
    state.items.push({ content: todo })
  }
}

export const actions = {
  addTodo({ commit, state }, todo) {
    commit('add', todo)
  }
}
