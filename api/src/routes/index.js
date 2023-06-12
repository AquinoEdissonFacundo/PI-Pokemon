const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { 
    Pokemons,
    PokemonId,
    PokemonName,
    PokemonType,
    createPokemon,

    } = require("../controllers")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons" ,Pokemons);
router.get("/pokemons/types",PokemonType );
router.get("/pokemons/:nombre",PokemonName );
router.get("/pokemons/id/:id",PokemonId);
router.post("/pokemons/createPokemons",createPokemon )


module.exports = router;
