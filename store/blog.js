import { butter } from '@/buttercms'

export const state = () => ({
  list: [],
  fetched: false
})

export const mutations = {
  set(state, blogPosts) {
    state.list = blogPosts
    state.fetched = true
  }
}

export const actions = {
  async fetchBlogPosts({ commit }) {
    const { data } = await butter.post.list({ page_size: 5 })
    commit('set', data.data)
  }
}

export const getters = {
  blogPostBySlug: state => slug => {
    return state.list.find(post => post.slug === slug)
  }
}
