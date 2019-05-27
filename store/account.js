import { cpus } from "os";

export const strict = false

export const state = () => ({
  user: null,
  displyName:null,
  isLogin:false
})

export const mutations = {
  setUser (state, payload) {
    state.user = payload
    if(state.user){
      state.isLogin=true
    }else{
      state.isLogin =false
    }
  },
  setAccountInfo(state,payload){
      state.displyName = payload
  }
}

export const actions = {
  setUser ({ commit }, payload) {
    commit('setUser', payload)
  },
  setAccountInfo({ commit }, payload) {
    commit('setAccountInfo', payload)
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  },
  getDisplayName(state){
    return state.displyName
  }
}