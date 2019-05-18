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
    item.checked = !item.checked
  }
}

export const getters = {
  getFilterTags: state => {
    return state.filterTags
  },
  getFilterCategories: state => {
    return state.filterCategories
  },
  getFilteredItems: state => {
    return [
      ...state.filterCategories.filter(category => category.checked === true),
      ...state.filterTags.filter(tag => tag.checked === true)
    ]
  },
  getFilteredBlogs: state => posts => {
    posts.filter(post => {
      let isValid = true

      if (state.filterCategories.length > 0) {
        const filterCategorySlugs = state.filteredCategories.map(
          category => category.slug
        )
        const postCategorySlugs = post.categories.map(category => category.slug)
        const resultCategorySlugs = filterCategorySlugs.filter(
          category => postCategorySlugs.indexOf(category) !== -1
        )
        isValid = filterCategorySlugs.length === resultCategorySlugs.length
      }

      if (state.filterTags.length > 0 && isValid === true) {
        const filterTagSlugs = state.filteredTags.map(tag => tag.slug)
        const postTagSlugs = post.tags.map(tag => tag.slug)
        const resultTagSlugs = filterTagSlugs.filter(
          tag => postTagSlugs.indexOf(tag) !== -1
        )
        isValid = filterTagSlugs.length === resultTagSlugs.length
      }

      return isValid
    })
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
  },
  resetFilter({ commit, state }) {
    state.filterCategories.forEach(element => {
      if (element.checked === true) {
        commit('toggleChecked', element)
      }
    })
    state.filterTags.forEach(element => {
      if (element.checked === true) {
        commit('toggleChecked', element)
      }
    })
  }
}
