export const state = () => ({
  currentWidth: '80vw',
  minWidth: '350'
})

export const mutations = {
  setNewWidth(state, width) {
    if (width >= state.minWidth) {
      state.currentWidth = width + 'px'
    }
  }
}
export const getters = {
  getMainWindowWidth: state => {
    return state.currentWidth
  }
}
export const actions = {
  changeWidth({ commit }, width) {
    commit('setNewWidth', width)
  }
}
