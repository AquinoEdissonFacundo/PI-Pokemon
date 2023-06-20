import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreatePokemons } from '../../redux/actions/index';

export default function CharacterCreate() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    vida: 0,
    ataque: 0,
    defensa: 0,
    velocidad: 0,
    altura: 0,
    peso: 0,
    type: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Función de validación de URL de imagen
    const isValidImageUrl = (url) => {
      const urlPattern = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/.*)?$/i;
      return urlPattern.test(url);
    };

    // Validación de la URL de la imagen
    if (formData.image && !isValidImageUrl(formData.image)) {
      alert('La URL de la imagen no es válida');
      return;
    }

    // Envío de datos al backend si la URL de la imagen es válida
    dispatch(CreatePokemons(formData));
    setFormData({
      name: '',
      image: '',
      vida: 0,
      ataque: 0,
      defensa: 0,
      velocidad: 0,
      altura: 0,
      peso: 0,
      type: ''
    });
  };

  return (
    <div>
      <h2>Crear nuevo Pokémon</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Imagen:</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange} />

        <label>Vida:</label>
        <input type="number" name="vida" value={formData.vida} onChange={handleChange} required />

        <label>Ataque:</label>
        <input type="number" name="ataque" value={formData.ataque} onChange={handleChange} required />

        <label>Defensa:</label>
        <input type="number" name="defensa" value={formData.defensa} onChange={handleChange} required />

        <label>Velocidad:</label>
        <input type="number" name="velocidad" value={formData.velocidad} onChange={handleChange} />

        <label>Altura:</label>
        <input type="number" name="altura" value={formData.altura} onChange={handleChange} />

        <label>Peso:</label>
        <input type="number" name="peso" value={formData.peso} onChange={handleChange} />

        <label>Tipo:</label>
        <input type="text" name="type" value={formData.type} onChange={handleChange} />

        <button type="submit">Crear Pokémon</button>
      </form>
    </div>
  );
}
