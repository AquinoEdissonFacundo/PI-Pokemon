const { Pokemon } = require('../db'); // Importa el modelo de Pokémon

const createPokemon = async (req, res) => {
  try {
    const { id, name, image, vida, ataque, defensa, velocidad, altura, peso, type } = req.body;

    const newPokemon = await Pokemon.create({
      id,
      name,
      image,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
      type
    });

    res.status(201).json({
      message: 'Pokémon creado con éxito',
      new_pokemon: newPokemon
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createPokemon,
};








// const { id, name, image, vida, ataque, defensa, velocidad, altura, peso, type } = req.body;
// // Extrae los datos necesarios del cuerpo de la solicitud (req.body)
// console.log(req.body);
// // Crea el Pokémon en la base de datos utilizando el método create del modelo de Pokémon

// const pokemon = await Pokemon.create({
//   id,
//   name,
//   image,
//   vida,
//   ataque,
//   defensa,
//   velocidad,
//   altura,
//   peso,
//   type
// });

// return res.status(201).json(pokemon);
// // Devuelve el Pokémon creado como respuesta con un código de estado 201 (Creación exitosa)
// } catch (error) {
// return res.status(500).send('Failed to create Pokémon');
// // Si ocurre un error durante la creación del Pokémon, devuelve un código de estado 500 (Error interno del servidor)




















