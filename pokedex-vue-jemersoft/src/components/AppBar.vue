<template>
    <v-app-bar floating class="px-10 py-2" scroll-behavior="elevate" scroll-threshold="1000"  image="../assets/pokemon1.jpg">
        <template v-slot:image>
            <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
        </template>
        <v-app-bar-title><v-img class=" " height="50" src="../assets/Pokédex.png"></v-img></v-app-bar-title>
    </v-app-bar>
</template>

<script setup></script>