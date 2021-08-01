import axios from 'axios'
export const state = () => ({
  pages: [],
  headers: [],
  logos: [],
  settings: []
})

export const getters = {
  allHeaders: state => state.headers
}

export const actions = {
  // GET PAGES
  async getPages ({ commit }) {
    const pages = await axios.get('http://moapi.test/api/pages')
    commit('getPages', pages)
    return pages
  },
  // GET HEADERS
  async fetchHeaders ({ commit }) {
    const headers = await axios.get('http://moapi.test/api/headers')
    commit('getHeaders', headers)
    return headers
  },
  // GET LOCATION HEADERS
  async fetchLocationHeaders ({ commit, location }) {
    console.log('LOCATIONxx: ', location)
    const headers = await axios.get(`http://moapi.test/api/headers/${location}`)
    commit('getHeaders', headers)
    return headers
  },
  // GET LOGOS
  async getLogos ({ commit }) {
    const logos = await axios.get('http://moapi.test/api/logos')
    commit('getLogos', logos)
    return logos
  },
  // GET SETTINGS
  async getSettings ({ commit }) {
    const settings = await axios.get('http://moapi.test/api/settings')
    commit('getSettings', settings)
    return settings
  }
}

export const mutations = {
  getPages (state, pages) {
    state.pages.push({ ...pages })
  },
  getHeaders (state, headers) {
    state.headers.push({ ...headers })
  },
  getLogos (state, logos) {
    state.logos.push({ ...logos })
  },
  getSettings (state, settings) {
    state.settings.push({ ...settings })
  }
}

// export default {
//   namespaced: true,
//   state,
//   getters,
//   mutations,
//   actions
// }
