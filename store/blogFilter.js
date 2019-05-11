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
    } else if (state.tags.indexOf(filter) !== -1) {
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
  },
  getFilteredBlogPosts: state => {
    return state.blogPosts.filter(post => {
      let isValid = true

      if (state.filteredCategories.length > 0) {
        const filteredCategorySlugs = state.filteredCategories.map(
          category => category.slug
        )
        const postCategorySlugs = post.categories.map(category => category.slug)
        const resultCategorySlugs = filteredCategorySlugs.filter(
          category => postCategorySlugs.indexOf(category) !== -1
        )
        isValid = filteredCategorySlugs.length === resultCategorySlugs.length
      }

      if (state.filteredTags.length > 0 && isValid === true) {
        const filteredTagSlugs = state.filteredTags.map(tag => tag.slug)
        const postTagSlugs = post.tags.map(tag => tag.slug)
        const resultTagSlugs = filteredTagSlugs.filter(
          tag => postTagSlugs.indexOf(tag) !== -1
        )
        isValid = filteredTagSlugs.length === resultTagSlugs.length
      }

      return isValid
    })
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
