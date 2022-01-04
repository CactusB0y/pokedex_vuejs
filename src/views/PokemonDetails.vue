<template>
<div class="w-full h-full flex justify-center items-center">
    <div class="w-1/2">
        <div>
            <router-link style="background-color: #f57d51; color: white; box-shadow: 5px 10px #000000b6;" class="p-4" to="/">go back</router-link>
            <img class="m-auto" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokedex.id}.png`" alt="">
        </div>
    </div>
    <div>
        <div class="w-1/2 pokemonBar flex justify-between">
            <div class="flex items-center justify-evenly text-white w-1/2">
                <img width="90px" :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/' + pokedex.id+ '.png'" alt="">
                <span class="text-2xl" v-if="pokedex.id > 0 && pokedex.id < 10">No. 00{{ pokedex.id }}</span>
                <span class="text-2xl" v-else-if="pokedex.id >= 100">No. {{ pokedex.id }}</span>
                <span class="text-2xl" v-else-if="pokedex.id >= 10">No. 0{{ pokedex.id }}</span>
            </div>
            <div class="flex items-center text-white w-1/2">
                <span class="mx-auto text-2xl">{{pokedex.name}}</span>
            </div>
        </div>

        <div class="w-1/2 mt-20">
            <table width='800px'>
                <tr>
                    <th>Height:</th>
                    <td>{{pokedex.height}}'</td>
                </tr>
                <tr>
                    <th>Weight:</th>
                    <td>{{pokedex.weight}} lbs.</td>
                </tr>
            </table>
        </div>
        <div class="flex w-full justify-around mt-10">
            <div class="" v-for="type, index in pokedex.types" :key="index">
                <span v-if="type.type.name == 'normal'" style="background-color: #a9a87b; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'fighting'" style="background-color: #c13029; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'flying'" style="background-color: #97a3df; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'poison'" style="background-color: #bb5a9f; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'ground'" style="background-color: #e7d4a9; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'rock'" style="background-color: #e7d4a9; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'bug'" style="background-color: #a9bd42; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'ghost'" style="background-color: #6762b2; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'steel'" style="background-color: #afadc3; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'fire'" style="background-color: #fe4833; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'water'" style="background-color: #1f93f6; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'grass'" style="background-color: #74d76a; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'electric'" style="background-color: #fec447; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'psychic'" style="background-color: #fd70a2; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'ice'" style="background-color: #47cee4; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'dragon'" style="background-color: #8567ed; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'dark'" style="background-color: #765a4d; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
                <span v-if="type.type.name == 'fairy'" style="background-color: #feb6f2; box-shadow: 5px 10px #000000b6;"  class="p-3 rounded-full text-white">{{type.type.name}}</span>
            </div>
        </div>
        <div class="w-full mt-20 flex justify-around">
            <div>
                <h1>front sprite</h1>
                <img class="mx-auto" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex.id}.png`" alt="">
            </div>
            <div>
                <h1>back sprite</h1>
                <img class="mx-auto" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokedex.id}.png`" alt="">

            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'

export default {
    name: 'PokemonDetails',
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    mounted() {
        this.$store.dispatch('loadPokedex', {
            id: this.id
        })
    },
    computed: {
        ...mapState([
            'pokedex'
        ])
    }
}
</script>

<style>
.pokemonBar {
    background: linear-gradient(120deg, #f57d51 50%, #000000 50%);
    box-shadow: #00000096 5px 10px;
    height: 80px;
    width: 800px;
}

th {
    background: #dfe0de;
    border: solid #d7d8d6 5px;
}

td {
    background: #ffffff;
    border: solid #d7d8d6 5px;
}

tr {
    height: 100px;
}

th,
td {
    text-align: center;
}

table {
    box-shadow: #00000096 5px 10px;
}
</style>
