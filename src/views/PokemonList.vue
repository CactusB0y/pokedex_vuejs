<template>
<div>
    <div>
        <img class="absolute top-72 left-64" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idSprite}.png`" alt="">
    </div>
    <div style="width: 38%" class="absolute top-36 right-3 ">
        <ul class="list">
            <router-link @mouseover.native="getIdSprite((filteredId[index]))" tag="li" :to="{name: 'PokemonDetails', params:{id: (filteredId[index])}}" id="pokemonEntry" style="width: 100%" class="flex items-center justify-between rounded-full my-10" v-for="(pokemon, index) in filteredPokemon" :key="index">
                <div width='40%' class="flex items-center">
                    <img width="90px" :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/' + (filteredId[index]) + '.png'" alt="" />
                    <span class="text-2xl" v-if="filteredId[index] > 0 && filteredId[index] < 10">No. 00{{ filteredId[index] }}</span>
                    <span class="text-2xl" v-else-if="filteredId[index] >= 100">No. {{ filteredId[index] }}</span>
                    <span class="text-2xl" v-else-if="filteredId[index] >= 10">No. 0{{ filteredId[index] }}</span>
                </div>
                <div width="10%" class="h-full flex justify-between items-center">
                    <p class="text-2xl">{{ pokemon.name }}</p>
                    <img width="70px" :src="pokeball">
                </div>
            </router-link>
        </ul>
    </div>
</div>
</template>

<script>
import {
    mapState
} from "vuex";
import tabId from '../idTab.js'
import pokeball from '../assets/img/pokeball.png'
import axios from "axios";

export default {
    name: "PokemonList",
    data() {
        return {
            sprite: null,
            pokeball: pokeball,
            idSprite: 1,
            search: '',
            filterPokemon: [],
            tabId: tabId,
            region: [[0,151],[151,251],[251,386],[386,494],[494,649],[649,721],[721,809],[809,898]]
        };
    },
    methods: {
        getSprite() {
            axios
                .get(
                    `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/versions/generation-viii/icons/25.png`
                )
                .then((res) => {
                    console.log(res);
                });
        },
        getIdSprite(value){
            this.idSprite = value
        }
    },
    mounted() {
        this.$store.dispatch("loadPokemons");
    },
    computed: {
        ...mapState(["pokemons",'r']),
        filteredPokemon: function(){
            let temp;
            if (this.$store.state.r == 'all') {
                temp = this.pokemons.results
            } else if (this.$store.state.r == 'kanto') {
                temp = this.pokemons.results.slice(this.region[0][0], this.region[0][1])
                tabId.tabId.slice(this.region[0][0], this.region[0][1])
            } else if (this.$store.state.r == 'johto') {
                temp = this.pokemons.results.slice(this.region[1][0], this.region[1][1])
            } else if (this.$store.state.r == 'hoenn') {
                temp = this.pokemons.results.slice(this.region[2][0], this.region[2][1])
            } else if (this.$store.state.r == 'sinnoh') {
                temp = this.pokemons.results.slice(this.region[3][0], this.region[3][1])
            } else if (this.$store.state.r == 'unova') {
                temp = this.pokemons.results.slice(this.region[4][0], this.region[4][1])
            } else if (this.$store.state.r == 'kalos') {
                temp = this.pokemons.results.slice(this.region[5][0], this.region[5][1])
            } else if (this.$store.state.r == 'alola') {
                temp = this.pokemons.results.slice(this.region[6][0], this.region[6][1])
            } else if (this.$store.state.r == 'galar') {
                temp = this.pokemons.results.slice(this.region[7][0], this.region[7][1])
            }
            return temp
        },
        filteredId: function(){
            let temp;
            if (this.$store.state.r == 'all') {
                temp = this.tabId.tabId
            } else if (this.$store.state.r == 'kanto') {
                temp = this.tabId.tabId.slice(this.region[0][0], this.region[0][1])
            } else if (this.$store.state.r == 'johto') {
                temp = this.tabId.tabId.slice(this.region[1][0], this.region[1][1])
            } else if (this.$store.state.r == 'hoenn') {
                temp = this.tabId.tabId.slice(this.region[2][0], this.region[2][1])
            } else if (this.$store.state.r == 'sinnoh') {
                temp = this.tabId.tabId.slice(this.region[3][0], this.region[3][1])
            } else if (this.$store.state.r == 'unova') {
                temp = this.tabId.tabId.slice(this.region[4][0], this.region[4][1])
            } else if (this.$store.state.r == 'kalos') {
                temp = this.tabId.tabId.slice(this.region[5][0], this.region[5][1])
            } else if (this.$store.state.r == 'alola') {
                temp = this.tabId.tabId.slice(this.region[6][0], this.region[6][1])
            } else if (this.$store.state.r == 'galar') {
                temp = this.tabId.tabId.slice(this.region[7][0], this.region[7][1])
            }
            return temp 
        }
    },
};
</script>

<style>
#pokemonEntry:hover {
    background: linear-gradient(120deg, #ef5124 45%, #000000 30%);
    box-shadow: 5px 10px #000000b6;
}

#pokemonEntry:hover p {
    color: white;
}

#pokemonEntry:hover span {
    color: white;
}

.list {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
    height: 850px;
}

.list::-webkit-scrollbar {
    display: none;
}
</style>
