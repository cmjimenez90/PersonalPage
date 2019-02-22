import { butter } from '@/buttercms'

export const state = () => ({
  list: [],
  fetched: false
})

export const mutations = {
  set(state, projects) {
    state.list = projects
    state.fetched = true
  }
}

export const actions = {
  async fetchProjects({ commit }) {
    const { data } = await butter.content.retrieve(['cmjimenez_projects'])
    commit('set', data.data.cmjimenez_projects)
  }
}
