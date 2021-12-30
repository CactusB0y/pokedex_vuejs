import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    props: true
  },
  {
    path: '/pokemon/:id',
    name: 'PokemonDetails',
    props: true,
    component: () => import(/* webpackChunkName: "pokemondetails" */ '../views/PokemonDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
