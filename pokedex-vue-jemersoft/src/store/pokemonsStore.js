import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePokemons = defineStore("pokemons", () => {
  const pokemons = ref([]);
  const pokemonsLoading = ref(true);
  const pokemonsErrorFetched = ref(false);
  const pokemonsLength = computed(() => pokemons.value.length);
  const fetchPokemons = () => {
    try {
      pokemonsErrorFetched.value = false;
      pokemonsLoading.value = true;
      
    } catch (e) {
      pokemonsErrorFetched.value = true;
    }
  };
});
