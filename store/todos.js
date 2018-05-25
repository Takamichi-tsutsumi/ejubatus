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
    state.items.push({ content: todo })
  }
}

export const actions = {
  addTodo({ commit, state }, todo) {
    commit('add', todo)
  }
}
