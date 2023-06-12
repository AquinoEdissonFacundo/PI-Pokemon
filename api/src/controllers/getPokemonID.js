const axios = require('axios');

const URL = "https://pokeapi.co/api/v2/pokemon";

const PokemonId = async (req, res) => {
    
    try {
        const  { id }  = req.params;
        console.log({req})
        const {data} = await axios(`${URL}/${id}`)

        if(!data.id) throw Error(`ID: ${id} Not Found`);
        
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
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.message);
    }
}
module.exports = {
    PokemonId,
};





// const axios = require('axios');

// const URL = "https://pokeapi.co/api/v2/pokemon";

// const PokemonId = async (req, res) => {
    
//     try {
        
//         const pokemon = {
//             id: data.id,
//             name: data.name,
//             image: data.sprites.other.home.front_default,
//             vida: data.stats[0].base_stat,
//             ataque: data.stats[1].base_stat,
//             defensa: data.stats[2].base_stat,
//             velocidad: data.stats[5].base_stat,
//             altura: data.height,
//             peso: data.weight,
//         }
//         console.log(pokemon)
//         return res.status(200).json(pokemon);


//     } catch (error) {
//         return error.message.includes('ID')
//         ? res.status(404).send(error.message)
//         : res.status(500).send(error.message);
//     }
// }
// module.exports = {
//     PokemonId,
// };
//     const  { id }  = req.params;
//         const {data} = await axios(`${URL}/${id}`)

//         if(!data.id) throw Error(`ID: ${id} Not Found`);
    