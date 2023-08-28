const pokemon = [
  {
    name: "bulbasaur",
    img: "http://img.pokemondb.net/artwork/bulbasaur",
  },
  {
    name: "ivysaur",
    img: "http://img.pokemondb.net/artwork/ivysaur",
  },
  {
    name: "venusaur",
    img: "http://img.pokemondb.net/artwork/venusaur",
  },
  {
    name: "charmander",
    img: "http://img.pokemondb.net/artwork/charmander",
  },
  {
    name: "charizard",
    img: "http://img.pokemondb.net/artwork/charizard",
  },
  {
    name: "squirtle",
    img: "http://img.pokemondb.net/artwork/squirtle",
  },
  {
    name: "wartortle",
    img: "http://img.pokemondb.net/artwork/wartortle",
  },
];

// Create a new array of Pokémon objects with capitalized names
const capitalizedPokemon = pokemon.map((poke) => ({
  // For each Pokémon object, create an object with the following properties:
  name: poke.name.charAt(0).toUpperCase() + poke.name.slice(1), // Capitalize the first letter of the Pokémon's name
  img: poke.img, // Copy the 'img' property from the original Pokémon object
}));

module.exports = capitalizedPokemon;
