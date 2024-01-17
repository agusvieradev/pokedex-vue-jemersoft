import { defineStore } from "pinia";
import { ref } from "vue";

export const usePokemonDetail = defineStore("pokemonDetai", () => {
  const pokemonDetail = ref([]);
  const showDialog = ref(false);
  const openPokemonDialog =  (pokemon) => {
    pokemonDetail.value.push(pokemon);
    showDialog.value = true;
  };
  const closePokemonDialog = () => {
    showDialog.value = false;
    pokemonDetail.value.pop();
  };
  return {
    pokemonDetail,
    showDialog,
    openPokemonDialog,
    closePokemonDialog,
  };
});
