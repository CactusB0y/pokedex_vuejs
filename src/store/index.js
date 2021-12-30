import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: [],
    pokedex: []
  },
  mutations: {
    SET_POSTS(state, posts){
      state.pokemons = posts
    },
    SET_POKEDEX(state, poke){
      state.pokedex = poke
    }
  },
  actions: {
    loadPokemons({commit}){
      let posts;
      axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
          .then(data => {
            posts = data.data
            commit('SET_POSTS', posts)
          })
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
