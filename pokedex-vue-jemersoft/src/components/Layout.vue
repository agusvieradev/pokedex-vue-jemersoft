<template>
    <v-layout>
        <Drawer />
        <v-main>
            <CardContainer/>
        </v-main>
    </v-layout>
</template>

<script setup>
import Drawer from './Drawer.vue';
import CardContainer from './CardContainer.vue';
</script>