import { butter } from '@/buttercms'

export const state = () => ({
  list: [],
  categories: [],
  tags: []
})

export const mutations = {
  setBlogPost(state, blogPosts) {
    state.list = blogPosts
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  setTags(state, tags) {
    state.tags = tags
  }
}

export const actions = {
  async fetchBlogPosts({ commit }) {
    const { data } = await butter.post.list({ page_size: 5 })
    commit('setBlogPost', data.data)
  },
  async fetchCategories({ commit }) {
    const { data } = await butter.category.list()
    commit('setCategories', data.data)
  },
  async fetchTags({ commit }) {
    const { data } = await butter.tag.list()
    commit('setTags', data.data)
  }
}

export const getters = {
  blogPostBySlug: state => slug => {
    return state.list.find(post => post.slug === slug)
  }
}
