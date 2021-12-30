<template>
<div class="w-full h-full flex justify-center items-center">
    <div class="w-1/2">
        <div>
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
                <tr class="w-full ">
                    <th class="w-1/2">Type:</th>
                    <td class="w-1/2">
                        <span v-for="type, index in pokedex.types" :key="index">{{type.type.name}} </span>
                    </td>
                </tr>
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
        <div class="w-1/2 mt-20">

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

tr{
    height: 100px;
}

th, td{
    text-align: center;
}

table {
    box-shadow: #00000096 5px 10px;
}
</style>
