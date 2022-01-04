<template>
  <div id="banner" class="w-full h-24 absolute top-5">
    <div class="flex justify-between items-center h-full">
      <h1 class="text-4xl ml-10">Pokédex</h1>
      <div class="h-full w-1/3 mr-10 flex items-center justify-center">
        <a  @click="clickLeft()" class="text-white text-2xl mr-10">{{left}}</a>
        <h1 class="text-4xl text-white">{{r}}</h1>
        <a @click="clickRight()" class="text-white text-2xl ml-10">{{right}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Banner',
  data(){
    return{
      left: '<-',
      right: '->'
    }
  },
  methods:{
    clickRight(){
      this.$store.commit('SET_R')
    },
    clickLeft(){
      this.$store.commit('SET_L')
    }
  },
  computed:{
    ...mapState([
      'r'
    ])
  }
};
</script>

<style>
#banner {
  background: linear-gradient(120deg, #acb5ba91 62.7%, #292828 30%);
}
</style>