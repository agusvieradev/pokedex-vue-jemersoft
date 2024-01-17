<template>
    <v-container class="w-75 mt-10">
        <v-row class="align-center justify-start ml-3">
            <v-col cols="12" md="3">
                <v-text-field v-model="searchTextPokemon" density="compact" variant="solo" label="Busqueda por nombre"
                    append-inner-icon="mdi-magnify" hide-details></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                <v-select density="compact" variant="solo" label="Cantidad" hide-details></v-select>
            </v-col>
        </v-row>
        <v-row v-if="filteredPokemons">
            <v-col v-for="pokemon in filteredPokemons" :key="pokemon.id" cols="12" md="4">
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
const searchTextPokemon = ref("");
const filteredPokemons = ref(pokemons);
watch(searchTextPokemon, (newText) => {
    filteredPokemons.value = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(newText.toLowerCase())
    );
}
)
</script>