<template>
    <v-card class="pokemon-card mx-auto pa-2 text-white" theme="dark" hover="true" density="compact" floating max-width="400"
        max-height="300">
        <div class="d-flex flex-no-wrap justify-space-between">
            <div>
                <v-card-title class="text-h5 text-capitalize">
                    {{ pokemon.name }}
                </v-card-title>

                <v-card-subtitle>Pokemon tipo:
                    <div class="font-weight-black"> {{ pokemonTypes }}</div>
                </v-card-subtitle>
                <v-card-subtitle>Peso:
                    <div class="font-weight-black"> {{ pokemon.weight }}</div>
                </v-card-subtitle>

            </div>

            <v-avatar class="ma-3" size="115" rounded="0">
                <v-img :src="pokemon.img" height="120"></v-img>
            </v-avatar>
        </div>
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