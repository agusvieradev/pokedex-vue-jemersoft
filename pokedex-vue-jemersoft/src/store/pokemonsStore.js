import { defineStore } from "pinia";
import { ref } from "vue";

export const usePokemons = defineStore("pokemons", () => {
  const pokemons = ref([]);
  const pokemonsLoading = ref(true);
  const pokemonsErrorFetched = ref(false);
  const pokemonsLimit = ref(100);
  const pokemonsOffset = ref(0);

  const setPokemonsState = async (pokemonList) => {
    for (let i = 0; i < pokemonList.length; i++) {
      const fetchPokemonData = await fetch(pokemonList[i].url);
      if (fetchPokemonData.ok) {
        const pokemonData = await fetchPokemonData.json();
        const pokemonDescription = await fetch(pokemonData.species.url);
        const pokemon = {
          name: pokemonData.name,
          id: pokemonData.id,
          weight: pokemonData.weight + " kg",
          types: pokemonData.types,
          img: pokemonData.sprites.front_default,
          moves: pokemonData.moves,
          descriptionData: await pokemonDescription.json(),
        };
        pokemons.value.push(pokemon);
      } else {
        pokemonsErrorFetched.value = true;
        pokemonsLoading.value = false;
      }
    }
    pokemonsLoading.value = false;
  };

  const fetchPokemonAPI = async () => {
    const url = ref(
      `${import.meta.env.VITE_POKEMON_API_URL}pokemon/?offset=${
        pokemonsOffset.value
      }&limit=${pokemonsLimit.value}`
    );
    const response = await fetch(url.value);

    if (response.ok) {
      const data = await response.json();
      const result = await data.results;
      await setPokemonsState(result);
    } else {
      pokemonsErrorFetched.value = true;
      pokemonsLoading.value = false;
    }
  };

  return {
    pokemons,
    pokemonsLoading,
    pokemonsErrorFetched,
    pokemonsOffset,
    pokemonsLimit,
    fetchPokemonAPI,
  };
});
