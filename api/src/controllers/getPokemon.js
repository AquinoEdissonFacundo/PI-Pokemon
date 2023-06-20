const axios = require('axios');
const { Pokemon } = require("../db");
const URL = "https://pokeapi.co/api/v2/pokemon?limit=100"; //1278 en total

const Pokemons = async (req, res) => {
    try {
        const { data } = await axios(`${URL}`);

        if (!data.results[0].name) {
            throw Error(`Fallo en la API`); // Lanza un error si no se encuentra el nombre del primer Pokémon en los resultados de la API
        }

        const pokeAll = await Promise.all( // Utiliza Promise.all para esperar a que todas las promesas se resuelvan antes de continuar
            data.results.map(async (listp) => { // Utiliza map para crear un nuevo array de promesas
                const { data } = await axios(listp.url); // Realiza una petición a la URL del Pokémon

                const pokemont = {
                    id: data.id,
                    name: data.name,
                    image: data.sprites.other['official-artwork'].front_default,
                    vida: data.stats[0].base_stat,
                    ataque: data.stats[1].base_stat,
                    defensa: data.stats[2].base_stat,
                    velocidad: data.stats[5].base_stat,
                    altura: data.height,
                    peso: data.weight,
                    type: data.types[0].type.name
                };
                Pokemon.findOrCreate({where: {
                    id: data.id,
                    name: data.name,
                    image: data.sprites.other['official-artwork'].front_default,
                    vida: data.stats[0].base_stat,
                    ataque: data.stats[1].base_stat,
                    defensa: data.stats[2].base_stat,
                    velocidad: data.stats[5].base_stat,
                    altura: data.height,
                    peso: data.weight,
                    type: data.types[0].type.name
                }})

                return pokemont; // Devuelve el objeto pokemon
            })
        );

        return res.status(200).json(pokeAll); // Devuelve una respuesta con el array de todos los Pokémon

    } catch (error) {
        return error.message.includes('API')
            ? res.status(404).send(error.message) // Devuelve un error 404 si hay un problema con la API
            : res.status(500).send(error.message); // Devuelve un error 500 si ocurre algún otro tipo de error
    }
};

module.exports = {
    Pokemons,
};