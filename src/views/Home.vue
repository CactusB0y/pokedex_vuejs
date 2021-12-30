<template>
  <div class="home">
    <Banner/>
    <PokemonList/>
  </div>
</template>

<script>
import Banner from './Banner.vue'
import PokemonList from './PokemonList.vue'

export default {
  name: 'Home',
  components:{
    Banner,
    PokemonList
  }
}
</script>
