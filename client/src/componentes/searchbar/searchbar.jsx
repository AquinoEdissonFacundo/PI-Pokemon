import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNamePokemons } from "../../redux/actions";
import './searchbar.css'
export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const filteredCharacters = useSelector((state) => state.filteredCharacters);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNamePokemons(name));
  };

  return (
    <div className="searchbar">
      <input class="input-group"
        type="text"
        placeholder="buscar Pokemon..."
        onChange={handleInputChange}
      />
      <button className="submit-button" 
      type="submit" onClick={handleSubmit}>
        Buscar
      </button>
      {filteredCharacters?.map((pokemon) => (
  <div key={pokemon.id}></div>))}
    </div>
  );
}
