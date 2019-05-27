// vuex設定用js
import db from "~/plugins/firebase";

export const state = () => ({
    portfolioApp : []
})

export const mutations = {
    // 状態の変更を行う。
    setApp(state, data){
        state.portfolioApp = data
    },
    pushPortfolioApp(state, data){
        console.log(data)
        state.portfolioApp.push(data)
    }
}

export const actions = {
    // 一連の処理はここに記載する。
    // 状態の変更はmutationsで行うためここでは行わない。
    async getApp({ commit }){
        var appRef = db.collection("app");
        var querySnapshot = appRef.get().then(snapshot => {
            const portfolioApps = []
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                portfolioApps.push(doc.data())
            });
            commit('setApp', portfolioApps)
          })
          .catch(err => {
            console.log('Error getting documents', err);
          });
    },
    setApp({commit},appdata){
        try{
            commit('setApp', appdata)
        }catch(e){
            throw e
        }
    }
}

export const getters = {
    getPortfolioList (state) {
      return state.portfolioApp
    }
  }