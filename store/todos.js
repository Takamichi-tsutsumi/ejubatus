import uuid from 'uuid/v4'

export const state = () => ({
  items: []
})

export const getters = {
  allItems(state) {
    return state.items
  }
}

export const mutations = {
  add(state, todo) {
    state.items.push({ content: todo, id: uuid() })
  }
}

export const actions = {
  addTodo({ commit, state }, todo) {
    commit('add', todo)
  }
}
