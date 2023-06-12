import axios from "axios";

export const GET_TYPES = "GET_TYPES"; //types
export const GET_POKEMONS = "GET_POKEMONS"; //pokemons
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID"; //pokemonsId
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"; //pomemonsName
export const CLEAN_DETAIL = "CLEAN_DETAIL"; //clearDetail
export const ORDER_POKEMONS = 'ORDER_POKEMONS' // OrdenarPokemons
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE' //filtrar por type
export const getTypes = () => {
    console.log("soy ese type");
    return function (dispatch) {
        return axios.get(`http://localhost:3001/pokemons/types`)
            .then((response) => {
                dispatch({ type: GET_TYPES, payload: response.data });
            })
            .catch((error) => console.error(error.message));
    };
};

export const getPokemons = () => {
    console.log(GET_POKEMONS);
    return function (dispatch) {
        return axios.get(`http://localhost:3001/pokemons`)
            .then((response) => {
                dispatch({ type: GET_POKEMONS, payload: response.data });
            })
            .catch((error) => console.error(error.message));
    };
};

export const getPokemonsById = (id) => { 
    console.log(GET_POKEMON_BY_ID);
    return function (dispatch) {
        return axios.get(`http://localhost:3001/pokemons/${id}`) 
            .then((response) => {
                dispatch({ type: GET_POKEMON_BY_ID, payload: response.data });
            })
            .catch((error) => console.error(error.message));
    };
};

export const getPokemonsByName = (name) => { 
    console.log(GET_POKEMON_BY_NAME);
    return function (dispatch) {
        return axios.get(`http://localhost:3001/pokemons/nombre/${name}`) 
            .then((response) => {
                dispatch({ type: GET_POKEMON_BY_NAME, payload: response.data });
            })
            .catch((error) => console.error(error.message));
    };
};


export const cleanDetail = (clean) => {
    return { type: CLEAN_DETAIL,
	         payload: clean
	};
};

export const orderPokemons = (orden) => {
    return { 
		type:ORDER_POKEMONS,
	    payload: orden             
	};
};

export const filterByType = (type) => {
    return {
      type: FILTER_BY_TYPE,
      payload: { type }
    };
  };
  


