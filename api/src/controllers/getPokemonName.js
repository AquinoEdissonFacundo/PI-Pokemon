const axios = require('axios');
const URL = "https://pokeapi.co/api/v2/pokemon";

const PokemonName = async (req, res) => {
   console.log("soy name eee")
    try {
        const name = req.params.nombre;
        console.log({req})
        const URLusuario=`${URL}/${name.toLowerCase()}`
         console.log(URLusuario)
        const { data } = await axios.get(`${URL}/${name.toLowerCase()}`);
        console.log({data})
        const pokemon = {
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
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).send('Pokémon not found');
    }
};

module.exports = {
    PokemonName,
};