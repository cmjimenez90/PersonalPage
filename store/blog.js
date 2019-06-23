import { butter } from '@/buttercms'

export const state = () => ({
  blogList: [],
  selectedFilterCategories: [],
  selectedFilterTags: [],
  categories: [],
  tags: [],
  fetched: false
})

export const mutations = {
  setBlogPost(state, blogPosts) {
    state.blogList = blogPosts
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  setTags(state, tags) {
    state.tags = tags
  },
  setSelectedTags(state, tags) {
    state.selectedFilterTags = tags
  },
  setSelectedCategories(state, categories) {
    state.selectedFilterCategories = categories
  },
  clearFilter(state) {
    state.selectedFilterCategories = []
    state.selectedFilterTags = []
  },
  updateFilteredBlogPost(state) {}
}

export const actions = {
  async initializeBlogStore({ commit, state }) {
    if (state.fetched === false) {
      let response = await butter.post.list({ page_size: 5 })
      commit('setBlogPost', response.data.data)
      response = await butter.category.list()
      commit('setCategories', response.data.data)
      response = await butter.tag.list()
      commit('setTags', response.data.data)
      this.fetched = true
    }
  }
}

export const getters = {
  blogPostBySlug: state => slug => {
    return state.blogList.find(post => post.slug === slug)
  },
  filteredBlogList: state => {
    function filterByTags(post) {
      const filterTags = state.selectedFilterTags.map(tag => tag.slug)
      const matchingTags = post.tags
        .slice()
        .filter(tag => filterTags.includes(tag.slug))
      return filterTags.length === matchingTags.length
    }

    function filterByCategories(post) {
      const filterCategories = state.selectedFilterCategories.map(
        category => category.slug
      )
      const matchingCategories = post.categories
        .slice()
        .filter(category => filterCategories.includes(category.slug))
      return filterCategories.length === matchingCategories.length
    }

    let filteredPost = state.blogList.slice()
    if (
      state.selectedFilterTags.length === 0 &&
      state.selectedFilterCategories.length === 0
    ) {
      return filteredPost
    }
    if (state.selectedFilterCategories.length !== 0) {
      filteredPost = filteredPost.filter(post => filterByCategories(post))
    }
    if (state.selectedFilterTags.length !== 0) {
      filteredPost = filteredPost.filter(post => filterByTags(post))
    }
    return filteredPost
  },
  blogCategories: state => {
    return state.categories
  },
  blogTags: state => {
    return state.tags
  },
  selectedBlogTags: state => {
    return state.selectedFilterTags
  },
  selectedBlogCategories: state => {
    return state.selectedFilterCategories
  }
}
