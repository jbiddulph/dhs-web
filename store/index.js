import axios from 'axios'
export const state = () => ({
  homepage: [],
  pages: [],
  headers: [],
  logos: [],
  settings: []
})

export const getters = {
  allHeaders: state => state.headers,
  allPages: state => state.pages,
  homepage: state => state.homepage
}

export const actions = {
  // GET HOMEPAGE
  async fetchHomePage ({ commit }) {
    const homepage = await axios.get('http://moapi.test/api/pages/home')
    commit('setHomePage', homepage.data)
    return homepage.data
  },
  // GET PAGES
  async fetchPages ({ commit }) {
    const pages = await axios.get(`http://moapi.test/api/pages/${this.params.slug}`)
    commit('setPages', pages.data)
    return pages.data
  },
  // GET HEADERS
  async fetchHeaders ({ commit }) {
    const headers = await axios.get('http://moapi.test/api/headers')
    commit('setHeaders', headers.data)
    return headers.data
  },
  async fetchLocationHeaders ({ commit }, location) {
    console.log('LOCATIONxx: ', location)
    const headers = await axios.get(`http://moapi.test/api/locations/${location}/headers`)
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
  setHomePage: (state, homepage) => (state.homepage = homepage),
  setPages: (state, pages) => (state.pages = pages),
  setHeaders: (state, headers) => (state.headers = headers),
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
