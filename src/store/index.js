import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: [],
    pokedex: [],
    r: 'all',
    tabID: []
  },
  mutations: {
    SET_POSTS(state, posts){
      state.pokemons = posts
    },
    SET_POKEDEX(state, poke){
      state.pokedex = poke
    },
    SET_R(state){
      if(state.r == 'all'){
        state.r = 'kanto'
      } else if(state.r == 'kanto'){
        state.r = 'johto'
      } else if(state.r == 'johto'){
        state.r = 'hoenn'
      } else if(state.r == 'hoenn'){
        state.r = 'sinnoh'
      } else if(state.r == 'sinnoh'){
        state.r = 'unova'
      } else if(state.r == 'unova'){
        state.r = 'kalos'
      } else if(state.r == 'kalos'){
        state.r = 'alola'
      } else if(state.r == 'alola'){
        state.r = 'galar'
      } else if(state.r == 'galar'){
        state.r = 'all'
      }
    },
    SET_L(state){
      if(state.r == 'all'){
        state.r = 'galar'
      } else if(state.r == 'galar'){
        state.r = 'alola'
      } else if(state.r == 'alola'){
        state.r = 'kalos'
      } else if(state.r == 'kalos'){
        state.r = 'unova'
      } else if(state.r == 'unova'){
        state.r = 'sinnoh'
      } else if(state.r == 'sinnoh'){
        state.r = 'hoenn'
      } else if(state.r == 'hoenn'){
        state.r = 'johto'
      } else if(state.r == 'johto'){
        state.r = 'kanto'
      } else if(state.r == 'kanto'){
        state.r = 'all'
      }
    },
    SET_TABID(state, tab){
      state.tabID = tab
    }
  },
  actions: {
    loadPokemons({commit}){
      let posts;
      axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=898`)
          .then(data => {
            posts = data.data
            commit('SET_POSTS', posts)
          })
    },
    loadId({commit}){
      let tab = [];
      for (let i = 0; i < 898; i++) {
        tab.push(i)
        console.log(tab);
      }
      commit('SET_TABID', tab)
    },
    loadPokedex({commit}, id){
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id.id}/`)
        .then(data => {
          let poke = data.data
          commit('SET_POKEDEX', poke)
        })
    }
  },
  modules: {
  }
})
