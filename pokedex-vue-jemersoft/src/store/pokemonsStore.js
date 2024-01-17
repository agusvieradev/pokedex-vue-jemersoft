import { useFetch } from "@/composables/useFetch.js";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePokemons = defineStore("pokemons", () => {
  const pokemons = ref(null);
  const pokemonsLoading = ref(true);
  const pokemonsErrorFetched = ref(false);
  const pokemonsLength = computed(() => pokemons.value.length);
  const pokemonsOptionsFilter = [
    {
      limit: "100",
      title: "Hasta 100",
    },
    {
      limit: "250",
      title: "Hasta 250",
    },
    {
      limit: "500",
      title: "Hasta 500",
    },
    {
      limit: "10000",
      title: "Ver todos",
    },
  ];
  const pokemonsLimit = ref(100);
  const pokemonsOffset = ref(0);
  const url = ref(
    `https://pokeapi.co/api/v2/pokemon/?offset=${pokemonsOffset.value}&limit=${pokemonsLimit.value}`
  );
  console.log(url.value);
  const fetchPokemons = () => {
    const { result: pokemonResult, error: pokemonError } = useFetch(url.value);
    try {
      if (pokemonResult != null) {
        pokemonsErrorFetched.value = false;
        pokemonsLoading.value = true;
        console.log(pokemonResult);
        pokemons.value = pokemonResult;
      }
    } catch (e) {
      if (pokemonError != null) {
        pokemonsErrorFetched.value = true;
        console.log(e);
      }
    }
  };

  return {
    pokemons,
    pokemonsLoading,
    pokemonsErrorFetched,
    pokemonsLength,
    pokemonsOffset,
    pokemonsLimit,
    pokemonsOptionsFilter,
    fetchPokemons,
  };
});
