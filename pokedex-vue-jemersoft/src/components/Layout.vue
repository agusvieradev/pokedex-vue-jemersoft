<template>
    <v-layout>
        <AppBar />
        <v-main>
            <v-row class="w-100 h-100 align-center justify-center" v-if="pokemonStore.pokemonsLoading">
                <v-progress-circular :size="101" indeterminate color="primary"></v-progress-circular>
            </v-row>
            <CardContainer v-if="!pokemonStore.pokemonsLoading" />
            <DetailDialog v-if="pokemonDetailStore.showDialog" />
        </v-main>
    </v-layout>
</template>

<script setup>
import AppBar from './AppBar.vue';
import DetailDialog from './DetailDialog.vue';
import CardContainer from './CardContainer.vue';
import { usePokemonDetail } from '../store/pokemonDatailStore.js'
import { usePokemons } from '@/store/pokemonsStore.js';
const pokemonStore = usePokemons();
const pokemonDetailStore = usePokemonDetail()
</script>

