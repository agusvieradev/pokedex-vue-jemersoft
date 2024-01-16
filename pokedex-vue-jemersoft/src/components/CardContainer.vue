<template>
    <v-container class="w-75 align-center mt-5">
        <v-row v-if="pokemons" >
            <v-col v-for="pokemon in pokemons" :key="pokemon.id" cols="12" md="4">
                <Card :pokemon="pokemon" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import Card from './Card.vue'
import { usePokemons } from '@/store/pokemonsStore.js';
import { ref, watch } from 'vue';
const { pokemons } = usePokemons();
const pokemonList = ref();

</script>