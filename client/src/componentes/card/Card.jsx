import React from "react";
import './card.css'

export default function Card({ id, name, image, type }) {
  return (
    <div className="card">
      <h3 className="namePokemon">{name}</h3>
      <h6 className="typePokemon">{type}</h6>
      <img className='img'src={image} alt={name} />
    </div>
  );
}
