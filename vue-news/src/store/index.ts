import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { state, RootState } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

Vue.use(Vuex)

// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== 'production',
//   state: {
//     news: [],
//     ask: [],
//     jobs: [],
//     user: {},
//     item: {},
//     list: [],
//   },
//   getters,
//   mutations,
//   actions,
// })

const store: StoreOptions<RootState> = {
  state,
  mutations,
  actions,
  getters,
}

export default new Vuex.Store(store)
