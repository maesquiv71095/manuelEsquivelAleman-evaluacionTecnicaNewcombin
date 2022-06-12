import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autorizacion: { token: ''}
  },
  getters: {
    GET_AUTORIZACION: state => {
      return state.autorizacion;
    }
  },
  mutations: {
    SET_AUTORIZACION(state, data) {
      state.autorizacion = data;
    },
  },
  actions: {
    A_SET_AUTORIZACION: ({ commit }, data) => {
        commit('SET_AUTORIZACION', data)
    },
  },
  modules: {
  }
})
