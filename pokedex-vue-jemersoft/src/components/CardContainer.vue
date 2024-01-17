<template>
    <v-container class="w-75 mt-10">
        <v-row class="align-center justify-center ml-3">
            <v-col cols="12" md="5">
                <v-text-field v-model="pokemonSearchText" density="compact" variant="solo" label="Busqueda por nombre"
                    append-inner-icon="mdi-magnify" hide-details></v-text-field>
            </v-col>
        </v-row>
        <v-row v-if="filteredPokemons">
            <v-col v-for="pokemon in paginatedPokemons" :key="pokemon.id" cols="12" md="4">
                <Card :pokemon="pokemon" />
            </v-col>
        </v-row>
        <div class="text-center">
            <v-container>
                <v-row justify="center">
                    <v-col cols="4">
                        <v-container class="max-width">
                            <v-pagination v-if="totalPages > 1" v-model="currentPage" class="my-4"
                                :length="totalPages"></v-pagination>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-container>
</template>

<script setup>
import Card from './Card.vue'
import { computed, ref, watch } from 'vue';
import { usePokemons } from '@/store/pokemonsStore.js';
const { pokemons } = usePokemons();

const currentPage = ref(1)
const pokemonsPerPage = ref(9);
const pokemonSearchText = ref("");
const filteredPokemons = ref(pokemons);


const totalPages = computed(() =>
    Math.ceil(filteredPokemons.value.length / pokemonsPerPage.value)
);
const paginatedPokemons = computed(() => {
    const start = (currentPage.value - 1) * pokemonsPerPage.value
    const end = start + pokemonsPerPage.value
    return filteredPokemons.value.slice(start, end)
})

watch(pokemonSearchText, (newText) => {
    filteredPokemons.value = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(newText.toLowerCase())
    );
})
watch(pokemonSearchText, () => {
    currentPage.value = 1;
});


</script>