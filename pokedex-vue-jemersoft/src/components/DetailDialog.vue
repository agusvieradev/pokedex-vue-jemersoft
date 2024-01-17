<template>
    <v-dialog v-model="pokemonDetailStore.showDialog" width="auto">
        <v-card class="mx-auto my-12" max-width="650">
            <v-img height="180" :src="pokemonDetailStore.pokemonDetail[0].img"></v-img>
            <v-card-item>
                <v-card-title class="text-capitalize">{{ pokemonDetailStore.pokemonDetail[0].name }}</v-card-title>
                <v-card-subtitle>
                    <span class="me-1">Pokemon tipo: {{ pokemonTypes }}</span>
                </v-card-subtitle>
                <v-card-subtitle>
                    <span class=" me-1 text-capitalize">
                        Color: {{ pokemonDetailStore.pokemonDetail[0].descriptionData.color.name }}
                    </span>
                </v-card-subtitle>
            </v-card-item>

            <v-card-text>

                <div>{{ description }}
                </div>
            </v-card-text>

            <v-divider class="mx-4 mb-1"></v-divider>

            <v-card-title>Tonight's availability</v-card-title>

            <div class="px-4">
                <v-chip-group>
                    <v-chip v-for=" move, i in pokemonDetailStore.pokemonDetail[0].moves" :key="i">{{ move.move.name }}
                    </v-chip>
                </v-chip-group>
            </div>

            <v-card-actions>

            </v-card-actions>
            <v-card-actions>
                <v-btn color="primary" block @click="pokemonDetailStore.closePokemonDialog()">Cerrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script setup>
import { computed, ref } from 'vue'
import { usePokemonDetail } from '../store/pokemonDatailStore.js'
import { capitalizeInitial } from '../utils/firstLetterUpperCase.js'
const pokemonDetailStore = usePokemonDetail()
const pokemonTypes = computed(() => {
    const types = ref([])
    const typesList = pokemonDetailStore.pokemonDetail[0].types
    for (let i = 0; i < typesList.length; i++) {
        types.value.push(capitalizeInitial(typesList[i].type.name))
    }
    types.value = types.value.join(", ")
    return types.value;
})
const description = computed(() => {
    return pokemonDetailStore.pokemonDetail[0].descriptionData.flavor_text_entries.find((d) => d.language.name == "es").flavor_text
}) 
</script>