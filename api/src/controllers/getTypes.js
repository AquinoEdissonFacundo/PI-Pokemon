const axios = require('axios');
const { Type } = require("../db");
const URL = "https://pokeapi.co/api/v2/type"; //1278 en total

const PokemonType = async (req, res) => {
    try {
        const { data } = await axios(`${URL}`);

        if (!data.results) {
            throw Error(`Fallo en la API en los tipos`);
        }

        console.log(data.results);
        const pokeAll = await Promise.all(
            data.results.map(async (listp) => {
                const { data: typeData } = await axios(listp.url);

                const type = {
                    name: listp.name,
                };

                const [savedType, created] = await Type.findOrCreate({ where: { name: type.name } });

                return savedType;
            })
        );

        return res.status(200).json(pokeAll);

    } catch (error) {
        return error.message.includes('API')
            ? res.status(404).send(error.message)
            : res.status(500).send(error.message);
    }
};

module.exports = {
    PokemonType,
};