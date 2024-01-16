<template>
    <div> {{pokemons}} </div>
</template>

<script setup>
import { usePokemons } from '@/store/pokemonsStore.js';
import { ref } from 'vue';
const { pokemons } = usePokemons()
const pokemonList = ref()
</script>