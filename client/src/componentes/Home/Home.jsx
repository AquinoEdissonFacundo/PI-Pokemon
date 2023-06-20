import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, orderByName, orderByAttack,filterCreated, CreatePokemons,filtertypes} from '../../redux/actions';
import { Link } from 'react-router-dom';
import Card from "../card/Card";
import './home.css'
import Paginado from "../paginado/paginado";
import SearchBar from "../searchbar/searchbar";

const Home = () => {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.characters);
  const [orden, setOrden] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(12);
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const characters = useSelector((state) => state.characters);
  const filteredCharacters = useSelector((state) => state.filteredCharacters);

  const currentCharacters = useSelector((state) => {
    if (filteredCharacters.length > 0) {
      return filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);
    } else {
      return characters.slice(indexOfFirstCharacter, indexOfLastCharacter);
    }
  });
  function handleFilterCreated (e){
    dispatch(filterCreated(e.target.value))
  }
  const handlePaginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }
  function handleSort(e) {
    e.preventDefault();
    const { value } = e.target;
    if (value === 'name') {
      dispatch(orderByName(e.target.value));
    } else if (value === 'attack') {
      dispatch(orderByAttack(e.target.value));
    }
    setCurrentPage(1);
    setOrden(`ordenado ${e.target.value}`);
  } 
  const handlefiltertypes =(e)=>{
    dispatch(filtertypes(e.target.value))
  }
  return (
    <div className="home-container">
      <h1 className="titulo">La pokeHub</h1> 
      <Link to='/pokemons/createPokemons'>crear personaje</Link>
      <button onClick={(e) => handleClick(e)}>recargar personajes</button>
      <div className="card-container"> 
      <select onChange={handleSort}>
          <option value="name">Ordenar por nombre</option>
          <option value="attack">Ordenar por ataque</option>
        </select>
        <select onChange={(e)=>handleFilterCreated(e)} >
          <option value="all">Todos</option>
          <option value="created">creados</option>
          <option value="api">De la api</option>
        </select>
        <select  onChange={e=>handlefiltertypes(e)}>
        <option value="">todos</option>
          <option value="normal">normal</option>
          <option value="fighting">fighting</option>
          <option value="flying">flying</option>
          <option value="poison">poison</option>
          <option value="ground">ground</option>
          <option value="rock">rock</option>
          <option value="bug">bug</option>
          <option value="ghost">ghost</option>
          <option value="steel">steel</option>
          <option value="fire">fire</option>
          <option value="grass">grass</option>
          <option value="water">water</option>
          <option value="electric">electric</option>
          <option value="psychic">psychic</option>
          <option value="ice">ice</option>
          <option value="dragon">dragon</option>
          <option value="dark">dark</option>
          <option value="fairy">fairy</option>
          <option value="unknown">unknown</option>
          <option value="shadow">shadow</option>
     


        </select>
        <Paginado
          charactersPerPage={charactersPerPage}
          allCharacters={allCharacters.length}
          paginado={handlePaginado}
        />
        <SearchBar/>
        {currentCharacters?.map((pokemon) => (
          <Fragment key={pokemon.id}>
            <Link to={"/home/" + pokemon.id}>
              <Card id={pokemon.id} name={pokemon.name} image={pokemon.image} type={pokemon.type} />
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;