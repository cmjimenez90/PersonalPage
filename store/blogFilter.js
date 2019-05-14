export const state = () => ({
  filterCategories: [],
  filterTags: [],
  initialized: false
})

export const mutations = {
  setInitializationFlag(state) {
    if (state.initialized === false) {
      state.initialized = true
    }
  },
  loadCategories(state, categories) {
    const updatedCategoryModel = categories.map(category => {
      return { name: category.name, slug: category.slug, checked: false }
    })
    state.filterCategories = updatedCategoryModel
  },
  loadTags(state, tags) {
    const updatedTagModel = tags.map(tag => {
      return { name: tag.name, slug: tag.slug, checked: false }
    })
    state.filterTags = updatedTagModel
  },
  toggleChecked(state, item) {
    if (item.checked === false) {
      item.checked = true
    } else {
      item.checked = false
    }
  }
}

export const getters = {
  getFilterTags: state => {
    return state.filterTags
  },
  getFilterCategories: state => {
    return state.filterCategories
  }
}

export const actions = {
  initializeBlogFilter({ commit, state, rootState }) {
    if (state.initialized === false) {
      const categories = rootState.blog.categories
      commit('loadCategories', categories)
      const tags = rootState.blog.tags
      commit('loadTags', tags)
      commit('setInitializationFlag')
    }
  },
  toggleChecked({ commit }, item) {
    commit('toggleChecked', item)
  }
}
