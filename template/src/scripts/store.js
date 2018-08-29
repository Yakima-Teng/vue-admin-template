import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { merge } from './utils'

Vue.use(Vuex)

const shouldSaveData = true

const user = {
  id: ''
}

const state = {
  user
}

const initialStateString = JSON.stringify(state)

const getters = {
  user: state => state.user
}

const mutations = {
  setUser (state, options) { merge(state.user, options) },
  resetAllStateInfo (state, options) {
    merge(state, {
      ...JSON.parse(initialStateString)
    })
  }
}

const actions = {}

const isLocalStorageAvailable = (() => {
  let bool = true
  if (window.localStorage) {
    try {
      window.localStorage.setItem('bla', 'bla')
      window.localStorage.removeItem('bla')
    } catch (e) {
      if (e.name === 'QUOTA_EXCEEDED_ERR' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
        window.alert(e.name)
        bool = false
      } else {
        window.alert(e.message)
        bool = false
      }
    }
  }
  return bool
})()

const reducer = state => ({
  user: state.user
})

const filter = mutation => (
  mutation.type === 'setUser'
)

const from = 'vue-admin-template'
const hostname = window.location.hostname

export const localStoragePrefix = `${from}:${hostname}`

const vuexLocal = new VuexPersistence({
  key: localStoragePrefix,
  storage: window.localStorage,
  reducer,
  filter
})

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: (shouldSaveData && isLocalStorageAvailable) ? [vuexLocal.plugin] : []
})
