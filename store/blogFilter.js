export const state = () => ({
  blogPost: [],
  categories: [],
  tags: [],
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
    state.categories = updatedCategoryModel
  },
  loadTags(state, tags) {
    const updatedTagModel = tags.map(tag => {
      return { name: tag.name, slug: tag.slug, checked: false }
    })
    state.tags = updatedTagModel
  },
  loadPost(state, post) {
    state.blogPost = post
  },
  toggleChecked(state, item) {
    item.checked = !item.checked
  }
}

export const getters = {
  getTags: state => {
    return state.tags
  },
  getCategories: state => {
    return state.categories
  },
  getFilteredItems: state => {
    return [
      ...state.categories.filter(category => category.checked === true),
      ...state.tags.filter(tag => tag.checked === true)
    ]
  },
  getFilteredBlogs: state => {
    return state.blogPost.filter(post => filterPost(post, state))
  }
}

export const actions = {
  initializeBlogFilter({ commit, state, rootState }) {
    if (state.initialized === false) {
      const categories = rootState.blog.categories
      commit('loadCategories', categories)
      const tags = rootState.blog.tags
      commit('loadTags', tags)
      const post = rootState.blog.list
      commit('loadPost', post)
      commit('setInitializationFlag')
    }
  },
  toggleChecked({ commit }, item) {
    commit('toggleChecked', item)
  },
  resetFilter({ commit, state }) {
    state.categories.forEach(element => {
      if (element.checked === true) {
        commit('toggleChecked', element)
      }
    })
    state.tags.forEach(element => {
      if (element.checked === true) {
        commit('toggleChecked', element)
      }
    })
  }
}

function filterPost(post, state) {
  let isValidPost = true

  const filteredCategories = state.categories
    .filter(category => {
      return category.checked === true
    })
    .map(category => category.slug)
  const filteredTags = state.tags
    .filter(tag => {
      return tag.checked === true
    })
    .map(tag => tag.slug)

  if (filteredCategories.length > 0) {
    const postCategories = post.categories.map(category => category.slug)
    const matchingCategories = postCategories.filter(category => {
      return filteredCategories.indexOf(category) !== -1
    })
    isValidPost = matchingCategories.length === filteredCategories.length
  }

  if (filteredTags.length > 0 && isValidPost === true) {
    const postTags = post.tags.map(tag => tag.slug)
    const matchingTags = postTags.filter(tag => {
      return filteredTags.indexOf(tag) !== -1
    })
    return matchingTags.length === filteredTags.length
  }
  return isValidPost
}
