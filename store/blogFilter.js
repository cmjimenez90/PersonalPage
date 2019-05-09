export const state = () => ({
  filteredCategories: [],
  filteredTags: [],
  blogPosts: [],
  categories: [],
  tags: [],
  initialized: false
})

export const mutations = {
  setBlogPost(state, blogPosts) {
    state.blogPosts = blogPosts
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  setTags(state, tags) {
    state.tags = tags
  },
  removeFilter(state, filter) {
    if (state.filteredCategories.indexOf(filter) !== -1) {
      state.filteredCategories.splice(
        state.filteredCategories.indexOf(filter),
        1
      )
    } else {
      state.filteredTags.splice(state.filteredTags.indexOf(filter), 1)
    }
  },
  addFilter(state, filter) {
    if (state.categories.indexOf(filter) !== -1) {
      state.filteredCategories.push(filter)
    } else if (state.filteredTags.push(filter) !== -1) {
      state.filteredTags.push(filter)
    } else {
    }
  },
  resetFilter(state) {
    state.filteredTags.splice(0)
    state.filteredCategories.splice(0)
  },
  setInitializationFlag(state) {
    state.initialized = true
  }
}

export const getters = {
  getCategories: state => {
    return state.categories
      .filter(category => {
        return state.filteredCategories.indexOf(category) === -1
      })
      .sort(sortAlpha)
  },
  getFilteredCategories: state => {
    return state.filteredCategories.slice().sort(sortAlpha)
  },
  getTags: state => {
    return state.tags
      .filter(tag => {
        return state.filteredTags.indexOf(tag) === -1
      })
      .sort(sortAlpha)
  },
  getFilteredTags: state => {
    return state.filteredTags.slice().sort(sortAlpha)
  }
}

export const actions = {
  initializeBlogFilter({ commit, state, rootState }) {
    if (state.initialized === false) {
      const blogPost = rootState.blog.list
      commit('setBlogPost', blogPost)
      const categories = rootState.blog.categories
      commit('setCategories', categories)
      const tags = rootState.blog.tags
      commit('setTags', tags)
      commit('setInitializationFlag')
    }
  },
  addFilter({ commit }, param) {
    commit('addFilter', param)
  },
  removeFilter({ commit }, param) {
    commit('removeFilter', param)
  },
  resetFilter({ commit }) {
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
