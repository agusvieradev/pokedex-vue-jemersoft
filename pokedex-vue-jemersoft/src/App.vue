<template>
  <v-app>
    <Layout/>
  </v-app>
</template>

<script setup>
import Layout from './components/Layout.vue';
import { usePokemons } from './store/pokemonsStore.js';
const pokemonsStore = usePokemons();
pokemonsStore.fetchPokemonAPI()
</script>
