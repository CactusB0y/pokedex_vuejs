<template>
<div>
    <div>
        <img class="absolute top-72 left-64" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idSprite}.png`" alt="">
    </div>
    <div style="width: 38%" class="absolute top-36 right-3 ">
        <ul class="list">
            <router-link @mouseover.native="getIdSprite(index+1)" tag="li" :to="{name: 'PokemonDetails', params:{id: index+1}}" id="pokemonEntry" style="width: 100%" class="flex items-center justify-between rounded-full my-10" v-for="(pokemon, index) in pokemons.results" :key="index">
                <div width='40%' class="flex items-center">
                    <img width="90px" :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/' + (index + 1 )+ '.png'" alt="" />
                    <span class="text-2xl" v-if="index + 1 > 0 && index + 1 < 10">No. 00{{ index + 1 }}</span>
                    <span class="text-2xl" v-else-if="index + 1 >= 100">No. {{ index + 1 }}</span>
                    <span class="text-2xl" v-else-if="index + 1 >= 10">No. 0{{ index + 1 }}</span>
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
import pokeball from '../assets/img/pokeball.png'
import axios from "axios";

export default {
    name: "PokemonList",
    data() {
        return {
            sprite: null,
            pokeball: pokeball,
            idSprite: 1
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
        ...mapState(["pokemons"])
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
