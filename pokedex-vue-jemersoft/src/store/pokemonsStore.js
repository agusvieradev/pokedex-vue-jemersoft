import { useFetch } from "@/composables/useFetch.js";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePokemons = defineStore("pokemons", () => {
  const pokemons = ref([]);
  const pokemonsLoading = ref(true);
  const pokemonsErrorFetched = ref(false);

  const url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";
  const { getData } = useFetch(url);
  const pokemonsLength = computed(() => pokemons.value.length);
  const fetchPokemons = () => {
    try {
      pokemonsErrorFetched.value = false;
      pokemonsLoading.value = true;
      getData();
    } catch (e) {
      pokemonsErrorFetched.value = true;
    }
  };
});
