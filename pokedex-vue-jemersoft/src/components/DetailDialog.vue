<template>
    <v-dialog v-model="dialog" activator="parent" width="auto">
        <v-card>
            <v-card-text>
               {{ pokemon.name }}
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script setup>
const { pokemon } = defineProps({ pokemon: Object })
</script>