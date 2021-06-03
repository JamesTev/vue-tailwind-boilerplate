import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import social from './modules/social'

Vue.use(Vuex)

const store = new Vuex.Store({
  
  modules: {
    auth,
    social,
  },
  strict: false
})

export default store;