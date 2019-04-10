export const state = () => ({
  filterParams: [],
  categories: [],
  tags: [],
  initialized: false
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setTags(state, tags) {
    state.tags = tags
  },
  addFilterParam(state, param) {
    state.filterParams.push(param)

    if (param.type === 'category') {
      state.categories.splice(state.categories.indexOf(param), 1)
    } else {
      state.tags.splice(state.tags.indexOf(param), 1)
    }
  },
  removeFilterParam(state, param) {
    state.filterParams.splice(state.filterParams.indexOf(param), 1)
    if (param.type === 'category') {
      state.categories.push(param)
    } else {
      state.tags.push(param)
    }
  },
  resetFilter(state) {
    while (state.filterParams.length >= 1) {
      const param = state.filterParams.pop()
      if (param.type === 'category') {
        state.categories.push(param)
      } else {
        state.tags.push(param)
      }
    }
  },
  setInitializationFlag(state) {
    state.initialized = true
  }
}

export const getters = {
  getFilterParams: state => {
    return state.filterParams.slice().sort(sortAlpha)
  },
  getCategories: state => {
    return state.categories.slice().sort(sortAlpha)
  },
  getTags: state => {
    return state.tags.slice().sort(sortAlpha)
  }
}

export const actions = {
  initializeBlogFilter({ commit, state, rootState }) {
    if (state.initialized === false) {
      const categories = rootState.blog.categories
      categories.forEach(category => {
        category.type = 'category'
      })
      commit('setCategories', categories)
      const tags = rootState.blog.tags
      tags.forEach(tag => {
        tag.type = 'tag'
      })
      commit('setTags', tags)
      commit('setInitializationFlag')
    }
  },
  addFilterParam({ commit }, param) {
    commit('addFilterParam', param)
  },
  removeFilterParam({ commit }, param) {
    commit('removeFilterParam', param)
  },
  resetFilterParams({ commit }) {
    commit('resetFilter')
  }
}

function sortAlpha(current, next) {
  if (current.name.toUpperCase() < next.name.toUpperCase()) {
    return -1
  }
  if (current.name.toUpperCase() > next.name.toUpperCase()) {
    return 1
  }
  return 0
}