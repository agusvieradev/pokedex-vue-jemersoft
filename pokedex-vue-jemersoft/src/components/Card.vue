<template>
    <v-card class="pokemon-card mx-auto text-white" hover="true" density="compact" floating max-width="400">
        <v-img class="align-end text-white" height="200" :src="pokemon.img">
            <v-card-title class="text-h5"> {{ capitalizeInitial(pokemon.name) }}</v-card-title>
        </v-img>
        <v-card-text>
            <div>Pokemon tipo: {{ pokemonTypes }}</div>
            <div>Peso: {{ pokemon.weight }}</div>
        </v-card-text>
        <v-card-actions>
            <div class=" w-100 text-center">Toca la carta para mas información</div>
        </v-card-actions>
    </v-card>
</template>
<script setup>
import { computed, ref } from 'vue';
import { capitalizeInitial } from '../utils/firstLetterUpperCase.js';
const { pokemon } = defineProps({ pokemon: Object })
const pokemonTypes = computed(() => {
    const types = ref([])
    const typesList = pokemon.types
    for (let i = 0; i < typesList.length; i++) {
        types.value.push(capitalizeInitial(typesList[i].type.name))
    }
    types.value = types.value.join(", ")
    return types.value;
})
</script>

<style scoped>
.pokemon-card {
    background: linear-gradient(to right top, rgba(19, 84, 122, 0.8), rgba(128, 208, 199, 0.8));
}
</style>