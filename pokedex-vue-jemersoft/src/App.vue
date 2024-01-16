<template>
  <v-app>
    <v-main>

    </v-main>
  </v-app>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue';
import { usePokemons } from './store/pokemonsStore.js';

const pokemonsStore = usePokemons();
pokemonsStore.fetchPokemons()
const pokemonsList = ref(pokemonsStore.pokemons)
</script>
