const axios = require('axios');
const { Pokemon } = require('../db');

const URL = "https://pokeapi.co/api/v2/pokemon";const PokemonName = async (req, res) => {
  try {
    const { name } = req.query;
    let pokemon = await searchPokemonInDatabase(name);

    if (!pokemon) {
      const { data } = await axios.get(`${URL}/${name.toLowerCase()}`);

      pokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        type: data.types[0].type.name,
      };
    }

    return res.status(200).json(pokemon);
  } catch (error) {
    return res.status(500).send('Error retrieving Pokémon');
  }
};

const searchPokemonInDatabase = async (name) => {
  try {
    const pokemon = await Pokemon.findOne({ where: { name } });
    return pokemon;
  } catch (error) {
    throw error;
  }
};


module.exports = {
  PokemonName,
};
