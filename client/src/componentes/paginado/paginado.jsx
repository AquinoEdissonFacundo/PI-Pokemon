import React from "react";
import './paginado.css'
export default function Paginado({ charactersPerPage, allCharacters, paginado }) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(allCharacters / charactersPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <nav className="paginado">
      <ul className="ul">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <button className='botonsearch' onClick={() => paginado(number)}>{number}</button>
            </li>
          ))}
      </ul>
    </nav>
  );
}
